import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {

  // AOS 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,       
      offset: 100,     
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-300 to-cyan-100 max-w-[1920px] m-auto justify-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
