import { Button, Checkbox, Stack } from "@mui/joy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useUpdTaskMutation } from "../../services/tasksAPI";
import { useAppDispatch } from "../../hooks/hooks";
import {
  setCurTask,
  setDeleteTaskOpen,
  setEditTaskOpen,
} from "../../feature/appSlice";

export default function TaskButtonGroup({
  task,
  checkBoxRef,
}: {
  task: TaskT;
  checkBoxRef: React.RefObject<HTMLSpanElement>;
}) {
  const dispatch = useAppDispatch();
  const [updTask] = useUpdTaskMutation();

  const { isDone } = task;
  const color = isDone ? "success" : "primary";

  function handleDoneTask(e: React.ChangeEvent<HTMLInputElement>) {
    updTask({ ...task, isDone: e.target.checked });
  }

  const handleDeleteTask: handleClicksT = (e) => {
    e.stopPropagation();
    dispatch(setCurTask(task));
    dispatch(setDeleteTaskOpen(true));
  };

  const handleEditTask: handleClicksT = (e) => {
    e.stopPropagation();
    dispatch(setCurTask(task));
    dispatch(setEditTaskOpen(true));
  };

  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="center"
      justifyContent="space-between"
    >
      <Checkbox
        ref={checkBoxRef}
        checked={isDone}
        onChange={handleDoneTask}
        label="Done"
        color={color}
        sx={{ width: "70px" }}
      />
      <Stack direction="row" spacing={1}>
        <Button
          color={color}
          onClick={handleEditTask}
          variant="plain"
          className="taskElBtn 1"
        >
          <MoreVertIcon />
        </Button>
        <Button
          color={color}
          onClick={handleDeleteTask}
          variant="plain"
          className="taskElBtn 2"
        >
          <CloseIcon />
        </Button>
      </Stack>
    </Stack>
  );
}
