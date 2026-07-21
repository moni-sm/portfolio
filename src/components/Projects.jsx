import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects">
      <div className="container">
        <span className="section-label"><i className="ti ti-briefcase"></i> {projects.label}</span>
        <h2 className="section-title">{projects.title}</h2>
        <p className="section-sub">{projects.subtitle}</p>

        <div className="projects-grid reveal">
          {projects.list.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-thumb">
                {proj.emoji}
                <span className="project-thumb-label">{proj.label}</span>
              </div>
              <div className="project-body">
                <div className="project-name">{proj.name}</div>
                <div className="project-desc">{proj.desc}</div>
                <div className="project-stack">
                  {proj.stack.map((tech, techIdx) => (
                    <span key={techIdx} className="stack-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <span className="project-result">
                  {proj.metricLabel} <strong>{proj.metricVal}</strong>
                </span>
                <a href={proj.link} className="project-link">
                  View <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
