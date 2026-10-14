import { z } from "zod";
import { resolveDestination } from "@/lib/ai-router";
import { buildVisitorContext, clientContextSchema, formatVisitorContext } from "@/lib/visitor-context";

const bodySchema = z.object({
  prompt: z.string().trim().min(1).max(500),
  // Optional visitor signals; malformed context is dropped, never a 400.
  ctx: z.unknown().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Expected { prompt: string (1–500 chars) }." }, { status: 400 });
  }

  const client = clientContextSchema.safeParse(parsed.data.ctx);
  const context = buildVisitorContext(request, client.success ? client.data : null);
  if (process.env.NODE_ENV === "development") {
    console.info("[navigate] context\n" + formatVisitorContext(context));
  }

  try {
    const result = await resolveDestination(parsed.data.prompt, context);
    switch (result.kind) {
      case "navigate":
        return Response.json({
          action: "navigate",
          url: result.path,
          title: result.title,
          via: result.via,
        });
      case "none":
        return Response.json({
          action: "none",
          url: null,
          message: "I couldn't find a matching page. Try rephrasing?",
        });
    }
  } catch (err) {
    console.error("[navigate] routing failed", err);
    return Response.json(
      { error: "Navigation is unavailable right now." },
      { status: 502 },
    );
  }
}
