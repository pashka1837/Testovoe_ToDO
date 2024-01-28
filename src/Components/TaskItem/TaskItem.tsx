import { Sheet, Stack, Typography } from "@mui/joy";

import { useRef } from "react";
import TaskButtonGroup from "./TaskButtonGroup";
import { useAppDispatch } from "../../hooks/hooks";
import { setCurTask, setTaskOpen } from "../../feature/appSlice";

export default function TaskItem({ task }: { task: TaskT }) {
  const dispatch = useAppDispatch();
  const checkBoxRef = useRef<HTMLSpanElement>(null);

  const { id, title } = task;

  const handleOpenTask: handleClicksT = (e) => {
    e.stopPropagation();
    const cheBoxEl =
      checkBoxRef.current!.firstElementChild!.firstElementChild!
        .firstElementChild;
    if (e.target === cheBoxEl) return;
    dispatch(setCurTask(task));
    dispatch(setTaskOpen(true));
  };

  return (
    <Sheet
      onClick={handleOpenTask}
      color={task.isDone ? "success" : "primary"}
      variant="outlined"
      style={{
        borderRadius: "5px",
        width: "250px",
        cursor: "pointer",
      }}
    >
      <Stack spacing={2} p={2}>
        <TaskButtonGroup task={task} checkBoxRef={checkBoxRef} />
        <Typography
          sx={{ wordBreak: "break-word", pr: "10px" }}
          level="title-lg"
        >
          {title}
        </Typography>
      </Stack>
    </Sheet>
  );
}
