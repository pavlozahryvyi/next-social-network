import { getUsersData } from "@/services/usersService";

export async function generateStaticParams() {
  const users = await getUsersData(100);

  return users.map((user) => ({ slug: user.id }));
}

export default async function UsersPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("---user", id);
  return (
    <>
      <h1>User SSG Page</h1>
    </>
  );
}
