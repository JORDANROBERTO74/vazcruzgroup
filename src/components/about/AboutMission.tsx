"use client";

import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMessages } from "next-intl";
import React from "react";

// Icon mapping for mission section
const missionIcons = {
  Target,
  Eye,
  Lightbulb,
  ArrowRight,
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutMission() {
  const messages = useMessages();

  // Extract mission data from messages
  const missionData = (messages as any)?.about?.mission;
  const badge = missionData?.badge;
  const title = missionData?.title;
  const subtitle = missionData?.subtitle;
  const items = missionData?.items;

  // Fallback if no mission data
  if (!missionData) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              Mission content not available
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            {badge}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items?.map((item: any, index: number) => {
            const IconComponent =
              missionIcons[item.icon as keyof typeof missionIcons];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      )}
                    </div>
                    <CardTitle className="text-xl text-card-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights?.map(
                        (highlight: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
