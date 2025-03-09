import React from 'react';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';
import Contact from '../components/Contact';
import Testimonial from "../components/Testimonial.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import CountdownTimer from "../components/Countdown.tsx";
const Home = () => {
  return (
    <div>
      <Hero />
        <CountdownTimer/>
      <UpcomingEvents />
        <Testimonial />
      <Contact />
        <Footer/>


    </div>
  );
};

export default Home;