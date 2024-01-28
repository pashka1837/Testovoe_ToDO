import CreateTask from "./Components/CreateTask";
import DeleteTask from "./Components/DeleteTask";
import EditTask from "./Components/EditTask";
import Navbar from "./Components/Navbar";
import TaskList from "./Components/TaskList";
import { useAppSelector } from "./hooks/hooks";

function App() {
  const { isCreateTaskOpen, isDeleteTaskOpen, isEditTaskOpen } = useAppSelector(
    (store) => store.app
  );
  return (
    <main>
      <Navbar />
      <TaskList />
      {isCreateTaskOpen && <CreateTask />}
      {isDeleteTaskOpen && <DeleteTask />}
      {isEditTaskOpen && <EditTask />}
    </main>
  );
}

export default App;
