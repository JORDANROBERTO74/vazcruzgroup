"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMessages } from "next-intl";
import {
  Handshake,
  BarChart3,
  Target,
  Users,
  Building2,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

// Icon mapping for categories
const categoryIcons = {
  Handshake,
  BarChart3,
  Target,
  Users,
  Building2,
  Lightbulb,
};

export default function ServicesCategories() {
  const messages = useMessages();
  const router = useRouter();
  const { locale } = useParams();

  // Extract categories data from messages
  const categoriesData = (messages as any)?.services?.categories;
  const badge = categoriesData?.badge;
  const title = categoriesData?.title;
  const subtitle = categoriesData?.subtitle;
  const categories = categoriesData?.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Fallback if no categories data
  if (!categoriesData) {
    return (
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              Services categories not available
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              {badge}
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              {title}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {categories?.map((category: any, index: number) => {
            const IconComponent =
              categoryIcons[category.icon as keyof typeof categoryIcons];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-center md:text-left text-xl text-card-foreground">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-center md:text-left text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between flex-1">
                    <div>
                      <ul className="space-y-2">
                        {category.features?.map(
                          (feature: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <Button
                        type="button"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                        onClick={() => {
                          router.push(`/${locale}/services/${category.slug}`);
                        }}
                      >
                        Ver más
                      </Button>
                    </div>
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
