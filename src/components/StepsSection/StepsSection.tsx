import React, { useState, useRef } from "react";
import styles from "./StepsSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="container">
      <div className={styles.stepsSection}>
        <h2 className={styles.title}>Этапы ремонта и ценообразование</h2>

        {/* Grid for desktop */}
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

        {/* Swiper for mobile */}
        <div className={styles.slider}>
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={25}
            style={{ overflow: "visible" }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {steps.map((step) => (
              <SwiperSlide key={step.id}>
                <div className={styles.cardWrapper}>
                  <div className={styles.badge}>
                    {String(step.id).padStart(2, "0")}
                  </div>
                  <div className={styles.card}>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className={styles.pagination}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`${styles.bullet} ${
                  activeIndex % 3 === i ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
