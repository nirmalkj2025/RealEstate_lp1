// src/components/Hero/HeroBanner.tsx
import React from 'react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import './HeroBanner.css'; // optional for custom styles

const HeroBanner = () => {
  return (
   <div className='hero-container'>
     <div className="hero-banner surface-0 text-center p-6 md:p-8 lg:p-10">
      <div className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        Revolutionize Your Hiring with AI
      </div>

      <div className="text-lg md:text-xl text-700 mb-6 max-w-3xl mx-auto">
        Discover a smarter, faster way to attract top talent. Our AI-powered recruitment platform transforms the way companies hire — from resume screening to interview scheduling.
      </div>

      <div className="flex justify-center gap-3 flex-wrap">
        <Button label="Request a Demo" icon="pi pi-calendar" className="p-button-rounded p-button-primary p-button-lg" />
        <Button label="Learn More" className="p-button-text p-button-lg" />
      </div>

      <Divider className="mt-8" />
    </div>
   </div>
  );
};

export default HeroBanner;
