import { Pagination } from "@/components/Pagination";
import { UserCard } from "@/components/user/UserCard";
import { getUsersData } from "@/services/usersService";

export default async function UsersPage({
  searchParams,
}: {
  searchParams?: {
    count?: string;
    page?: string;
  };
}) {
  const { count, page } = searchParams || {};
  const { users, totalPages } = await getUsersData({
    count: Number(count),
    page: Number(page),
  });

  return (
    <>
      <div className="grid overflow-y-scroll auto-rows-[200px] grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      <div className="h-[50px] flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
