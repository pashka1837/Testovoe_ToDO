// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../Components/AuthModal/AuthModal";
import ModalBG from "../Components/ModalBG";
import Loader from "../Components/Loader";

export default function SignUp() {
  const navigate = useNavigate();
  const [isError, setError] = useState<AuthErrorT>({
    local: null,
    server: null,
  });

  const [isLoading, setLoading] = useState(false);

  const data: AuthDataT = {
    title: "Create profile.",
    btnName: "Sign up",
    link: "/login",
    linkInfo: "Login ",
    linkTitle: "Already have account?",
  };

  async function handleSignUp(email: string, password: string) {
    setLoading(true);
    const res = await fetch("api/sign-up", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = res._bodyText;
    if (data === "success") {
      document.cookie = `logedIn=1; Secure`;
      navigate("/");
      setLoading(false);
    } else setError({ ...isError, server: data });
    setLoading(false);
  }

  return (
    <>
      <ModalBG>
        <AuthModal
          handleAuth={handleSignUp}
          data={data}
          setError={setError}
          isError={isError}
        />
      </ModalBG>
      {isLoading && <Loader />}
    </>
  );
}
