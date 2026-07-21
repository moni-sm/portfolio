import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Footer() {
  const { contact } = portfolioData;

  return (
    <footer>
      <div className="footer-logo">Monika<span>S M</span></div>
      <p className="footer-tagline">Building scalable web applications & reliable digital solutions 💻</p>
      <div className="footer-social">
        {contact.channels.map((chan, idx) => (
          <a key={idx} href={chan.url} className="social-btn" target="_blank" rel="noopener noreferrer" title={chan.platform}>
            <i className={chan.icon}></i>
          </a>
        ))}
      </div>
      <p className="footer-copy">© 2026 Monika S M. All rights reserved.</p>
    </footer>
  );
}

export default Footer;