// // src/components/TrustedBy/TrustedBy.tsx
// import React from 'react';
// import { Divider } from 'primereact/divider';
// import './TrustedBy.css'; // for optional hover effects or grayscale

// // Dummy logos – replace with actual logos or static imports
// const logos = [
//   { name: 'Google', src: '/assets/logos/google.png' },
//   { name: 'Amazon', src: '/assets/logos/amazon.png' },
//   { name: 'Netflix', src: '/assets/logos/netflix.png' },
//   { name: 'Meta', src: '/assets/logos/meta.png' },
//   { name: 'Airbnb', src: '/assets/logos/airbnb.png' },
// ];

// const TrustedBy = () => {
//   return (
//     <div className="p-4 md:p-6 lg:p-8 text-center text-white">
//       <h2 className="text-3xl font-bold mb-3">Trusted by Leading Companies</h2>

//       <p className="text-600 mb-5 max-w-2xl mx-auto">
//         Join the forward-thinking companies that are transforming recruitment with AI.
//       </p>

//       <div className="flex flex-wrap justify-center align-items-center gap-4 mt-4">
//         {logos.map((logo, index) => (
//           <div key={index} className="logo-wrapper">
//             <img
//               src={logo.src}
//               alt={logo.name}
//               className="trusted-logo"
//               style={{ width: '120px', objectFit: 'contain' }}
//             />
//           </div>
//         ))}
//       </div>

//       <Divider className="mt-6" />
//     </div>
//   );
// };

// export default TrustedBy;
// src/components/TrustedBy/TrustedBy.tsx
// src/components/TrustedBy/TrustedBy.tsx
import React from 'react';
import { Divider } from 'primereact/divider';
import './TrustedBy.css';

const logos = [
    { name: 'TalentCore', src: '/assets/trusted/talentcore_logo.jpg' },
    { name: 'NeoHire', src: '/assets/trusted/neohire_logo.jpg' },
    { name: 'BrightPath', src: '/assets/trusted/bright_path.png' },
    { name: 'FutureWork', src: '/assets/trusted/future_work.jpg' },
];

const TrustedBy = () => {
  return (
    <div className="trustedby-wrapper text-center text-white py-8">
      <h2 className="text-3xl font-bold mb-4">Trusted by Leading Companies</h2>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
        Join the forward-thinking companies that are transforming recruitment with AI.
      </p>

      <div className="logos-marquee-container">
        <div className="logos-marquee-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="logo-marquee-item"
            />
          ))}
        </div>
      </div>

      <Divider className="mt-6" />
    </div>
  );
};

export default TrustedBy;