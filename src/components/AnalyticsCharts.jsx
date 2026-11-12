import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { BarChart3, LineChart, Sparkles } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const actual = payload.find((p) => p.dataKey === 'actual');
    const projected = payload.find((p) => p.dataKey === 'projected');

    return (
      <div className="recharts-custom-tooltip">
        <p className="tooltip-label">
          <Sparkles size={12} className="text-purple" />
          <strong>{label}</strong>
        </p>
        {actual && (
          <div className="tooltip-row actual-row">
            <span className="tooltip-dot actual-dot" />
            <span className="tooltip-name">Actual Sales:</span>
            <span className="tooltip-val">₹{(actual.value * 10000).toLocaleString('en-IN')}</span>
          </div>
        )}
        {projected && (
          <div className="tooltip-row projected-row">
            <span className="tooltip-dot projected-dot" />
            <span className="tooltip-name">AI Projected Target:</span>
            <span className="tooltip-val">₹{(projected.value * 10000).toLocaleString('en-IN')}</span>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default function AnalyticsCharts({ data = [], timeframe = '30D' }) {
  const [chartType, setChartType] = useState('area'); // 'area' | 'bar'

  return (
    <div className="recharts-analytics-wrapper">
      <div className="recharts-chart-header">
        <div>
          <h4 className="panel-card-title">Sales Trajectory & Forecast ({timeframe})</h4>
          <p className="panel-card-sub">Interactive revenue simulation powered by predictive modeling</p>
        </div>

        <div className="chart-type-toggle-pills" role="group" aria-label="Toggle Chart Style">
          <button
            type="button"
            className={`chart-type-btn ${chartType === 'area' ? 'btn-active' : ''}`}
            onClick={() => setChartType('area')}
            aria-label="Area Chart view"
          >
            <LineChart size={13} />
            <span>Area</span>
          </button>
          <button
            type="button"
            className={`chart-type-btn ${chartType === 'bar' ? 'btn-active' : ''}`}
            onClick={() => setChartType('bar')}
            aria-label="Bar Chart view"
          >
            <BarChart3 size={13} />
            <span>Bars</span>
          </button>
        </div>
      </div>

      <div className="recharts-container-box">
        <ResponsiveContainer width="100%" height={230}>
          {chartType === 'area' ? (
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7357F6" stopOpacity={0.38} />
                  <stop offset="95%" stopColor="#7357F6" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="projectedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4D83F7" stopOpacity={0.22} />
                  <stop offset="95%" stopColor="#4D83F7" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color-subtle)" />
              <XAxis
                dataKey="month"
                stroke="var(--color-text-secondary)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--color-text-secondary)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `${val}L`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="projected"
                stroke="#4D83F7"
                strokeWidth={2}
                strokeDasharray="4 4"
                fillOpacity={1}
                fill="url(#projectedGradient)"
                name="Projected Target"
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#7357F6"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#actualGradient)"
                name="Actual Sales"
                activeDot={{ r: 6, fill: '#7357F6', stroke: '#FFFFFF', strokeWidth: 2 }}
              />
            </AreaChart>
          ) : (
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color-subtle)" />
              <XAxis
                dataKey="month"
                stroke="var(--color-text-secondary)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--color-text-secondary)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `${val}L`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="projected" fill="#E2E6F5" radius={[4, 4, 0, 0]} name="Projected Target" />
              <Bar dataKey="actual" fill="#7357F6" radius={[4, 4, 0, 0]} name="Actual Sales" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="recharts-legend-footer">
        <div className="legend-chip">
          <span className="legend-dot actual-dot" />
          <span>Actual Closed Revenue</span>
        </div>
        <div className="legend-chip">
          <span className="legend-dot projected-dot" />
          <span>AI Projected Goal</span>
        </div>
      </div>
    </div>
  );
}
