import { openai } from "@ai-sdk/openai";
import { experimental_transcribe as transcribe } from "ai";

const MODEL = process.env.TRANSCRIBE_MODEL ?? "gpt-4o-mini-transcribe";
// Vercel caps request bodies at 4.5 MB; 30 s of compressed speech is far below this.
const MAX_BYTES = 4 * 1024 * 1024;

// Body: multipart form with an `audio` file recorded by the chat window's mic button.
export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const audio = form?.get("audio");
  if (!(audio instanceof File) || audio.size === 0) {
    return Response.json({ error: "Expected an `audio` file." }, { status: 400 });
  }
  if (audio.size > MAX_BYTES) {
    return Response.json({ error: "Recording is too long." }, { status: 413 });
  }

  try {
    const { text } = await transcribe({
      model: openai.transcription(MODEL),
      audio: new Uint8Array(await audio.arrayBuffer()),
      abortSignal: AbortSignal.timeout(30_000),
    });
    return Response.json({ text: text.trim() });
  } catch (err) {
    console.error("[transcribe] failed", err);
    return Response.json({ error: "Voice input is unavailable right now." }, { status: 502 });
  }
}
