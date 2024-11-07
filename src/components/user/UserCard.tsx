import { UserEntity } from "@/entities/UserEntity";
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "../Avatar";
import { Follow } from "./Follow";
import { StartDialog } from "./StartDialog";

export const UserCard: React.FC<UserEntity> = ({
  name,
  id,
  followed,
  photos,
}) => {
  return (
    <Card className="h-42">
      <Link href={`/users-rendered/${id}`}>
        <CardHeader>
          <Avatar src={photos.small} />
          <CardTitle className="truncate">{name}</CardTitle>
        </CardHeader>
      </Link>
      <CardFooter>
        <Follow follow={followed} userId={id.toString()} />
        <StartDialog userId={id.toString()} />
      </CardFooter>
    </Card>
  );
};
