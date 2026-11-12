import React, { useState } from 'react';
import { faqList } from '../data/mockData';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion(index);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % faqList.length;
      const nextBtn = document.getElementById(`faq-btn-${nextIndex}`);
      if (nextBtn) nextBtn.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + faqList.length) % faqList.length;
      const prevBtn = document.getElementById(`faq-btn-${prevIndex}`);
      if (prevBtn) prevBtn.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      const firstBtn = document.getElementById(`faq-btn-0`);
      if (firstBtn) firstBtn.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastBtn = document.getElementById(`faq-btn-${faqList.length - 1}`);
      if (lastBtn) lastBtn.focus();
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      const navOffset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        {/* Section Head */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Sparkles size={14} /> Knowledge & Answers
          </span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find quick answers to common questions regarding onboarding, data security, workflow automations,
            and billing terms.
          </p>
        </div>

        {/* 5 Accordion Items */}
        <div className="faq-accordion-container" role="presentation">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            const btnId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`faq-accordion-card ${isOpen ? 'accordion-card-open' : ''}`}
              >
                <button
                  id={btnId}
                  className="accordion-trigger-btn"
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="accordion-question-wrap">
                    <HelpCircle size={18} className="accordion-q-icon" />
                    <span className="accordion-question-text">{item.question}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`accordion-chevron ${isOpen ? 'chevron-rotated' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="accordion-answer-box"
                  >
                    <p className="accordion-answer-text">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="faq-bottom-cta-banner">
          <div className="faq-cta-text-group">
            <h4 className="faq-cta-title">Have a specific question not covered here?</h4>
            <p className="faq-cta-sub">
              Our solutions team is happy to assist you with tailored questions or architecture reviews.
            </p>
          </div>
          <a href="#contact" className="btn btn-secondary" onClick={handleScrollToContact}>
            <MessageSquare size={16} />
            <span>Speak with Solutions Team</span>
          </a>
        </div>
      </div>
    </section>
  );
}
