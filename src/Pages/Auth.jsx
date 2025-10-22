import React from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Components/Login';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <>
        <Outlet></Outlet>
        </>
    );
};

export default Auth;