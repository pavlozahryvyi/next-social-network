import { UserCard } from "@/components/user/UserCard";
import { getUsersData } from "@/services/usersService";

export default async function UsersPage() {
  const users = await getUsersData();

  console.log("---users", users);

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </>
  );
}
