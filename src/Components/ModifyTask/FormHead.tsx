import { Button, Stack, Typography } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../hooks/hooks";
import { setPopUpsClose } from "../../feature/appSlice";

export default function FormHead({ formName }: { formName: string }) {
  const dispatch = useAppDispatch();
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography level="title-lg">{formName}</Typography>
      <Button onClick={() => dispatch(setPopUpsClose())} variant="plain">
        <CloseIcon />
      </Button>
    </Stack>
  );
}
