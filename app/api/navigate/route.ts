import { z } from "zod";
import { resolveDestination } from "@/lib/ai-router";

const bodySchema = z.object({
  prompt: z.string().trim().min(1).max(500),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Expected { prompt: string } (1–500 chars)." },
      { status: 400 },
    );
  }

  try {
    const result = await resolveDestination(parsed.data.prompt);
    if (!result) {
      return Response.json({
        url: null,
        message: "I couldn't find a matching page. Try rephrasing?",
      });
    }
    return Response.json({ url: result.path, title: result.title, via: result.via });
  } catch (err) {
    console.error("[navigate] routing failed", err);
    return Response.json(
      { error: "Navigation is unavailable right now." },
      { status: 502 },
    );
  }
}
