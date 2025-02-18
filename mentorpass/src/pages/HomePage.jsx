//File: src\pages\HomePage.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedMentors from "../components/FeaturedMentors";
import HowItWorks from "../components/HowItWorks";
import PricingPlans from "../components/PricingPlans";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <section id="hero" className="py-0 mb-0">
          <HeroSection />
        </section>
        <section id="mentors" className="py-0 mb-0 bg-gray-100">
          <FeaturedMentors />
        </section>
        <section id="how-it-works" className="py-0 mb-0 bg-gray-800 text-white">
          <HowItWorks />
        </section>
        <section id="pricing" className="py-0 mb-0 bg-white">
          <PricingPlans />
        </section>
        <section id="testimonials" className="py-0 mb-0 bg-gray-200">
          <Testimonials />
        </section>
        <section id="faqs" className="py-0 mb-0 bg-gray-300">
          <FAQs />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
