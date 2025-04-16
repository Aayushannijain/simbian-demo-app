"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Shield,
  AlertTriangle,
  XCircle,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "../components/common/Navbar";
import { SectionContainer } from "../components/common/SectionContainer";
import { MetricCard } from "../components/common/MetricCard";
import { StepFlow } from "./StepFlow";

export default function WithSimbian() {
  const router = useRouter();
  const [ignoredAlerts, setIgnoredAlerts] = useState(175);
  const [wronglyClosed, setWronglyClosed] = useState(21);
  const [activeThreats, setActiveThreats] = useState(3);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIgnoredAlerts(Math.floor(Math.random() * (200 - 150) + 150));
      setWronglyClosed(Math.floor(Math.random() * (25 - 15) + 15));
      setActiveThreats(Math.floor(Math.random() * (5 - 1) + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      title: "Triaged & Reported",
      description: "The SOC Agent handled investigation and reporting",
    },
    {
      icon: <Activity className="w-5 h-5 text-green-400" />,
      title: "Less noise",
      description: "90% of alerts resolved automatically, 24/7",
    },
    {
      icon: <ArrowRight className="w-5 h-5 text-purple-400" />,
      title: "Adapts automatically",
      description:
        "AI SOCs needed, investigates every alert with best of Simbian's knowledge",
    },
  ];

  const handleBack = () => {
    setFadeOut(true);
  };

  const handleAnimationComplete = () => {
    if (fadeOut) {
      router.push("/");
    }
  };

  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen py-12 transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
        onTransitionEnd={handleAnimationComplete}
      >
        <SectionContainer>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              With Simbian
            </h1>
            <p className="text-xl text-white/70">
              Relax. Our AI Agents will take it from here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <MetricCard
                icon={<AlertTriangle className="w-6 h-6 text-yellow-500" />}
                title="Ignored Alerts"
                value={ignoredAlerts}
                iconContainerClass="bg-yellow-500/20"
              />
              <MetricCard
                icon={<XCircle className="w-6 h-6 text-red-500" />}
                title="Wrongly Closed"
                value={wronglyClosed}
                iconContainerClass="bg-red-500/20"
                className="animate-float"
                style={{ animationDelay: "0.2s" }}
              />
              <MetricCard
                icon={<Activity className="w-6 h-6 text-blue-500" />}
                title="Active Threats"
                value={activeThreats}
                iconContainerClass="bg-blue-500/20"
                className="animate-float"
                style={{ animationDelay: "0.4s" }}
              />
            </div>

            <div className="space-y-8 mt-8 md:mt-0">
              <StepFlow steps={steps} />
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={handleBack}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              ← Back to Without Simbian
            </button>
          </div>
        </SectionContainer>
      </main>
    </>
  );
}
