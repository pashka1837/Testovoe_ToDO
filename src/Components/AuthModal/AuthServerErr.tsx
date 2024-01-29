import { Typography } from "@mui/joy";

export default function AuthServerErr({ isError }: { isError: AuthErrorT }) {
  type StatusT = {
    [key: string]: string;
  };
  const status: StatusT = {
    "email-already-in-use": "This email is already in use.",
    "wrong password": "Wrong password.",
    "wrong email": "Wrong login.",
  };
  return (
    <>
      {isError.server && (
        <Typography sx={{ textAlign: "center" }} color="danger" level="body-sm">
          {status[`${isError!.server}`]}
        </Typography>
      )}
    </>
  );
}
