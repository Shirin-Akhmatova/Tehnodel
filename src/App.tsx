import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import Map from "./components/Map/Map";
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <ReviewsCarousel />
      <Map />
      <Footer />
    </>
  );
}

export default App;
