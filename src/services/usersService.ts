import { usersEndpoints } from "@/config/endpoints";
import { UserEntity } from "@/entities/UserEntity";
import { getAuthHeaders } from "./utils";

type UserResponseType = {
  items: UserEntity[];
  totalCount: number;
  error: null;
};

export async function getUsersData({
  count = 100,
  page = 1,
}: {
  count?: number;
  page?: number;
}) {
  try {
    const res = await fetch(
      usersEndpoints.getUsers({
        count,
        page,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
      }
    );
    const resp: UserResponseType = await res.json();

    return {
      users: resp.items,
      totalPages: Math.floor(resp.totalCount / count),
    };
  } catch {
    throw new Error("Failed to fetch users");
  }
}
