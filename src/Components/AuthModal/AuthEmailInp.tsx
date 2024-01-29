import { FormControl, FormLabel, Input } from "@mui/joy";

export default function AuthEmailInp({ isError, setError }: AuthInpPropsT) {
  const color = isError.local || isError.server ? "danger" : "primary";
  return (
    <FormControl>
      <FormLabel>Enter your email</FormLabel>
      <Input
        name="email"
        required
        type="email"
        color={color}
        onFocus={() => setError({ local: null, server: null })}
      />
    </FormControl>
  );
}
