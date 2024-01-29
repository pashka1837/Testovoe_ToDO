import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeLayout from "./Pages/HomeLayout";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
