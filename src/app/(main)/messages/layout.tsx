import { UsersNav } from "@/components/messages/UsersNav";
import { getMessages } from "@/services/messagesService";

export default async function MessagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <main className="grid grid-rows-[50px_1fr]">
      <UsersNav users={messages} />
      <>{children}</>
    </main>
  );
}
