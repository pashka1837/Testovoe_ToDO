import { Button } from "@mui/joy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAppDispatch } from "../../hooks/hooks";
import { setCurTask, setEditTaskOpen } from "../../feature/appSlice";

export default function EditTaskBtn({ task }: { task: TaskT }) {
  const dispatch = useAppDispatch();

  const handleEditTask: handleClicksT = (e) => {
    e.stopPropagation();
    dispatch(setCurTask(task));
    dispatch(setEditTaskOpen(true));
  };

  const color = task.isDone ? "success" : "primary";
  return (
    <Button
      color={color}
      onClick={handleEditTask}
      variant="plain"
      className="taskElBtn 1"
    >
      <MoreVertIcon />
    </Button>
  );
}
