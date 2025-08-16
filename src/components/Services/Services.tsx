import { useMemo } from "react";
import freezer from "../../assets/img/freezer.png";
import newFreezer from "../../assets/img/newFreezer.png";
import washingMachine from "../../assets/img/washingMachine.png";
import style from "./Services.module.scss";

interface IServices {
  id: number;
  title: string;
  description: string;
  image: string;
}
const Services = () => {
  const services: IServices[] = useMemo(
    () => [
      {
        id: 1,
        title: "Ремонт холодильников",
        description:
          "От мелких ремонтов до капитального восстановления, замена компрессоров, устранение утечек.",
        image: freezer,
      },
      {
        id: 2,
        title: "Ремонт промышленных холодильников",
        description:
          "Быстрое и надёжное восстановление работы с гарантией качества.",
        image: newFreezer,
      },
      {
        id: 3,
        title: "Ремонт стиральных машин",
        description:
          "Устранение любых поломок и неисправностей, замена деталей, диагностика и профилактика.",
        image: washingMachine,
      },
      {
        id: 1,
        title: "Ремонт холодильников",
        description:
          "От мелких ремонтов до капитального восстановления, замена компрессоров, устранение утечек.",
        image: freezer,
      },
      {
        id: 2,
        title: "Ремонт промышленных холодильников",
        description:
          "Быстрое и надёжное восстановление работы с гарантией качества.",
        image: newFreezer,
      },
      {
        id: 3,
        title: "Ремонт стиральных машин",
        description:
          "Устранение любых поломок и неисправностей, замена деталей, диагностика и профилактика.",
        image: washingMachine,
      },
    ],
    []
  );

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
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
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
