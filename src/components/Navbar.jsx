import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">SpideV<span>Girl</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Work</a></li>
        <li><a href="#services">Education</a></li>
        <li><a href="#contact" className="nav-cta">Hire Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
