// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import './Navbar.css';

const Navbar = () => {
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'About', icon: 'pi pi-info-circle' },
        { label: 'Features', icon: 'pi pi-star' },
        { label: 'Pricing', icon: 'pi pi-dollar' },
        { label: 'Contact', icon: 'pi pi-envelope' },
    ];

    const start = (
        <div className="navbar-logo">
            <img src="/assets/logo.png" alt="Logo" height="20" className="mr-2" />
            <span className="text-xl font-bold text-700">HireAi</span>
        </div>
    );

    const end = (
        <div className="navbar-actions flex gap-2">
            <Button label="Login" className="p-button-text text-white" />
            <Button label="Try it Free" className="p-button-sm p-button-outlined p-button-warning" />
        </div>
    );

    return (
        <div className="navbar-wrapper">
            <Menubar model={items} start={start} end={end} className="custom-menubar" />
        </div>
    );
};

export default Navbar;
