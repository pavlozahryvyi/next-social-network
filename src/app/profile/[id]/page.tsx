import { profileEndpoints } from "@/spec/endpoints";

interface IProfileData {
  aboutMe: string | null;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: boolean;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
}

export async function getProfileData(profileId: string) {
  try {
    const res = await fetch(profileEndpoints.getProfile(profileId));
    const profileData: IProfileData = await res.json();

    return profileData;
  } catch {
    throw new Error("Failed to fetch users");
  }
}

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const profileData = await getProfileData(params.id);

  console.log("---profileData", profileData);

  return (
    <>
      <h1>Profile: {profileData.fullName}</h1>
    </>
  );
}
