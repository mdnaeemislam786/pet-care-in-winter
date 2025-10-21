import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='min-h-screen bg-[radial-gradient(circle_at_center,_#fdf6f0,_#f7d9c4,_#e8bfae)] max-w-[1920px] m-auto justify-center'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;