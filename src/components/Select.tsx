import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  Select as SelectUI,
  SelectValue,
} from "./ui/select.ui";

export const Select = () => {
  return (
    <SelectUI>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </SelectUI>
  );
};
