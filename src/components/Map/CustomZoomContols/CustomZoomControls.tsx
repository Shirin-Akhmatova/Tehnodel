import { useMap } from "react-leaflet";
import styles from "./CustomZoomContols.module.scss";
import zoomIn from "../../../assets/icons/Icons-13.svg";
import zoomOut from "../../../assets/icons/Icons-14.svg";
// import fullscreenIcon from "../../../assets/icons/fullscreen.png";

const CustomZoomControls = () => {
  const map = useMap();

  // const toggleFullscreen = () => {
  //   const container = map.getContainer();
  //   if (!document.fullscreenElement) {
  //     container.requestFullscreen();
  //   } else {
  //     document.exitFullscreen();
  //   }
  // };

  return (
    <div className={styles.controls_container}>
      {/* <button onClick={toggleFullscreen} className={styles.fullscreen_button}>
        <img src={fullscreenIcon} alt="Fullscreen" />
      </button> */}
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
