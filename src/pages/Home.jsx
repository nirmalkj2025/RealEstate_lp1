// src/pages/Home.tsx
import React from 'react';
import Footer from '../components/Footer/Footer';
import RequestDemo from '../components/RequestDemo/RequestDemo';
import TrustedBy from '../components/TrustedBy/TrustedBy';
import AIMatchFlow from '../components/AIMatchFlow/AIMatchFlow';
import WhyChooseAI from '../components/WhyChoose/WhyChooseAI';
import HeroBanner from '../components/Hero/HeroBanner';
// import Testimonials from '../components/Testimonials/Testimonials';
// import Navbar from '../components/Navbar/Navbar';
import { Navbar } from '../RealEstates/components/Navbar/Navbar';
import { HeroSection } from '../RealEstates/components/HeroBanner/HeroBanner';
import { HowItWorks } from '../RealEstates/components/HowItWorks/HowItWorks';
import '../styles/global.css'
import { FeaturedProperties } from '../RealEstates/FeaturedProperties/FeaturedProperties';
import { WhyChooseUs } from '../RealEstates/WhyChooseUs/WhyChooseUs';
import Testimonials from '../RealEstates/Testimonials/Testimonials';
import CallToActions from '../RealEstates/CallToActions/CallToActions';
import FooterComponent from '../RealEstates/FooterComponent/FooterComponent';
// import './Home.css'; // Import your custom CSS file for Home component
const Home = () => {
  return (
    <div className='bg-home'>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturedProperties/>
      <WhyChooseUs/>
      <Testimonials/>
      <CallToActions />
      <FooterComponent/>
      {/* How the AI Works (Quick Value Explainer) */}
        {/* <Navbar/>
      <HeroBanner />
      <AIMatchFlow />
      <WhyChooseAI />
      <TrustedBy />
      <Testimonials/>
      <RequestDemo />
      <Footer /> */}
    </div>
  );
};

export default Home;
