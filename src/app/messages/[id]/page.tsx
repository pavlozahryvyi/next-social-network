import { sendMessage } from "@/actions/messagesAction";
import { Message } from "@/components/messages/Message";
import { SendMessage } from "@/components/messages/SendMessage";
import { getUserMessages } from "@/services/messagesService";

export default async function UsersMessages({
  params: { id },
}: {
  params: { id: string };
}) {
  const userMessages = await getUserMessages(id);

  const sendMessageHandler = async (formData: FormData) => {
    "use server";
    await sendMessage(id, formData);
  };

  return (
    <div className="grid grid-rows-[50px_minmax(900px,_1fr)_100px]">
      <h1>Messages</h1>
      <div className="grid overflow-y-auto">
        {userMessages.map(({ id: messageId, body, senderId }) => (
          <Message
            key={messageId}
            text={body}
            isFriendMessage={id === senderId.toString()}
          />
        ))}
      </div>
      <SendMessage sendMessage={sendMessageHandler} />
    </div>
  );
}
