// src/components/WhyChoose/WhyChooseAI.tsx
import React from 'react';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

const features = [
  {
    title: 'AI-Powered Screening',
    icon: 'pi pi-search',
    description: 'Automatically screen resumes and shortlist the most relevant candidates based on skills and experience.',
    src:"/assets/screening.png"
  },
  {
    title: 'Bias-Free Hiring',
    icon: 'pi pi-sliders-h',
    description: 'Ensure fair and inclusive recruitment by eliminating unconscious bias from the selection process.',
    src:"/assets/candidate_matching.png"
  },
  {
    title: 'Faster Time-to-Hire',
    icon: 'pi pi-clock',
    description: 'Streamline the entire hiring workflow and reduce time-to-hire with automation at every step.',
    src: "/assets/faster_time_to_hire.png"
  },
  {
    title: 'Data-Driven Insights',
    icon: 'pi pi-chart-line',
    description: 'Get real-time analytics on your recruitment funnel and optimize hiring strategies with actionable insights.',
    src: "/assets/data_driven.png"
  },
];
const header = (
    <img alt="Card" src="/assets/screening.png" />
);

const WhyChooseAI = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 text-center text-white">
      <h2 className="text-4xl font-bold text-white mb-3">Why Choose Our AI-Powered Recruitment Platform?</h2>
      <p className="text-600 mb-5 max-w-3xl mx-auto">
        Our platform offers intelligent automation, enhanced candidate matching, and real-time insights — giving you a competitive edge in hiring.
      </p>
      <div className="grid mt-6">
      {features.map((feature, index) => (
        <div key={index} className="col-12 md:col-3 lg:col-3">
        <Card className="bg-transparent shadow-2 h-full border-round-lg border-1 border-300">
            <div className="flex flex-column align-items-center text-center">
            <i className={`${feature.icon} text-4xl`} />
            <h3 className="text-xl text-white font-semibold">{feature.title}</h3>
            <p className="m-0 text-gary" style={{display: "contents"}}>{feature.description}</p>
            <img 
                alt="Card" 
                src={feature.src}
                className="mb-2" 
                style={{ width: '100vw', height: '200px', objectFit: 'contain' }} 
            />
            </div>
        </Card>
        </div>
    ))}
    </div>
      <Divider className="mt-6" />
    </div>
  );
};

export default WhyChooseAI;
