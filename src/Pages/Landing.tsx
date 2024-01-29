import { useAppSelector } from "../hooks/hooks";
import {
  CreateTask,
  DeleteTask,
  EditTask,
  SingleTask,
  TaskList,
} from "../Components/index";

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
