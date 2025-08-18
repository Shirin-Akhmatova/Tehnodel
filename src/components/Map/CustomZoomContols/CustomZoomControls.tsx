import { useMap } from "react-leaflet";
import styles from "./CustomZoomContols.module.scss";
import zoomIn from "../../../assets/icons/Icons-13.svg";
import zoomOut from "../../../assets/icons/Icons-14.svg";

const CustomZoomControls = () => {
  const map = useMap();

  return (
    <div className={styles.controls_container}>
      <div className={styles.zoom_group}>
        <button onClick={() => map.zoomIn()} className={styles.zoom_button}>
          <img src={zoomIn} alt="Zoom In" />
        </button>
        <button onClick={() => map.zoomOut()} className={styles.zoom_button}>
          <img src={zoomOut} alt="Zoom Out" />
        </button>
      </div>
    </div>
  );
};

export default CustomZoomControls;
