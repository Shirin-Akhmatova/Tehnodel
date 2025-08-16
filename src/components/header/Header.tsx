import Btn from "../../shared/ui/btn/Btn";
import Logo from "../../assets/icons/image 15.svg";
import style from "./Header.module.scss";
import { useEffect, useMemo, useState } from "react";

interface INav {
  id: string;
  label: string;
}

function Header() {
  const [active, setActive] = useState<string>("");

  const nav: INav[] = useMemo(
    () => [
      { id: "services", label: "Услуги" },
      { id: "about", label: "О нас" },
      { id: "contacts", label: "Контакты" },
      { id: "reviews", label: "Отзывы" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      nav.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && window.scrollY >= section.offsetTop) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={style.Header}>
      <div className="container">
        <div className={style.content}>
          <img src={Logo} alt="Logo" />
          <div className={style.menu}>
            <nav>
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={active === item.id ? style.active : ""}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Btn paddingBlock="0.9rem" paddingInline="2rem" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
