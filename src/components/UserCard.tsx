import { UserEntity } from "@/entities/UserEntity";
import Image from "next/image";
import Link from "next/link";

export const UserCard: React.FC<UserEntity> = ({
  name,
  id,
  followed,
  photos,
  status,
}) => {
  const { small } = photos;
  return (
    <div className="mb-8 p-2 rounded-xl border bg-card text-card-foreground shadow w-[350px] bg-slate-300/50">
      <Image
        src={small || "/avatar/no-avatar.jpg"}
        alt="User Avatar"
        width={50}
        height={50}
        className="rounded-full"
      />
      <p>User: {name}</p>
      <div className="flex flex-row gap-4">
        <Link href={`/users-rendered/${id}`}>(Rendered Page)</Link>
        {/* <Link href={`/users-generated/${id}`}>(Generated Page)</Link> */}
      </div>
    </div>
  );
};
