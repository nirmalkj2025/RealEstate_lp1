import React from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Rating } from 'primereact/rating';
import 'primeflex/primeflex.css';

export const FeaturedProperties = () => {
    const properties = [
        {
            id: 1,
            image: '/assets/property1.jpg',
            title: 'Modern Family Villa',
            location: 'San Diego, CA',
            price: '$950,000',
            score: 92,
            rating: 4.5
        },
        {
            id: 2,
            image: '/assets/property2.jpg',
            title: 'Urban Apartment Loft',
            location: 'New York, NY',
            price: '$1,450,000',
            score: 88,
            rating: 4
        },
        {
            id: 3,
            image: '/assets/property3.jpg',
            title: 'Cozy Lakehouse Retreat',
            location: 'Lake Tahoe, NV',
            price: '$720,000',
            score: 94,
            rating: 5
        },
        {
            id: 4,
            image: '/assets/property4.jpg',
            title: 'Beachfront Paradise',
            location: 'Miami, FL',
            price: '$1,250,000',
            score: 89,
            rating: 4.5
        },
    ];

    return (
        <div className="flex flex-column align-items-center px-4 py-6" style={{ backgroundColor: '#ffffff' }}>
            <h2 className="text-3xl font-bold mb-2 text-center">Featured Properties</h2>
            <p className="text-lg mb-4 text-center text-gray-600" style={{ maxWidth: '600px' }}>
                Handpicked by our AI engine based on your preferences and market trends.
            </p>

            <div className="grid grid-nogutter md:grid-cols-4 sm:grid-cols-2 gap-4 w-full max-w-screen-xl mt-4">
                {properties.map((property) => (
                    <div key={property.id} className="col">
                        <Card
                            className="shadow-2 border-round h-full overflow-hidden"
                            header={<img src={property.image} alt={property.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />}
                        >
                            <div className="flex flex-column gap-2">
                                <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
                                <p className="text-sm text-gray-600">{property.location}</p>
                                <div className="flex align-items-center justify-content-between">
                                    <span className="text-lg font-bold text-primary">{property.price}</span>
                                    <Tag value={`AI Match ${property.score}%`} severity="success" className="text-sm" />
                                </div>
                                <div className="mt-2">
                                    <Rating value={property.rating} readOnly stars={5} cancel={false} />
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};
