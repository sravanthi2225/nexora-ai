import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data/mockData';

export default function Navbar({ theme = 'light', onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetHref) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetHref === '#hero' || targetHref === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.querySelector(targetHref);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="brand-logo"
          onClick={(e) => handleSmoothScroll(e, '#hero')}
          aria-label="Nexora AI Home"
        >
          <div className="logo-icon-wrapper">
            <Sparkles className="logo-sparkle-icon" size={20} />
          </div>
          <span className="logo-text">
            Nexora<span className="logo-accent">AI</span>
          </span>
          <span className="logo-badge">v3.0</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link-item"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action CTAs */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun size={17} className="theme-icon-sun" />
            ) : (
              <Moon size={17} className="theme-icon-moon" />
            )}
          </button>

          {/* Visual Login Link */}
          <a
            href="#contact"
            className="nav-login-link"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            title="Sign in to your demo sandbox or book access"
          >
            Sign In
          </a>

          {/* Get Started Button */}
          <a
            href="#pricing"
            className="btn btn-primary nav-btn-cta"
            onClick={(e) => handleSmoothScroll(e, '#pricing')}
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-links-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="mobile-link-item"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-cta">
            <div className="mobile-auth-row">
              <button
                type="button"
                className="theme-toggle-btn mobile-theme-btn"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={17} />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={17} />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="nav-login-link mobile-login"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Sign In
              </a>
            </div>

            <a
              href="#pricing"
              className="btn btn-primary btn-block"
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </a>

            <p className="mobile-drawer-note">
              <ShieldCheck size={14} /> SOC-2 Type II Certified • 14-Day Free Trial
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
