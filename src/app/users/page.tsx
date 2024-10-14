import { UserCard } from "@/components/UserCard";
import { getUsersData } from "@/services/usersService";

export default async function UsersPage() {
  const users = await getUsersData(100);

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </>
  );
}
