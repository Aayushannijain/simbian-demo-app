interface AlertCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  variant: "warning" | "danger" | "info";
}

export function AlertCard({ icon, title, value, variant }: AlertCardProps) {
  const variantStyles = {
    warning: "bg-yellow-500/20 text-yellow-500",
    danger: "bg-red-500/20 text-red-500",
    info: "bg-blue-500/20 text-blue-500",
  };

  return (
    <div className="threat-card bg-opacity-20 backdrop-blur-lg">
      <div className="flex items-center mb-4">
        <div className={`icon-container ${variantStyles[variant]}`}>{icon}</div>
        <h3 className="ml-3 text-lg font-semibold">{title}</h3>
      </div>
      <div className="stat-value text-red-400">{value}</div>
    </div>
  );
}
