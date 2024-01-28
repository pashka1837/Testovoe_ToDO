import { Button, Stack } from "@mui/joy";
import MyTextArea from "./MyTextArea";
import MyInput from "./MyInput";

export default function FormBody({
  handleSubmit,
  handleInpChange,
  inputs,
  componValues,
}: ModifyTaskPropsT) {
  const { dfltTitle, plcHldrTitle, dfltDesc, plcHldrDesc, btnName } =
    componValues;
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <MyInput
          label="Title"
          name="title"
          defaultValue={dfltTitle}
          placeholder={plcHldrTitle}
          handleInpChange={handleInpChange}
        />
        <MyTextArea
          label="Description"
          name="desc"
          defaultValue={dfltDesc}
          placeholder={plcHldrDesc}
          handleInpChange={handleInpChange}
        />
        <Button
          disabled={!inputs.desc || !inputs.title ? true : false}
          type="submit"
        >
          {btnName}
        </Button>
      </Stack>
    </form>
  );
}
