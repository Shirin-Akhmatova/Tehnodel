import empty from "../../assets/img/Empty.svg";
import style from "./Services.module.scss";

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

          <div className={style.services_list}>
            {loading ? (
              Array(3)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className={style.skeleton}>
                    <div className={style.skeleton_img}></div>
                    <div className={style.skeleton_text}></div>
                    <div
                      className={style.skeleton_text + " " + style.small}
                    ></div>
                  </div>
                ))
            ) : services.length > 0 ? (
              services.map((service) => (
                <div key={service.id} className={style.service_item}>
                  <img src={service.image} alt={service.name} />
                  <h3>{service.name}</h3>
                  <p>{service.descriptions}</p>
                </div>
              ))
            ) : (
              <div className={style.Empty}>
                <img src={empty} alt="empty image" />
                <h2>Похоже здесь пусто</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
