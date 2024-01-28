import { memo } from "react";
import { useGetTasksQuery } from "../services/tasksAPI";
import { Sheet } from "@mui/joy";
import TaskItem from "./TaskItem/TaskItem";
import { useAppSelector } from "../hooks/hooks";

function filterData(data: TaskT[], filter: string) {
  if (filter === "All") return data;
  if (filter === "Done") return data.filter((d) => d.isDone);
  return data.filter((d) => !d.isDone);
}

const TaskList = memo(() => {
  const filter = useAppSelector((store) => store.app.filter);
  const { data, isLoading } = useGetTasksQuery();
  if (isLoading) return <h2>loading...</h2>;
  const filteredData = filterData(data!, filter);
  return (
    <Sheet className="tasksBoard">
      {filteredData!.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </Sheet>
  );
});

export default TaskList;
