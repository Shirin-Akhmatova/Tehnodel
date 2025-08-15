import "./App.css";
import Footer from "./components/footer/Footer";
import Map from "./components/Map/Map";
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";

function App() {
  return (
    <>
      <ReviewsCarousel />
      <Map />
      <Footer />
    </>
  );
}

export default App;
