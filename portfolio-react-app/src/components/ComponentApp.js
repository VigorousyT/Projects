import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';

import { Outlet } from 'react-router';
import Skills from './Skills/Skills';

const ComponentApp = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Outlet />
        </div>
    )
}

export default ComponentApp;
