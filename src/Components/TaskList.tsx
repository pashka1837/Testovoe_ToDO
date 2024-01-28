import { memo } from "react";
import { useGetTasksQuery } from "../services/tasksAPI";
import { Sheet } from "@mui/joy";
import TaskItem from "./TaskItem/TaskItem";

const TaskList = memo(() => {
  const { data, isLoading } = useGetTasksQuery();
  if (isLoading) return <h2>loading...</h2>;
  console.log(data);
  return (
    <Sheet className="tasksBoard">
      {data!.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </Sheet>
  );
});

export default TaskList;
