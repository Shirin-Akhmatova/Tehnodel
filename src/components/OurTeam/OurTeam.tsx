import { useMemo } from "react";
import Evgeni from "../../assets/img/1755786773.png";
import Stepan from "../../assets/img/1755959519.png";
import Sergei from "../../assets/img/1755787614.png";
import Maksim from "../../assets/img/1755960359.png";
import star from "../../assets/icons/star.svg";
import style from "./OurTeam.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface ITeam {
  id: number;
  name: string;
  job: string;
  expirience: string;
  feedback: number;
  image: string;
}

const OurTeam = () => {
  const teams: ITeam[] = useMemo(
    () => [
      {
        id: 1,
        name: "Евгений",
        job: "Ремонт холодильников",
        expirience: "15 лет",
        feedback: 25,
        image: Evgeni,
      },
      {
        id: 2,
        name: "Степан",
        job: "Ремонт духовых шкафов",
        expirience: "10 лет",
        feedback: 20,
        image: Stepan,
      },
      {
        id: 3,
        name: "Сергей",
        job: "Ремонт стиральных машин",
        expirience: "12 лет",
        feedback: 22,
        image: Sergei,
      },
      {
        id: 4,
        name: "Максим",
        job: "Ремонт электронной плиты",
        expirience: "18 лет",
        feedback: 23,
        image: Maksim,
      },
    ],
    []
  );

  const width = window.innerWidth;

  return (
    <div id="services" className={style.OurTeam}>
      <div className="container">
        <div className={style.content}>
          <h1>Cпециалисты компании</h1>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.4 },
            }}
            pagination={{ clickable: true }}
            className={style.ourteam}
          >
            {teams.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={style.team}>
                  <img
                    className={style.profil}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={style.info}>
                    <h3>{item.name}</h3>
                    <p>{item.job}</p>
                    <h4>Опыт работы:</h4>
                    <p>{item.expirience}</p>
                    <h4>Отзывы:</h4>
                    <p>{item.feedback}</p>
                    <div className={style.stars}>
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <img key={i} src={star} alt="star" />
                        ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
