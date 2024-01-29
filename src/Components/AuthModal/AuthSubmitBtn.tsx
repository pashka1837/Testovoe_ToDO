import { Button } from "@mui/joy";

export default function AuthSubmitBtn({
  isError,
  btnName,
}: {
  isError: AuthErrorT;
  btnName: string;
}) {
  return (
    <Button
      variant="solid"
      color="primary"
      type="submit"
      disabled={!!isError.local}
      sx={{
        mt: 1,
        borderTopRightRadius: "25px",
        borderBottomRightRadius: "25px",
        borderTopLeftRadius: "25px",
        borderBottomLeftRadius: "25px",
      }}
    >
      {btnName}
    </Button>
  );
}
