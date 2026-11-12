import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import './App.css';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('PROFESSIONAL');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nexora_theme') || 'light';
  });
  const [toasts, setToasts] = useState([]);

  // Sync theme attribute to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nexora_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    addToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Theme`, 'info');
  };

  const addToast = (message, type = 'success', title = null) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    const newToast = { id, message, type, title };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 3.8s
    setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  };

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    addToast(`Selected ${planName} Plan — Preconfigured in Demo Sandbox!`, 'success');
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
    <div className={`app-root theme-${theme}`}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero onNotify={addToast} />
        <LogoCloud />
        <Features />
        <DashboardPreview
          theme={theme}
          onToggleTheme={toggleTheme}
          onNotify={addToast}
        />
        <HowItWorks />
        <Integrations />
        <Testimonials />
        <Pricing
          selectedPlan={selectedPlan}
          onSelectPlan={handleSelectPlan}
        />
        <FAQ />
        <Contact
          selectedPlan={selectedPlan}
          onPlanChange={(plan) => {
            setSelectedPlan(plan);
            addToast(`Tier updated to ${plan}`, 'info');
          }}
          onNotify={addToast}
        />
      </main>
      <Footer onNotify={addToast} />

      {/* Global Toast Notification System */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
