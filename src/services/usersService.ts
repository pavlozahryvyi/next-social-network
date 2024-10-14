import { usersEndpoints } from "@/config/endpoints";
import { UserEntity } from "@/entities/UserEntity";

type UserResponseType = {
  items: UserEntity[];
  totalCount: number;
  error: null;
};

export async function getUsersData(count: number = 10) {
  try {
    const res = await fetch(usersEndpoints.getUsers(count));
    const resp: UserResponseType = await res.json();

    return resp.items;
  } catch {
    throw new Error("Failed to fetch users");
  }
}
