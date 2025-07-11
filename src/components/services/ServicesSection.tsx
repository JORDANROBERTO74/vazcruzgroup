"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Handshake,
  BarChart3,
  Users,
  Target,
  Lightbulb,
  Building2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
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

export default function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const messages = useMessages();

  // Extract services data from messages
  const servicesData = (messages as any)?.home?.services;
  const badge = servicesData?.badge;
  const title = servicesData?.title;
  const subtitle = servicesData?.subtitle;
  const items = servicesData?.items;

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

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
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Carousel className="mb-8" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {items?.map((service: any, index: number) => {
                const IconComponent =
                  serviceIcons[service.icon as keyof typeof serviceIcons];
                return (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
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
                          {service.features?.map(
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
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
