type AuthDataT = {
  title: string;
  btnName: string;
  link: string;
  linkInfo: string;
  linkTitle: string;
};
type AuthErrorT = {
  local: string | null;
  server: string | null;
};

type AuthCompT = {
  handleAuth: (email: any, password: any) => Promise<void>;
  data: AuthDataT;
  setError: React.Dispatch<React.SetStateAction<AuthErrorT>>;
  isError: AuthErrorT;
};

type AuthInpPropsT = {
  isError: AuthErrorT;
  setError: React.Dispatch<React.SetStateAction<AuthErrorT>>;
};
