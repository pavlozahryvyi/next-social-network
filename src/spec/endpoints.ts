export const BASE_URL = "https://social-network.samuraijs.com/api/1.0";

export const usersEndpoints = {
  getUsers: () => `${BASE_URL}/users`,
};

export const profileEndpoints = {
  getProfile: (id: string | number) => `${BASE_URL}/profile/${id}`,
};
