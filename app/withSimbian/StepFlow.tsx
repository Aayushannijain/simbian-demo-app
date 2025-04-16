interface StepFlowProps {
  steps: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export function StepFlow({ steps }: StepFlowProps) {
  return (
    <div className="gradient-border">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-6">Key Features</h3>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="icon-container shrink-0">{step.icon}</div>
              <div className="ml-4">
                <h4 className="font-medium">{step.title}</h4>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
