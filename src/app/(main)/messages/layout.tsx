import { UsersNav } from "@/app/components/messages/UsersNav";
import { getMessages } from "@/services/messagesService";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <div>
      <UsersNav users={messages} />
      <div>{children}</div>
    </div>
  );
}
