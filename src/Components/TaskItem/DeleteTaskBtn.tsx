import { Button } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../hooks/hooks";
import { setCurTask, setDeleteTaskOpen } from "../../feature/appSlice";

export default function DeleteTaskBtn({ task }: { task: TaskT }) {
  const dispatch = useAppDispatch();

  const color = task.isDone ? "success" : "primary";

  const handleDeleteTask: handleClicksT = (e) => {
    e.stopPropagation();
    dispatch(setCurTask(task));
    dispatch(setDeleteTaskOpen(true));
  };

  return (
    <Button
      color={color}
      onClick={handleDeleteTask}
      variant="plain"
      className="taskElBtn 2"
    >
      <CloseIcon />
    </Button>
  );
}
