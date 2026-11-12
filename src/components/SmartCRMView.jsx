import React, { useState } from 'react';
import {
  Search,
  Plus,
  Download,
  Filter,
  Clock,
  ArrowUpDown,
  Building2,
  Mail,
  Loader2
} from 'lucide-react';
import { sampleCustomerRecords } from '../data/mockData';

export default function SmartCRMView({ onNotify }) {
  const [customers, setCustomers] = useState(sampleCustomerRecords);
  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState('ALL');
  const [isAddingLead, setIsAddingLead] = useState(false);
  const [sortField, setSortField] = useState('numericValue');
  const [sortAsc, setSortAsc] = useState(false);

  // Filter logic
  const filteredCustomers = customers.filter((cust) => {
    const matchesSearch =
      cust.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cust.stage.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (stageFilter === 'ALL') return true;
    if (stageFilter === 'WON') return cust.stage === 'Closed Won';
    if (stageFilter === 'PROGRESS') return cust.stage.includes('Review') || cust.stage.includes('Sent');
    if (stageFilter === 'EVAL') return cust.stage.includes('Demo') || cust.stage.includes('Discovery');
    return true;
  });

  // Sort logic
  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    if (typeof aVal === 'string') {
      return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    return sortAsc ? aVal - bVal : bVal - aVal;
  });

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const handleAddSampleLead = () => {
    setIsAddingLead(true);
    setTimeout(() => {
      const newLead = {
        id: `CUST-${100 + customers.length + 1}`,
        company: 'NovaCore Biotech',
        contact: 'Dr. Sameer Sen',
        email: 'sameer@novacore.in',
        stage: 'Discovery Call',
        value: '₹3,50,000',
        numericValue: 350000,
        health: '95%',
        tier: 'Enterprise',
        status: 'Active',
        lastContact: 'Just now',
      };
      setCustomers([newLead, ...customers]);
      setIsAddingLead(false);
      if (onNotify) {
        onNotify('New AI Lead "NovaCore Biotech" added to deal pipeline (₹3,50,000)', 'success');
      }
    }, 700);
  };

  const handleExportCSV = () => {
    if (onNotify) {
      onNotify('CRM Customer Roster exported successfully (CSV Simulation)', 'info');
    }
  };

  return (
    <div className="crm-view-layout">
      {/* Top Filter and Action Bar */}
      <div className="crm-toolbar-row">
        <div className="crm-search-box">
          <Search size={14} className="crm-search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search accounts, contacts, emails, or deal stages..."
            className="crm-search-input"
            aria-label="Filter customer accounts"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </div>

        <div className="crm-action-buttons">
          <button
            type="button"
            className="btn btn-secondary crm-btn-sm"
            onClick={handleExportCSV}
          >
            <Download size={14} />
            <span>Export CSV</span>
          </button>

          <button
            type="button"
            className="btn btn-primary crm-btn-sm"
            onClick={handleAddSampleLead}
            disabled={isAddingLead}
          >
            {isAddingLead ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>Enriching...</span>
              </>
            ) : (
              <>
                <Plus size={14} />
                <span>Add AI Lead</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Stage Filter Chips */}
      <div className="crm-filter-chips-row">
        <span className="filter-label">
          <Filter size={12} /> Pipeline Filter:
        </span>
        <button
          type="button"
          className={`filter-chip-btn ${stageFilter === 'ALL' ? 'chip-active' : ''}`}
          onClick={() => setStageFilter('ALL')}
        >
          All Accounts ({customers.length})
        </button>
        <button
          type="button"
          className={`filter-chip-btn ${stageFilter === 'WON' ? 'chip-active' : ''}`}
          onClick={() => setStageFilter('WON')}
        >
          Closed Won ({customers.filter((c) => c.stage === 'Closed Won').length})
        </button>
        <button
          type="button"
          className={`filter-chip-btn ${stageFilter === 'PROGRESS' ? 'chip-active' : ''}`}
          onClick={() => setStageFilter('PROGRESS')}
        >
          In Progress ({customers.filter((c) => c.stage.includes('Review') || c.stage.includes('Sent')).length})
        </button>
        <button
          type="button"
          className={`filter-chip-btn ${stageFilter === 'EVAL' ? 'chip-active' : ''}`}
          onClick={() => setStageFilter('EVAL')}
        >
          Evaluating ({customers.filter((c) => c.stage.includes('Demo') || c.stage.includes('Discovery')).length})
        </button>
      </div>

      {/* CRM Customer Records Table */}
      <div className="crm-table-container">
        <table className="crm-data-table" role="table">
          <thead>
            <tr>
              <th>Company Account</th>
              <th>Primary Contact</th>
              <th>Deal Stage</th>
              <th onClick={() => toggleSort('numericValue')} className="sortable-th">
                <span className="th-content">
                  <span>Deal Value</span>
                  <ArrowUpDown size={12} />
                </span>
              </th>
              <th>Account Health</th>
              <th>Last Touch</th>
            </tr>
          </thead>
          <tbody>
            {sortedCustomers.length === 0 ? (
              <tr>
                <td colSpan="6" className="crm-empty-td">
                  <span>No customer accounts match "{searchQuery}".</span>
                </td>
              </tr>
            ) : (
              sortedCustomers.map((cust) => {
                const isWon = cust.stage === 'Closed Won';
                const isReview = cust.stage.includes('Review');
                return (
                  <tr key={cust.id} className="crm-row-item">
                    <td>
                      <div className="company-col-cell">
                        <div className="company-avatar-box">
                          <Building2 size={14} />
                        </div>
                        <div>
                          <strong className="company-name-text">{cust.company}</strong>
                          <span className="company-id-sub">{cust.tier} • {cust.id}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="contact-col-cell">
                        <span className="contact-name">{cust.contact}</span>
                        <span className="contact-email">
                          <Mail size={11} /> {cust.email}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`stage-badge ${
                          isWon ? 'badge-won' : isReview ? 'badge-review' : 'badge-eval'
                        }`}
                      >
                        {cust.stage}
                      </span>
                    </td>
                    <td>
                      <strong className="deal-value-text">{cust.value}</strong>
                    </td>
                    <td>
                      <div className="health-score-cell">
                        <div className="health-bar-track">
                          <div
                            className="health-bar-fill"
                            style={{ width: cust.health }}
                          />
                        </div>
                        <span className="health-score-num">{cust.health}</span>
                      </div>
                    </td>
                    <td>
                      <span className="last-contact-text">
                        <Clock size={11} /> {cust.lastContact}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
