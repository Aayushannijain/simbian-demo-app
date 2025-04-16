# Simbian Demo App

This is a modern, animated demo built with **Next.js App Router**, **Tailwind CSS**, and **Framer Motion**, designed to showcase the difference in security alert handling _with_ and _without_ Simbian.

## 💡 Thought Process

The goal was to simulate a real-world scenario in SOC environments, where analysts waste time on false positives. The app uses two modes — “Without Simbian” (manual and inefficient) and “With Simbian” (automated, AI-powered). Cards, step flows, and alert simulations bring the comparison to life with real-time animations and transitions.

## ⚙️ Stack & Libraries

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide-react** icons for visual cues
- **React Hooks** for toggling views and dynamic effects

## 🚧 Known Issues / Improvements

- Alerts currently use randomized dummy content — in a real app, this would be fed by live data or backend simulation.
- Some responsiveness improvements could be made for very small screens.
- With more time, I’d add audio feedback, more alert types, and possibly timeline-based transitions.

## 🚀 Deployment

This app is ready to deploy on **Vercel**. Just push to GitHub and connect your repo at [vercel.com](https://vercel.com/).

---
