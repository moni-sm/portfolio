import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills">
      <div className="container">
        <span className="section-label"><i className="ti ti-code"></i> {skills.label}</span>
        <h2 className="section-title">{skills.title}</h2>
        <p className="section-sub">{skills.subtitle}</p>

        <div className="skills-grid reveal">
          {skills.categories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-cat-icon"><i className={category.icon}></i></div>
              <div className="skill-cat-title">{category.title}</div>
              {category.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="skill-tag">{tag}</span>
              ))}
              <div className="skill-bar-row" style={{ marginTop: '1.25rem' }}>
                {category.bars.map((bar, barIdx) => (
                  <div key={barIdx} className="skill-bar-item">
                    <div className="skill-bar-top">
                      <span className="skill-bar-name">{bar.name}</span>
                      <span className="skill-bar-pct">{bar.pct}</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: bar.pct }}></div>
                    </div>
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

export default Skills;
