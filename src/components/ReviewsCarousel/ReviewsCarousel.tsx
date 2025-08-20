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
    name: "Muhammad Minhas",
    date: "2025-02-02",
    text: "Very quick response and friendly service Recommended",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 2,
    name: "Muhammad Minhas",
    date: "2025-02-02",
    text: "Very quick response and friendly service Recommended",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 3,
    name: "Muhammad Minhas",
    date: "2025-02-02",
    text: "Very quick response and friendly service Recommended",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 4,
    name: "Muhammad Minhas",
    date: "2025-02-02",
    text: "Very quick response and friendly service Recommended",
    rating: 5,
    avatar: Avatar,
  },
  {
    id: 5,
    name: "Muhammad Minhas",
    date: "2025-02-02",
    text: "Very quick response and friendly service Recommended",
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
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
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
