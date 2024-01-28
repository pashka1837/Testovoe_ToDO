import { FormControl, FormLabel, Textarea } from "@mui/joy";

export default function MyTextArea({
  label,
  name,
  placeholder,
  defaultValue,
  handleInpChange,
}: MyInputPropsT) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Textarea
        onChange={(e) => handleInpChange(e, name)}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </FormControl>
  );
}
