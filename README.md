# Nexora AI — Autonomous Business Growth & RevOps Platform

A modern, high-conversion SaaS landing page and interactive platform preview built for the **Sankar Group Front-End Development Internship Assignment**.

![Nexora AI](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop)

---

## 🚀 Overview

**Nexora AI** is an AI-powered business growth platform that unifies CRM, workflow automation, multi-touch sales analytics, and autonomous business reporting into a single command center.

- **Product Positioning**: Autonomous RevOps engine for modern revenue teams.
- **Tech Stack**: React 19, Vite, Pure CSS (Modern CSS Variables & Grid/Flexbox), Lucide React, Recharts.
- **Architecture**: 100% Client-Side Architecture with realistic sample datasets — no external paid APIs, no backend, and no databases required.

---

## ✨ Features

- **Interactive Hero Showcase**:
  - Layered 3D glassmorphism interface with floating live telemetry badges (`Automation Active`, `Enterprise-Grade Security`).
  - Overlapping Monthly ARR & Multi-Touch Attribution card with SVG sparkline curves.
  - Interactive 8-month revenue trajectory bar chart with hover tooltips.
  - Customer social proof and trust indicators.
- **Full 6-View Executive Command Center (`#dashboard`)**:
  - **Overview**: 4 animated numeric KPI metric cards (`AnimatedKPI.jsx`) with quintic easing and Indian numbering format (`en-IN`).
  - **Smart CRM**: Searchable customer roster with filter chips (`Closed Won`, `In Progress`, `Evaluating`), column sorting, and simulated AI lead enrichment.
  - **Automations**: Workflow bot orchestrator with interactive toggle switches and a simulated "Run All Bots" engine.
  - **Analytics**: Recharts Area & Bar chart modes with gradient fill, custom Indian Rupee tooltips, and channel attribution bars.
  - **Reports**: Autonomous executive digest vault with simulated PDF/CSV downloads.
  - **Settings**: Workspace controls and visual theme preferences.
- **Dark & Light Mode**: Seamless global theme toggle (`data-theme="dark" / "light"`) with high-contrast obsidian styling and smooth color transitions.
- **Notification Dropdown**: Bell icon with unread badge counter, event-categorized alerts, mark-as-read, clear-all, click-outside handling, and `Escape` key accessibility.
- **Toast Notification System**: Real-time slide-in feedback for asynchronous actions with auto-dismissal.
- **Responsive Navigation & Mobile Drawer**: Sticky navbar with hamburger drawer, scrollspy links, and mobile-friendly touch targets.
- **Pricing Calculator & Selection State**: Monthly/Annual billing toggle with plan selection mapped into the Contact/Demo request form.
- **Accessible Accordion FAQ**: Keyboard-navigable question & answer cards.
- **Interactive Contact & Lead Generation Form**: Full name and email validation with error messages and simulated submission states.

---

## 🛠️ Technology Stack

- **Frontend Library**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 8 with HMR
- **Styling**: Pure CSS (Custom Design System, CSS Variables, Flexbox, CSS Grid)
- **Icons**: Lucide React (`lucide-react`)
- **Charts**: Recharts (`recharts`)
- **Code Quality**: Oxlint (`oxlint`)

---

## 📁 Project Structure

```text
d:/Sankar-Group-Assignment/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── data/
│   │   └── mockData.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── LogoCloud.jsx
│       ├── Features.jsx
│       ├── DashboardPreview.jsx
│       ├── SmartCRMView.jsx
│       ├── AnalyticsCharts.jsx
│       ├── AnimatedKPI.jsx
│       ├── NotificationDropdown.jsx
│       ├── Toast.jsx
│       ├── HowItWorks.jsx
│       ├── Integrations.jsx
│       ├── Testimonials.jsx
│       ├── Pricing.jsx
│       ├── FAQ.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sravanthi2225/nexora-ai.git
   cd nexora-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📄 License

This project was developed for the **Sankar Group Front-End Development Internship Assignment**.
