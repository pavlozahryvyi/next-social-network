export type Response<T> = {
  resultCode: number;
  messages: [];
  data: T;
};
