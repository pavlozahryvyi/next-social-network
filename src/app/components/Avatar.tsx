import {
  AvatarFallback,
  AvatarImage,
  Avatar as CNAvatar,
} from "@/components/ui/avatar";

export const Avatar: React.FC<{ src: string }> = ({ src }) => {
  return (
    <CNAvatar>
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </CNAvatar>
  );
};
