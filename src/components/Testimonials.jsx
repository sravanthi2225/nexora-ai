import React from 'react';
import { sampleTestimonials } from '../data/mockData';
import { Star, Quote, Sparkles, TrendingUp, Info } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Sparkles size={14} /> Illustrative Demonstration
          </span>
          <h2 className="section-title">
            Designed for <span className="gradient-text">High-Performing RevOps</span>
          </h2>
          <p className="section-subtitle">
            See how forward-thinking business leaders and sales directors accelerate pipeline velocity,
            reduce repetitive admin, and achieve revenue milestones with Nexora AI.
          </p>
          <div className="testimonial-disclaimer-pill">
            <Info size={13} />
            <span>Illustrative demo testimonials created for student internship project showcase</span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="testimonials-three-grid">
          {sampleTestimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card-item">
              <div className="testimonial-quote-box">
                <Quote size={24} className="quote-mark" />
              </div>

              {/* 5 Stars Rating */}
              <div className="testimonial-stars-list">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p className="testimonial-body-quote">"{t.quote}"</p>

              {/* Impact Metric Chip */}
              <div className="testimonial-metric-pill">
                <TrendingUp size={13} />
                <span>{t.metric}</span>
              </div>

              {/* Author Info */}
              <div className="testimonial-author-footer">
                <div className="author-avatar-initials">{t.avatar}</div>
                <div className="author-identity">
                  <h4 className="author-full-name">{t.author}</h4>
                  <p className="author-title-company">
                    {t.role} • <span>{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
