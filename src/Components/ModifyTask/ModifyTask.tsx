import { Sheet } from "@mui/joy";
import { FormHead, FormBody } from "./index";

export default function ModifyTask({
  handleSubmit,
  handleInpChange,
  inputs,
  componValues,
}: ModifyTaskPropsT) {
  const { formName } = componValues;

  return (
    <Sheet sx={{ p: 4, width: "350px", borderRadius: "10px" }}>
      <FormHead formName={formName} />
      <FormBody
        componValues={componValues}
        inputs={inputs}
        handleInpChange={handleInpChange}
        handleSubmit={handleSubmit}
      />
    </Sheet>
  );
}
