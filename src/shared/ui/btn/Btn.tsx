import style from "./Btn.module.scss";

interface BtnProps {
  paddingInline: string;
  paddingBlock: string;
  onClick?: () => void;
}
const Btn = ({ paddingInline, paddingBlock, onClick }: BtnProps) => {
  return (
    <button
      className={style.Btn}
      style={{ paddingInline, paddingBlock }}
      onClick={onClick}
    >
      Вызвать мастера
    </button>
  );
};

export default Btn;
