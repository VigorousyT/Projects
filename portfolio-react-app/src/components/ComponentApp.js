import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import { Outlet } from 'react-router';
import Skills from './Skills/Skills';
import Achievement from './Achievement/Achievement';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';

const ComponentApp = () => {
    return (
        <Analytics>
            <Navbar></Navbar>
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Project />
                <Achievement />
                <Contact />

                <Outlet />
            </main>
            <Footer />

        </Analytics>
    )
}

export default ComponentApp;
