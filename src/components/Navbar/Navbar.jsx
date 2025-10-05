import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleThemeToggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`navbar ${theme}`}>
      <div className="logo">
        <h2>Shivnarayan Shinde</h2>
      </div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <NavLink to="/" className='navlink' onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" className='navlink' onClick={() => setMenuOpen(false)}>About me</NavLink>
        <NavLink to="/projects" className='navlink' onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/skills" className='navlink' onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink to="/resume" className='navlink' onClick={() => setMenuOpen(false)}>Resume</NavLink>
        <NavLink to="/contact" className='navlink' onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>
    </div>
  );
}
