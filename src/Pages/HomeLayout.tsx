import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect } from "react";
import { isLogedIn } from "../utils/utils";

export default function HomeLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogedIn()) navigate("/login");
  }, []);

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
