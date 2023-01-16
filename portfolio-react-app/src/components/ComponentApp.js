import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import { Outlet } from 'react-router';
import Skills from './Skills/Skills';
import Achievement from './Achievement/Achievement';

const ComponentApp = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Achievement />
            <Outlet />
        </div>
    )
}

export default ComponentApp;
