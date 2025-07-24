"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LegalContentProps {
  children: ReactNode;
}

export default function LegalContent({ children }: LegalContentProps) {
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

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto space-y-16"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
