"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Shield,
  Handshake,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useLocale, useMessages } from "next-intl";
import React from "react"; // Added missing import for React

// Icon mapping for hero section
const heroIcons = {
  Building2,
  Handshake,
  Globe,
  Shield,
  ArrowRight,
  TrendingUp,
};

export default function HeroSection() {
  const router = useRouter();
  const locale = useLocale();
  const messages = useMessages();

  // Extract hero data from messages
  const heroData = (messages as any)?.home?.hero;
  const badge = heroData?.badge;
  const title = heroData?.title;
  const subtitle = heroData?.subtitle;
  const benefits = heroData?.benefits;
  const cta = heroData?.cta;
  const stats = heroData?.stats;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Fallback if no hero data
  if (!heroData) {
    return (
      <section className="-mt-[30px] lg:-mt-[64px] h-full md:h-full lg:h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-muted-foreground">Hero content not available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="-mt-[30px] lg:-mt-[64px] h-full relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full"
        >
          {/* Left Column - Main Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 mb-12 lg:mb-0"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium"
              >
                {badge?.icon &&
                  heroIcons[badge.icon as keyof typeof heroIcons] &&
                  React.createElement(
                    heroIcons[badge.icon as keyof typeof heroIcons],
                    {
                      className: "w-4 h-4 mr-2",
                    }
                  )}
                {badge?.text}
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-col gap-0 text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                <div className="leading-[1.2]">{title?.line1}</div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 leading-[1.2]">
                  {title?.line2}
                </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 leading-[1.2]">
                  {title?.line3}
                </div>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6"
            >
              {benefits?.map((benefit: any, index: number) => {
                const IconComponent =
                  heroIcons[benefit.icon as keyof typeof heroIcons];
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {IconComponent && (
                        <IconComponent className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {benefit.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-lg w-full md:w-auto"
                onClick={() => {
                  router.push(`/${locale}/services`);
                }}
              >
                {cta?.text}
                {cta?.icon &&
                  heroIcons[cta.icon as keyof typeof heroIcons] &&
                  React.createElement(
                    heroIcons[cta.icon as keyof typeof heroIcons],
                    {
                      className: "h-5 w-5",
                    }
                  )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Graph Transformation */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{stats?.title}</h3>
                      {stats?.icon &&
                        heroIcons[stats.icon as keyof typeof heroIcons] &&
                        React.createElement(
                          heroIcons[stats.icon as keyof typeof heroIcons],
                          {
                            className: "w-6 h-6",
                          }
                        )}
                    </div>
                    <p className="text-primary-foreground/80 text-sm">
                      {stats?.subtitle}
                    </p>

                    <div className="space-y-4">
                      {stats?.metrics?.map((metric: any, index: number) => (
                        <div key={index}>
                          <div className="flex items-center justify-between">
                            <span>{metric.label}</span>
                            <span className="font-semibold">
                              {metric.value}
                            </span>
                          </div>
                          <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                            <div
                              className="bg-primary-foreground h-2 rounded-full"
                              style={{ width: `${metric.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
