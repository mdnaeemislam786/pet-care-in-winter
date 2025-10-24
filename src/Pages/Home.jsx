import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import ServiceCart from "../Components/ServiceCart";
import CareTips from "../Components/CareTips";
import OurExperts from "../Components/OurExperts";
import LoadingPage from "../Components/LoadingPage";
import ModernHero from "../Components/ModernHero ";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <HeroSlider />
      <ServiceCart />
      <CareTips />
      <OurExperts />
      <ModernHero />
    </div>
  );
};

export default Home;
