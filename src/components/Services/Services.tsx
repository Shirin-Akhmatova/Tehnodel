import { Pagination } from "swiper/modules";
import empty from "../../assets/img/Empty.svg";
import style from "./Services.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProduct {
  id: number;
  name: string;
  image: string;
  descriptions: string | null;
}

const Services = ({
  services,
  loading,
}: {
  services: IProduct[];
  loading: boolean;
}) => {
  return (
    <div id="services" className={style.services}>
      <div className="container">
        <div className={style.content}>
          <div className={style.title}>
            <h1>
              Занимаемся ремонтом <br /> крупно-бытовой техники
            </h1>
            <span>Выберите, что вы хотите отремонтировать:</span>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 1.4 },
              768: { slidesPerView: 1.8 },
              1040: { slidesPerView: 2.8 },
              1280: { slidesPerView: 3.4 },
            }}
            pagination={{ clickable: true }}
            className={style.services_list}
          >
            {loading ? (
              Array(4)
                .fill(null)
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <div className={style.skeleton}>
                      <div className={style.skeleton_img}></div>
                      <div className={style.skeleton_text}></div>
                      <div
                        className={style.skeleton_text + " " + style.small}
                      ></div>
                    </div>
                  </SwiperSlide>
                ))
            ) : services.length > 0 ? (
              services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className={style.service_item}>
                    <img src={service.image} alt={service.name} />
                    <h3>{service.name}</h3>
                    <p>{service.descriptions}</p>
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

export default Services;
