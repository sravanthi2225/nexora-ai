import React from 'react';
import { sixFeaturesData } from '../data/mockData';
import {
  Bot,
  Users,
  Zap,
  BarChart3,
  FileText,
  Share2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Bot: Bot,
  Users: Users,
  Zap: Zap,
  BarChart3: BarChart3,
  FileText: FileText,
  Share2: Share2,
};

export default function Features() {
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
    <section className="features-section" id="features">
      <div className="container">
        {/* Section Head */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Sparkles size={14} /> Comprehensive Business Platform
          </span>
          <h2 className="section-title">
            Powerful AI Capabilities Built for <span className="gradient-text">Modern Growth</span>
          </h2>
          <p className="section-subtitle">
            Consolidate your sales operations, workflow automation, and analytics into one intelligent
            platform designed to save hours each week and drive revenue velocity.
          </p>
        </div>

        {/* Six Feature Cards Grid */}
        <div className="features-six-grid">
          {sixFeaturesData.map((feature) => {
            const Icon = iconMap[feature.iconName] || Zap;
            return (
              <div key={feature.id} className="feature-card-item">
                <div className="feature-card-top-row">
                  <div className="feature-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <span className="feature-card-badge">{feature.badge}</span>
                </div>

                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.desc}</p>

                <div className="feature-card-footer">
                  <a
                    href="#dashboard"
                    className="feature-learn-more"
                    onClick={(e) => handleScrollTo(e, '#dashboard')}
                  >
                    <span>View in Dashboard</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
