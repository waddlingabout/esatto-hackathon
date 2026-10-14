"use client";

import { useEffect, useRef } from "react";

// The assistant's avatar: a flat blob drawn from a few points that Perlin noise
// pushes in and out. Its motion mirrors the router state.
export type CephalonState = "idle" | "thinking" | "talking" | "routed";

type Props = {
  state: CephalonState;
  size?: number; // px
  // Bump to make the edge surge outward, once per word or reply.
  pulse?: number;
  className?: string;
};

const POINTS = 10;

// amp: how far points push in and out; freq: how lumpy; speed: how fast the noise flows.
const STATES: Record<CephalonState, { amp: number; freq: number; speed: number; breathe: number; routed: number }> = {
  idle: { amp: 0.08, freq: 0.8, speed: 0.25, breathe: 0, routed: 0 },
  thinking: { amp: 0.16, freq: 1.6, speed: 1.0, breathe: 1, routed: 0 },
  talking: { amp: 0.1, freq: 1.0, speed: 0.5, breathe: 0, routed: 0 },
  routed: { amp: 0.03, freq: 0.6, speed: 0.12, breathe: 0, routed: 1 },
};
type Tuning = (typeof STATES)[CephalonState];
const TUNING_KEYS = ["amp", "freq", "speed", "breathe", "routed"] as const;

// Ken Perlin's improved 3D noise, with a fixed permutation so every render matches.
const perm = (() => {
  const p = Array.from({ length: 256 }, (_, i) => i);
  let seed = 7;
  for (let i = 255; i > 0; i--) {
    seed = (seed * 16807) % 2147483647;
    const j = seed % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  return Uint8Array.from({ length: 512 }, (_, i) => p[i & 255]);
})();
const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
function grad(hash: number, x: number, y: number, z: number) {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return (h & 1 ? -u : u) + (h & 2 ? -v : v);
}
function pnoise(x: number, y: number, z: number) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
  x -= Math.floor(x);
  y -= Math.floor(y);
  z -= Math.floor(z);
  const u = fade(x), v = fade(y), w = fade(z);
  const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
  const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
  return mix(
    mix(
      mix(grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z), u),
      mix(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u),
      v,
    ),
    mix(
      mix(grad(perm[AA + 1], x, y, z - 1), grad(perm[BA + 1], x - 1, y, z - 1), u),
      mix(grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1), u),
      v,
    ),
    w,
  );
}

// Reads a computed CSS color ("rgb(217, 56, 30)") so the blob uses the design tokens.
function rgbOf(el: Element): [number, number, number] {
  const [r = 0, g = 0, b = 0] = (getComputedStyle(el).color.match(/[\d.]+/g) ?? []).map(Number);
  return [r, g, b];
}

export function Cephalon({ state, size = 64, pulse = 0, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const laneRef = useRef<HTMLSpanElement>(null);
  const targetRef = useRef<Tuning>(STATES[state]);
  const kickRef = useRef(0);
  // Set while reduced motion is on: redraws the still frame for a new state.
  const redrawRef = useRef<() => void>(undefined);

  useEffect(() => {
    targetRef.current = STATES[state];
    redrawRef.current?.();
  }, [state]);

  useEffect(() => {
    if (pulse) kickRef.current = 1;
  }, [pulse]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !laneRef.current) return;

    const ember = rgbOf(canvas);
    const lane = rgbOf(laneRef.current);
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const live: Tuning = { ...targetRef.current };
    const pts = Array.from({ length: POINTS }, () => [0, 0]);
    let phase = 0;
    let last = performance.now();
    let raf = 0;

    function draw(t: number) {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const w = Math.round(canvas!.clientWidth * dpr), h = Math.round(canvas!.clientHeight * dpr);
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
      ctx!.clearRect(0, 0, w, h);

      const s = Math.min(w, h);
      const kick = kickRef.current;
      const cx = w / 2, cy = h / 2 + Math.sin(t * 1.3) * s * 0.012;
      const r0 = s * 0.33 * (1 + live.breathe * Math.sin(t * 3.2) * 0.03 + kick * 0.04);
      const amp = live.amp * (1 + kick * 0.8);

      // Sample noise around a circle in noise space so the outline loops seamlessly.
      for (let i = 0; i < POINTS; i++) {
        const a = (i / POINTS) * Math.PI * 2;
        const n = pnoise(Math.cos(a) * live.freq + 10, Math.sin(a) * live.freq + 10, phase);
        const r = r0 * (1 + amp * n * 2);
        pts[i][0] = cx + Math.cos(a) * r;
        pts[i][1] = cy + Math.sin(a) * r;
      }

      // Curve through the midpoints with each point as the control: smooth, no corners.
      const mid = (i: number) => {
        const p = pts[i % POINTS], q = pts[(i + 1) % POINTS];
        return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
      };
      ctx!.beginPath();
      const m0 = mid(0);
      ctx!.moveTo(m0[0], m0[1]);
      for (let i = 1; i <= POINTS; i++) {
        const p = pts[i % POINTS], m = mid(i);
        ctx!.quadraticCurveTo(p[0], p[1], m[0], m[1]);
      }
      ctx!.closePath();
      const rgb = ember.map((v, k) => Math.round(mix(v, lane[k], live.routed)));
      ctx!.fillStyle = `rgb(${rgb.join(",")})`;
      ctx!.fill();
    }

    function loop(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const ease = 1 - Math.exp(-dt * 2.4);
      for (const k of TUNING_KEYS) live[k] += (targetRef.current[k] - live[k]) * ease;
      phase += dt * live.speed;
      kickRef.current *= Math.exp(-dt * 6);
      draw(now / 1000);
      raf = requestAnimationFrame(loop);
    }

    // Reduced motion: no loop, just the current state's shape, redrawn when the state changes.
    function still() {
      Object.assign(live, targetRef.current);
      kickRef.current = 0;
      draw(0);
    }
    function start() {
      cancelAnimationFrame(raf);
      redrawRef.current = motion.matches ? still : undefined;
      if (motion.matches) {
        still();
      } else {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    }

    motion.addEventListener("change", start);
    start();
    return () => {
      cancelAnimationFrame(raf);
      motion.removeEventListener("change", start);
      redrawRef.current = undefined;
    };
  }, []);

  return (
    <span className={`relative inline-flex shrink-0 rounded-pill bg-paper ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="text-ember" style={{ width: size, height: size }} />
      {/* Only here so the canvas can read the lane token's color. */}
      <span ref={laneRef} className="hidden text-lane" />
    </span>
  );
}
