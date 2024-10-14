import { EditProfileButton } from "@/components/EditProfileButtton";
import { ProfileInfo } from "@/components/ProfileInfo";
import { getMyProfileData } from "@/services/profileService";

export default async function MyProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profileData = await getMyProfileData();

  return (
    <div>
      <ProfileInfo {...profileData} />
      <EditProfileButton />
      {children}
    </div>
  );
}
