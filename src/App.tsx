import Navbar from "./Components/Navbar";
import { useGetTasksQuery } from "./services/tasksAPI";

function App() {
  const { data, isLoading } = useGetTasksQuery();
  if (isLoading) return <h2>loading...</h2>;
  console.log(data);
  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;
