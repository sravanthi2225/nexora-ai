import React from 'react';
import { howItWorksSteps } from '../data/mockData';
import { Link2, Workflow, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const stepIconMap = {
  Link2: Link2,
  Workflow: Workflow,
  TrendingUp: TrendingUp,
};

export default function HowItWorks() {
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
    <section className="how-it-works-section" id="solutions">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Sparkles size={14} /> Simple 3-Step Setup
          </span>
          <h2 className="section-title">
            How Nexora AI Drives <span className="gradient-text">Predictable Growth</span>
          </h2>
          <p className="section-subtitle">
            Get your entire sales force and workflow automation running in three straightforward phases.
            No complex developer integration or lengthy onboarding required.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="how-steps-grid">
          {howItWorksSteps.map((stepItem, index) => {
            const Icon = stepIconMap[stepItem.iconName] || TrendingUp;
            return (
              <div key={stepItem.step} className="how-step-card">
                <div className="how-step-header">
                  <span className="how-step-number">{stepItem.step}</span>
                  <div className="how-step-icon-box">
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="how-step-title">{stepItem.title}</h3>
                <p className="how-step-desc">{stepItem.desc}</p>

                <div className="how-step-detail-row">
                  <CheckCircle2 size={15} className="how-check-icon" />
                  <span>{stepItem.details}</span>
                </div>

                {index < howItWorksSteps.length - 1 && (
                  <div className="how-step-connector hide-mobile">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="how-bottom-banner">
          <div className="banner-text-wrap">
            <h4 className="banner-heading">Ready to see it in action?</h4>
            <p className="banner-sub">
              Launch your 14-day free pilot or request a guided architectural walkthrough.
            </p>
          </div>
          <div className="banner-action-wrap">
            <a
              href="#pricing"
              className="btn btn-primary"
              onClick={(e) => handleScrollTo(e, '#pricing')}
            >
              <span>Get Started Free</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
