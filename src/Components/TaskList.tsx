import { memo } from "react";
import { useGetTasksQuery } from "../services/tasksAPI";
import { Sheet } from "@mui/joy";
import TaskItem from "./TaskItem/TaskItem";
import { useAppSelector } from "../hooks/hooks";
import { filterData } from "../utils/utils";
import Loader from "./Loader";

const TaskList = memo(() => {
  const filter = useAppSelector((store) => store.app.filter);
  const { data, isLoading } = useGetTasksQuery();
  if (isLoading) return <Loader />;
  const filteredData = filterData(data!, filter);
  return (
    <Sheet className="tasksBoard">
      {!filteredData.length ? (
        <h3>No "{filter}" tasks yet</h3>
      ) : (
        filteredData.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })
      )}
    </Sheet>
  );
});

export default TaskList;
