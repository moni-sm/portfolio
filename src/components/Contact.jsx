import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const { contact } = portfolioData;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("🕸 Please fill in all required fields (Name, Email, and Message)!");
      return;
    }
    const subject = `Project Inquiry: ${service || 'General Inquiry'}`;
    const body = `Hi Spidey Girl,\n\nMy name is ${name}. I would like to inquire about your ${service || 'freelance'} services.\n\nMessage:\n${message}\n\nYou can reach me at: ${email}`;
    window.location.href = `mailto:hey@spideygirl.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <div className="container">
        <span className="section-label"><i className="ti ti-send"></i> {contact.label}</span>
        <h2 className="section-title">{contact.title}</h2>
        <p className="section-sub">{contact.subtitle}</p>

        <div className="contact-grid reveal">
          <div>
            <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {contact.text}
            </p>

            <div className="contact-items">
              {contact.channels.map((chan, idx) => (
                <a key={idx} href={chan.url} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon"><i className={chan.icon}></i></div>
                  <div>
                    <div className="contact-platform">{chan.platform}</div>
                    <div className="contact-handle">{chan.handle}</div>
                  </div>
                  <i className="ti ti-arrow-right" style={{ marginLeft: 'auto', color: 'var(--text3)', fontSize: '16px' }}></i>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="What do I call you?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
           
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
              <i className="ti ti-send"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
