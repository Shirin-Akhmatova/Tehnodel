import React, { useState } from "react";
import axios from "axios";
import styles from "./Modal.module.scss";
import closeIcon from "../../assets/icons/Frame 720.svg";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!name.trim() || !phone.trim() || !address.trim()) {
      setMessage("Заполните все поля");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "/api/applications",
        {
          name: name.trim(),
          phone_number: phone.trim(),
          address: address.trim(),
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201 || response.status === 200) {
        setMessage("Заявка успешно отправлена!");
        setName("");
        setPhone("");
        setAddress("");

        setTimeout(() => onClose(), 3000);
      } else {
        setMessage("Не удалось отправить заявку. Попробуйте снова.");
      }
    } catch (err) {
      setMessage("Ошибка при отправке заявки. Попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.close}
          onClick={() => {
            setMessage("");
            onClose();
          }}
        >
          <img src={closeIcon} alt="close" />
        </button>

        <h2>Оставьте заявку</h2>
        <p>
          Оставьте заявку, и мастер свяжется <br />
          с вами для уточнения деталей и <br />
          времени визита.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Имя"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
            />
            <input
              type="tel"
              placeholder="Телефон"
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={25}
            />
            <input
              type="text"
              placeholder="Адрес"
              className={styles.input}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              maxLength={50}
            />
          </div>

          {message && (
            <div
              className={
                message === "Заявка успешно отправлена!"
                  ? styles.success
                  : styles.error
              }
            >
              {message}
            </div>
          )}

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Отправка..." : "Вызвать мастера"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
