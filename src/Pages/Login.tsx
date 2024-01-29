// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../Components/AuthModal/AuthModal";
import ModalBG from "../Components/ModalBG";
import Loader from "../Components/Loader";

export default function Login() {
  const navigate = useNavigate();
  const [isError, setError] = useState<AuthErrorT>({
    local: null,
    server: null,
  });

  const [isLoading, setLoading] = useState(false);

  const data: AuthDataT = {
    title: "Sign in to continue.",
    btnName: "Login",
    link: "/sign-up",
    linkInfo: "Sign up",
    linkTitle: "Don't have an account?",
  };

  async function handleSignIn(email: string, password: string) {
    setLoading(true);
    const res = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = res._bodyText;
    if (data === "success") {
      document.cookie = `logedIn=1; Secure`;
      setLoading(false);
      navigate("/");
    } else setError({ ...isError, server: data });
    setLoading(false);
  }

  return (
    <>
      <ModalBG>
        <AuthModal
          handleAuth={handleSignIn}
          data={data}
          setError={setError}
          isError={isError}
        />
      </ModalBG>
      {isLoading && <Loader />}
    </>
  );
}
