import { updateStatus } from "@/actions/profileAction";

export const ChangeStatus = () => {
  return (
    <form action={updateStatus}>
      <input type="text" name="status" />
      <button type="submit">UPDATE STATUS</button>
    </form>
  );
};
