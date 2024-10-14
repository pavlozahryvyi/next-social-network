"use server";
import { sendMessage as sendMessageService } from "@/services/messagesService";

export async function sendMessage(userId: string, formData: FormData) {
  const message = formData.get("message") as string;

  await sendMessageService(userId, message);
}
