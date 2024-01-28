import { Stack } from "@mui/joy";
import DeleteTaskBtn from "./DeleteTaskBtn";
import EditTaskBtn from "./EditTaskBtn";
import ChangeStatusBtn from "./ChangeStatusBtn";

export default function TaskButtonGroup({
  task,
  checkBoxRef,
}: {
  task: TaskT;
  checkBoxRef: React.RefObject<HTMLSpanElement>;
}) {
  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="center"
      justifyContent="space-between"
    >
      <ChangeStatusBtn task={task} checkBoxRef={checkBoxRef} />
      <Stack direction="row" spacing={1}>
        <EditTaskBtn task={task} />
        <DeleteTaskBtn task={task} />
      </Stack>
    </Stack>
  );
}
