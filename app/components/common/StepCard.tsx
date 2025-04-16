interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <div className="flex items-start">
      <div className="icon-container shrink-0">{icon}</div>
      <div className="ml-4">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
