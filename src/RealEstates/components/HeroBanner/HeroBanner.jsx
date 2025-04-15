import React from 'react';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';

export const HeroSection = () => {
    return (
        <div className="flex align-items-center justify-content-center flex-column"
            style={{
                height: '100vh',
                backgroundImage: 'url(/assets/real_estate.jpg)', // Replace with your image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
            }}
        >
            <div
                className="flex flex-column align-items-center justify-content-center text-center border-round"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    padding: '4rem 2rem',
                    maxWidth: '900px',
                }}
            >
                <h1 className="text-4xl font-bold mb-3">
                    Find Your Dream Property with AI Precision
                </h1>
                <p className="text-lg mb-4">
                    Smarter property search, powered by intelligent insights.
                </p>
                <div className="flex flex-wrap align-items-center justify-content-center gap-2">
                    <Button label="Search Properties" icon="pi pi-search" className="p-button-rounded p-button-info" />
                    <Button label="Get Started" icon="pi pi-arrow-right" className="p-button-rounded p-button-secondary" />
                </div>
            </div>
        </div>
    );
};
