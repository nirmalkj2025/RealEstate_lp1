import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import './Testimonials.css';

// Mock data for testimonials
const testimonials = [
    {
        id: 1,
        image: '/assets/images/avatar1.jpg', // path to avatar image
        name: 'John Doe',
        role: 'CEO, FutureTech',
        text: "This platform has revolutionized the way we hire. The AI matching system is fast, accurate, and saves us hours of manual work. Highly recommended!"
    },
    {
        id: 2,
        image: '/assets/images/avatar2.jpg', // path to avatar image
        name: 'Jane Smith',
        role: 'HR Director, TechWizards',
        text: "We were struggling with recruitment until we found this AI-powered solution. It improved the quality of our hires and streamlined the entire process."
    },
    {
        id: 3,
        image: '/assets/images/avatar3.jpg', // path to avatar image
        name: 'Sarah Lee',
        role: 'Recruitment Manager, DigitalMinds',
        text: "Absolutely love how the system matches candidates to roles. It has saved us so much time, and the candidates we’re getting are top-notch."
    },
    {
        id: 4,
        image: '/assets/images/avatar4.jpg', // path to avatar image
        name: 'Michael Brown',
        role: 'CTO, Innovators Hub',
        text: "We’ve seen a significant increase in the quality of candidates and the speed of our hiring process. This platform is an essential tool for us."
    }
];

const Testimonials = () => {
    return (
        <section className="md:p-6 lg:p-8 text-center text-white">
            {/* <div className="container"> */}
                <h2 className="text-center text-4xl font-bold mb-6">What Our Clients Say</h2>
                <div className="testimonials-list grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="col-12 md:col-3 lg:col-3">
                            <Card className="testimonial-card shadow-2">
                                <div className="testimonial-header flex items-center">
                                    <Avatar image={testimonial.image} size="large" className="mr-3" />
                                    <div>
                                        <h4 className="testimonial-name text-xl font-semibold">{testimonial.name}</h4>
                                        <p className="testimonial-role text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="testimonial-text mt-4 text-lg text-gray-700">
                                    "{testimonial.text}"
                                </p>
                            </Card>
                        </div>
                    ))}
                </div>
            {/* </div> */}
        </section>
    );
};

export default Testimonials;
