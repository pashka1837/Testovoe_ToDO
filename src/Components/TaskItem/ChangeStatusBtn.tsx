import { Checkbox } from "@mui/joy";
import { useUpdTaskMutation } from "../../services/tasksAPI";

export default function ChangeStatusBtn({
  task,
  checkBoxRef,
}: {
  task: TaskT;
  checkBoxRef: React.RefObject<HTMLSpanElement>;
}) {
  const [updTask] = useUpdTaskMutation();

  const { isDone } = task;
  const color = isDone ? "success" : "primary";

  function handleDoneTask(e: React.ChangeEvent<HTMLInputElement>) {
    updTask({ ...task, isDone: e.target.checked });
  }
  return (
    <Checkbox
      ref={checkBoxRef}
      checked={isDone}
      onChange={handleDoneTask}
      label="Done"
      color={color}
      sx={{ width: "70px" }}
    />
  );
}
