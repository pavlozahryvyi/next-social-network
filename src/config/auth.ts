import type { AuthOptions, User } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import {
  meCheckService,
  signInService,
  signOutService,
} from "@/services/auth.service";
import { JWT } from "./consts";

export const authConfig: AuthOptions = {
  providers: [
    credentials({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const responseData = await signInService(credentials);

        if (responseData.resultCode === 0) {
          try {
            const token = responseData.data.token;
            cookies().set(JWT, token);

            const meResponseData = await meCheckService();

            const { id, login: name, email } = meResponseData.data;

            return { id, name, email, image: "" };
          } catch (e) {
            cookies().delete(JWT);
            return null;
          }
        }

        return null;
      },
    }),
  ],
  events: {
    async signOut() {
      await signOutService();
      cookies().delete(JWT);
    },
  },
  pages: {
    signIn: "/login",
  },
};
