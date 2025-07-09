"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Target,
  Award,
  Heart,
  Zap,
  Globe,
  Handshake,
} from "lucide-react";
import { useMessages } from "next-intl";
import React from "react";

// Icon mapping for values section
const valueIcons = {
  Shield,
  Users,
  Target,
  Award,
  Heart,
  Zap,
  Globe,
  Handshake,
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutValues() {
  const messages = useMessages();

  // Extract values data from messages
  const valuesData = (messages as any)?.about?.values;
  const title = valuesData?.title;
  const subtitle = valuesData?.subtitle;
  const items = valuesData?.items;

  // Fallback if no values data
  if (!valuesData) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              Values content not available
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {items?.map((value: any, index: number) => {
            const IconComponent =
              valueIcons[value.icon as keyof typeof valueIcons];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
