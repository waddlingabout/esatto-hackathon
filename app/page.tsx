import { BoyotaLogo } from "@/components/boyota-logo";
import { ChatWindow } from "@/components/chat-window";

export default function Home() {
  return (
    <main className="box-border flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-16">
      <BoyotaLogo />
      <ChatWindow />
    </main>
  );
}
