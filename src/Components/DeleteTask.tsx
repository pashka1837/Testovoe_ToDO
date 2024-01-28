import { Button, Sheet, Stack, Typography } from "@mui/joy";
import ModalBG from "./ModalBG";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useDeleteTaskMutation } from "../services/tasksAPI";
import { setCurTask, setDeleteTaskOpen } from "../feature/appSlice";

export default function DeleteTask() {
  const task = useAppSelector((store) => store.app.curTask);
  const dispatch = useAppDispatch();
  const [deleteTask] = useDeleteTaskMutation();

  function handleDeleteTask() {
    deleteTask(task!.id);
    dispatch(setDeleteTaskOpen(false));
  }
  function handleCancel() {
    dispatch(setCurTask(null));
    dispatch(setDeleteTaskOpen(false));
  }

  return (
    <ModalBG>
      <Sheet sx={{ p: 4, width: "350px", borderRadius: "10px" }}>
        <Stack spacing={3}>
          <Typography>Are you sure you want to delete this task?</Typography>
          <Stack direction="row" justifyContent="space-evenly">
            <Button onClick={handleDeleteTask} color="danger">
              Delete
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Stack>
        </Stack>
      </Sheet>
    </ModalBG>
  );
}
