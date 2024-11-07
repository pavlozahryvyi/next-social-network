import { startDialogAction } from "@/actions/messagesAction";
import { Button } from "../ui/button";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export const StartDialog: React.FC<{ userId: string }> = async ({ userId }) => {
  const handleAction = async () => {
    "use server";
    await startDialogAction(userId);
  };

  return (
    <form action={handleAction}>
      <Button>
        <PaperAirplaneIcon className="size-6 text-white" />
      </Button>
    </form>
  );
};
