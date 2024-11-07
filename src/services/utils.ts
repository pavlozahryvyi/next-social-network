import { JWT } from "@/config/consts";
import { cookies } from "next/headers";

export const getAuthHeaders = () => {
  const { value: jwt } = cookies().get(JWT)!;

  return {
    "API-KEY": process.env.API_KEY!,
    Authorization: `Bearer ${jwt}`,
  };
};
