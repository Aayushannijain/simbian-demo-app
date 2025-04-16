"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, XCircle, Activity } from "lucide-react";
import { motion } from "framer-motion";

import { Navbar } from "./components/common/Navbar";
import { SectionContainer } from "./components/common/SectionContainer";
import { MetricCard } from "./components/common/MetricCard";
import { AlertFlow } from "./components/withoutSimbian/AlertFlow";
import { mockAlerts } from "./data/alert";

export default function Home() {
  const router = useRouter();
  const [ignoredAlerts, setIgnoredAlerts] = useState(193);
  const [wronglyClosed, setWronglyClosed] = useState(23);
  const [activeThreats, setActiveThreats] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const metricInterval = setInterval(() => {
      setIgnoredAlerts(Math.floor(Math.random() * (200 - 180) + 180));
      setWronglyClosed(Math.floor(Math.random() * (25 - 20) + 20));
      setActiveThreats(Math.floor(Math.random() * (3 - 1) + 1));
    }, 1000);

    const timeout = setTimeout(() => {
      setFadeOut(true); // trigger fade out animation
    }, 4000);

    return () => {
      clearInterval(metricInterval);
      clearTimeout(timeout);
    };
  }, []);

  const handleAnimationComplete = () => {
    if (fadeOut) {
      router.push("/withSimbian");
    }
  };

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        onAnimationComplete={handleAnimationComplete}
        className="min-h-screen py-12"
      >
        <SectionContainer>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-blue-500">
              Without Simbian
            </h1>
            <p className="text-xl text-white/70">
              Traditional security operations face these challenges daily
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
                icon={<Activity className="w-6 h-6 text-red-500" />}
                title="Active Threats"
                value={activeThreats}
                iconContainerClass="bg-red-500/20"
                className="animate-float"
                style={{ animationDelay: "0.4s" }}
              />
            </div>

            <div className="space-y-8 mt-8 md:mt-0">
              <AlertFlow alerts={mockAlerts} />
              <div className="flex justify-center mt-8">
                {/* Button is still shown, but fades out with the whole section */}
                <a
                  href="/withSimbian"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <span>See how Simbian helps</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SectionContainer>
      </motion.main>
    </>
  );
}
