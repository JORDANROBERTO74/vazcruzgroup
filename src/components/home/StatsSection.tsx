"use client";

import { motion } from "framer-motion";
import { useMessages } from "next-intl";

export default function StatsSection() {
  const messages = useMessages();

  // Extract stats data from messages
  const statsData = (messages as any)?.home?.stats;
  const title = statsData?.title;
  const subtitle = statsData?.subtitle;
  const items = statsData?.items;

  // Fallback if no stats data
  if (!statsData) {
    return (
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4">
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
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {items?.map((stat: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-primary-foreground"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
