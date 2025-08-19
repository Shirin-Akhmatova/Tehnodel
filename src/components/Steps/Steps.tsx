import { useMemo } from "react";
import style from "./Steps.module.scss";

interface StepsType {
  step: number;
  title: string;
  description: string;
}

const Steps = () => {
  const steps: StepsType[] = useMemo(
    () => [
      {
        step: 1,
        title: "Консультация",
        description:
          "Вы можете оставить заявку или позвонить самостоятельно для подробной консультации",
      },
      {
        step: 2,
        title: "Встреча со специалистом",
        description:
          "Мастер приезжает на место или вы самостоятельно приезжаете к нам в сервисный центр.",
      },
      {
        step: 3,
        title: "Диагностика устройства",
        description:
          "Техник тщательно изучит ваш гаджет и протестирует на современном оборудовании.",
      },
      {
        step: 4,
        title: "Согласование стоимости",
        description:
          "Мы предложим несколько решений, чтобы вы уложились в бюджет.",
      },
      {
        step: 5,
        title: "Гарантия от 1 года",
        description:
          "После проверки устройства клиентом мы выпишем гарантийный талон, под печать компании.",
      },
      {
        step: 6,
        title: "Диагностика",
        description:
          "Оплата производится после ремонта и проверки устройства клиентом",
      },
    ],
    []
  );
  return (
    <div className={style.steps}>
      <div className="container">
        <div className={style.content}>
          <h1>Этапы ремонта и ценообразование</h1>
          <div className={style.stepsList}>
            {steps.map((step) => (
              <div key={step.step} className={style.step}>
                <div className={style.stepNumber}>0{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
