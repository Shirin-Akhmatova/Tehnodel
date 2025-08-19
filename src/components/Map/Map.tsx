import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.scss";
import Location from "../../assets/icons/gps2 1.svg";
import Watch from "../../assets/icons/w512h5121390855838watch 1.svg";
import Phone from "../../assets/icons/phone копия 2.svg";
import CustomZoomControls from "./CustomZoomContols/CustomZoomControls";

const Map: React.FC = () => {
  return (
    <div id="contacts" className={styles.map_container}>
      <MapContainer
        center={[42.87, 74.625]}
        zoom={13}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          url="https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}"
          attribution="&copy; OpenStreetMap contributors"
        />
        <CustomZoomControls />
      </MapContainer>

      <div className={styles.contact_card}>
        <h3>Контакты</h3>
        <div className={styles.contacts}>
          <p className={styles.row}>
            <img src={Location} alt="Location" className={styles.icon} />
            Ваш город: <a href="#">Москва</a>
          </p>
          <p className={styles.row}>
            <img src={Watch} alt="Watch" className={styles.icon} />
            <div className={styles.column}>
              Время работы: <br />
              <span className={styles.working_time}>с 9:00 - 20:00 по МСК</span>
            </div>
          </p>
          <p className={styles.row}>
            <img src={Phone} alt="Phone" className={styles.icon} />8 (925) 201
            75 96
          </p>
        </div>
        <button className={styles.button}>Вызвать мастера</button>
      </div>
    </div>
  );
};

export default Map;
