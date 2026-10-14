import { z } from "zod";
import { resolveDestination } from "@/lib/ai-router";
import { MAX_FOLLOW_UPS, nextFollowUp } from "@/lib/pre-navigation";
import { buildVisitorContext, clientContextSchema, formatVisitorContext } from "@/lib/visitor-context";

const followUpSchema = z.object({
  question: z.string().trim().min(1).max(300),
  answer: z.string().trim().min(1).max(500),
});

const bodySchema = z.object({
  prompt: z.string().trim().min(1).max(500),
  // Follow-up questions already asked and answered, oldest first. The client keeps
  // the conversation; each request either asks the next question or routes.
  followUps: z.array(followUpSchema).max(MAX_FOLLOW_UPS).default([]),
  // Asking again from a product page: the page's path and the requests that led there.
  // Rerouting skips the follow-up questions and goes straight to the router.
  from: z.string().startsWith("/").max(200).optional(),
  history: z
    .array(
      z.object({
        statement: z.string().trim().min(1).max(500),
        followUps: z.array(followUpSchema).max(MAX_FOLLOW_UPS).default([]),
        path: z.string().startsWith("/").max(200),
      }),
    )
    .max(5)
    .default([]),
  // Optional visitor signals; malformed context is dropped, never a 400.
  ctx: z.unknown().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: `Expected { prompt: string (1–500 chars), followUps?: { question, answer }[] (at most ${MAX_FOLLOW_UPS}) }.` }, { status: 400 });
  }

  const client = clientContextSchema.safeParse(parsed.data.ctx);
  const context = buildVisitorContext(request, client.success ? client.data : null);
  if (process.env.NODE_ENV === "development") {
    console.info("[navigate] context\n" + formatVisitorContext(context));
  }

  const { prompt, followUps, from, history } = parsed.data;
  const reroute = from ? { from, history } : undefined;

  // A failing follow-up never blocks navigation: route with what we have.
  if (!reroute) {
    try {
      const step = await nextFollowUp(prompt, followUps, context);
      if (step.kind === "ask") {
        return Response.json({ action: "ask", question: step.question });
      }
      if (step.kind === "direct") {
        return Response.json({
          action: "navigate",
          url: step.destination.path,
          title: step.destination.title,
          via: "direct",
        });
      }
    } catch (err) {
      console.error("[navigate] follow-up failed, routing directly", err);
    }
  }

  try {
    const result = await resolveDestination(prompt, context, followUps, reroute);
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
