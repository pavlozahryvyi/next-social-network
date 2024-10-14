import { cookies } from "next/headers";

export const getAuthHeaders = () => {
  const { value: jwt } = cookies().get("JWT")!;

  console.log("---jwt", jwt);

  return {
    "API-KEY": process.env.API_KEY!,
    Authorization: `Bearer ${jwt}`,
  };
};
