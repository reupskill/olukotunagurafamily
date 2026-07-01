import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { navLinks } from '../data/content';
import { BrandMark } from './Icons';
import SignInButton from './SignInButton';
import './Nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-brand" onClick={goHome}>
          <BrandMark />
          <div className="nav-brand-text">
            <div className="nav-brand-name">Olukotun Agura</div>
            <div className="nav-brand-sub">FAMILY FOUNDATION</div>
          </div>
        </button>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <div className="nav-desktop">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <SignInButton className="nav-signin" />
        </div>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <SignInButton className="nav-mobile-signin" />
        </div>
      )}
    </nav>
  );
}
