import React from "react";
import HeroSection from "./home/HeroSection";
import FeaturedRestaurants from "./home/FeaturedRestaurants";
import StatsSection from "./home/StatsSection";
import TestimonialsSection from "./home/TestimonialsSection";
import PartnerSection from "./home/PartnerSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[var(--background)] text-[var(--text)]">
      <HeroSection />
      <FeaturedRestaurants />
      <StatsSection />
      <TestimonialsSection />
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default Home;

