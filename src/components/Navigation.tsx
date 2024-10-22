"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export const Navigation = () => {
  const session = useSession();

  return (
    <nav className="flex flex-row justify-between items-center">
      <Link href="/">HOME</Link>
      {session.data && <Link href="/my">MY PROFILE</Link>}
      <Link href="/users">PEOPLE</Link>
      {session.data && (
        <>
          <Link href="/chat">CHAT</Link>
          <Link href="/messages">MESSAGES</Link>
          <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
            SIGN OUT
          </Link>
        </>
      )}
      {!session.data && <Link href="/api/auth/signin">SIGN IN</Link>}
    </nav>
  );
};
