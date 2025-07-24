"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface LegalHeroProps {
  badge: {
    text: string;
    icon: LucideIcon;
  };
  title: {
    line1: string;
    line2: string;
    line3: string;
  };
  subtitle: string;
}

export default function LegalHero({ badge, title, subtitle }: LegalHeroProps) {
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

  const IconComponent = badge.icon;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="px-4 py-2 text-sm font-medium">
              <IconComponent className="w-4 h-4 mr-2" />
              {badge.text}
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6"
          >
            {title.line1}{" "}
            <span className="bg-gradient-to-r from-primary to-primary/90 bg-clip-text text-transparent">
              {title.line2}
            </span>{" "}
            {title.line3}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
