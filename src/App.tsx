import { useEffect, useState } from "react";
import axios from "axios";
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

interface IProduct {
  id: number;
  name: string;
  image: string;
  descriptions: string | null;
}

function App() {
  const [services, setServices] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("/api/product/");
        setServices(res.data);
      } catch (err) {
        console.error("Ошибка API:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Services services={services} loading={loading} />
      <LogoCarousel />
      <AboutUs />
      <WorkTeam />
      <OurTeam />
      <Advantages />
      <StepsSection />
      <ReviewsCarousel />
      <Map />
      <Footer services={services} />
    </>
  );
}

export default App;
