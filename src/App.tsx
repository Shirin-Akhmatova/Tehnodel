import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import Map from "./components/Map/Map";
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";
import Services from "./components/Services/Services";
import AboutUs from "./components/aboutUs/AboutUs";
import Advantages from "./components/advantages/Advantages";
import WorkTeam from "./components/WorkTeam/WorkTeam";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <AboutUs />      
      <WorkTeam />
      <Advantages />
      <Map />
      <Footer />
    </>
  );
}

export default App;
