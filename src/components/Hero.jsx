import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Star,
  Play,
  Zap,
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  TrendingUp,
  Globe,
  Smartphone,
  Share2,
  Mail,
  ShoppingBag,
  DollarSign
} from 'lucide-react';

export default function Hero() {
  const [activeSidebarTab, setActiveSidebarTab] = useState('dashboard');
  const [hoveredBarIndex, setHoveredBarIndex] = useState(null);

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

  const monthlyBarData = [
    { month: 'Jan', height: 42, val: '$28,400' },
    { month: 'Feb', height: 58, val: '$34,200' },
    { month: 'Mar', height: 48, val: '$31,800' },
    { month: 'Apr', height: 72, val: '$41,500' },
    { month: 'May', height: 64, val: '$38,900' },
    { month: 'Jun', height: 86, val: '$46,200' },
    { month: 'Jul', height: 92, val: '$47,800' },
    { month: 'Aug', height: 100, val: '$48,250' },
  ];

  const channelData = [
    { name: 'Website', pct: '48%', color: '#7357F6', icon: Globe },
    { name: 'Mobile App', pct: '32%', color: '#4D83F7', icon: Smartphone },
    { name: 'Social Media', pct: '12%', color: '#06B6D4', icon: Share2 },
    { name: 'Email', pct: '8%', color: '#8B5CF6', icon: Mail },
  ];

  return (
    <section className="hero-section" id="hero">
      {/* Decorative Ambient Radial Glow Orbs */}
      <div className="hero-ambient-glow glow-primary" />
      <div className="hero-ambient-glow glow-secondary" />
      <div className="hero-ambient-glow glow-accent" />
      <div className="hero-ambient-ring" />

      <div className="container hero-container">
        <div className="hero-grid-layout">
          {/* =========================================================
              LEFT COLUMN: Headline, Value Proposition & Social Proof
              ========================================================= */}
          <div className="hero-content-col">
            {/* Small Announcement Badge */}
            <div className="hero-announcement-badge">
              <span className="badge-spark-icon">
                <Sparkles size={14} />
              </span>
              <span className="badge-announcement-text">Next-Gen Business Automation</span>
              <span className="badge-separator">•</span>
              <span className="badge-action-text">AI-Powered • Secure • Scalable</span>
            </div>

            {/* Headline */}
            <h1 className="hero-main-title">
              Grow Smarter. <br />
              Automate Faster. <br />
              <span className="gradient-text">Achieve More.</span>
            </h1>

            {/* Description */}
            <p className="hero-main-description">
              Transform the way you manage your business with AI-powered customer management,
              intelligent automation and real-time business insights — all in one platform.
            </p>

            {/* Action Buttons */}
            <div className="hero-buttons-group">
              <a
                href="#pricing"
                className="btn btn-primary btn-lg hero-cta-btn"
                onClick={(e) => handleScrollTo(e, '#pricing')}
              >
                <span>Start Free Trial</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#dashboard"
                className="btn btn-secondary btn-lg hero-secondary-btn"
                onClick={(e) => handleScrollTo(e, '#dashboard')}
              >
                <Play size={15} className="hero-play-icon" />
                <span>Explore Platform</span>
              </a>
            </div>

            {/* Customer Trust Indicator */}
            <div className="hero-trust-indicator">
              <div className="trust-avatar-stack">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face"
                  alt="Sarah Lin"
                  className="trust-avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face"
                  alt="David Chen"
                  className="trust-avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face"
                  alt="Elena Vance"
                  className="trust-avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face"
                  alt="Marcus Reed"
                  className="trust-avatar-img"
                />
              </div>

              <div className="trust-meta-text">
                <div className="trust-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#F59E0B"
                      color="#F59E0B"
                      className="trust-star-icon"
                    />
                  ))}
                  <span className="trust-score">4.9 / 5</span>
                </div>
                <p className="trust-quote">
                  Trusted by <strong>10,000+ businesses</strong> & modern teams worldwide
                </p>
              </div>
            </div>

            {/* Brand Logo Proof Strip */}
            <div className="hero-partner-strip">
              <span className="partner-logo-item google">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                <span>Google</span>
              </span>
              <span className="partner-logo-item microsoft">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h11.4v11.4H0V0zm12.6 0H24v11.4H12.6V0zM0 12.6h11.4V24H0V12.6zm12.6 0H24V24H12.6V12.6z" />
                </svg>
                <span>Microsoft</span>
              </span>
              <span className="partner-logo-item spotify">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span>Spotify</span>
              </span>
              <span className="partner-logo-item notion">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.83a2.535 2.535 0 00-1.773-.7l-11.01.699c-.513.047-.653.28-.466.466l-.152 1.913zm-.513 3.684v13.57c0 .793.42 1.072 1.26 1.026l14.288-.84c.84-.046 1.073-.606 1.073-1.353V6.772c0-.653-.28-.933-.84-.886L5.205 6.726c-.653.046-.933.42-.933 1.166h-.326zm14.335.886c.093.42 0 .84-.42.886l-.7.094v10.354c-.653.373-1.306.56-1.82.56-.84 0-1.073-.28-1.726-1.12l-4.9-7.697v7.697l1.493.327c0 .42-.327.42-.42.42h-3.5c-.093 0-.327 0-.327-.42l1.26-.28V9.897l-1.54-.14c0-.42.187-.56.56-.606l3.78-.234 5.32 8.07V9.757l-1.307-.187c0-.42.233-.56.607-.56l3.22-.233z" />
                </svg>
                <span>Notion</span>
              </span>
              <span className="partner-logo-item slack">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.528 2.528 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                </svg>
                <span>Slack</span>
              </span>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Layered 3D SaaS Canvas with Floating Badges
              ========================================================= */}
          <div className="hero-visual-col">
            <div className="hero-showcase-stage">
              {/* Dot Grid Backdrop */}
              <div className="hero-dot-matrix" />

              {/* FLOATING LAYER 1: Top-Right Automation Active Capsule */}
              <div className="floating-capsule top-capsule">
                <div className="capsule-icon-box green-glow">
                  <Zap size={16} className="text-emerald" />
                </div>
                <div className="capsule-text-group">
                  <div className="capsule-title-row">
                    <strong className="capsule-title">Automation Active</strong>
                    <span className="pulse-dot green" />
                  </div>
                  <span className="capsule-sub">Your workflows are running smoothly</span>
                </div>
                <ChevronRight size={14} className="capsule-arrow" />
              </div>

              {/* CENTRAL MAIN APP MOCKUP WINDOW */}
              <div className="hero-central-window">
                {/* Window Chrome Titlebar */}
                <div className="central-window-header">
                  <div className="central-window-dots">
                    <span className="win-dot red" />
                    <span className="win-dot yellow" />
                    <span className="win-dot green" />
                  </div>

                  <div className="central-window-search">
                    <Search size={13} className="search-icon" />
                    <span>Search anything...</span>
                  </div>

                  <div className="central-window-meta">
                    <div className="meta-bell-box">
                      <Bell size={14} />
                      <span className="bell-badge-dot" />
                    </div>
                    <div className="meta-user-avatar" title="Alex Morgan (RevOps)">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
                        alt="Alex"
                      />
                    </div>
                  </div>
                </div>

                {/* Window Layout: Mini Sidebar + Content Area */}
                <div className="central-window-body">
                  {/* Left Mini Sidebar */}
                  <aside className="window-mini-sidebar">
                    <div className="mini-brand-logo">
                      <div className="mini-brand-icon">
                        <Sparkles size={14} />
                      </div>
                      <span className="mini-brand-name">Nexora</span>
                    </div>

                    <nav className="mini-sidebar-nav">
                      <button
                        type="button"
                        className={`mini-nav-item ${activeSidebarTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveSidebarTab('dashboard')}
                        title="Dashboard"
                      >
                        <LayoutDashboard size={14} />
                        <span>Dashboard</span>
                      </button>

                      <button
                        type="button"
                        className={`mini-nav-item ${activeSidebarTab === 'customers' ? 'active' : ''}`}
                        onClick={() => setActiveSidebarTab('customers')}
                        title="Customers"
                      >
                        <Users size={14} />
                        <span>Customers</span>
                      </button>

                      <button
                        type="button"
                        className={`mini-nav-item ${activeSidebarTab === 'automations' ? 'active' : ''}`}
                        onClick={() => setActiveSidebarTab('automations')}
                        title="Automations"
                      >
                        <Zap size={14} />
                        <span>Automations</span>
                      </button>

                      <button
                        type="button"
                        className={`mini-nav-item ${activeSidebarTab === 'analytics' ? 'active' : ''}`}
                        onClick={() => setActiveSidebarTab('analytics')}
                        title="Analytics"
                      >
                        <BarChart3 size={14} />
                        <span>Analytics</span>
                      </button>

                      <button
                        type="button"
                        className={`mini-nav-item ${activeSidebarTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveSidebarTab('settings')}
                        title="Settings"
                      >
                        <Settings size={14} />
                        <span>Settings</span>
                      </button>
                    </nav>
                  </aside>

                  {/* Right Main Content Panel */}
                  <main className="window-main-panel">
                    {/* Personalized Greeting */}
                    <div className="panel-greeting-row">
                      <div>
                        <h3 className="greeting-title">Good Morning, Alex!</h3>
                        <p className="greeting-subtitle">Here's what's happening with your business today.</p>
                      </div>
                    </div>

                    {/* 3 Metric Summary Cards */}
                    <div className="hero-metrics-strip">
                      <div className="metric-pill-card">
                        <div className="metric-icon-bubble purple">
                          <Users size={13} />
                        </div>
                        <div className="metric-data-group">
                          <span className="metric-data-label">Total Customers</span>
                          <strong className="metric-data-val">2,840,500</strong>
                          <span className="metric-growth-badge positive">↑ 12.5%</span>
                        </div>
                      </div>

                      <div className="metric-pill-card">
                        <div className="metric-icon-bubble pink">
                          <ShoppingBag size={13} />
                        </div>
                        <div className="metric-data-group">
                          <span className="metric-data-label">Total Orders</span>
                          <strong className="metric-data-val">142</strong>
                          <span className="metric-growth-badge positive">↑ 8.3%</span>
                        </div>
                      </div>

                      <div className="metric-pill-card">
                        <div className="metric-icon-bubble blue">
                          <DollarSign size={13} />
                        </div>
                        <div className="metric-data-group">
                          <span className="metric-data-label">Revenue</span>
                          <strong className="metric-data-val">$48,250</strong>
                          <span className="metric-growth-badge positive">↑ 16.2%</span>
                        </div>
                      </div>
                    </div>

                    {/* Sales Performance Card with 8-Month Vertical Bars */}
                    <div className="hero-chart-card">
                      <div className="chart-header-row">
                        <div>
                          <h4 className="chart-heading">Sales Performance</h4>
                          <span className="chart-subheading">Monthly revenue overview</span>
                        </div>
                        <div className="chart-period-dropdown">
                          <span>Last 8 months</span>
                          <ChevronDown size={12} />
                        </div>
                      </div>

                      {/* 8 Vertical Pill Bars with Hover Tooltips */}
                      <div className="chart-bars-track">
                        {monthlyBarData.map((bar, idx) => {
                          const isHovered = hoveredBarIndex === idx;
                          return (
                            <div
                              key={bar.month}
                              className="chart-bar-column"
                              onMouseEnter={() => setHoveredBarIndex(idx)}
                              onMouseLeave={() => setHoveredBarIndex(null)}
                            >
                              {isHovered && (
                                <div className="bar-hover-tooltip">
                                  <span>{bar.val}</span>
                                </div>
                              )}
                              <div className="bar-pillar-wrap">
                                <div
                                  className={`bar-pillar ${idx === 7 ? 'highlight' : ''}`}
                                  style={{ height: `${bar.height}%` }}
                                />
                              </div>
                              <span className="bar-month-label">{bar.month}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Two Quick Action Cards at Bottom */}
                    <div className="hero-quick-actions-row">
                      <div className="action-card-mini green-card">
                        <div className="action-icon-box green">
                          <Zap size={14} />
                        </div>
                        <div className="action-text-box">
                          <strong className="action-title">Intelligent Automation</strong>
                          <span className="action-desc">Save time with smart workflows</span>
                        </div>
                        <ChevronRight size={13} className="action-chevron" />
                      </div>

                      <div className="action-card-mini blue-card">
                        <div className="action-icon-box blue">
                          <Users size={14} />
                        </div>
                        <div className="action-text-box">
                          <strong className="action-title">Customer Insights</strong>
                          <span className="action-desc">Understand your customers better</span>
                        </div>
                        <ChevronRight size={13} className="action-chevron" />
                      </div>
                    </div>
                  </main>
                </div>
              </div>

              {/* FLOATING LAYER 2: Right Overlapping Analytics Card (ARR & Channels) */}
              <div className="floating-analytics-card">
                {/* Card Top: Monthly ARR */}
                <div className="arr-card-top">
                  <div className="arr-header-row">
                    <div className="arr-icon-bubble">
                      <BarChart3 size={16} />
                    </div>
                    <div className="arr-title-group">
                      <span className="arr-label">Monthly ARR</span>
                      <strong className="arr-number">$148,250</strong>
                    </div>
                    <div className="arr-tag-positive">
                      <TrendingUp size={11} />
                      <span>↑ 24.8% vs last month</span>
                    </div>
                  </div>

                  {/* Sparkline Area Wave */}
                  <div className="arr-sparkline-wrap">
                    <svg
                      viewBox="0 0 240 60"
                      className="arr-sparkline-svg"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7357F6" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#7357F6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 Q40,38 70,44 T140,25 T200,18 T240,8 L240,60 L0,60 Z"
                        fill="url(#sparklineGrad)"
                      />
                      <path
                        d="M0,50 Q40,38 70,44 T140,25 T200,18 T240,8"
                        fill="none"
                        stroke="#7357F6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="sparkline-path"
                      />
                      <circle cx="240" cy="8" r="3.5" fill="#7357F6" className="sparkline-dot" />
                    </svg>
                  </div>
                </div>

                {/* Card Bottom: Top Performing Channels */}
                <div className="arr-channels-bottom">
                  <div className="channels-header">
                    <span className="channels-title">Top Performing Channels</span>
                  </div>

                  <div className="channels-list">
                    {channelData.map((ch) => (
                      <div key={ch.name} className="channel-item-row">
                        <div className="channel-label-group">
                          <span
                            className="channel-dot"
                            style={{ backgroundColor: ch.color }}
                          />
                          <span className="channel-name">{ch.name}</span>
                        </div>
                        <span className="channel-pct-val">{ch.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FLOATING LAYER 3: Bottom-Right Enterprise Security Pill */}
              <div className="floating-capsule bottom-capsule">
                <div className="capsule-icon-box blue-glow">
                  <ShieldCheck size={16} className="text-secondary-blue" />
                </div>
                <div className="capsule-text-group">
                  <strong className="capsule-title">Enterprise-Grade Security</strong>
                  <span className="capsule-sub">Your data, always protected</span>
                </div>
                <ChevronRight size={14} className="capsule-arrow" />
              </div>

              {/* HANDWRITTEN DOODLE: "Better Business Together" + Curving Arrow */}
              <div className="handwritten-doodle-wrap" aria-hidden="true">
                <span className="handwritten-text">Better Business Together</span>
                <svg
                  className="handwritten-arrow-svg"
                  width="44"
                  height="44"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M12,12 C24,20 32,32 40,40 M40,40 L30,40 M40,40 L40,30"
                    stroke="#7357F6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* BOTANICAL DESK PLANT ACCENT */}
              <div className="botanical-accent-wrap" aria-hidden="true">
                <div className="botanical-pot">
                  <div className="botanical-leaf leaf-1" />
                  <div className="botanical-leaf leaf-2" />
                  <div className="botanical-leaf leaf-3" />
                  <div className="botanical-leaf leaf-4" />
                  <div className="botanical-leaf leaf-5" />
                  <div className="pot-base" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
