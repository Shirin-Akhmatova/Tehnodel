import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Map from "./components/Map/Map";
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";

function App() {
  return (
    <>
      <Hero />
      <ReviewsCarousel />
      <Map />
      <Footer />
    </>
  );
}

export default App;
