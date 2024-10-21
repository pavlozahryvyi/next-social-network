import { getMessages } from "@/services/messagesService";
import Link from "next/link";

export default async function MessagesPage() {
  const messages = await getMessages();
  return (
    <>
      <h1>Messages Page</h1>
      {messages.map(({ id, userName }) => {
        return (
          <>
            <p key={id}>{userName}</p>
            <Link href={`/messages/${id}`}>OPEN MESSAGES</Link>
          </>
        );
      })}
    </>
  );
}
