"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { type InputMode } from "@/lib/visitor-signals";

// Voice input stops recording on its own after this long.
const MAX_RECORDING_MS = 30_000;
const VOICE_ERROR_TEXT = "Voice input is unavailable right now.";

export type VoiceState = "idle" | "recording" | "transcribing";
export type VoiceMessage = { kind: "none" | "error"; text: string };

// A prompt taken out of the box for sending, with how it was entered (sent as visitor context).
export type TakenPrompt = { text: string; mode: InputMode; typingMs: number | null; edits: number };

// Text input with voice: record with a mic button and transcribe into the box, where the
// visitor can edit it and send it like a typed prompt. Talking again replaces the box.
export function useVoiceInput({
  inputRef,
  onMessage,
  onRecordingStart,
}: {
  inputRef: RefObject<HTMLInputElement | null>;
  // Voice problems and "didn't catch that", shown the way the caller shows replies.
  onMessage: (message: VoiceMessage) => void;
  onRecordingStart?: () => void;
}) {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState<VoiceState>("idle");
  // The last transcript put in the box, read out once so screen-reader users know it's there.
  const [heard, setHeard] = useState("");
  const recorder = useRef<MediaRecorder | null>(null);
  const discardRecording = useRef(false);
  const recordTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  // How the current prompt was typed.
  const typingStartedAt = useRef<number | null>(null);
  const edits = useRef(0);
  // Whether the text in the box came from voice input.
  const fromVoice = useRef(false);

  // Leaving mid-recording (unmount, or hidden by <Activity> on navigation): release the
  // mic and drop the audio.
  useEffect(
    () => () => {
      setVoice("idle");
      clearTimeout(recordTimer.current);
      if (recorder.current?.state === "recording") {
        discardRecording.current = true;
        recorder.current.stop();
      }
    },
    [],
  );

  async function startRecording() {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      onMessage({ kind: "error", text: "Voice input isn't supported in this browser." });
      return;
    }
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      onMessage({ kind: "error", text: "I can't hear you. Allow microphone access and try again." });
      return;
    }

    const rec = new MediaRecorder(stream);
    const chunks: Blob[] = [];
    rec.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };
    rec.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      clearTimeout(recordTimer.current);
      recorder.current = null;
      if (discardRecording.current) {
        discardRecording.current = false;
        return;
      }
      void transcribe(new Blob(chunks, { type: rec.mimeType || "audio/webm" }));
    };

    recorder.current = rec;
    discardRecording.current = false;
    rec.start();
    setVoice("recording");
    setHeard("");
    onRecordingStart?.();
    recordTimer.current = setTimeout(() => rec.stop(), MAX_RECORDING_MS);
  }

  function stopRecording() {
    if (recorder.current?.state === "recording") recorder.current.stop();
  }

  async function transcribe(audio: Blob) {
    setVoice("transcribing");
    let prompt: string;
    try {
      const form = new FormData();
      form.append("audio", audio, "speech");
      const res = await fetch("/api/transcribe", { method: "POST", body: form });
      if (!res.ok) throw new Error(`transcribe responded ${res.status}`);
      prompt = ((await res.json()) as { text: string }).text;
    } catch (err) {
      console.error(err);
      setVoice("idle");
      onMessage({ kind: "error", text: VOICE_ERROR_TEXT });
      return;
    }
    setVoice("idle");
    if (!prompt) {
      onMessage({ kind: "none", text: "I didn't catch that. Try again?" });
      return;
    }
    // Replace whatever is in the box, then hand it back for editing with the caret at the end.
    setText(prompt);
    setHeard(prompt);
    fromVoice.current = true;
    edits.current = 0;
    typingStartedAt.current = null;
    requestAnimationFrame(() => {
      const input = inputRef.current;
      input?.focus();
      input?.setSelectionRange(prompt.length, prompt.length);
    });
  }

  function onTextChange(next: string) {
    typingStartedAt.current ??= Date.now();
    if (next.length < text.length) edits.current++;
    // Clearing the box drops the voice origin; edits to a transcript keep it.
    if (!next) fromVoice.current = false;
    setText(next);
  }

  // Empties the box and returns what was in it, or null when there's nothing to send.
  function take(): TakenPrompt | null {
    const value = text.trim();
    if (!value) return null;
    const mode: InputMode = fromVoice.current ? "voice" : "typed";
    const typingMs = mode === "typed" && typingStartedAt.current !== null
      ? Date.now() - typingStartedAt.current
      : null;
    const taken = { text: value, mode, typingMs, edits: edits.current };
    typingStartedAt.current = null;
    edits.current = 0;
    fromVoice.current = false;
    setText("");
    setHeard("");
    return taken;
  }

  return { text, voice, heard, onTextChange, startRecording, stopRecording, take };
}
