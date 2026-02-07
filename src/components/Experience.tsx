// @ts-nocheck
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "DevOps Engineer",
      company: "Treeleaf",
      date: "2023 - Present",
      description: "Managing cloud infrastructure, CI/CD pipelines, and ensuring system reliability. Automating deployment processes and optimizing resource usage.",
      color: "#e8f5e9", // Light green background
      accent: "#2e7d32" // Dark green accent
    },
    {
      id: 2,
      role: "System Administrator",
      company: "Tech Solutions Inc.",
      date: "2021 - 2023",
      description: "Administered Linux servers, managed network security, and performed routine maintenance. Implemented monitoring solutions to track system performance.",
      color: "#e3f2fd", // Light blue background
      accent: "#1565c0" // Dark blue accent
    }
  ];

  return (
    <section id="experience" className="section experience" aria-labelledby="experience-label">
      <div className="container">
        <div className="title-wrapper" data-reveal="top">
          <h2 className="h2 section-title" id="experience-label">
            Working Experience
          </h2>
          <p className="section-text">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </div>

        <ul className="experience-list">
          {experiences.map((exp, index) => (
            <li key={exp.id} className="experience-item" data-reveal={index % 2 === 0 ? "left" : "right"}>
              <div 
                className="experience-card" 
                style={{ 
                  '--accent-color': exp.accent,
                  backgroundColor: exp.color 
                } as React.CSSProperties}
              >
                <div className="card-header">
                  <h3 className="h3 card-title">{exp.role}</h3>
                  <span className="card-company">{exp.company}</span>
                  <span className="card-date">{exp.date}</span>
                </div>
                <p className="card-text">
                  {exp.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
