import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/home/HeroSection";
import FeaturedDoctors from "../components/home/FeaturedDoctors";
import SearchDoctor from "../components/home/SearchDoctor";
import ServicesSection from "../components/home/ServicesSection";
import HowItWorks from "../components/home/HowItWorks";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Footer from "../components/footer/Footer";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="home bg-light">
      <HeroSection />
      <FeaturedDoctors />
      <SearchDoctor />
      <ServicesSection />
      <HowItWorks />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
