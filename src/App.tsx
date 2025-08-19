import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import Map from "./components/Map/Map";
import ReviewsCarousel from "./components/ReviewsCarousel/ReviewsCarousel";
import Services from "./components/Services/Services";
import AboutUs from "./components/aboutUs/AboutUs";
import WorkTeam from "./components/WorkTeam/WorkTeam";
import OurTeam from "./components/OurTeam/OurTeam";
import Advantages from "./components/advantages/Advantages";
import StepsSection from "./components/StepsSection/StepsSection";
import LogoCarousel from "./components/LogoCarousel/LogoCarousel";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <LogoCarousel />
      <AboutUs />
      <WorkTeam />
      <OurTeam />
      <Advantages />
      <StepsSection />
      <ReviewsCarousel />
      <Map />
      <Footer />
    </>
  );
}

export default App;
