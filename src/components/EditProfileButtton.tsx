"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const EditProfileButton = () => {
  const pathname = usePathname();

  let href = "/my/edit";
  let btnText = "Edit Profile";

  if (pathname.includes("/edit")) {
    href = "/my";
    btnText = "Discard Edit";
  }

  return (
    <Link href={href}>
      <button>{btnText}</button>
    </Link>
  );
};
