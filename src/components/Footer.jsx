import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Mail, Phone, MapPin } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  const handleScrollTo = (e, targetHref) => {
    e.preventDefault();
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
    <footer className="footer-section">
      <div className="container">
        {/* Newsletter Subscription Banner */}
        <div className="footer-newsletter-card">
          <div className="newsletter-text-block">
            <h3 className="newsletter-main-heading">Stay updated with AI RevOps strategies</h3>
            <p className="newsletter-main-desc">
              Get our monthly briefing on workflow automation, sales analytics, and business intelligence trends.
            </p>
          </div>

          <div className="newsletter-action-block">
            {subscribed ? (
              <div className="newsletter-success-box">
                <CheckCircle2 size={18} />
                <span>You're subscribed to the Nexora AI Growth Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-submit-form">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-email-input"
                  aria-label="Work email address"
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Footer Columns Grid */}
        <div className="footer-links-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col-brand">
            <a
              href="#hero"
              className="brand-logo footer-brand-logo"
              onClick={(e) => handleScrollTo(e, '#hero')}
            >
              <div className="logo-icon-wrapper">
                <Sparkles className="logo-sparkle-icon" size={20} />
              </div>
              <span className="logo-text">
                Nexora<span className="logo-accent">AI</span>
              </span>
            </a>
            <p className="footer-brand-summary">
              An intelligent business growth platform combining Smart CRM, workflow automation,
              sales analytics, and executive business reporting into a unified system.
            </p>
            <div className="footer-status-indicator">
              <span className="footer-status-dot" />
              <span>All Systems Operational (99.9% Uptime)</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col-links">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')}>Home</a></li>
              <li><a href="#features" onClick={(e) => handleScrollTo(e, '#features')}>Features</a></li>
              <li><a href="#dashboard" onClick={(e) => handleScrollTo(e, '#dashboard')}>Dashboard Preview</a></li>
              <li><a href="#solutions" onClick={(e) => handleScrollTo(e, '#solutions')}>How It Works</a></li>
              <li><a href="#integrations" onClick={(e) => handleScrollTo(e, '#integrations')}>Integrations</a></li>
              <li><a href="#pricing" onClick={(e) => handleScrollTo(e, '#pricing')}>Pricing Plans</a></li>
              <li><a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')}>FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Product Capabilities */}
          <div className="footer-col-links">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-nav-list">
              <li><a href="#features" onClick={(e) => handleScrollTo(e, '#features')}>AI Business Assistant</a></li>
              <li><a href="#features" onClick={(e) => handleScrollTo(e, '#features')}>Smart CRM Engine</a></li>
              <li><a href="#features" onClick={(e) => handleScrollTo(e, '#features')}>Workflow Automation</a></li>
              <li><a href="#dashboard" onClick={(e) => handleScrollTo(e, '#dashboard')}>Sales Analytics</a></li>
              <li><a href="#features" onClick={(e) => handleScrollTo(e, '#features')}>Intelligent Reporting</a></li>
              <li><a href="#features" onClick={(e) => handleScrollTo(e, '#features')}>Team Collaboration</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="footer-col-links">
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-contact-details">
              <li>
                <Mail size={15} className="contact-icon" />
                <a href="mailto:demo@nexora.ai">demo@nexora.ai</a>
              </li>
              <li>
                <Phone size={15} className="contact-icon" />
                <a href="tel:+918004566396">+91 (800) 456-NEXO</a>
              </li>
              <li>
                <MapPin size={15} className="contact-icon" />
                <span>Bengaluru, India & San Francisco, USA</span>
              </li>
              <li className="support-hours-note">
                <span>Support Hours: Mon - Fri, 9 AM - 6 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="footer-legal-bar">
          <p className="footer-copyright-text">
            © {CURRENT_YEAR} Nexora AI Inc. All rights reserved. Sankar Group Front-End Development Internship Assignment.
          </p>

          <div className="footer-compliance-tags">
            <span className="compliance-tag">
              <Shield size={12} /> SOC-2 Type II Certified
            </span>
            <span className="compliance-tag">
              ISO 27001 Standard
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
