import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import './RequestDemo.css'; // optional for custom styles
const companySizes = [
  { label: '1-10 Employees', value: '1-10' },
  { label: '11-50 Employees', value: '11-50' },
  { label: '51-200 Employees', value: '51-200' },
  { label: '201+ Employees', value: '201+' },
];

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    message: '',
  });

  const handleChange = (e, field) => {
    const value = e.target?.value ?? e.value;
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Demo Request Submitted:', formData);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 text-center text-white">
      <h2 className="text-3xl font-bold text-primary mb-3">Request a Demo</h2>
      <p className="text-600 mb-5 max-w-xl mx-auto">
        See our AI recruitment platform in action. Fill out the form and we'll be in touch shortly.
      </p>

      <div className="max-w-2xl mx-auto">
        <Card className="bg-transparent shadow-2 p-4 card-glowing-border bg-inherit">
          <div className="formgrid grid">
            <div className="col-12 md:col-6 mt-4">
              <FloatLabel>
                <InputText 
                  id="name" 
                  value={formData.name} 
                  onChange={(e) => handleChange(e, 'name')} 
                  className="p-inputtext-sm p-d-block w-full" 
                />
                <label htmlFor="name">Full Name</label>
              </FloatLabel>
            </div>
            <div className="col-12 md:col-6 mt-4">
              <FloatLabel>
                <InputText 
                  id="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => handleChange(e, 'email')} 
                  className="p-inputtext-sm p-d-block w-full" 
                />
                <label htmlFor="email">Email</label>
              </FloatLabel>
            </div>

            <div className="col-12 md:col-6 mt-4">
              <FloatLabel>
                <InputText 
                  id="company" 
                  value={formData.company} 
                  onChange={(e) => handleChange(e, 'company')} 
                  className="p-inputtext-sm p-d-block w-full" 
                />
                <label htmlFor="company">Company Name</label>
              </FloatLabel>
            </div>

            <div className="col-12 md:col-6 mt-4">
              <FloatLabel>
                <Dropdown
                  id="size"
                  value={formData.size}
                  options={companySizes}
                  onChange={(e) => handleChange(e, 'size')}
                  placeholder="Select a size"
                  className="p-inputtext-sm p-d-block w-full"
                />
                <label htmlFor="size">Company Size</label>
              </FloatLabel>
            </div>

            <div className="field col-12 mt-4">
              <FloatLabel>
                <InputTextarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange(e, 'message')}
                  className="p-inputtextarea-sm p-d-block w-full"
                />
                <label htmlFor="message">Message (optional)</label>
              </FloatLabel>
            </div>

            {/* <div className="col-12 text-center mt-3">
              <Button 
                label="Submit Request" 
                icon="pi pi-send" 
                onClick={handleSubmit} 
                className="p-button-lg p-button-primary" 
              />
            </div> */}
          </div>
        </Card>
      </div>

      <Divider className="mt-6" />
    </div>
  );
};

export default RequestDemo;
