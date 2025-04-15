import React from 'react';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import 'primeflex/primeflex.css';

export const HowItWorks = () => {
    const steps = [
        {
            title: 'Input Your Preferences',
            description: 'Tell us about your desired location, budget, and property type.',
            icon: 'pi pi-sliders-h',
        },
        {
            title: 'AI Matches Listings',
            description: 'Our AI scans thousands of listings to find your best match.',
            icon: 'pi pi-search',
        },
        {
            title: 'Real-time Valuation & Insights',
            description: 'Get pricing insights, neighborhood trends, and ROI estimates.',
            icon: 'pi pi-chart-line',
        },
        {
            title: 'Personalized Recommendations',
            description: 'Receive tailored suggestions based on your preferences.',
            icon: 'pi pi-thumbs-up',
        },
    ];

    return (
        <div className="flex flex-column align-items-center justify-content-center px-4 py-6" style={{ backgroundColor: '#f9f9f9' }}>
            <h2 className="text-3xl font-bold mb-2 text-center">How the AI Works</h2>
            <p className="text-lg mb-4 text-center text-gray-600" style={{ maxWidth: '600px' }}>
                Discover how our intelligent engine simplifies your real estate journey in just a few steps.
            </p>

            <div className="grid grid-nogutter md:grid-cols-4 sm:grid-cols-2 gap-4 w-full max-w-screen-xl mt-4">
                {steps.map((step, index) => (
                    <div key={index} className="col">
                        <Card className="shadow-2 border-round h-full">
                            <div className="flex flex-column align-items-center justify-content-center text-center p-4">
                                <i className={`${step.icon} text-4xl mb-3 text-primary`}></i>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <Divider className="mt-6" />
        </div>
    );
};
