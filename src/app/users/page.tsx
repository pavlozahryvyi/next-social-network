import { usersEndpoints } from "@/spec/endpoints";
import { User } from "./User";

type UserResponseType = {
  items: {
    name: string;
    id: number;
    uniqueUrlName: null | string;
    photos: {
      small: null | string;
      large: null | string;
    };
    status: null | string;
    followed: boolean;
  }[];
  totalCount: number;
  error: null;
};

export default async function UsersPage() {
  const data = await getUsersData();

  return (
    <>
      <h1>Users Page</h1>
      <div>
        {data.map((el) => {
          return <User key={el.id} id={el.id} name={el.name} />;
        })}
      </div>
    </>
  );
}

export async function getUsersData() {
  try {
    const res = await fetch(usersEndpoints.getUsers());
    const resp: UserResponseType = await res.json();

    return resp.items;
  } catch {
    throw new Error("Failed to fetch users");
  }
}
