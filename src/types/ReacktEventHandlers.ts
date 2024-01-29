type handleClicksT = (
  e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
) => void;

type handleInpSubmitT = (e: React.FormEvent<HTMLFormElement>) => void;

type handleInpChangeT = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  name: string
) => void;
