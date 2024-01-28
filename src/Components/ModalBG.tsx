import { setPopUpsClose } from "../feature/appSlice";
import { useAppDispatch } from "../hooks/hooks";

type handleClicksT = (
  e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
) => void;

export default function ModalBG({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const dispatch = useAppDispatch();

  const handleClickOutside: handleClicksT = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(setPopUpsClose());
    }
  };
  return (
    <div className="modalBG" onClick={handleClickOutside}>
      {children}
    </div>
  );
}
