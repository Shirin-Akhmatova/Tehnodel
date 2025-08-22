import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Services.module.scss";

interface IProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Services = () => {
  const [services, setServices] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://5.101.1.198/api/product/", {
          headers: { Accept: "*/*" },
        });

        console.log("API ответ:", res.data);

        const data = Array.isArray(res.data)
          ? res.data
          : res.data.results || [];

        const normalized = data.map((item: IProduct) => ({
          ...item,
          image: item.image?.startsWith("http")
            ? item.image
            : `http://5.101.1.198/${item.image.replace(/^\/+/, "")}`,
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
