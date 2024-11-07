import { profileEndpoints } from "@/config/endpoints";
import { UserProfileEntity } from "@/entities/UserProfileEntity";
import { cookies } from "next/headers";

interface IProfileInfo {
  data: { id: number; login: string; email: string };
  messages: [];
  fieldsErrors: [];
  resultCode: 0;
}

export async function getUserProfileData(profileId: string) {
  try {
    const res = await fetch(profileEndpoints.getUserProfile(profileId));
    const userProfileData: UserProfileEntity = await res.json();

    return userProfileData;
  } catch {
    throw new Error("Failed to fetch users");
  }
}

export async function getMyProfileData() {
  const { value: jwt } = cookies().get(JWT)!;
  try {
    const profileInfoResponse = await fetch(profileEndpoints.getMyInfo(), {
      headers: {
        "Content-Type": "application/json",
        "API-KEY": process.env.API_KEY!,
        Authorization: `Bearer ${jwt}`,
      },
    });
    const myProfileInfo: IProfileInfo = await profileInfoResponse.json();

    const profileDataResponse = await fetch(
      profileEndpoints.getProfile(myProfileInfo.data.id),
      {
        headers: {
          "Content-Type": "application/json",
          "API-KEY": process.env.API_KEY!,
        },
      }
    );
    const profileStatusResponse = await fetch(
      profileEndpoints.getStatus(myProfileInfo.data.id),
      {
        headers: {
          "Content-Type": "application/json",
          "API-KEY": process.env.API_KEY!,
        },
      }
    );
    const myProfileData: UserProfileEntity = await profileDataResponse.json();
    const myProfileStatus: string = await profileStatusResponse.json();

    return { ...myProfileData, status: myProfileStatus };
  } catch {
    throw new Error("Failed to fetch users");
  }
}
