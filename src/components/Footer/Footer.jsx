// src/components/Footer/Footer.tsx
import React from 'react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { FaTwitter, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'; // Social Icons

const Footer = () => {
  return (
    <div className="bg-footer text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-nogutter md:grid-cols-4 gap-6">
          <div className="col">
            <h3 className="font-semibold text-xl mb-3">About Us</h3>
            <p>
              We are on a mission to revolutionize the way companies hire. Our AI-powered platform optimizes the entire recruitment lifecycle.
            </p>
          </div>

          <div className="col">
            <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
            <ul className="list-none p-0">
              <li><Button label="Home" className="p-button-text p-button-ghost" /></li>
              <li><Button label="Features" className="p-button-text p-button-ghost" /></li>
              <li><Button label="Pricing" className="p-button-text p-button-ghost" /></li>
              <li><Button label="Contact" className="p-button-text p-button-ghost" /></li>
            </ul>
          </div>

          <div className="col">
            <h3 className="font-semibold text-xl mb-3">Contact</h3>
            <p>info@ai-recruitment.com</p>
            <p>+123 456 7890</p>
          </div>

          <div className="col">
            <h3 className="font-semibold text-xl mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="text-white text-2xl"><FaTwitter /></a>
              <a href="https://linkedin.com" className="text-white text-2xl"><FaLinkedin /></a>
              <a href="https://facebook.com" className="text-white text-2xl"><FaFacebookF /></a>
              <a href="https://instagram.com" className="text-white text-2xl"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <Divider className="mt-6" />

      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} AI Recruitment Platform. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
