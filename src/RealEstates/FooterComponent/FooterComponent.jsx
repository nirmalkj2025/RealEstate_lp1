import React from 'react';
import { Divider } from 'primereact/divider';
import { Icon } from '@iconify/react';

const FooterComponent = () => {
    return (
        <footer
            className="p-4"
            style={{
                background: 'linear-gradient(160deg, #1e293b, #0f172a)',
                color: '#e2e8f0',
            }}
        >
            <div className="flex flex-wrap justify-content-between align-items-start p-4 gap-4">
                {/* Quick Links */}
                <div className="flex flex-column gap-2 w-12 md:w-4">
                    <h4 className="mb-2 text-xl font-bold text-white">Quick Links</h4>
                    {['About', 'Blog', 'Privacy', 'Terms'].map((text, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-sm text-300 hover:text-cyan-400"
                            style={{ textDecoration: 'none', color: '#cbd5e1' }}
                        >
                            {text}
                        </a>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="flex flex-column gap-2 w-12 md:w-4">
                    <h4 className="mb-2 text-xl font-bold text-white">Contact</h4>
                    <div className="flex align-items-end gap-2 text-sm">
                        <Icon icon="mdi:email-outline" className="text-cyan-400" width="18" />
                        <span>support@youraihome.com</span>
                    </div>
                    <div className="flex align-items-end gap-2 text-sm">
                        <Icon icon="mdi:phone-outline" className="text-cyan-400" width="18" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex align-items-end gap-2 text-sm">
                        <Icon icon="mdi:map-marker-outline" className="text-cyan-400" width="18" />
                        <span>123 AI Street, Smart City, USA</span>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-column gap-2 w-12 md:w-3">
                    <h4 className="mb-2 text-xl font-bold text-white">Follow Us</h4>
                    <div className="flex gap-3">
                        {[
                            { icon: 'mdi:facebook', color: '#3b82f6' },
                            { icon: 'mdi:twitter', color: '#38bdf8' },
                            { icon: 'mdi:instagram', color: '#f472b6' },
                            { icon: 'mdi:linkedin', color: '#60a5fa' },
                        ].map((social, index) => (
                            <a key={index} href="#" target="_blank" rel="noreferrer">
                                <Icon
                                    icon={social.icon}
                                    width="28"
                                    height="28"
                                    style={{
                                        color: '#cbd5e1',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.color = social.color)}
                                    onMouseOut={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <Divider className="my-4" />

            <div className="text-center text-sm text-400 mt-2">
                &copy; {new Date().getFullYear()} <strong className="text-white">YourAIHome</strong>. All rights reserved.
            </div>
        </footer>
    );
};

export default FooterComponent;
