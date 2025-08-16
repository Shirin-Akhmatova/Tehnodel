import zayafka from "../../assets/icons/zayafka.svg";
import diagnostica from "../../assets/icons/diagnostik.svg";
import remont from "../../assets/icons/remont.svg";
import style from "./WorkTeam.module.scss";
const WorkTeam = () => {
  return (
    <div className={style.workTeam}>
      <h1>Как работает наша команда</h1>
      <p>Быстро, слаженно и с гарантией качества</p>
      <div className={style.cards}>
        <div className={style.card}>
          <img src={zayafka} alt="заявка" />
          <p>Заявка</p>
        </div>
        <div className={style.line}></div>
        <div className={style.card}>
          <img src={diagnostica} alt="диагностика" />
          <p>Диагностика</p>
        </div>
        <div className={style.line}></div>
        <div className={style.card}>
          <img src={remont} alt="ремонт" />
          <p>Ремонт</p>
        </div>
      </div>
    </div>
  );
};

export default WorkTeam;
