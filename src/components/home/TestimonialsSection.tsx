"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Separator } from "@/components/ui/separator";

// Colores aleatorios similares a los de Google
const avatarColors = [
  "bg-red-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-indigo-500",
  "bg-blue-500",
  "bg-cyan-500",
  "bg-teal-500",
  "bg-green-500",
  "bg-lime-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-amber-500",
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const messages = useMessages();

  // Extract testimonials data from messages
  const testimonialsData = (messages as any)?.home?.testimonials;
  const title = testimonialsData?.title;
  const subtitle = testimonialsData?.subtitle;
  const items = testimonialsData?.items;

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
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  // Fallback if no testimonials data
  if (!testimonialsData) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              Testimonials content not available
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
              {items?.map((testimonial: any, index: number) => (
                <CarouselItem key={index} className="basis-full md:basis-1/4">
                  <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                    <CardHeader className="pb-4">
                      {/* Header: Avatar, Name, Date, and Google Logo */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10 border-2 border-card">
                            <AvatarFallback
                              className={`${
                                avatarColors[index % avatarColors.length]
                              } text-white text-sm font-medium`}
                            >
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-card-foreground text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs text-muted-foreground/70">
                              {testimonial.date}
                            </p>
                          </div>
                        </div>
                        {/* Google Logo */}
                        <div className="flex items-center">
                          <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => {
                          const starValue = i + 1;
                          const rating = testimonial.rating;

                          if (starValue <= Math.floor(rating)) {
                            // Estrella completa
                            return (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                              />
                            );
                          } else if (
                            starValue === Math.ceil(rating) &&
                            rating % 1 !== 0
                          ) {
                            // Estrella media (para ratings como 4.5)
                            return (
                              <div key={i} className="relative">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <div
                                  className="absolute inset-0 bg-white"
                                  style={{
                                    clipPath: `polygon(${
                                      (rating % 1) * 100
                                    }% 0, 100% 0, 100% 100%, ${
                                      (rating % 1) * 100
                                    }% 100%)`,
                                  }}
                                />
                              </div>
                            );
                          } else {
                            // Estrella vacía
                            return (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400"
                              />
                            );
                          }
                        })}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col justify-between gap-1">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {`"${testimonial.text}"`}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed italic">
                          {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-card rounded-full px-8 py-4 shadow-lg border border-border">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {items?.slice(0, 5).map((testimonial: any, i: number) => (
                  <Avatar key={i} className="w-8 h-8 border-2 border-card">
                    <AvatarFallback
                      className={`${
                        avatarColors[i % avatarColors.length]
                      } text-white text-xs font-medium`}
                    >
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {testimonialsData?.stats?.alliances}
              </span>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-muted-foreground">
                {(
                  items?.reduce((acc: number, t: any) => acc + t.rating, 0) /
                  items?.length
                ).toFixed(1)}
                /5 {testimonialsData?.stats?.averageRating}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
