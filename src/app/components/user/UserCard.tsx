import { UserEntity } from "@/entities/UserEntity";
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "../Avatar";
import { Follow } from "./Follow";

export const UserCard: React.FC<UserEntity> = ({
  name,
  id,
  followed,
  photos,
}) => {
  const { small } = photos;

  return (
    <Card className="block max-w-48 center">
      <Link href={`/users-rendered/${id}`}>
        <CardHeader>
          <Avatar src={small || "/avatar/no-avatar.jpg"} />
          <CardTitle>{name}</CardTitle>
        </CardHeader>
      </Link>
      <CardFooter>
        <Follow follow={followed} userId={id.toString()} />
      </CardFooter>
    </Card>
  );
};
