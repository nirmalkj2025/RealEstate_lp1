import React from 'react';
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            feedback: 'The AI-powered property search made finding my dream home so much easier! Highly recommend this platform.',
            rating: 5,
        },
        {
            name: 'Jane Smith',
            feedback: 'AI-powered recommendations and real-time pricing insights helped me save a lot of time and money. A game changer!',
            rating: 4.5,
        },
        {
            name: 'Alice Johnson',
            feedback: 'AI-powered recommendations and real-time pricing insights helped me save a lot of time and money. A game changer!',
            rating: 4.9,
        },
    ];

    const partnerLogos = [
        '/assets/partners/logo1.jpg',
        '/assets/partners/logo2.jpg',
        '/assets/partners/logo3.jpg',
    ];

    return (
        <div className="flex flex-column align-items-center justify-content-center mt-8">
            {/* Section Header */}
            <div className="text-center mb-5">
                <h2 className="font-bold" style={{ fontSize: '2.5rem', color: '#333' }}>
                    Trusted by 10,000+ Home Seekers
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#777' }}>
                    Here's what our early adopters and users have to say about us.
                </p>
            </div>

            {/* Testimonials Cards */}
            <div className="flex flex-wrap justify-content-center gap-4 mb-6">
                {testimonials.map((testimonial, index) => (
                    <Card
                        key={index}
                        className="shadow-4 p-4"
                        style={{
                            width: '350px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        }}
                    >
                        <div className="flex align-items-center justify-content-center flex-column">
                            <Rating value={testimonial.rating} readOnly cancel={false} style={{ marginBottom: '10px' }} />
                            <p style={{ fontStyle: 'italic', fontSize: '1rem', marginTop: '10px' }}>
                                "{testimonial.feedback}"
                            </p>
                            <h5 style={{ marginTop: '15px', color: '#333', fontSize: '1.2rem' }}>{testimonial.name}</h5>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Partner Logos Section */}
            <div className="flex flex-wrap justify-content-center gap-6 mt-4">
                {partnerLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Partner ${index + 1}`}
                        style={{
                            width: '120px',
                            height: '120px',
                            objectFit: 'cover', // Ensures the images fill the container and maintain aspect ratio
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        className="shadow-2"
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
