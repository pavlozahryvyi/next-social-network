import { UserProfileEntity } from "@/entities/UserProfileEntity";
import Image from "next/image";

export const ProfileInfo: React.FC<UserProfileEntity> = ({
  aboutMe,
  fullName,
  lookingForAJob,
  lookingForAJobDescription,
  photos,
}) => {
  const { large } = photos;
  return (
    <div className="flex flex-col justify-center justify-items-center text-center items-center">
      <Image
        src={large || "/avatar/no-avatar.jpg"}
        alt="User Avatar"
        width={150}
        height={150}
        className="rounded-full"
      />
      <p>{fullName}</p>
      <p>{aboutMe}</p>
      {lookingForAJob && <p>Open for new opportunities</p>}
      {lookingForAJob && <p>{lookingForAJobDescription}</p>}
    </div>
  );
};
