import React from 'react';
import Hero from '../sections/Hero';
import ShowSection from '../sections/ShowSection';
import Navbar from './Navbar';
import FeatureCards from '../sections/FeatureCards';
import ExperienceSection from '../sections/ExperienceSection';
import TechStack from '../sections/TechStack';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import ContactMe from '../sections/ContactMe';
import DSASection from '../sections/DsaCp';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShowSection />
      <DSASection />
      {/* <LogoSection /> */}
      {/* <FeatureCards /> */}
      <ExperienceSection />
      <TechStack />
      {/* <Testimonials /> */}
      <ContactMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
