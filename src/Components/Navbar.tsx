import { Button, Radio, RadioGroup, Sheet, Stack, Typography } from "@mui/joy";
import { useAppDispatch } from "../hooks/hooks";
import { setCreateTaskOpen } from "../feature/appSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  function handleCreateTask() {
    dispatch(setCreateTaskOpen(true));
  }
  return (
    <Sheet
      color="primary"
      variant="outlined"
      sx={{ borderRadius: "15px", px: 4 }}
    >
      <Stack direction="row" alignItems="center" sx={{ height: "100px" }}>
        <Button onClick={handleCreateTask}>Create New Task</Button>
        <Stack>
          <Typography></Typography>
          <RadioGroup>
            <Radio></Radio>
          </RadioGroup>
        </Stack>
      </Stack>
    </Sheet>
  );
}
