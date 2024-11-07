"use server";
import {
  sendMessage as sendMessageService,
  startDialogService,
} from "@/services/messagesService";

export async function sendMessageAction(userId: string, formData: FormData) {
  const message = formData.get("message") as string;

  await sendMessageService(userId, message);
}

export async function startDialogAction(userId: string) {
  console.log("---userId", userId);

  await startDialogService(userId);
}
