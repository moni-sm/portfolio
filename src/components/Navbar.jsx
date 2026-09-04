import React from 'react';

function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">Monika<span>SM</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Education</a></li>
        <li>
          <a
            href="/Monika_SM_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-link"
          >
            <i className="ti ti-file-text"></i> Resume
          </a>
        </li>
        <li><a href="#contact" className="nav-cta">Let's Talk</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
