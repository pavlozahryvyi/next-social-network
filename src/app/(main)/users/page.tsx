import { UserCard } from "@/components/user/UserCard";
import { getUsersData } from "@/services/usersService";

export default async function UsersPage() {
  const users = await getUsersData(20);

  return (
    <main className="grid grid-rows-[auto_auto]">
      <div className="grid scroll-y-auto auto-rows-[200px] grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      <div>Pagination</div>
    </main>
  );
}
