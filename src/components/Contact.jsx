import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Clock, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

export default function Contact({ selectedPlan = 'PROFESSIONAL', onPlanChange }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const availablePlans = ['STARTER', 'PROFESSIONAL', 'ENTERPRISE'];

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          return 'Full name is required.';
        }
        if (value.trim().length < 2) {
          return 'Full name must be at least 2 characters.';
        }
        return '';

      case 'email':
        if (!value.trim()) {
          return 'Work email address is required.';
        }
        if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid email address (e.g., name@company.com).';
        }
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      companyName: true,
      message: true,
    });

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((err) => err !== '');
    if (hasErrors) {
      return;
    }

    // Save submitted snapshot
    setSubmittedData({
      ...formData,
      plan: selectedPlan,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      message: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Sparkles size={14} /> Schedule a Walkthrough
          </span>
          <h2 className="section-title">
            Request an Interactive <span className="gradient-text">Product Demo</span>
          </h2>
          <p className="section-subtitle">
            See how Nexora AI can streamline your revenue operations, configure automated workflows,
            and provide real-time sales intelligence.
          </p>
        </div>

        <div className="contact-grid-wrap">
          {/* Left Info Column */}
          <div className="contact-info-column">
            <h3 className="contact-info-heading">Speak with our Solutions Team</h3>
            <p className="contact-info-paragraph">
              Whether you are an emerging startup scaling past ₹10 Lakhs monthly revenue or an established
              enterprise optimizing 50+ sales reps, we can tailor an architecture demonstration for your business.
            </p>

            {/* Selected Plan Callout Banner */}
            <div className="selected-plan-callout-card">
              <div className="callout-header">
                <span className="callout-tag">Selected Plan Choice:</span>
                <span className="callout-plan-name">{selectedPlan}</span>
              </div>
              <p className="callout-sub">
                Our solutions architect will configure your sandbox with features included in the {selectedPlan} tier.
              </p>
              <div className="plan-quick-switcher">
                <span className="switch-label">Switch tier:</span>
                {availablePlans.map((plan) => (
                  <button
                    key={plan}
                    type="button"
                    className={`plan-pill-switch ${selectedPlan === plan ? 'switch-active' : ''}`}
                    onClick={() => onPlanChange && onPlanChange(plan)}
                  >
                    {plan}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-perks-container">
              <div className="contact-perk-card">
                <CheckCircle2 size={18} className="perk-check-icon" />
                <div>
                  <strong className="perk-title">Personalized Sandbox Walkthrough</strong>
                  <p className="perk-sub">Explore pre-loaded workflows tailored to your sector.</p>
                </div>
              </div>

              <div className="contact-perk-card">
                <Clock size={18} className="perk-check-icon" />
                <div>
                  <strong className="perk-title">15-Minute Direct Q&A</strong>
                  <p className="perk-sub">Direct access to a senior solutions engineer.</p>
                </div>
              </div>

              <div className="contact-perk-card">
                <ShieldCheck size={18} className="perk-check-icon" />
                <div>
                  <strong className="perk-title">Privacy & Security Overview</strong>
                  <p className="perk-sub">Detailed breakdown of data encryption and SOC-2 compliance.</p>
                </div>
              </div>
            </div>

            <div className="contact-direct-channels">
              <div className="contact-channel-item">
                <Mail size={16} />
                <a href="mailto:demo@nexora.ai">demo@nexora.ai</a>
              </div>
              <div className="contact-channel-item">
                <Phone size={16} />
                <a href="tel:+918004566396">+91 (800) 456-NEXO</a>
              </div>
              <div className="contact-channel-item">
                <MapPin size={16} />
                <span>Bengaluru & San Francisco</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="contact-form-card">
            {isSubmitted && submittedData ? (
              <div className="demo-submission-success">
                <div className="success-icon-badge">
                  <CheckCircle2 size={40} className="success-check-icon" />
                </div>
                <h4 className="success-heading">Demo Request Confirmed!</h4>
                <p className="success-body">
                  Thank you, <strong>{submittedData.fullName}</strong>. A dedicated solutions architect has received your
                  request and is provisioning a tailored sandbox environment for <strong>{submittedData.companyName || 'your company'}</strong>.
                </p>

                {/* Submitted Details Review Card */}
                <div className="submitted-summary-card">
                  <div className="summary-row">
                    <span className="summary-label">Selected Tier:</span>
                    <span className="summary-value plan-badge-highlight">{submittedData.plan}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Confirmation Email:</span>
                    <span className="summary-value">{submittedData.email}</span>
                  </div>
                  {submittedData.companyName && (
                    <div className="summary-row">
                      <span className="summary-label">Company:</span>
                      <span className="summary-value">{submittedData.companyName}</span>
                    </div>
                  )}
                  <div className="summary-row">
                    <span className="summary-label">Request Time:</span>
                    <span className="summary-value">{submittedData.timestamp}</span>
                  </div>
                </div>

                <p className="success-followup-note">
                  Check your inbox within 2 hours for calendar invite links and sandbox login credentials.
                </p>

                <button type="button" className="btn btn-secondary btn-block" onClick={handleReset}>
                  <RefreshCw size={15} />
                  <span>Submit Another Request</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="demo-request-form">
                <div className="form-card-top-row">
                  <div>
                    <h4 className="form-card-title">Book Your 1-on-1 Demo</h4>
                    <p className="form-card-subtitle">
                      Configured for the <strong>{selectedPlan}</strong> plan
                    </p>
                  </div>
                  <span className="form-plan-chip">{selectedPlan}</span>
                </div>

                {/* Full Name Field */}
                <div className="form-input-group">
                  <label className="form-field-label" htmlFor="fullName">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Sravanthi Kumar"
                    className={`form-text-input ${errors.fullName && touched.fullName ? 'input-error' : ''}`}
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && touched.fullName && (
                    <span className="form-inline-error" id="fullName-error">
                      <AlertCircle size={13} /> {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Work Email Field */}
                <div className="form-input-group">
                  <label className="form-field-label" htmlFor="email">
                    Work Email <span className="required-star">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className={`form-text-input ${errors.email && touched.email ? 'input-error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && touched.email && (
                    <span className="form-inline-error" id="email-error">
                      <AlertCircle size={13} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Company Name Field */}
                <div className="form-input-group">
                  <label className="form-field-label" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="e.g. Acme Tech Solutions"
                    className="form-text-input"
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                {/* Message Field */}
                <div className="form-input-group">
                  <label className="form-field-label" htmlFor="message">
                    Project Goals or Current Tools (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your team size, CRM tools, or automation targets..."
                    className="form-text-input"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block form-submit-btn">
                  <span>Schedule Priority Demo</span>
                  <Send size={15} />
                </button>

                <p className="form-security-footer">
                  <ShieldCheck size={13} /> No credit card required • SOC-2 certified data isolation
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
