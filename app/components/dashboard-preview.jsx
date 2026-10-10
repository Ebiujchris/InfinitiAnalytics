import { ArrowDown, BarChart3, Database, Layers3, Workflow } from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="dashboard-wrap" aria-label="Illustrative analytics dashboard">
      <div className="dashboard-window">
        <div className="dashboard-topbar">
          <div className="window-controls" aria-hidden="true"><i /><i /><i /></div>
          <span>YOUR BUSINESS / OVERVIEW</span>
          <span className="dashboard-period">THIS QUARTER <ArrowDown size={11} /></span>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-sidebar" aria-hidden="true">
            <span className="sidebar-logo"><Layers3 size={16} /></span>
            <span className="sidebar-item selected"><BarChart3 size={15} /></span>
            <span className="sidebar-item"><Database size={15} /></span>
            <span className="sidebar-item"><Workflow size={15} /></span>
          </div>
          <div className="dashboard-content">
            <div className="dash-heading-row">
              <div><span className="dash-overline">A CLEARER VIEW</span><h2>Performance overview</h2></div>
              <span className="dash-status"><i /> Data connected</span>
            </div>
            <div className="dash-summary-grid">
              <div className="dash-summary"><span>Revenue</span><strong>Track what matters</strong><small><i /> Trends over time</small></div>
              <div className="dash-summary"><span>Customers</span><strong>See who you serve</strong><small><i /> Understand patterns</small></div>
              <div className="dash-summary"><span>Operations</span><strong>Know what to improve</strong><small><i /> Find bottlenecks</small></div>
            </div>
            <div className="chart-panel">
              <div className="chart-heading"><div><span>BUSINESS PERFORMANCE</span><strong>One source of clarity</strong></div><span className="chart-legend"><i /> Key indicators</span></div>
              <div className="chart-area" aria-hidden="true">
                <div className="chart-y-labels"><span>High</span><span>Medium</span><span>Low</span></div>
                <div className="chart-plot">
                  <i className="chart-guide guide-one" /><i className="chart-guide guide-two" /><i className="chart-guide guide-three" />
                  <div className="chart-columns"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                  <svg className="chart-stroke" viewBox="0 0 520 116" preserveAspectRatio="none" role="presentation" aria-hidden="true">
                    <path d="M0 91 C30 91 34 69 70 74 S109 85 143 63 S184 78 217 50 S265 63 294 45 S341 59 372 30 S420 42 450 19 S491 30 520 7" />
                  </svg>
                </div>
                <div className="chart-x-labels"><span>WEEK 01</span><span>WEEK 04</span><span>WEEK 08</span><span>WEEK 12</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-note"><span className="note-icon"><BarChart3 size={15} /></span><span>Less guesswork.<br /><strong>More informed decisions.</strong></span></div>
    </div>
  );
}
