import { messagesEndpoints } from "@/config/endpoints";
import { getAuthHeaders } from "./utils";
import { MessageUserEntity } from "@/entities/MessageUserEntity";
import { MessageEntity } from "@/entities/MessagesEntity";
import { revalidatePath } from "next/cache";

export const getMessages = async (): Promise<MessageUserEntity[]> => {
  const response = await fetch(messagesEndpoints.getAllMessages(), {
    headers: getAuthHeaders(),
  });

  const responseData = await response.json();

  return responseData;
};

export const getUserMessages = async (
  userId: string
): Promise<MessageEntity[]> => {
  const response = await fetch(messagesEndpoints.userMessages(userId), {
    headers: getAuthHeaders(),
  });

  const responseData = await response.json();

  if (responseData.error) {
    throw new Error("Failed to fetch messages");
  }

  return responseData.items;
};

export const sendMessage = async (
  userId: string,
  message: string
): Promise<void> => {
  await fetch(messagesEndpoints.sendMessage(userId), {
    method: "POST",
    body: JSON.stringify({ body: message }),
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });

  revalidatePath(`/message/${userId}`);
};
