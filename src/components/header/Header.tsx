import Btn from "../../shared/ui/btn/Btn";
import Logo from "../../assets/icons/image 15.svg";
import style from "./Header.module.scss";
import { useEffect, useMemo, useState } from "react";
import Modal from "../Modal/Modal";

interface INav {
  id: string;
  label: string;
}

function Header() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
        if (section && window.scrollY >= section.offsetTop - 150) {
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
            <Btn
              paddingBlock="0.9rem"
              paddingInline="2rem"
              onClick={() => setOpenModal(true)}
            />
          </div>
          <label className={style.hamburger}>
            <input onClick={() => setOpen(!open)} type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className={`${style.line} ${style.line_top_bottom}`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className={style.line} d="M7 16 27 16"></path>
            </svg>
          </label>
          <div
            style={{ transform: open ? "translateX(45%)" : "" }}
            className={style.mobileMenu}
          >
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
          </div>
        </div>
      </div>
      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </div>
  );
}

export default Header;
