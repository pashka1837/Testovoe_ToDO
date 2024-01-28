import { Button, Sheet, Stack, Typography } from "@mui/joy";
import { useAppDispatch } from "../../hooks/hooks";
import { setCreateTaskOpen } from "../../feature/appSlice";
import FilterRadioGroup from "./FilterRadioGroup";

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
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ height: "100px" }}
      >
        <Button onClick={handleCreateTask}>Create New Task</Button>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography>Filter By:</Typography>
          <FilterRadioGroup />
        </Stack>
      </Stack>
    </Sheet>
  );
}
