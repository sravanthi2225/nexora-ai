import React from 'react';
import { clientLogos } from '../data/mockData';
import { Sparkles, Info } from 'lucide-react';

export default function LogoCloud() {
  return (
    <section className="logo-cloud-section" id="trusted-companies">
      <div className="container">
        <div className="logo-cloud-header">
          <div className="logo-cloud-eyebrow-wrap">
            <span className="logo-cloud-eyebrow">
              <Sparkles size={14} className="eyebrow-icon" />
              TRUSTED BY HIGH-GROWTH BUSINESSES & MODERN REVOPS TEAMS
            </span>
          </div>
          <p className="logo-cloud-disclaimer">
            <Info size={13} />
            <span>Illustrative design content • Fictional sample brand marks for demonstration</span>
          </p>
        </div>

        <div className="logo-grid">
          {clientLogos.map((client) => (
            <div key={client.name} className="logo-card">
              <span className="logo-symbol">{client.symbol}</span>
              <div className="logo-info-group">
                <span className="logo-company-name">{client.name}</span>
                <span className="logo-company-category">{client.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
