import styles from "./AboutUs.module.scss";
import Imgs from "../../assets/img/Group 1000003689.svg";
import Btn from "../../shared/ui/btn/Btn";

function AboutUs() {
  return (
    <section className="container">
      <div className={styles.aboutUs}>
        <div className={styles.left}>
          <sub>О нас</sub>
          <h2>
            Мы мастера, <br /> которым доверяют
          </h2>
          <p>
            Мы команда опытных мастеров, <br /> специализирующихся на ремонте
            бытовой <br />
            техники всех типов и брендов. Мы гордимся <br /> качеством нашей
            работы и стремимся <br /> обеспечить лучший сервис для наших <br />
            клиентов. С нами ваша техника будет работать <br /> как новая
          </p>
          <Btn />
        </div>
        <img src={Imgs} alt="img" />
      </div>
    </section>
  );
}

export default AboutUs;
