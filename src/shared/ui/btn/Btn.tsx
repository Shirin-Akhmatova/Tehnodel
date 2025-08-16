import style from "./Btn.module.scss";

interface BtnProps {
  paddingInline: string;
  paddingBlock: string;
}
const Btn = ({ paddingInline, paddingBlock }: BtnProps) => {
  return (
    <button className={style.Btn} style={{ paddingInline, paddingBlock }}>
      Вызвать мастера
    </button>
  );
};

export default Btn;
