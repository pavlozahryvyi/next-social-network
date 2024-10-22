import clsx from "clsx";
import { FC } from "react";

interface IProps {
  text: string;
  isFriendMessage: boolean;
}

export const Message: FC<IProps> = ({ text, isFriendMessage }) => {
  return (
    <div
      className={clsx("flex", {
        "justify-start": isFriendMessage,
        "justify-end": !isFriendMessage,
      })}
    >
      <div>
        <span className="inline-block bg-gray-500 p-2 rounded-full">
          {text}
        </span>
      </div>
    </div>
  );
};
