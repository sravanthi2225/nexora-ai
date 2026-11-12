import React from 'react';
import { sixIntegrations } from '../data/mockData';
import {
  MessageSquare,
  Mail,
  Share2,
  CreditCard,
  Users,
  FileText,
  Sparkles,
  CheckCircle2,
  Info
} from 'lucide-react';

const integrationIcons = {
  MessageSquare: MessageSquare,
  Mail: Mail,
  Share2: Share2,
  CreditCard: CreditCard,
  Users: Users,
  FileText: FileText,
};

export default function Integrations() {
  return (
    <section className="integrations-section" id="integrations">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Sparkles size={14} /> Seamless Connected Ecosystem
          </span>
          <h2 className="section-title">
            Connects With Your <span className="gradient-text">Essential Work Tools</span>
          </h2>
          <p className="section-subtitle">
            Nexora AI links bi-directionally with your favorite business applications to ingest customer activity,
            sync financial telemetry, and dispatch automated alerts without manual effort.
          </p>
          <div className="integrations-disclaimer">
            <Info size={13} />
            <span>Illustrative integration examples shown with styled category indicators</span>
          </div>
        </div>

        {/* Six Integration Cards */}
        <div className="integrations-six-grid">
          {sixIntegrations.map((item) => {
            const Icon = integrationIcons[item.iconName] || Share2;
            return (
              <div key={item.name} className="integration-card-item">
                <div className="integration-card-header">
                  <div className="integration-symbol-badge">
                    <Icon size={22} />
                  </div>
                  <span className="integration-status-chip">
                    <CheckCircle2 size={12} /> {item.status}
                  </span>
                </div>

                <h3 className="integration-title">{item.name}</h3>
                <span className="integration-category-tag">{item.category}</span>
                <p className="integration-description">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
