import React from 'react';
import { portfolioData } from '../data/portfolioData';
import monikaImg from '../assets/Monika.png';

function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="hero">
      <svg className="hero-web" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <g stroke="#fff" strokeWidth="0.8" fill="none">
          <line x1="600" y1="0" x2="600" y2="800"/>
          <line x1="0" y1="400" x2="1200" y2="400"/>
          <line x1="0" y1="0" x2="1200" y2="800"/>
          <line x1="1200" y1="0" x2="0" y2="800"/>
          <line x1="300" y1="0" x2="900" y2="800"/>
          <line x1="900" y1="0" x2="300" y2="800"/>
          <ellipse cx="600" cy="400" rx="120" ry="120"/>
          <ellipse cx="600" cy="400" rx="220" ry="220"/>
          <ellipse cx="600" cy="400" rx="340" ry="340"/>
          <ellipse cx="600" cy="400" rx="460" ry="460"/>
          <ellipse cx="600" cy="400" rx="600" ry="600"/>
        </g>
      </svg>
      <div className="hero-glow"></div>

      <div className="hero-inner">
        <div className="hero-left">
          <span className="hero-eyebrow">🕷 {hero.eyebrow}</span>
          <h1 className="hero-name">
            {hero.firstName}<br/><span className="accent">{hero.lastName}</span>
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-tags">
            {hero.tags.map((tag, idx) => (
              <span key={idx} className="hero-tag">{tag}</span>
            ))}
          </div>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary"><i className="ti ti-eye"></i> View Work</a>
            <a href="/Monika_SM_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
              <i className="ti ti-file-text"></i> Resume
            </a>
            <a href="#contact" className="btn-outline"><i className="ti ti-message"></i> Let's Talk</a>
          </div>
        </div>

        <div className="hero-right">
          <div>
            <div className="avatar-frame">
              <div className="avatar-circle">
                <img 
                  src={monikaImg} 
                  alt={`${hero.firstName} ${hero.lastName}`} 
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                />
              </div>
              <div className="avatar-ring1"></div>
              <div className="avatar-ring2"></div>
              <div className="status-dot">{hero.available ? "Available" : "Busy"}</div>
            </div>
            <div className="stats-float">
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
