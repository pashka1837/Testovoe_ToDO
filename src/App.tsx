import CreateTask from "./Components/CreateTask";
import DeleteTask from "./Components/DeleteTask";
import EditTask from "./Components/EditTask";
import Navbar from "./Components/Navbar/Navbar";
import SingleTask from "./Components/SingleTask";
import TaskList from "./Components/TaskList";
import { useAppSelector } from "./hooks/hooks";

function App() {
  const { isCreateTaskOpen, isDeleteTaskOpen, isEditTaskOpen, isTaskOpen } =
    useAppSelector((store) => store.app);
  return (
    <main>
      <Navbar />
      <TaskList />
      {isCreateTaskOpen && <CreateTask />}
      {isDeleteTaskOpen && <DeleteTask />}
      {isEditTaskOpen && <EditTask />}
      {isTaskOpen && <SingleTask />}
    </main>
  );
}

export default App;
