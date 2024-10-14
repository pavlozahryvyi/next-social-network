import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

interface IProps {
  sendMessage: (formData: FormData) => void;
}

export const SendMessage: FC<IProps> = ({ sendMessage }) => {
  return (
    <form action={sendMessage} className="p-2">
      <div className="flex gap-2">
        <Textarea name="message" rows={4} className="grow" />
        <div className="flex justify-center items-center">
          <Button type="submit" className="grow-2 rounded-full">
            <PaperAirplaneIcon className="size-6 text-white" />
          </Button>
        </div>
      </div>
    </form>
  );
};
