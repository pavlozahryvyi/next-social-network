import { PhotosType } from "./commonTypes";

export type UserEntity = {
  name: string;
  id: number;
  uniqueUrlName: null | string;
  photos: PhotosType;
  status: null | string;
  followed: boolean;
};
