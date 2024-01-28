import { Button, Checkbox, Stack } from "@mui/joy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useUpdTaskMutation } from "../../services/tasksAPI";
import { useAppDispatch } from "../../hooks/hooks";
import { setCurTask, setDeleteTaskOpen } from "../../feature/appSlice";

export default function TaskButtonGroup({
  task,
  checkBoxRef,
}: {
  task: TaskT;
  checkBoxRef: React.RefObject<HTMLSpanElement>;
}) {
  const dispatch = useAppDispatch();
  const [updTask, { isLoading }] = useUpdTaskMutation();

  const { id, isDone } = task;
  const color = task.isDone ? "success" : "primary";

  function handleDoneTask() {
    updTask({ ...task, isDone: !isDone });
  }

  const handleDeleteTask: handleClicksT = (e) => {
    e.stopPropagation();
    dispatch(setCurTask(task));
    dispatch(setDeleteTaskOpen(true));
  };

  const handleEditTask: handleClicksT = (e) => {
    e.stopPropagation();
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
        defaultChecked={isDone}
        onChange={handleDoneTask}
        label="Done"
        color={color}
        sx={{ width: "70px" }}
      />
      <Stack direction="row" spacing={1}>
        <Button
          data-testid="handleEditTask"
          color={color}
          onClick={handleEditTask}
          variant="plain"
          className="taskElBtn 1"
        >
          <MoreVertIcon />
        </Button>
        <Button
          data-testid="handleDeleteTask"
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
