// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Radio, RadioGroup, Stack } from "@mui/joy";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setFilter } from "../../feature/appSlice";
type colorsT = {
  [arg: string]: string;
};

export default function FilterRadioGroup() {
  const filter = useAppSelector((store) => store.app.filter);
  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const status = e.target.value;
    console.log(status);
    dispatch(setFilter(status));
  }

  const colors: colorsT = {
    "In progress": "primary",
    Done: "success",
    All: "neutral",
  };
  return (
    <RadioGroup value={filter} onChange={handleChange}>
      <Stack direction="row" spacing={2}>
        {Object.entries(colors).map((stat: string[]) => (
          <Radio
            size="sm"
            key={stat.at(0)}
            color={stat.at(1)}
            value={stat.at(0)}
            label={stat.at(0)}
            checked={stat.at(0) === filter}
          />
        ))}
      </Stack>
    </RadioGroup>
  );
}
