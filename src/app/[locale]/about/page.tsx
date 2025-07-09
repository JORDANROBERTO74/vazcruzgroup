"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutStats from "@/components/about/AboutStats";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <AboutHero />

      {/* Mission & Vision Section */}
      <AboutMission />

      {/* Values Section */}
      <AboutValues />

      {/* Stats Section */}
      <AboutStats />
    </div>
  );
}
