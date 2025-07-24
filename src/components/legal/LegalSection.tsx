"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface LegalSectionItem {
  title: string;
  description: string;
  icon: string;
}

interface LegalSectionProps {
  title: string;
  subtitle: string;
  items: LegalSectionItem[];
  iconMapping: Record<string, LucideIcon>;
  gridCols?:
    | "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    | "grid-cols-1 md:grid-cols-3"
    | "grid-cols-1 md:grid-cols-2";
}

export default function LegalSection({
  title,
  subtitle,
  items,
  iconMapping,
  gridCols = "grid-cols-1 md:grid-cols-3",
}: LegalSectionProps) {
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
    <motion.div variants={itemVariants}>
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className={`grid ${gridCols} gap-8`}>
        {items.map((item, idx) => {
          const IconComponent = iconMapping[item.icon];
          return (
            <Card
              key={idx}
              className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
            >
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl text-card-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}
