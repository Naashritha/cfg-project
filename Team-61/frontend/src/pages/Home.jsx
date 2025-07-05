import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Impact from '../components/Impact';
import SDGSection from '../components/SDGSection';
import MissionVision from '../components/MissionVision';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Projects />
      <Impact />
      <SDGSection />
      <MissionVision />
      <Footer />
    </div>
  );
};

export default Home; 