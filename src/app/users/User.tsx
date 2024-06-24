import Link from "next/link";

interface IUserProps {
  name: string;
  id: number;
}

export const User: React.FC<IUserProps> = ({ name, id }) => {
  return (
    <div>
      <Link href={`/profile/${id}`}>{name}</Link>
    </div>
  );
};
