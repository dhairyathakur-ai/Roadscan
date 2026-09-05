
"use client";

import { useState } from "react";

const stats = [
  { value: "1,284", label: "Road Reports" },
  { value: "347", label: "Defects Detected" },
  { value: "89%", label: "AI Accuracy" },
  { value: "24/7", label: "Monitoring" },
];

const defects = [
  { name: "Potholes", count: 124, level: "High", width: "78%" },
  { name: "Road Cracks", count: 96, level: "Medium", width: "61%" },
  { name: "Surface Damage", count: 72, level: "Medium", width: "46%" },
  { name: "Other Issues", count: 55, level: "Low", width: "34%" },
];

const navigation = ["Overview", "Detection", "Map", "Analytics"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold shadow-lg shadow-blue-600/20">
              R
            </div>

            <div>
              <div className="text-xl font-bold">
                Road<span className="text-blue-500">Scan</span>
              </div>

              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                AI Road Intelligence
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 md:flex">
            {navigation.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={
                  "rounded-lg px-4 py-2 text-sm transition " +
                  (activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white")
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sign in */}
          <button className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition hover:bg-blue-600 hover:text-white">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          {/* Hero text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              AI Monitoring System
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              See the road.
              <br />
              <span className="text-blue-500">Detect the problem.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              RoadScan uses artificial intelligence to identify road defects,
              analyze their severity, and turn infrastructure data into
              actionable insights.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">
                Analyze Road Image
                <span className="ml-2">→</span>
              </button>

              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white">
                Explore Dashboard
              </button>
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#070b14] bg-blue-600 text-xs">
                  AI
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#070b14] bg-slate-700 text-xs">
                  ML
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#070b14] bg-slate-600 text-xs">
                  +
                </div>
              </div>

              <span>Built for smarter infrastructure decisions</span>
            </div>
          </div>

          {/* AI Detection Panel */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1320] shadow-2xl">
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold">AI Detection</p>

                  <p className="text-xs text-slate-500">
                    Latest road analysis
                  </p>
                </div>

                <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Analysis complete
                </span>
              </div>

              {/* Image preview */}
              <div className="relative m-5 flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                {/* Grid */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute left-[20%] top-0 h-full w-px bg-white/20" />
                  <div className="absolute left-[50%] top-0 h-full w-px bg-white/20" />
                  <div className="absolute left-[80%] top-0 h-full w-px bg-white/20" />

                  <div className="absolute left-0 top-[35%] h-px w-full bg-white/20" />
                  <div className="absolute left-0 top-[70%] h-px w-full bg-white/20" />
                </div>

                {/* Pothole detection */}
                <div className="absolute left-[28%] top-[38%] h-20 w-28 rounded-lg border-2 border-red-400 bg-red-400/10">
                  <span className="absolute -top-6 left-0 rounded bg-red-500 px-2 py-1 text-[10px] font-bold">
                    POTHOLE
                  </span>
                </div>

                {/* Crack detection */}
                <div className="absolute right-[18%] top-[58%] h-12 w-24 rounded-lg border-2 border-yellow-400 bg-yellow-400/10">
                  <span className="absolute -top-6 left-0 rounded bg-yellow-500 px-2 py-1 text-[10px] font-bold text-black">
                    CRACK
                  </span>
                </div>

                <div className="relative z-10 text-center">
                  <div className="text-4xl">ROAD</div>

                  <p className="mt-2 text-xs text-slate-400">
                    Road image preview
                  </p>
                </div>
              </div>

              {/* Detection stats */}
              <div className="grid grid-cols-2 gap-3 px-5 pb-5">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                  <p className="text-xs text-slate-500">Highest severity</p>

                  <p className="mt-1 text-lg font-bold text-red-400">
                    HIGH
                  </p>
                </div>

                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <p className="text-xs text-slate-500">Confidence</p>

                  <p className="mt-1 text-lg font-bold text-blue-400">
                    94.7%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold tracking-tight">
                {stat.value}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Defect overview */}
          <div className="rounded-3xl border border-white/10 bg-[#0d1320] p-7 lg:col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                  Detection Overview
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Road defects detected
                </h2>
              </div>

              <span className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400">
                This month
              </span>
            </div>

            <div className="mt-8 space-y-6">
              {defects.map((defect) => (
                <div key={defect.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">
                      {defect.name}
                    </span>

                    <span className="text-slate-500">
                      {defect.count} detected · {defect.level}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: defect.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Road health */}
          <div className="rounded-3xl border border-white/10 bg-[#0d1320] p-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
              Road Health
            </p>

            <h2 className="mt-2 text-2xl font-bold">89%</h2>

            <div className="mt-7 flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-blue-500/20">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/5">
                  <span className="text-3xl font-bold">89</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm leading-6 text-slate-500">
              Overall infrastructure health based on reported defects and AI
              severity analysis.
            </p>

            <button className="mt-6 w-full rounded-xl border border-white/10 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
              View Detailed Analytics
            </button>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              How RoadScan Works
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From road image to actionable insight.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              A simple AI-powered workflow designed to identify problems and
              help prioritize infrastructure improvements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0d1320] p-7 transition hover:-translate-y-1 hover:border-blue-500/30">
              <span className="text-sm font-bold text-blue-500">
                01
              </span>

              <h3 className="mt-5 text-xl font-semibold">Upload</h3>

              <p className="mt-3 leading-7 text-slate-500">
                Submit a road image through the RoadScan platform.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0d1320] p-7 transition hover:-translate-y-1 hover:border-blue-500/30">
              <span className="text-sm font-bold text-blue-500">
                02
              </span>

              <h3 className="mt-5 text-xl font-semibold">Analyze</h3>

              <p className="mt-3 leading-7 text-slate-500">
                AI identifies defects and estimates their severity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0d1320] p-7 transition hover:-translate-y-1 hover:border-blue-500/30">
              <span className="text-sm font-bold text-blue-500">
                03
              </span>

              <h3 className="mt-5 text-xl font-semibold">Act</h3>

              <p className="mt-3 leading-7 text-slate-500">
                Use location and severity insights to prioritize repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-600/10 px-8 py-16 text-center">
          <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Start Monitoring
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
              Make every road smarter.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Upload a road image and let RoadScan turn visual data into
              meaningful infrastructure insights.
            </p>

            <button className="mt-8 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold shadow-xl shadow-blue-600/20 transition hover:bg-blue-500">
              Start AI Analysis →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Road<span className="text-blue-500">Scan</span>
          </p>

          <p>AI-Powered Road Intelligence</p>
        </div>
      </footer>
    </main>
  );
}

