import React from 'react';

import UpcomingEvents from '../components/UpcomingEvents';
import Contact from '../components/Contact';
import Testimonial from "../components/Testimonial.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";


const HeroAbout = () => {
    return (
        <div className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative h-full flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        KEYMUN Secretariats
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                    </p>
                    {/*<a
            href="#upcoming-events"
            className="bg-[#20273a] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#9e0a3b] transition duration-300"
          >
            Explore Events
          </a>*/}
                </div>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <HeroAbout />

            <Footer/>


        </div>
    );
};

export default About;