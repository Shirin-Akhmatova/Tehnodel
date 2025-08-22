import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Services.module.scss";

interface IProduct {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Services = () => {
  const [services, setServices] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("/api/product/");

        console.log("API ответ:", res.data);

        const normalized = res.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          image: item.image
            ? item.image.startsWith("http")
              ? item.image
              : `http://5.101.1.198${item.image.startsWith("/") ? "" : "/"}${
                  item.image
                }`
            : "https://via.placeholder.com/370x300?text=Нет+фото",
        }));

        setServices(normalized);
      } catch (error) {
        console.error("Ошибка API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className={style.services}>Загрузка...</div>;
  }

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
            {services.map((service) => (
              <div key={service.id} className={style.service_item}>
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
