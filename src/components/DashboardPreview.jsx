import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Zap,
  BarChart3,
  FileText,
  Settings,
  Search,
  DollarSign,
  TrendingUp,
  FolderKanban,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Download,
  Sparkles,
  UserCheck,
  Loader2,
  Sliders,
  Check,
  FileSpreadsheet
} from 'lucide-react';
import { dashboardData, sampleAutomations } from '../data/mockData';
import AnimatedKPI from './AnimatedKPI';
import NotificationDropdown from './NotificationDropdown';
import AnalyticsCharts from './AnalyticsCharts';
import SmartCRMView from './SmartCRMView';

export default function DashboardPreview({ theme = 'light', onToggleTheme, onNotify }) {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [timeframe, setTimeframe] = useState('30D');
  const [tasks, setTasks] = useState(dashboardData.taskOverview);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [automations, setAutomations] = useState(sampleAutomations);
  const [isRunningBots, setIsRunningBots] = useState(false);

  // Dynamic sample data based on timeframe
  const timeframeData = {
    'Today': {
      revenue: '₹1,24,000',
      revenueGrowth: '+22.5%',
      customers: '142',
      customersGrowth: '+12 new',
      activeProjects: '6',
      projectsActive: '18 Bots Active',
      efficiencyScore: '99.2%',
      efficiencyNote: 'Peak Day Volume',
      chart: [
        { month: '9 AM', actual: 12, projected: 10, revenueNum: 120000 },
        { month: '11 AM', actual: 28, projected: 22, revenueNum: 280000 },
        { month: '1 PM', actual: 48, projected: 40, revenueNum: 480000 },
        { month: '3 PM', actual: 75, projected: 65, revenueNum: 750000 },
        { month: '5 PM', actual: 98, projected: 85, revenueNum: 980000 },
        { month: '7 PM', actual: 124, projected: 110, revenueNum: 1240000 },
      ],
    },
    '7D': {
      revenue: '₹6,80,000',
      revenueGrowth: '+12.4%',
      customers: '840',
      customersGrowth: '+8.2%',
      activeProjects: '14',
      projectsActive: '12 Automated Bots',
      efficiencyScore: '97.2%',
      efficiencyNote: 'Weekly Target Met',
      chart: [
        { month: 'Mon', actual: 65, projected: 60, revenueNum: 650000 },
        { month: 'Tue', actual: 78, projected: 70, revenueNum: 780000 },
        { month: 'Wed', actual: 88, projected: 82, revenueNum: 880000 },
        { month: 'Thu', actual: 95, projected: 90, revenueNum: 950000 },
        { month: 'Fri', actual: 110, projected: 100, revenueNum: 1100000 },
        { month: 'Sat', actual: 60, projected: 65, revenueNum: 600000 },
        { month: 'Sun', actual: 74, projected: 70, revenueNum: 740000 },
      ],
    },
    '30D': {
      revenue: '₹28,45,000',
      revenueGrowth: '+34.2%',
      customers: '2,845',
      customersGrowth: '+18.5%',
      activeProjects: '42',
      projectsActive: '18 Automated Bots',
      efficiencyScore: '98.4%',
      efficiencyNote: 'Top Quartile Attainment',
      chart: dashboardData.salesChart,
    },
    '90D': {
      revenue: '₹84,20,000',
      revenueGrowth: '+48.6%',
      customers: '7,420',
      customersGrowth: '+29.4%',
      activeProjects: '86',
      projectsActive: '24 Automated Bots',
      efficiencyScore: '99.1%',
      efficiencyNote: 'Record Revenue Sprint',
      chart: [
        { month: 'Month 1', actual: 70, projected: 65, revenueNum: 700000 },
        { month: 'Month 2', actual: 94, projected: 85, revenueNum: 940000 },
        { month: 'Month 3', actual: 124, projected: 105, revenueNum: 1240000 },
      ],
    },
    '1Y': {
      revenue: '₹3,12,00,000',
      revenueGrowth: '+62.8%',
      customers: '14,800',
      customersGrowth: '+42.1%',
      activeProjects: '140',
      projectsActive: '32 Automated Bots',
      efficiencyScore: '99.6%',
      efficiencyNote: 'Enterprise Scale Achieved',
      chart: [
        { month: 'Q1', actual: 65, projected: 60, revenueNum: 6500000 },
        { month: 'Q2', actual: 85, projected: 80, revenueNum: 8500000 },
        { month: 'Q3', actual: 110, projected: 95, revenueNum: 11000000 },
        { month: 'Q4', actual: 140, projected: 120, revenueNum: 14000000 },
      ],
    },
  };

  const currentStats = timeframeData[timeframe] || timeframeData['30D'];

  const handleTimeframeChange = (newTf) => {
    if (newTf === timeframe) return;
    setIsSyncing(true);
    setTimeout(() => {
      setTimeframe(newTf);
      setIsSyncing(false);
      if (onNotify) {
        onNotify(`Telemetry recalculated for ${newTf} window`, 'info');
      }
    }, 450);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === taskId) {
          const nextCompleted = !t.completed;
          if (onNotify) {
            onNotify(
              nextCompleted
                ? `Task "${t.task.substring(0, 32)}..." marked completed`
                : `Task restored to pending queue`,
              'info'
            );
          }
          return { ...t, completed: nextCompleted };
        }
        return t;
      })
    );
  };

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      if (onNotify) {
        onNotify(
          `Executive Telemetry Report (${timeframe}) downloaded successfully (PDF Export Simulated).`,
          'success',
          'Export Complete'
        );
      }
    }, 850);
  };

  const toggleAutomationBot = (botId) => {
    setAutomations(
      automations.map((bot) => {
        if (bot.id === botId) {
          const updated = !bot.status;
          if (onNotify) {
            onNotify(`Automation "${bot.name}" is now ${updated ? 'Active' : 'Paused'}`, 'info');
          }
          return { ...bot, status: updated };
        }
        return bot;
      })
    );
  };

  const handleRunAllBots = () => {
    setIsRunningBots(true);
    setTimeout(() => {
      setIsRunningBots(false);
      if (onNotify) {
        onNotify('All 18 AI RevOps bots synchronized successfully across pipelines', 'success');
      }
    }, 800);
  };

  const navMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'crm', label: 'Smart CRM', icon: Users, badge: '8 Leads' },
    { id: 'automation', label: 'Automations', icon: Zap, badge: '4 Bots' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Search filter for tasks and activity
  const filteredTasks = tasks.filter((t) =>
    t.task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredActivity = dashboardData.recentActivity.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="dashboard-section" id="dashboard">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Sparkles size={14} /> Interactive SaaS Platform Preview
          </span>
          <h2 className="section-title">
            Enterprise Command Center <span className="gradient-text">In Action</span>
          </h2>
          <p className="section-subtitle">
            Experience the real-time operational hub of Nexora AI. Manage customer accounts, inspect automated workflows,
            track team tasks, and forecast business revenue in one unified interface.
          </p>
        </div>

        {/* Complete SaaS Application Window */}
        <div className="app-window-frame">
          {/* Top Window Chrome Bar */}
          <div className="app-window-topbar">
            <div className="app-window-controls">
              <span className="window-dot dot-red" />
              <span className="window-dot dot-yellow" />
              <span className="window-dot dot-green" />
            </div>

            <div className="app-window-search">
              <Search size={14} className="window-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search revenue data, automated tasks, customers, or reports..."
                className="window-search-input"
                aria-label="Filter dashboard records"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <kbd className="window-kbd">⌘K</kbd>
            </div>

            <div className="app-window-user-meta">
              {/* Notification Dropdown Component */}
              <NotificationDropdown onNotify={onNotify} />

              <div className="app-live-indicator">
                <span className="pulse-emerald" />
                <span className="hide-mobile">System Live</span>
              </div>
              <div
                className="app-user-avatar"
                title="Signed in as Aditya Sharma (RevOps Lead)"
              >
                AS
              </div>
            </div>
          </div>

          {/* SaaS Main Body: Sidebar + Main Content Layout */}
          <div className="app-window-layout">
            {/* 1. Sidebar Navigation */}
            <aside className="app-sidebar" aria-label="Dashboard views navigation">
              <div className="app-sidebar-brand">
                <div className="sidebar-logo-icon">
                  <Sparkles size={16} />
                </div>
                <div>
                  <span className="sidebar-brand-name">Nexora Core</span>
                  <span className="sidebar-brand-sub">Enterprise v3.0</span>
                </div>
              </div>

              <nav className="app-sidebar-nav">
                {navMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`sidebar-nav-btn ${isActive ? 'nav-btn-active' : ''}`}
                      onClick={() => setActiveNav(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon size={17} className="sidebar-icon" />
                      <span className="sidebar-label">{item.label}</span>
                      {item.badge && (
                        <span className={`sidebar-badge ${isActive ? 'badge-active' : ''}`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="sidebar-bottom-status">
                <div className="status-indicator-box">
                  <span className="status-dot green" />
                  <span className="status-text">All AI Bots Active</span>
                </div>
                <span className="status-sub">Syncing via TLS 1.3 Encryption</span>
              </div>
            </aside>

            {/* 2. Main Dashboard Content Area */}
            <main className="app-main-content">
              {/* Dynamic View Header based on active nav tab */}
              <div className="dashboard-content-header">
                <div>
                  <div className="view-breadcrumb">
                    <span>Overview</span> / <strong className="text-purple">{activeNav.toUpperCase()}</strong>
                  </div>
                  <h3 className="dashboard-view-title">
                    {activeNav === 'dashboard' && 'Executive Revenue Telemetry'}
                    {activeNav === 'crm' && 'Smart CRM & Customer Deal Pipelines'}
                    {activeNav === 'automation' && 'Workflow Orchestration Engine'}
                    {activeNav === 'analytics' && 'Multi-Touch Revenue Attribution'}
                    {activeNav === 'reports' && 'Autonomous Business Reports'}
                    {activeNav === 'settings' && 'Workspace & Integration Settings'}
                  </h3>
                  <p className="dashboard-view-subtitle">
                    Viewing telemetry for <strong>{timeframe}</strong> window • Updated in real time
                  </p>
                </div>

                <div className="dashboard-view-controls">
                  {/* Functional Date Filters Toggle */}
                  <div className="timeframe-toggle-pill" role="group" aria-label="Select date filter">
                    {['Today', '7D', '30D', '90D', '1Y'].map((tf) => (
                      <button
                        key={tf}
                        type="button"
                        className={`tf-toggle-btn ${timeframe === tf ? 'tf-toggle-active' : ''}`}
                        onClick={() => handleTimeframeChange(tf)}
                        disabled={isSyncing}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="btn-app-export"
                    onClick={handleExport}
                    disabled={isExporting}
                    aria-label="Export PDF executive report"
                  >
                    {isExporting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Exporting...</span>
                      </>
                    ) : (
                      <>
                        <Download size={14} />
                        <span>Export PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Responsive Tab Switcher for Mobile when sidebar is hidden */}
              <div className="mobile-view-nav-bar" role="tablist">
                {navMenuItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`mobile-tab-btn ${activeNav === item.id ? 'tab-active' : ''}`}
                    onClick={() => setActiveNav(item.id)}
                    role="tab"
                    aria-selected={activeNav === item.id}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Syncing Overlay indicator */}
              {isSyncing && (
                <div className="dashboard-sync-banner" role="status">
                  <Loader2 size={14} className="animate-spin" />
                  <span>Syncing real-time {timeframe} pipeline data...</span>
                </div>
              )}

              {/* =========================================================
                  VIEW 1: DASHBOARD (Overview, KPIs, Recharts, Tasks, Activity)
                  ========================================================= */}
              {activeNav === 'dashboard' && (
                <>
                  {/* 4 Animated KPI Metric Cards */}
                  <div className="analytics-metrics-grid">
                    {/* 1. Revenue Overview */}
                    <div className="analytic-card">
                      <div className="analytic-card-top">
                        <span className="analytic-label">Revenue Overview</span>
                        <div className="analytic-icon purple">
                          <DollarSign size={16} />
                        </div>
                      </div>
                      <div className="analytic-value">
                        <AnimatedKPI value={currentStats.revenue} />
                      </div>
                      <div className="analytic-footer positive">
                        <ArrowUpRight size={14} />
                        <span>{currentStats.revenueGrowth} vs prior {timeframe}</span>
                      </div>
                    </div>

                    {/* 2. Total Customers */}
                    <div className="analytic-card">
                      <div className="analytic-card-top">
                        <span className="analytic-label">Total Customers</span>
                        <div className="analytic-icon blue">
                          <Users size={16} />
                        </div>
                      </div>
                      <div className="analytic-value">
                        <AnimatedKPI value={currentStats.customers} />
                      </div>
                      <div className="analytic-footer positive">
                        <ArrowUpRight size={14} />
                        <span>{currentStats.customersGrowth}</span>
                      </div>
                    </div>

                    {/* 3. Active Workflows */}
                    <div className="analytic-card">
                      <div className="analytic-card-top">
                        <span className="analytic-label">Active Workflows</span>
                        <div className="analytic-icon emerald">
                          <FolderKanban size={16} />
                        </div>
                      </div>
                      <div className="analytic-value">
                        <AnimatedKPI value={currentStats.activeProjects} />
                      </div>
                      <div className="analytic-footer neutral">
                        <Zap size={14} />
                        <span>{currentStats.projectsActive}</span>
                      </div>
                    </div>

                    {/* 4. Efficiency Score */}
                    <div className="analytic-card">
                      <div className="analytic-card-top">
                        <span className="analytic-label">Operational Health</span>
                        <div className="analytic-icon amber">
                          <TrendingUp size={16} />
                        </div>
                      </div>
                      <div className="analytic-value">
                        <AnimatedKPI value={currentStats.efficiencyScore} />
                      </div>
                      <div className="analytic-footer positive">
                        <CheckCircle2 size={14} />
                        <span>{currentStats.efficiencyNote}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Section: Recharts Analytics Chart + Task Overview */}
                  <div className="dashboard-middle-grid">
                    {/* Interactive Recharts Analytics Chart */}
                    <div className="dashboard-panel-card chart-panel-large">
                      <AnalyticsCharts data={currentStats.chart} timeframe={timeframe} />
                    </div>

                    {/* Task Overview Queue */}
                    <div className="dashboard-panel-card task-panel-card">
                      <div className="panel-card-head">
                        <div>
                          <h4 className="panel-card-title">Autonomous Task Queue</h4>
                          <p className="panel-card-sub">AI workflow action items</p>
                        </div>
                        <span className="task-count-pill">
                          {tasks.filter((t) => !t.completed).length} Pending
                        </span>
                      </div>

                      <div className="task-items-list">
                        {filteredTasks.length === 0 ? (
                          <div className="no-tasks-found">
                            <span>No tasks matched "{searchQuery}".</span>
                          </div>
                        ) : (
                          filteredTasks.map((taskItem) => (
                            <div
                              key={taskItem.id}
                              className={`task-row-item ${taskItem.completed ? 'task-done' : ''}`}
                              onClick={() => toggleTask(taskItem.id)}
                            >
                              <input
                                type="checkbox"
                                checked={taskItem.completed}
                                onChange={() => toggleTask(taskItem.id)}
                                className="task-checkbox"
                                aria-label={`Mark ${taskItem.task} as ${taskItem.completed ? 'incomplete' : 'complete'}`}
                              />
                              <div className="task-text-group">
                                <span className="task-title-text">{taskItem.task}</span>
                                <span className="task-due-text">
                                  <Clock size={11} /> {taskItem.due}
                                </span>
                              </div>
                              <span
                                className={`task-priority-tag priority-${taskItem.priority.toLowerCase()}`}
                              >
                                {taskItem.priority}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section: Recent Activity Stream */}
                  <div className="dashboard-panel-card activity-panel-card">
                    <div className="panel-card-head">
                      <div>
                        <h4 className="panel-card-title">Recent Activity Feed</h4>
                        <p className="panel-card-sub">Real-time pipeline transactions & automated bot execution</p>
                      </div>
                      <span className="live-feed-badge">
                        <span className="pulse-emerald" /> Live Feed ({filteredActivity.length})
                      </span>
                    </div>

                    <div className="activity-stream-table">
                      {filteredActivity.length === 0 ? (
                        <div className="no-activity-found">
                          <span>No activities matched "{searchQuery}".</span>
                        </div>
                      ) : (
                        filteredActivity.map((activity) => (
                          <div key={activity.id} className="activity-row-item">
                            <div className={`activity-icon-box status-${activity.status}`}>
                              {activity.type === 'deal' && <DollarSign size={14} />}
                              {activity.type === 'bot' && <Zap size={14} />}
                              {activity.type === 'lead' && <UserCheck size={14} />}
                              {activity.type === 'report' && <FileText size={14} />}
                            </div>

                            <div className="activity-content-group">
                              <span className="activity-title">{activity.title}</span>
                              <span className="activity-company">{activity.company}</span>
                            </div>

                            <div className="activity-meta-group">
                              <span className="activity-amount">{activity.amount}</span>
                              <span className="activity-time">{activity.time}</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* =========================================================
                  VIEW 2: SMART CRM (Searchable Customer Records Table)
                  ========================================================= */}
              {activeNav === 'crm' && (
                <div className="dashboard-panel-card crm-full-panel">
                  <div className="panel-card-head">
                    <div>
                      <h4 className="panel-card-title">Smart CRM Accounts Roster</h4>
                      <p className="panel-card-sub">
                        Interactive database of enterprise customer accounts, predictive health index, and deal stages.
                      </p>
                    </div>
                  </div>
                  <SmartCRMView onNotify={onNotify} />
                </div>
              )}

              {/* =========================================================
                  VIEW 3: WORKFLOW AUTOMATION (Bot Orchestration Engine)
                  ========================================================= */}
              {activeNav === 'automation' && (
                <div className="dashboard-panel-card automation-full-panel">
                  <div className="panel-card-head">
                    <div>
                      <h4 className="panel-card-title">Active AI Workflow Orchestrators</h4>
                      <p className="panel-card-sub">
                        Event-driven autonomous bots monitoring lead touchpoints, contract SLAs, and follow-ups.
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary crm-btn-sm"
                      onClick={handleRunAllBots}
                      disabled={isRunningBots}
                    >
                      {isRunningBots ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>Executing Run...</span>
                        </>
                      ) : (
                        <>
                          <Zap size={14} />
                          <span>Run All Bots</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="automation-cards-grid">
                    {automations.map((bot) => (
                      <div key={bot.id} className="automation-bot-card">
                        <div className="bot-card-top-row">
                          <div className="bot-icon-badge">
                            <Zap size={16} />
                          </div>
                          <div className="bot-switch-wrap">
                            <span className={`bot-status-tag ${bot.status ? 'status-on' : 'status-off'}`}>
                              {bot.status ? 'Active' : 'Paused'}
                            </span>
                            <button
                              type="button"
                              className={`toggle-switch-btn ${bot.status ? 'switch-checked' : ''}`}
                              onClick={() => toggleAutomationBot(bot.id)}
                              aria-label={`Toggle ${bot.name}`}
                            >
                              <span className="switch-thumb" />
                            </button>
                          </div>
                        </div>

                        <strong className="bot-name">{bot.name}</strong>

                        <div className="bot-details-box">
                          <div className="bot-detail-item">
                            <span className="detail-label">Trigger Event:</span>
                            <span className="detail-value">{bot.trigger}</span>
                          </div>
                          <div className="bot-detail-item">
                            <span className="detail-label">Autonomous Action:</span>
                            <span className="detail-value">{bot.action}</span>
                          </div>
                        </div>

                        <div className="bot-footer-row">
                          <span className="bot-exec-count">
                            <CheckCircle2 size={12} className="text-emerald" /> {bot.executions}
                          </span>
                          <span className="bot-efficiency-rate">
                            Efficiency: <strong>{bot.efficiency}</strong>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* =========================================================
                  VIEW 4: ANALYTICS (Revenue Attribution & Trajectory)
                  ========================================================= */}
              {activeNav === 'analytics' && (
                <div className="dashboard-panel-card analytics-full-panel">
                  <div className="panel-card-head">
                    <div>
                      <h4 className="panel-card-title">Multi-Touch Revenue Attribution Modeling</h4>
                      <p className="panel-card-sub">
                        Autonomous conversion tracking across marketing, outbound prospecting, and partner channels.
                      </p>
                    </div>
                  </div>

                  <AnalyticsCharts data={currentStats.chart} timeframe={timeframe} />

                  <div className="attribution-breakdown-grid">
                    <div className="attrib-channel-card">
                      <span className="channel-badge organic">Organic Search & Web</span>
                      <strong className="channel-pct">38.4%</strong>
                      <span className="channel-revenue">₹10,92,480 ARR</span>
                      <div className="channel-track">
                        <div className="channel-bar" style={{ width: '38.4%' }} />
                      </div>
                    </div>

                    <div className="attrib-channel-card">
                      <span className="channel-badge outbound">AI Outbound Prospecting</span>
                      <strong className="channel-pct">32.1%</strong>
                      <span className="channel-revenue">₹9,13,245 ARR</span>
                      <div className="channel-track">
                        <div className="channel-bar" style={{ width: '32.1%' }} />
                      </div>
                    </div>

                    <div className="attrib-channel-card">
                      <span className="channel-badge partner">Partner Referrals & Ecosystem</span>
                      <strong className="channel-pct">18.5%</strong>
                      <span className="channel-revenue">₹5,26,325 ARR</span>
                      <div className="channel-track">
                        <div className="channel-bar" style={{ width: '18.5%' }} />
                      </div>
                    </div>

                    <div className="attrib-channel-card">
                      <span className="channel-badge ads">Paid Inbound Acquisition</span>
                      <strong className="channel-pct">11.0%</strong>
                      <span className="channel-revenue">₹3,12,950 ARR</span>
                      <div className="channel-track">
                        <div className="channel-bar" style={{ width: '11.0%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================
                  VIEW 5: REPORTS (Autonomous Business Reports)
                  ========================================================= */}
              {activeNav === 'reports' && (
                <div className="dashboard-panel-card reports-full-panel">
                  <div className="panel-card-head">
                    <div>
                      <h4 className="panel-card-title">Autonomous Executive Digest Vault</h4>
                      <p className="panel-card-sub">
                        Pre-compiled board presentations, pipeline velocity heatmaps, and financial forecasts.
                      </p>
                    </div>
                  </div>

                  <div className="reports-list-container">
                    {[
                      { title: 'Q3 Enterprise Revenue Telemetry & Cohort Analysis', format: 'PDF Document', size: '2.4 MB', date: 'Generated today, 9:00 AM' },
                      { title: 'Monthly RevOps Automation Efficiency & Bot Audit', format: 'PDF Document', size: '1.8 MB', date: 'Yesterday, 6:30 PM' },
                      { title: 'Sales Rep Pipeline Velocity & Conversion Heatmap', format: 'Excel / CSV', size: '840 KB', date: '3 days ago' },
                      { title: 'Customer Churn Risk & Retention Predictive Model', format: 'PDF Document', size: '3.1 MB', date: '5 days ago' },
                    ].map((rep, idx) => (
                      <div key={idx} className="report-row-card">
                        <div className="report-icon-box">
                          {rep.format.includes('Excel') ? <FileSpreadsheet size={20} /> : <FileText size={20} />}
                        </div>
                        <div className="report-content-group">
                          <strong className="report-title">{rep.title}</strong>
                          <span className="report-meta">{rep.format} • {rep.size} • {rep.date}</span>
                        </div>
                        <button
                          type="button"
                          className="btn btn-secondary crm-btn-sm"
                          onClick={() => {
                            if (onNotify) {
                              onNotify(`Report "${rep.title.substring(0, 36)}..." downloaded`, 'success');
                            }
                          }}
                        >
                          <Download size={14} />
                          <span>Download</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* =========================================================
                  VIEW 6: SETTINGS (Workspace Preferences & Theme)
                  ========================================================= */}
              {activeNav === 'settings' && (
                <div className="dashboard-panel-card settings-full-panel">
                  <div className="panel-card-head">
                    <div>
                      <h4 className="panel-card-title">Workspace Configuration & Telemetry Controls</h4>
                      <p className="panel-card-sub">
                        Manage theme preferences, encryption parameters, and sync intervals.
                      </p>
                    </div>
                  </div>

                  <div className="settings-groups-stack">
                    <div className="settings-item-card">
                      <div>
                        <strong className="setting-title">Interface Visual Theme</strong>
                        <p className="setting-desc">Switch between high-contrast light mode and dark obsidian mode.</p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-secondary crm-btn-sm"
                        onClick={onToggleTheme}
                      >
                        <Sliders size={14} />
                        <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                      </button>
                    </div>

                    <div className="settings-item-card">
                      <div>
                        <strong className="setting-title">Autonomous Alert Level</strong>
                        <p className="setting-desc">Push instant notifications for high-yield pipeline events.</p>
                      </div>
                      <span className="setting-pill-active">
                        <Check size={12} /> High Priority Real-time
                      </span>
                    </div>

                    <div className="settings-item-card">
                      <div>
                        <strong className="setting-title">TLS 1.3 Telemetry Tunnel</strong>
                        <p className="setting-desc">SOC-2 Type II data isolation active across all connected webhooks.</p>
                      </div>
                      <span className="setting-pill-active">
                        <Check size={12} /> Encrypted & Active
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
