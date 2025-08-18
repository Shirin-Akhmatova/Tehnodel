import styles from "./LogoCarousel.module.scss";

import logo1 from "../../assets/img/image 22.svg";
import logo2 from "../../assets/img/image 24.svg";
import logo3 from "../../assets/img/image 26.svg";
import logo4 from "../../assets/img/image 27.svg";
import logo5 from "../../assets/img/image 31.svg";
import logo6 from "../../assets/img/photo_2025-08-18_21-34-31.jpg";
import logo7 from "../../assets/img/photo_2025-08-18_21-35-24.jpg";
import logo8 from "../../assets/img/photo_2025-08-18_21-35-28.jpg";
import logo9 from "../../assets/img/photo_2025-08-18_21-35-32.jpg";
import logo10 from "../../assets/img/photo_2025-08-18_21-35-37.jpg";
import logo11 from "../../assets/img/photo_2025-08-18_21-35-42.jpg";
import logo12 from "../../assets/img/photo_2025-08-18_21-35-45.jpg";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const LogoCarousel = () => {
  const logosLoop = [...logos, ...logos];

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselTrack}>
        {logosLoop.map((logo, idx) => (
          <div key={idx} className={styles.logoWrapper}>
            <img src={logo} alt={`logo-${idx}`} className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
