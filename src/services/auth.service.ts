import { authEndpoints } from "@/config/endpoints";
import { getAuthHeaders } from "./utils";

export const signInService = async (
  credentials: Record<"email" | "password", string> | undefined
) => {
  try {
    const response = await fetch(authEndpoints.signIn(), {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
        "API-KEY": process.env.API_KEY!,
      },
    });

    return await response.json();
  } catch (e) {
    console.log("---error", e);
    throw new Error("---some error");
  }
};

export const meCheckService = async () => {
  const meResponse = await fetch(authEndpoints.verify(), {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });

  return meResponse.json();
};
