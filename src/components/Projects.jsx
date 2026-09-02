import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects.list
    : projects.list.filter(p => p.category?.includes(activeCategory) || p.label?.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects">
      <div className="container">
        <span className="section-label"><i className="ti ti-briefcase"></i> {projects.label}</span>
        <h2 className="section-title">{projects.title}</h2>
        <p className="section-sub">{projects.subtitle}</p>

        {projects.categories && (
          <div className="project-filter-tabs">
            {projects.categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="projects-grid reveal">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className={`project-card ${proj.featured ? 'is-featured' : ''}`}>
              <div className="project-thumb">
                <span className="project-thumb-emoji">{proj.emoji}</span>
                <span className="project-thumb-label">{proj.label}</span>
                {proj.liveUrl && (
                  <span className="live-status-pill">
                    <span className="live-status-dot"></span> Live
                  </span>
                )}
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
                <div className="project-actions">
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-action btn-repo"
                      title="View GitHub Repository"
                    >
                      <i className="ti ti-brand-github"></i> Code
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-action btn-live"
                      title="Open Live Deployed Application"
                    >
                      <i className="ti ti-external-link"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
