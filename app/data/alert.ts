export interface Alert {
  id: string;
  title: string;
  description: string;
  status: "pending" | "processing" | "error";
  timestamp: Date;
}

export const mockAlerts: Alert[] = [
  {
    id: "1",
    title: "Missing vulnerable exploit scan",
    description: "System is detecting scan error patterns, need to...",
    status: "pending",
    timestamp: new Date(),
  },
  {
    id: "2",
    title: "Processing new alert at a time",
    description: "Seeing the big picture",
    status: "processing",
    timestamp: new Date(),
  },
  {
    id: "3",
    title: "More time being SoCs",
    description: "Automation, less time on new threats",
    status: "error",
    timestamp: new Date(),
  },
];
