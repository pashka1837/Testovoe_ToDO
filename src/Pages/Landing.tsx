import { useAppSelector } from "../hooks/hooks";
import CreateTask from "../Components/CreateTask";
import DeleteTask from "../Components/DeleteTask";
import EditTask from "../Components/EditTask";
import SingleTask from "../Components/SingleTask";
import TaskList from "../Components/TaskList";

export default function Landing() {
  const { isCreateTaskOpen, isDeleteTaskOpen, isEditTaskOpen, isTaskOpen } =
    useAppSelector((store) => store.app);
  return (
    <>
      <TaskList />
      {isCreateTaskOpen && <CreateTask />}
      {isDeleteTaskOpen && <DeleteTask />}
      {isEditTaskOpen && <EditTask />}
      {isTaskOpen && <SingleTask />}
    </>
  );
}
