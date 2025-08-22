import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Services.module.scss";

interface IProduct {
  id: number;
  name: string;
  image: string;
  descriptions: string | null;
}

const Services = () => {
  const [services, setServices] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("/api/product/");
        setServices(res.data);
      } catch (err: any) {
        console.error("❌ Ошибка API:", err);
        setError("Не удалось загрузить данные. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className={style.services_loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={style.services_error}>{error}</div>;
  }

  if (services.length === 0) {
    return <div className={style.services_empty}>Нет доступных услуг</div>;
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
                <img
                  src={service.image}
                  alt={service.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/370x300?text=Нет+фото";
                  }}
                />
                <h3>{service.name}</h3>
                <p>{service.descriptions}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
