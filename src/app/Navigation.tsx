import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="app-nav flex flex-col">
      <Link href="/">HOME</Link>
      <Link href="/profile">PROFILE</Link>
      <Link href="/chat">CHAT</Link>
      <Link href="/messages">MESSAGES</Link>
      <Link href="/users">PEOPLE</Link>
      <Link href="/login">LOGIN</Link>
    </nav>
  );
};
