import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Shield } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simbian - AI Security Platform",
  description: "Advanced AI-powered security monitoring platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold">Simbian</span>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="nav-link">
                  Products
                </a>
                <a href="#" className="nav-link">
                  Company
                </a>
                <a href="#" className="nav-link">
                  Resources
                </a>
                <a href="#" className="nav-link">
                  Blog
                </a>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
