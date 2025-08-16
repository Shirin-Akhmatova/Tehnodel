import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Map from "./components/Map/Map";
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Services />
      <ReviewsCarousel />
      <Map />
      <Footer />
    </>
  );
}

export default App;
