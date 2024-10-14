import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authEndpoints } from "./endpoints";
import { cookies } from "next/headers";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const response = await fetch(authEndpoints.signIn(), {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
            "API-KEY": process.env.API_KEY!,
          },
        });

        const responseData = await response.json();

        if (responseData.resultCode === 0) {
          try {
            const token = responseData.data.token;
            const meResponse = await fetch(authEndpoints.verify(), {
              headers: {
                "Content-Type": "application/json",
                "API-KEY": process.env.API_KEY!,
                Authorization: `Bearer ${token}`,
              },
            });

            cookies().set("JWT", token);

            const meResponseData = await meResponse.json();

            const { id, login: name, email } = meResponseData.data;

            return { id, name, email, image: "" };
          } catch (e) {
            return null;
          }
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
