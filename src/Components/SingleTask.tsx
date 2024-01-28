import { Button, Sheet, Stack, Typography } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setCurTask, setTaskOpen } from "../feature/appSlice";
import ModalBG from "./ModalBG";

export default function SingleTask() {
  const task = useAppSelector((store) => store.app.curTask);
  const dispatch = useAppDispatch();
  const { title, desc, isDone } = task!;

  const color = isDone ? "success" : "primary";

  function handleClose() {
    dispatch(setTaskOpen(false));
    dispatch(setCurTask(null));
  }
  return (
    <ModalBG>
      <Sheet
        color={color}
        variant="soft"
        sx={{ p: 3, width: "450px", borderRadius: "10px" }}
      >
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={4}>
              <Typography level="title-md" color={color}>
                {isDone ? "DONE" : "NOT DONE"}
              </Typography>
            </Stack>
            <Button onClick={handleClose} color={color} variant="plain">
              <CloseIcon />
            </Button>
          </Stack>
          <Typography sx={{ wordBreak: "break-word", pr: "40px" }} level="h3">
            {title}
          </Typography>
          <Typography level="body-md">{desc}</Typography>
        </Stack>
      </Sheet>
    </ModalBG>
  );
}
