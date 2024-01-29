import { Sheet, Typography } from "@mui/joy";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ModalBG from "../ModalBG";
import { isLogedIn } from "../../utils/utils";
import {
  AuthEmailInp,
  AuthPasswInp,
  AuthServerErr,
  AuthSubmitBtn,
} from "./index";

export default function AuthModal({
  handleAuth,
  data,
  setError,
  isError,
}: AuthCompT) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogedIn()) navigate("/");
  }, []);

  const { title, btnName, link, linkInfo, linkTitle } = data;

  const handleSubmit: handleInpSubmitT = async (e) => {
    e.preventDefault();
    setError({ local: null, server: null });
    const target = e.currentTarget;

    const inpData = {
      email: target.email.value.trim(),
      password: target.password.value.trim(),
    };

    if (!inpData.password.match(/^(\w+\S+)$/g)) {
      setError({ ...isError, local: "Password can not contain spaces" });
      return;
    }
    if (inpData.password.length < 7) {
      setError({
        ...isError,
        local: "Password should be at least 6 characters long",
      });
      return;
    }
    await handleAuth(inpData.email, inpData.password);
  };

  return (
    <ModalBG>
      <form onSubmit={handleSubmit}>
        <Sheet
          sx={{
            width: {
              xs: 260,
              sm: 300,
              md: 350,
              lg: 400,
              xl: 450,
            },
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              Welcome!
            </Typography>
            <Typography level="body-sm">{title}</Typography>
          </div>
          <AuthEmailInp isError={isError} setError={setError} />
          <AuthPasswInp isError={isError} setError={setError} />
          <AuthSubmitBtn isError={isError} btnName={btnName} />
          <AuthServerErr isError={isError} />
          <Typography
            endDecorator={<Link to={link}>{linkInfo}</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            {linkTitle}
          </Typography>
        </Sheet>
      </form>
    </ModalBG>
  );
}
