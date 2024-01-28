type TaskT = {
  id: string;
  title: string;
  desc: string;
  isDone: boolean;
};

type InputsStateT = {
  title: string;
  desc: string;
};

type ComponValuesT = {
  formName: string;
  plcHldrTitle: string;
  plcHldrDesc: string;
  btnName: string;
  dfltTitle: string;
  dfltDesc: string;
};

type handleInpChangeT = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  name: string
) => void;

type handleInpSubmitT = (e: React.FormEvent<HTMLFormElement>) => void;

type MyInputPropsT = {
  defaultValue: string;
  label: string;
  name: string;
  placeholder: string;
  handleInpChange: handleInpChangeT;
};

type ModifyTaskPropsT = {
  componValues: ComponValuesT;
  inputs: InputsStateT;
  handleInpChange: handleInpChangeT;
  handleSubmit: handleInpSubmitT;
};

type handleClicksT = (
  e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
) => void;
