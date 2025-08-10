import React from "react";
import Header from "../components/landing/Header.jsx";
import Hero from "../components/landing/Hero.jsx";
import WhyChooseUs from "../components/landing/WhyChooseUs.jsx";
import LawyersByCity from "../components/landing/LawyersByCity.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import CTA from "../components/landing/CTA.jsx";
import Footer from "../components/landing/Footer.jsx";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <LawyersByCity />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
