import React from 'react';
import { Card } from 'primereact/card';
import { IconField } from 'primereact/iconfield';
import { classNames } from 'primereact/utils';
import { Icon } from '@iconify/react';
import 'primeflex/primeflex.css';

export const WhyChooseUs = () => {
    const benefits = [
        {
            icon: 'mdi:robot',
            title: 'AI-Driven Property Matchmaking',
            description: 'Our smart engine pairs you with properties that truly fit your lifestyle and preferences.'
        },
        {
            icon: 'mdi:chart-box-outline',
            title: 'Instant Market Insights',
            description: 'Real-time data and pricing trends to help you make confident decisions instantly.'
        },
        {
            icon: 'mdi:bell-ring-outline',
            title: 'Personalized Alerts',
            description: 'Get notified the moment a matching property hits the market — no more endless scrolling.'
        },
        {
            icon: 'mdi:shield-check', // You can use pi-shield, pi-thumbs-up, or pi-check-circle as alternatives
            title: 'Bias-Free Recommendations',
            description: 'Enjoy transparent, data-backed suggestions free from agent bias or pushy sales.'
        }
    ];

    return (
        <div className="flex flex-column align-items-center justify-content-center px-4 py-6 bg-gray-100">
            <h2 className="text-3xl font-bold mb-2 text-center">Why Choose Us</h2>
            <p className="text-lg mb-4 text-center text-gray-700" style={{ maxWidth: '600px' }}>
                Smarter, faster, and fairer property decisions — powered by advanced AI.
            </p>

            <div className="grid grid-nogutter md:grid-cols-4 sm:grid-cols-2 gap-4 w-full max-w-screen-xl mt-4">
                {benefits.map((item, index) => (
                    <div key={index} className="col">
                        <Card className="shadow-2 border-round h-full text-center p-4">
                            <div className="mb-3">
                                <Icon icon={item.icon} style={{ fontSize: '2.5rem', color: '#005fff' }} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};
