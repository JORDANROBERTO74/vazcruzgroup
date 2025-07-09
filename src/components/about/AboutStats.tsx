"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Globe,
  Handshake,
  Award,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useMessages } from "next-intl";
import React from "react";

// Icon mapping for stats section
const statsIcons = {
  TrendingUp,
  Globe,
  Handshake,
  Award,
  CheckCircle,
  Clock,
};

export default function AboutStats() {
  const messages = useMessages();

  // Extract stats data from messages
  const statsData = (messages as any)?.about?.stats;
  const title = statsData?.title;
  const subtitle = statsData?.subtitle;
  const sectionTitle = statsData?.sectionTitle;
  const sectionSubtitle = statsData?.sectionSubtitle;
  const items = statsData?.items;
  const cta = statsData?.cta;

  // Fallback if no stats data
  if (!statsData) {
    return (
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <p className="text-primary-foreground">
              Stats content not available
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              {sectionTitle}
            </h3>
            <p className="text-primary-foreground/70">{sectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {items?.map((stat: any, index: number) => {
              const IconComponent =
                statsIcons[stat.icon as keyof typeof statsIcons];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-primary-foreground/10 rounded-xl p-4 mb-3 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                    )}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80 text-sm font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-primary-foreground/60 text-xs">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-foreground/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-primary-foreground mb-3">
              {cta?.title}
            </h4>
            <p className="text-primary-foreground/80 mb-4">{cta?.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {cta?.stats?.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/70 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
