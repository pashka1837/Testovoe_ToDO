import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function LogOutBtn() {
  const navigate = useNavigate();
  function handleLogOut() {
    document.cookie = "logedIn=0";
    navigate("/login");
  }
  return <Button onClick={handleLogOut}>Log Out</Button>;
}
