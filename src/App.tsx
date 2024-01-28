import CreateTask from "./Components/CreateTask";
import DeleteTask from "./Components/DeleteTask";
import Navbar from "./Components/Navbar";
import TaskList from "./Components/TaskList";
import { useAppSelector } from "./hooks/hooks";

function App() {
  const { isCreateTaskOpen, isDeleteTaskOpen } = useAppSelector(
    (store) => store.app
  );
  return (
    <main>
      <Navbar />
      <TaskList />
      {isCreateTaskOpen && <CreateTask />}
      {isDeleteTaskOpen && <DeleteTask />}
    </main>
  );
}

export default App;
