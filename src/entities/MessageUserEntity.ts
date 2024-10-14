import { PhotosType } from "./commonTypes";

export interface MessageUserEntity {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: 0;
  photos: PhotosType;
}
