interface AlertFlowProps {
  alerts: {
    title: string;
    description: string;
    status: "pending" | "processing" | "error";
  }[];
}

export function AlertFlow({ alerts }: AlertFlowProps) {
  const statusStyles = {
    pending: "text-yellow-500",
    processing: "text-blue-500",
    error: "text-red-500",
  };

  return (
    <div className="alert-flow-dark">
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`alert-item-dark ${statusStyles[alert.status]}`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{alert.title}</h4>
              <div
                className={`px-2 py-1 rounded-full text-sm ${
                  alert.status === "pending"
                    ? "bg-yellow-500/20"
                    : alert.status === "processing"
                    ? "bg-blue-500/20"
                    : "bg-red-500/20"
                }`}
              >
                {alert.status}
              </div>
            </div>
            <p className="text-sm text-white/70">{alert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
