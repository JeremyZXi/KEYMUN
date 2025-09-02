import React from 'react';
import Hero from '../components/Hero';
import CommitteeHighlights from "../components/UpcomingEvents.tsx";
import Contact from '../components/Contact';
import Testimonial from "../components/Testimonial.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import CountdownTimer from "../components/Countdown.tsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <CommitteeHighlights />
      <Contact />
        <Footer/>


    </div>
  );
};

export default Home;