"use client";

import { motion } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  Handshake,
  BarChart3,
  Users,
  Target,
  Lightbulb,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMessages } from "next-intl";

// Icon mapping for services section
const serviceIcons = {
  Handshake,
  BarChart3,
  Target,
  Users,
  Lightbulb,
  Building2,
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

export default function ServicesSection() {
  const messages = useMessages();

  // Extract services data from messages
  const servicesData = (messages as any)?.home?.services;
  const badge = servicesData?.badge;
  const title = servicesData?.title;
  const subtitle = servicesData?.subtitle;
  const items = servicesData?.items;

  // Fallback if no services data
  if (!servicesData) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              Services content not available
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
          {items?.map((service: any, index: number) => {
            const IconComponent =
              serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                  <CardHeader>
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-center md:text-left text-xl text-card-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-center md:text-left text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features?.map((feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
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
