import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Experience() {
  const { experience } = portfolioData;

  if (!experience) return null;

  return (
    <section id="experience" className="section reveal">
      <div className="section-header">
        <span className="section-label">{experience.label}</span>
        <h2 className="section-title">{experience.title}</h2>
        <p className="section-subtitle">{experience.subtitle}</p>
      </div>

      <div className="experience-container">
        {experience.roles.map((item, idx) => (
          <div key={idx} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="company-name">{item.company}</h3>
                <h4 className="role-title">{item.role}</h4>
              </div>
              <div className="experience-meta">
                <span className="period">{item.period}</span>
                <span className="location"><i className="ti ti-map-pin"></i> {item.location}</span>
              </div>
            </div>

            <ul className="responsibilities-list">
              {item.responsibilities.map((resp, rIdx) => (
                <li key={rIdx}>{resp}</li>
              ))}
            </ul>

            <div className="tech-tags">
              {item.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="tech-tag">{tech} ,</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;