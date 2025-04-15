// src/components/AIMatchFlow/AIMatchFlow.tsx
import React from 'react';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';

const steps = [
  {
    title: '1. Analyze Job Description',
    icon: 'pi pi-file',
    description: 'Our AI reads and understands job requirements, extracting key skills, qualifications, and cultural fit indicators.',
  },
  {
    title: '2. Match Top Candidates',
    icon: 'pi pi-users',
    description: 'It matches job requirements with candidate profiles from your talent pool, prioritizing relevance and readiness.',
  },
  {
    title: '3. Schedule Interviews',
    icon: 'pi pi-calendar',
    description: 'AI coordinates interview availability and automatically schedules meetings, saving your HR team hours of admin work.',
  },
];

const AIMatchFlow = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 text-center text-white">
      <h2 className="text-3xl font-bold mb-3">
        AI Analyzes Job Descriptions, Matches Candidates to Roles, and Schedules Interviews
      </h2>

      <p className="text-600 mb-5 max-w-3xl mx-auto">
        Our intelligent system automates every major step in the recruitment journey so you can focus on making the best hiring decisions.
      </p>

      <div className="grid mt-6">
        {steps.map((step, index) => (
        <div key={index} className="col-12 md:col-6 lg:col-6">
             <Card className="shadow-2 h-full">
            <div className="flex flex-column align-items-center text-center p-4">
            <i className={`${step.icon} text-4xl mb-3`} />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-700">{step.description}</p>
          </div>
          </Card>
          </div>
        ))}
      </div>

      <Divider className="mt-6" />
    </div>
  );
};

export default AIMatchFlow;
