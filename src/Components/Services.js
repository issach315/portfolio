


import React from 'react';

const CEOService = ({ title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Servises = () => {
  const services = [
    {
      title: "Leadership Coaching",
      description: "Empowering executives to unlock their full potential and lead with clarity and purpose."
    },
    {
      title: "Strategic Planning",
      description: "Developing actionable strategies to drive sustainable growth and achieve business objectives."
    },
    {
      title: "Innovation Consulting",
      description: "Guiding organizations in fostering a culture of innovation and implementing disruptive technologies."
    },
    {
      title: "Executive Training",
      description: "Providing tailored training programs to enhance leadership skills, decision-making, and problem-solving abilities."
    },
    {
      title: "Corporate Social Responsibility",
      description: "Designing and implementing CSR initiatives to create positive social impact and drive community engagement."
    },
    {
      title: "Sustainability Advisory",
      description: "Advising businesses on sustainable practices and environmental stewardship to minimize their ecological footprint."
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our CEO Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <CEOService key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Servises;



