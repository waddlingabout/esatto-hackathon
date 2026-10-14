import { z } from "zod";
import { resolveDestination } from "@/lib/ai-router";

const bodySchema = z.object({
  prompt: z.string().trim().min(1).max(500),
  // Earlier turns from clarifying questions, oldest first.
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(500),
      }),
    )
    .max(10)
    .default([]),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      {
        error:
          "Expected { prompt: string (1–500 chars), history?: { role, content }[] (max 10) }.",
      },
      { status: 400 },
    );
  }

  try {
    const result = await resolveDestination(parsed.data.prompt, parsed.data.history);
    switch (result.kind) {
      case "navigate":
        return Response.json({
          action: "navigate",
          url: result.path,
          title: result.title,
          via: result.via,
        });
      case "clarify":
        return Response.json({ action: "clarify", url: null, question: result.question });
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
