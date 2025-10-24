import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import ServiceCart from '../Components/ServiceCart';
import CareTips from '../Components/CareTips';
import OurExperts from '../Components/OurExperts';
import ModernHero from '../Components/ModernHero ';

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <ServiceCart></ServiceCart>
      <CareTips></CareTips>
      <OurExperts></OurExperts>
      <ModernHero></ModernHero>
    </div>
  );
};

export default Home;
