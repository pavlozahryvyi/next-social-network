"use client";
import { useState } from "react";
import { UserPlusIcon, UserMinusIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

export const Follow: React.FC<{ follow: boolean; userId: string }> = ({
  follow,
  userId,
}) => {
  const [isFollow, setIsFollow] = useState<boolean>(follow);

  const Icon = isFollow ? UserMinusIcon : UserPlusIcon;

  const handleToggleFollow = async () => {
    const followResult = await fetch("/api/follow", {
      method: isFollow ? "DELETE" : "POST",
      body: JSON.stringify({ userId }),
    });

    const followData = await followResult.json();

    setIsFollow(followData);
  };

  return (
    <Button onClick={handleToggleFollow}>
      <Icon className="size-6 text-white" />
    </Button>
  );
};
