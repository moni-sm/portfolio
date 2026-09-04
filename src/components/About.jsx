import React from 'react';
import { portfolioData } from '../data/portfolioData';

function About() {
  const { about } = portfolioData;

  const renderBio = (text) => {
    return text.split('\n\n').map((para, i) => {
      const parts = para.split('**');
      return (
        <React.Fragment key={i}>
          <p className="about-text">
            {parts.map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part)}
          </p>
          {i < text.split('\n\n').length - 1 && <br/>}
        </React.Fragment>
      );
    });
  };

  return (
    <section id="about">
      <div className="container">
        <span className="section-label"><i className="ti ti-user"></i> {about.label}</span>
        <h2 className="section-title">{about.title}</h2>
        <p className="section-sub">{about.subtitle}</p>

        <div className="about-grid reveal">
          <div className="about-card">
            <div className="about-quote">{about.quote}</div>
            {renderBio(about.bio)}
            <div className="about-details">
              {about.details.map((detail, idx) => (
                <div key={idx} className="about-detail-row">
                  <i className={detail.icon}></i> {detail.text}
                </div>
              ))}
            </div>
            <div className="about-resume-action" style={{ marginTop: '1.75rem' }}>
              <a
                href="/Monika_SM_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="ti ti-download"></i> Download Full Resume (PDF)
              </a>
            </div>
          </div>

          <div className="values-grid">
            {about.values.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon"><i className={val.icon}></i></div>
                <div className="value-title">{val.title}</div>
                <div className="value-desc">{val.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
