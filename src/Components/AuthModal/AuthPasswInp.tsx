import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";

export default function AuthPasswInp({ isError, setError }: AuthInpPropsT) {
  const color = isError.local || isError.server ? "danger" : "primary";
  return (
    <FormControl error={!!isError.local}>
      <FormLabel>Enter your password</FormLabel>
      <Input
        onFocus={() => setError({ local: null, server: null })}
        name="password"
        required
        type="password"
        color={color}
      />
      <FormHelperText color="primary">{isError.local}</FormHelperText>
    </FormControl>
  );
}
