"use server";
import { profileEndpoints } from "@/config/endpoints";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { JWT } from "@/config/consts";

export async function updateStatus(formData: FormData) {
  const { value: jwt } = cookies().get(JWT)!;
  const status = formData.get("status");

  await fetch(profileEndpoints.updateStatus(), {
    method: "PUT",
    body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
      "API-KEY": process.env.API_KEY!,
      Authorization: `Bearer ${jwt}`,
    },
  });

  revalidatePath("/profile");
}
