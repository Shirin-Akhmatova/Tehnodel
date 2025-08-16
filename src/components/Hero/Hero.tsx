import styles from "./Hero.module.scss";
import MasterImg from "../../assets/img/Group 1000003691.svg";
import Bg from "../../assets/img/Group 492.svg";
import CheckIcon from "../../assets/icons/Vector.svg";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>С нами техника в надежных руках</h1>
          <p>
            Срочный ремонт бытовой техники в Москве <br /> и Московской области!
          </p>

          <div className={styles.advantages}>
            <div className={styles.item}>
              <img src={CheckIcon} alt="check" />
              Опыт и профессионализм
            </div>
            <div className={styles.item}>
              <img src={CheckIcon} alt="check" />
              Доступные цены
            </div>
            <div className={styles.item}>
              <img src={CheckIcon} alt="check" />
              Быстрота и удобство
            </div>
            <div className={styles.item}>
              <img src={CheckIcon} alt="check" />
              Качество и надёжность
            </div>
          </div>

          <button className={styles.button}>Вызвать мастера</button>
        </div>

        <div className={styles.right}>
          <img src={Bg} alt="Bg" className={styles.bg} />
          <img src={MasterImg} alt="Мастер" className={styles.master} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
