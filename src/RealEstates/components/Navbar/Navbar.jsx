import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

export const Navbar = () => {
    const items = [
        { label: "Home", icon: "pi pi-home" },
        { label: "Features", icon: "pi pi-star" },
        { label: "Properties", icon: "pi pi-building" },
        { label: "How It Works", icon: "pi pi-cog" },
        { label: "Contact", icon: "pi pi-envelope" },
    ];

    const logo = (
        <div className="flex items-center gap-2">
            <img
                src="/logo.svg"
                alt="Logo"
                className="h-8"
            />
            <span className="text-white font-semibold text-xl tracking-wide">AI Realty</span>
        </div>
    );

    const end = (
        <Button
            label="Get Started"
            icon="pi pi-arrow-right"
            className="p-button-rounded p-button-info font-medium"
        />
    );

    return (
        <div className="backdrop-blur-md bg-black/70 shadow-md fixed top-0 left-0 right-0 z-50">
            <Menubar
                model={items}
                start={logo}
                end={end}
                className="border-none text-white"
                pt={{
                    root: { className: 'bg-transparent' },
                    menuitem: {
                        className: 'hover:text-cyan-400 transition-colors duration-200 px-3 py-2 font-medium'
                    },
                }}
            />
        </div>
    );
};
