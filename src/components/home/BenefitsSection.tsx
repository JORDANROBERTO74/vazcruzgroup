"use client";

import { motion } from "framer-motion";
import { Globe, Handshake, Target, Award, Users, Shield } from "lucide-react";
import { useMessages } from "next-intl";

// Icon mapping for benefits section
const benefitIcons = {
  Globe,
  Handshake,
  Target,
  Award,
  Users,
  Shield,
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function BenefitsSection() {
  const messages = useMessages();

  // Extract benefits data from messages
  const benefitsData = (messages as any)?.home?.benefits;
  const title = benefitsData?.title;
  const subtitle = benefitsData?.subtitle;
  const items = benefitsData?.items;

  // Fallback if no benefits data
  if (!benefitsData) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              Benefits content not available
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {items?.map((benefit: any, index: number) => {
            const IconComponent =
              benefitIcons[benefit.icon as keyof typeof benefitIcons];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
