const STATUS_COLORS = {
  completed: "#05a301",
  progress: "#0225ff",
  "not-started": "#f21e1e",
};

function StatusChart({ percentage, label, status }) {
  const statusColor = STATUS_COLORS[status] || STATUS_COLORS["not-started"];

  const conicGradientStyle = {
    background: `conic-gradient(
      ${statusColor} 0% ${percentage}%, 
      #E5E7EB ${percentage}% 100%
    )`,
  };

  return (
    <div className="status-chart">
      <div className="status-chart__visual">
        <div
          className="status-chart__ring status-chart__ring--completed"
          style={conicGradientStyle}
        >
          <span className="status-chart__percentage">{percentage}%</span>
        </div>
      </div>

      <p className="status-chart__label">
        <span
          className={`status-chart__dot status-chart__dot--${status}`}
        ></span>

        {label}
      </p>
    </div>
  );
}

export default StatusChart;
