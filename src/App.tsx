import CreateTask from "./Components/CreateTask";
import Navbar from "./Components/Navbar";
import TaskList from "./Components/TaskList";
import { useAppSelector } from "./hooks/hooks";

function App() {
  const { isCreateTaskOpen } = useAppSelector((store) => store.app);
  return (
    <main>
      <Navbar />
      <TaskList />
      {isCreateTaskOpen && <CreateTask />}
    </main>
  );
}

export default App;
