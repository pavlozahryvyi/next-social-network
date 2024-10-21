import { ProfileInfo } from "@/app/components/ProfileInfo";
import { getUserProfileData } from "@/services/profileService";

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const profileData = await getUserProfileData(params.id);

  return (
    <div>
      <ProfileInfo {...profileData} />
      <button>Write a message</button>
    </div>
  );
}
