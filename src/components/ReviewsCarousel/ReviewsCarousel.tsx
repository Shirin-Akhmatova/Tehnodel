import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
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
];

const ReviewsCarousel: React.FC = () => {
  return (
    <div id="reviews" className={styles.carouselWrapper}>
      <h2>Что говорят наши клиенты</h2>
      <Swiper
        modules={[Pagination, Mousewheel]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        mousewheel={{ forceToAxis: true }}
        className={styles.customSwiper}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className={styles.card}>
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
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
