import {
  AvatarFallback,
  AvatarImage,
  Avatar as CNAvatar,
} from "@/components/ui/avatar";

export const Avatar: React.FC<{ src: string | null }> = ({ src }) => {
  return (
    <CNAvatar>
      <AvatarImage src={src || "/avatar/no-avatar.jpg"} />
      <AvatarFallback>CN</AvatarFallback>
    </CNAvatar>
  );
};
