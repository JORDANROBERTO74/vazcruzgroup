"use client";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesCategories from "@/components/services/ServicesCategories";
import CTASection from "@/components/home/CTASection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <ServicesHero />

      {/* Categories Section */}
      <ServicesCategories />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
