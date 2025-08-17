import React from "react";
import styles from "./StepsSection.module.scss";

interface Step {
  id: number;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Консультация",
    text: "Вы можете оставить заявку или позвонить самостоятельно для подробной консультации",
  },
  {
    id: 2,
    title: "Встреча со специалистом",
    text: "Мастер приезжает на место или вы самостоятельно приезжаете к нам в сервисный центр.",
  },
  {
    id: 3,
    title: "Диагностика устройства",
    text: "Техник тщательно изучит ваш гаджет и протестирует на современном оборудовании.",
  },
  {
    id: 4,
    title: "Согласование стоимости",
    text: "Мы предложим несколько решений, чтобы вы уложились в бюджет.",
  },
  {
    id: 5,
    title: "Гарантия от 1 года",
    text: "После проверки устройства клиентом мы выпишем гарантийный талон, под печать компании.",
  },
  {
    id: 6,
    title: "Диагностика",
    text: "Оплата производится после ремонта и проверки устройства клиентом",
  },
];

const StepsSection: React.FC = () => {
  return (
    <section className="container">
      <div className={styles.stepsSection}>
        <h2 className={styles.title}>Этапы ремонта и ценообразование</h2>
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.cardWrapper}>
              <div className={styles.badge}>
                {String(step.id).padStart(2, "0")}
              </div>
              <div className={styles.card}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
