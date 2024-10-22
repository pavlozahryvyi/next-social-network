"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, FC } from "react";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
