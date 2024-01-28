import { Sheet, Stack, Typography } from "@mui/joy";

import { useRef } from "react";
import TaskButtonGroup from "./TaskButtonGroup";

export default function TaskItem({ task }: { task: TaskT }) {
  const checkBoxRef = useRef<HTMLSpanElement>(null);

  const { id, title } = task;

  const handleOpenTask: handleClicksT = (e) => {
    e.stopPropagation();
    const cheBoxEl =
      checkBoxRef.current!.firstElementChild!.firstElementChild!
        .firstElementChild;
    if (e.target === cheBoxEl) return;
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
