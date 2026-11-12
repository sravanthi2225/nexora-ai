import React, { useState } from 'react';
import { pricingPlans } from '../data/mockData';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Pricing({ selectedPlan, onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const handlePlanClick = (e, planName) => {
    e.preventDefault();
    if (onSelectPlan) {
      onSelectPlan(planName);
    }
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        {/* Section Head */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Sparkles size={14} /> Transparent & Predictable Pricing
          </span>
          <h2 className="section-title">
            Simple Plans for Every <span className="gradient-text">Stage of Business</span>
          </h2>
          <p className="section-subtitle">
            Choose the plan that fits your current operational needs. All plans include full platform access,
            automated sync events, and dedicated email assistance.
          </p>

          {/* Interactive Billing Cycle Toggle */}
          <div className="billing-cycle-toggle-wrap">
            <button
              className={`billing-cycle-pill-btn ${billingCycle === 'monthly' ? 'cycle-active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`billing-cycle-pill-btn ${billingCycle === 'annual' ? 'cycle-active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              <span>Annual Billing</span>
              <span className="savings-badge">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-plans-grid">
          {pricingPlans.map((plan) => {
            const isRecommended = plan.recommended;
            const isCurrentlySelected = selectedPlan === plan.name;

            // Calculate price based on billing cycle
            let displayPrice = plan.price;
            let displayPeriod = plan.period;
            if (billingCycle === 'annual' && plan.price.startsWith('₹')) {
              const numeric = parseInt(plan.price.replace('₹', ''), 10);
              const discounted = Math.round(numeric * 0.8);
              displayPrice = `₹${discounted}`;
              displayPeriod = '/mo billed annually';
            }

            return (
              <div
                key={plan.id}
                className={`pricing-plan-card ${isRecommended ? 'plan-card-recommended' : ''} ${
                  isCurrentlySelected ? 'plan-card-selected' : ''
                }`}
              >
                {isRecommended && (
                  <div className="recommended-ribbon">
                    <Zap size={13} /> Recommended Plan
                  </div>
                )}

                <div className="plan-card-header">
                  <div className="plan-badge-line">
                    <span className="plan-tier-badge">{plan.name}</span>
                    {isCurrentlySelected && (
                      <span className="plan-selected-chip">Selected</span>
                    )}
                  </div>
                  <p className="plan-tier-description">{plan.desc}</p>
                </div>

                <div className="plan-cost-display">
                  <span className="plan-cost-amount">{displayPrice}</span>
                  <span className="plan-cost-cadence">{displayPeriod}</span>
                </div>

                <button
                  type="button"
                  className={`btn ${isRecommended ? 'btn-primary' : 'btn-secondary'} btn-block plan-cta-btn`}
                  onClick={(e) => handlePlanClick(e, plan.name)}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={15} />
                </button>

                <div className="plan-features-checklist">
                  <span className="checklist-heading">What's included:</span>
                  <ul className="checklist-items">
                    {plan.features.map((featureItem, i) => (
                      <li key={i} className="checklist-item">
                        <div className="check-circle-icon">
                          <Check size={14} />
                        </div>
                        <span>{featureItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="pricing-trust-bar">
          <div className="trust-bar-item">
            <ShieldCheck size={18} className="trust-bar-icon" />
            <span>14-day zero-risk trial • No credit card required</span>
          </div>
          <div className="trust-bar-item">
            <Check size={18} className="trust-bar-icon" />
            <span>Cancel or upgrade anytime with instant prorated adjustment</span>
          </div>
          <div className="trust-bar-item">
            <Zap size={18} className="trust-bar-icon" />
            <span>Enterprise-grade AES-256 data protection</span>
          </div>
        </div>
      </div>
    </section>
  );
}
