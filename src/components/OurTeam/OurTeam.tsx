import star from "../../assets/icons/star.svg";
import empty from "../../assets/img/Empty.svg";
import style from "./OurTeam.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

interface ITeam {
  id: number;
  name: string;
  speciality: string;
  experience: string;
  quantity_reviews: string;
  image: string;
}

const OurTeam = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [loading, setLoading] = useState(true);

  const getTeams = async () => {
    try {
      const res = await axios.get("/api/specialist/");
      setTeams(res.data);
    } catch (err) {
      console.error("Ошибка API:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

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
            {loading ? (
              Array(3)
                .fill(null)
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <div className={style.skeleton}>
                      <div className={style.skeleton_img}></div>
                      <div className={style.skeleton_text}></div>
                      <div className={style.skeleton_text}></div>
                      <div
                        className={`${style.skeleton_text} ${style.small}`}
                      ></div>
                    </div>
                  </SwiperSlide>
                ))
            ) : teams.length > 0 ? (
              teams.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={style.team}>
                    <img
                      className={style.profil}
                      src={item.image}
                      alt={item.name}
                    />
                    <div className={style.info}>
                      <h3>{item.name}</h3>
                      <p>{item.speciality}</p>
                      <h4>Опыт работы:</h4>
                      <p>{item.experience}</p>
                      <h4>Отзывы:</h4>
                      <p>{item.quantity_reviews}</p>
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
              ))
            ) : (
              <div className={style.Empty}>
                <img src={empty} alt="empty image" />
                <h2>Похоже здесь пусто</h2>
              </div>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
