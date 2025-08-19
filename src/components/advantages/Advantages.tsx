import React from "react";
import styles from "./Advantages.module.scss";
import Price from "../../assets/icons/2 (3).svg";
import Tools from "../../assets/icons/2 (4).svg";
import Hour from "../../assets/icons/2 (5).svg";

type Advantage = {
  icon: string;
  title: string;
  description: string;
};

const advantages: Advantage[] = [
  {
    icon: Price,
    title: "Гарантия низкой цены",
    description:
      "Наш прайс составлен на основе средних рыночных цен, потому что мы закупаем запчасти напрямую у производителей",
  },
  {
    icon: Tools,
    title: "Качество и надежность",
    description:
      "Это долговечность, стабильная работа и уверенность в результате, которые мы обеспечиваем на каждом этапе",
  },
  {
    icon: Hour,
    title: "Бесплатный выезд мастера",
    description: "Бесплатный выезд за 40 минут, даже при отказе от ремонта!",
  },
];

const Advantages: React.FC = () => {
  return (
    <section className="container">
      <div className={styles.advantages}>
        <h2>Мы отличаемся тремя преимуществами</h2>
        <div className={styles.cards}>
          {advantages.map((adv, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <img src={adv.icon} alt={adv.title} />
              </div>
              <h3 className={styles.cardTitle}>{adv.title}</h3>
              <p className={styles.description}>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
