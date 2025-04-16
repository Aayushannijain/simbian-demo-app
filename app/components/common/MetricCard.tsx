interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  className?: string;
  iconContainerClass?: string;
}

export function MetricCard({
  icon,
  title,
  value,
  className = "",
  iconContainerClass = "",
}: MetricCardProps) {
  return (
    <div className={`threat-card animate-float ${className}`}>
      <div className="flex items-center mb-4">
        <div className={`icon-container ${iconContainerClass}`}>{icon}</div>
        <h3 className="ml-3 text-lg font-semibold">{title}</h3>
      </div>
      <div className="stat-value">{value}</div>
    </div>
  );
}
