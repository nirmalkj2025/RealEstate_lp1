import React, { useState } from 'react';
import { Button, InputText } from 'primereact';

const CallToActions = () => {
    const [email, setEmail] = useState('');
    const [preference, setPreference] = useState('');

    const handleSubmit = () => {
        // Handle form submission logic here (e.g., storing email, property preference, etc.)
        console.log('Email:', email);
        console.log('Property Preference:', preference);
        // Clear inputs after submission
        setEmail('');
        setPreference('');
    };

    return (
        <div className="flex flex-column align-items-center justify-content-center bg-primary-100 p-6" style={{ borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="text-center mb-4">
                <h2 className="font-bold" style={{ fontSize: '2.5rem', color: '#fff' }}>
                    Ready to find your perfect home?
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1.5rem' }}>
                    Start your property search journey now. It's free!
                </p>
            </div>

            <div className="flex flex-column align-items-center justify-content-center gap-3 mb-4" style={{ width: '100%', maxWidth: '500px' }}>
                {/* Email Input */}
                <InputText
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="p-inputtext-lg"
                    style={{ width: '100%' }}
                />
                {/* Property Preference Input */}
                <InputText
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                    placeholder="Enter your property preference"
                    className="p-inputtext-lg"
                    style={{ width: '100%' }}
                />
            </div>

            {/* CTA Button */}
            <Button
                label="Try It Now – It’s Free"
                icon="pi pi-arrow-right"
                className="p-button-rounded p-button-info p-button-lg"
                onClick={handleSubmit}
                style={{ width: '100%', maxWidth: '300px' }}
            />
        </div>
    );
};

export default CallToActions;
