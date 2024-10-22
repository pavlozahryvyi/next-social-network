import { MessageUserEntity } from "@/entities/MessageUserEntity";

import { Avatar } from "../Avatar";
import Link from "next/link";

interface IProps {
  users: MessageUserEntity[];
}

export const UsersNav: React.FC<IProps> = ({ users }) => {
  return (
    <div className="flex gap-[10px]">
      {users.map(({ id, userName, photos: { small } }) => {
        return (
          <Link
            href={`/messages/${id}`}
            key={id}
            className="flex flex-col items-center"
          >
            <Avatar src={small} />
            <p className="text-[12px]">{userName}</p>
          </Link>
        );
      })}
    </div>
  );
};
