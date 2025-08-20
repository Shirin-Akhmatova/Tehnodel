import styles from "./Footer.module.scss";
import Logo from "../../assets/icons/image 15.svg";
import Whatsapp from "../../assets/icons/Social Icons (1).svg";
import Telegram from "../../assets/icons/Social Icons.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <div className={styles.content_row}>
            <div className={styles.content}>
              <h3>Услуги</h3>
              <ul>
                <li>Ремонт холодильников</li>
                <li>
                  Ремонт промышленных <br /> холодильников
                </li>
                <li>Ремонт стиральных машин</li>
                <li>Ремонт посудомоечных машин</li>
                <li>Ремонт сушильных машин</li>
                <li>Ремонт индукционных плит</li>
                <li>Ремонт духовых шкафов</li>
                <li>Ремонт винных шкафов</li>
                <li>Ремонт мелкой бытовой техники</li>
              </ul>
            </div>
            <div className={styles.contacts}>
              <h3>Контакты</h3>
              <div className={styles.about}>
                <div>
                  <h4>Адрес</h4>
                  <p>
                    115533, г. Москва, Нагатинская <br /> набережная д. 10
                  </p>
                </div>
                <div>
                  <h4>Время работы</h4>
                  <p>9:00 - 20:00 по МСК</p>
                </div>
                <div className={styles.phone_call}>
                  <h4>Позвонить</h4>
                  <p>8(925) 201 75 96</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className="container">
        <div className={styles.bottom}>
          <p>Технодел © 2025</p>
          <div className={styles.social_icons}>
            <img src={Whatsapp} alt="WhatsApp" className={styles.social_icon} />
            <img src={Telegram} alt="Telegram" className={styles.social_icon} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
