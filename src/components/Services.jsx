import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Services() {
  const { services } = portfolioData;

  return (
    <section id="services">
      <svg className="services-web" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <g stroke="#fff" strokeWidth="0.8" fill="none">
          <line x1="600" y1="0" x2="600" y2="600"/>
          <line x1="0" y1="300" x2="1200" y2="300"/>
          <line x1="0" y1="0" x2="1200" y2="600"/>
          <line x1="1200" y1="0" x2="0" y2="600"/>
          <ellipse cx="600" cy="300" rx="150" ry="150"/>
          <ellipse cx="600" cy="300" rx="300" ry="300"/>
          <ellipse cx="600" cy="300" rx="500" ry="500"/>
        </g>
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label"><i className="ti ti-tag"></i> {services.label}</span>
        <h2 className="section-title">{services.title}</h2>
        <p className="section-sub">{services.subtitle}</p>

        <div className="services-grid reveal">
          {services.list.map((srv, idx) => (
            <div key={idx} className={`service-card ${srv.featured ? 'featured' : ''}`}>
              {srv.featured && srv.badge && (
                <span className="service-badge">{srv.badge}</span>
              )}
              <i className={`${srv.icon} service-icon`}></i>
              <div className="service-name">{srv.name}</div>
              <div className="service-desc">{srv.desc}</div>
              <div className="service-price">
                {srv.price} <span>{srv.priceSuffix}</span>
              </div>
              <div className="service-includes">
                {srv.includes.map((inc, incIdx) => (
                  <div key={incIdx} className="service-inc-item">
                    <i className="ti ti-check"></i> {inc}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
