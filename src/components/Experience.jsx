import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Experience() {
  const { experience } = portfolioData;

  if (!experience) return null;

  return (
    <section id="experience">
      <div className="container">
        <span className="section-label"><i className="ti ti-briefcase"></i> {experience.label}</span>
        <h2 className="section-title">{experience.title}</h2>
        <p className="section-sub">{experience.subtitle}</p>

        <div className="experience-container reveal">
          {experience.roles.map((item, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-header">
                <div>
                  <div className="role-title-row">
                    <h4 className="role-title">{item.role}</h4>
                    {item.badge && <span className="role-badge">{item.badge}</span>}
                  </div>
                  <h3 className="company-name">{item.company}</h3>
                  {item.award && (
                    <div className="role-award-badge">
                      <i className="ti ti-trophy"></i> {item.award}
                    </div>
                  )}
                  {item.promotionNote && (
                    <div className="role-promotion-note">
                      {item.promotionNote}
                    </div>
                  )}
                </div>
                <div className="experience-meta">
                  <span className="period"><i className="ti ti-calendar"></i> {item.period}</span>
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
                  <span key={tIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;