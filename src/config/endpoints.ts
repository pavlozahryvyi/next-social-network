export const BASE_URL = "https://social-network.samuraijs.com/api/1.0";

export const usersEndpoints = {
  getUsers: (count: number) => `${BASE_URL}/users?count=${count}`,
};

export const profileEndpoints = {
  getUserProfile: (id: string | number) => `${BASE_URL}/profile/${id}`,
  getMyInfo: () => `${BASE_URL}/auth/me`,
  getProfile: (id: string | number) => `${BASE_URL}/profile/${id}`,
  getStatus: (id: string | number) => `${BASE_URL}/profile/status/${id}`,
  updateStatus: () => `${BASE_URL}/profile/status`,
};

export const authEndpoints = {
  signIn: () => `${BASE_URL}/auth/login`,
  verify: () => `${BASE_URL}/auth/me`,
};

export const messagesEndpoints = {
  getAllMessages: () => `${BASE_URL}/dialogs`,
  userMessages: (userId: string | number, count = 20) =>
    `${BASE_URL}/dialogs/${userId}/messages?count=${count}`,
  sendMessage: (userId: string | number) =>
    `${BASE_URL}/dialogs/${userId}/messages`,
};
