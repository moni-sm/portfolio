import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials">
      <div className="container">
        <span className="section-label"><i className="ti ti-star"></i> {testimonials.label}</span>
        <h2 className="section-title">{testimonials.title}</h2>
        <p className="section-sub">{testimonials.subtitle}</p>

        <div className="test-grid reveal">
          {testimonials.list.map((review, idx) => (
            <div key={idx} className="test-card">
              <div className="test-stars">{review.stars}</div>
              <p className="test-text">"{review.text}"</p>
              <div className="test-author">
                <div className="test-avatar">{review.avatarInitials}</div>
                <div>
                  <div className="test-name">{review.name}</div>
                  <div className="test-role">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
