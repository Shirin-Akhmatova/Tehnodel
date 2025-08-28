import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import styles from "./ReviewsCarousel.module.scss";
import Avatar from "../../assets/img/47432989-1C5A-4988-8A2F-1F7864A21F01 1.svg";

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Екатерина Васнецова",
    date: "2025-03-02",
    text: "Перестал морозить холодильник. Мастер приехал в тот же день, быстро диагностировал утечку фреона и устранил её. Работает теперь тихо и морозит отлично. Очень профессионально!",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 2,
    name: "Сергей Новиков",
    date: "2025-03-10",
    text: "Сломалась духовка, не включался нагрев. Обратился в сервис — мастер всё объяснил, заменил ТЭН. Цена ремонта оказалась ниже, чем я ожидал. Отличное соотношение цены и качества.",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 3,
    name: "Анна Мельникова",
    date: "2025-03-18",
    text: "Огромная благодарность за ремонт посудомоечной машины! Перестала сливать воду. Починили за один визит, теперь всё работает бесшумно и идеально чисто. Вежливый и аккуратный мастер.",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 4,
    name: "Виктор Лазарев",
    date: "2025-03-25",
    text: "В стиральной машине потек люк. Думал, придётся покупать новую, но специалисты нашли замену уплотнителя и всё починили. Спасены и машина, и семейный бюджет. Рекомендую!",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 5,
    name: "Татьяна Орлова",
    date: "2025-04-01",
    text: "Наша микроволновка стала искрить и греться сбоку. Очень испугались, сразу вызвали мастера. Он оперативно всё починил, заменил слюдяную пластину. Теперь пользуемся без страха. Спасибо за безопасность!",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 6,
    name: "Павел Дмитриев",
    date: "2025-04-09",
    text: "В варочной панели перестала работать одна конфорка. Приехал мастер, оказалось — проблема с блоком управления. Нашёл оригинальную запчасть, сделал всё быстро и чисто. Качественный ремонт.",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 7,
    name: "Людмила Ковалёва",
    date: "2025-04-15",
    text: "Холодильник начал сильно шуметь, а морозилка покрылась льдом. Специалист починил систему No Frost и заменил вентилятор. Теперь работает практически бесшумно, иней не намерзает. Очень довольна!",
    rating: 5,
    avatar: Avatar,
  },
];

const ReviewsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div id="reviews" className={styles.carouselWrapper}>
      <div className="container">
        <h2>Что говорят наши клиенты</h2>
      </div>

      <Swiper
        modules={[Pagination, Mousewheel]}
        breakpoints={{
          0: { slidesPerView: 1 },
          500: { slidesPerView: 1.4 },
          768: { slidesPerView: 1.8 },
          1040: { slidesPerView: 2.8 },
          1280: { slidesPerView: 3 },
        }}
        spaceBetween={150}
        centeredSlides={true}
        loop={true}
        mousewheel={{ forceToAxis: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.customSwiper}
      >
        {reviews.map((review, index) => {
          let diff = index - activeIndex;
          if (diff < -Math.floor(reviews.length / 2)) diff += reviews.length;
          if (diff > Math.floor(reviews.length / 2)) diff -= reviews.length;

          let scale = diff === 0 ? 1.1 : 1;

          return (
            <SwiperSlide key={review.id}>
              <div
                className={styles.card}
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.4s ease",
                  zIndex: diff === 0 ? 10 : 1,
                }}
              >
                <p className={styles.text}>{review.text}</p>
                <div className={styles.stars}>{"★".repeat(review.rating)}</div>
                <div className={styles.userInfo}>
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className={styles.avatar}
                  />
                  <div>
                    <div className={styles.name}>{review.name}</div>
                    <div className={styles.date}>{review.date}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles.pagination}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`${styles.bullet} ${
              activeIndex % 3 === i ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsCarousel;
