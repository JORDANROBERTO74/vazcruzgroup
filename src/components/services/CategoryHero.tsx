"use client";

import { useMessages } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface CategoryHeroProps {
  category: any;
  locale: string;
}

export default function CategoryHero({ category, locale }: CategoryHeroProps) {
  const messages = useMessages();
  const router = useRouter();

  // Extract translations
  const heroTranslations = (messages as any)?.services?.category?.hero;
  const categoryTranslations = (messages as any)?.services?.category;
  const stats = (messages as any)?.home?.testimonials;
  const homeStats = (messages as any)?.home?.stats?.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="-mt-[64px] pt-20 pb-12 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.div variants={itemVariants} className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push(`/${locale}/services`)}
            className="text-muted-foreground hover:text-foreground hover:bg-blue-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {heroTranslations?.breadcrumb?.back || categoryTranslations?.goBack}
          </Button>
        </motion.div>

        {/* Hero Section - Optimized for Conversion */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Title with Value Proposition */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
            {category.title}
          </h1>

          {/* Compelling Description */}
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            {category.description}
          </p>

          {/* Social Proof & Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-yellow-400 fill-current">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">
                {(
                  stats?.items?.reduce(
                    (acc: number, t: any) => acc + t.rating,
                    0
                  ) / stats?.items?.length
                ).toFixed(1)}
                /5{" "}
                {heroTranslations?.stats?.rating || stats?.stats?.averageRating}
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="w-4 h-4 text-blue-500 mr-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span>
                {homeStats?.[2]?.number}{" "}
                {heroTranslations?.stats?.clients || homeStats?.[2]?.label}
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="w-4 h-4 text-green-500 mr-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
              </div>
              <span>
                {homeStats?.[3]?.number}{" "}
                {heroTranslations?.stats?.projects || homeStats?.[3]?.label}
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="w-4 h-4 text-purple-500 mr-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span>
                {homeStats?.[1]?.number}{" "}
                {heroTranslations?.stats?.markets || homeStats?.[1]?.label}
              </span>
            </div>
          </div>

          {/* Quick CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const productsSection =
                  document.getElementById("products-section");
                productsSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {heroTranslations?.cta?.primary || categoryTranslations?.button}
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 hover:bg-blue-50 transition-all duration-300"
              onClick={() => {
                router.push(`/${locale}/contact`);
              }}
            >
              {heroTranslations?.cta?.secondary ||
                categoryTranslations?.button1}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
