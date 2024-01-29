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
