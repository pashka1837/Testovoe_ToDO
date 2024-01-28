import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";

export default function Navbar() {
  return (
    <Sheet
      color="primary"
      variant="outlined"
      sx={{ borderRadius: "15px", px: 4 }}
    >
      <Stack direction="row" alignItems="center" sx={{ height: "100px" }}>
        <Button>Create New Task</Button>
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
