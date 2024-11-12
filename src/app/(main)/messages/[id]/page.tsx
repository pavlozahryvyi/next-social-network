import { sendMessageAction } from "@/actions/messagesAction";
import { Message } from "@/components/messages/Message";
import { SendMessage } from "@/components/messages/SendMessage";
import { getUserMessages } from "@/services/messages.service";

export default async function UsersMessages({
  params: { id },
}: {
  params: { id: string };
}) {
  const userMessages = await getUserMessages(id);

  const sendMessageHandler = async (formData: FormData) => {
    "use server";
    await sendMessageAction(id, formData);
  };

  return (
    <div className="grid grid-rows-[1fr_auto]">
      <div className="overflow-y-auto flex flex-col justify-end ">
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
