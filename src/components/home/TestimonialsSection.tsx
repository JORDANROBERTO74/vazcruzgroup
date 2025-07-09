"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

const testimonials = [
  {
    name: "Carlos Mendoza",
    company: "Fabricante Industrial",
    rating: 5,
    text: "Increíble experiencia trabajando con Vascruz Group. Nos ayudaron a conectar con distribuidores en Europa que nunca habíamos considerado. Nuestras ventas aumentaron un 40% en solo 6 meses. El equipo es muy profesional y siempre responde rápido.",
    date: "15/12/2024",
  },
  {
    name: "María González",
    company: "Distribuidora Global",
    rating: 4.5,
    text: "Llevamos 2 años trabajando con ellos y la verdad es que han transformado nuestro negocio. Nos facilitaron alianzas estratégicas que nos permitieron expandirnos a mercados que parecían imposibles. Muy recomendados.",
    date: "28/11/2024",
  },
  {
    name: "Roberto Silva",
    company: "Importadora del Norte",
    rating: 5,
    text: "Su análisis de mercado fue clave para nuestro crecimiento. Identificaron oportunidades que nosotros no veíamos y nos guiaron paso a paso. Los resultados superaron nuestras expectativas. Definitivamente volveremos a trabajar con ellos.",
    date: "05/12/2024",
  },
  {
    name: "Ana Rodríguez",
    company: "Comercial Internacional",
    rating: 4,
    text: "Buen servicio en general. Su experiencia en negociación nos ayudó a cerrar contratos más favorables. Aunque a veces la comunicación podría ser más rápida, el resultado final fue excelente.",
    date: "20/10/2024",
  },
  {
    name: "Luis Pérez",
    company: "Exportadora del Sur",
    rating: 5,
    text: "Gracias a Vascruz Group pudimos expandirnos a Asia con mucha confianza. Su conocimiento del mercado internacional es impresionante. Nos ahorraron mucho tiempo y errores costosos. Muy agradecidos.",
    date: "22/12/2024",
  },
  {
    name: "Carmen Torres",
    company: "Comercializadora Central",
    rating: 4.5,
    text: "El equipo es súper dedicado y profesional. Superaron todas nuestras expectativas desde el primer día. La atención al detalle y la personalización del servicio es lo que más nos gustó. Los recomendamos sin dudar.",
    date: "25/12/2024",
  },
  {
    name: "Diego Morales",
    company: "Distribuidora Regional",
    rating: 5,
    text: "Llevamos 3 años trabajando juntos y cada vez mejoran más. Su intermediación nos permitió formar alianzas estratégicas que transformaron completamente nuestro modelo de negocio. Nuestra rentabilidad aumentó significativamente.",
    date: "30/11/2024",
  },
  {
    name: "Patricia Vega",
    company: "Importadora Premium",
    rating: 4,
    text: "Buen trabajo en la negociación de contratos. Su experiencia en mercados internacionales nos permitió optimizar costos y mejorar nuestros márgenes. El proceso fue un poco más largo de lo esperado, pero valió la pena.",
    date: "10/12/2024",
  },
  {
    name: "Fernando Ruiz",
    company: "Comercial Internacional",
    rating: 5,
    text: "Vascruz Group ha sido fundamental para nuestro crecimiento internacional. Su red de contactos es invaluable y su experiencia nos ha ahorrado muchos dolores de cabeza. Son verdaderos expertos en lo que hacen.",
    date: "25/11/2024",
  },
  {
    name: "Pablo Salazar",
    company: "Distribuidora Regional",
    rating: 4.5,
    text: "Excelente servicio desde el primer contacto. El equipo es muy profesional y conocen muy bien el mercado. Nos ayudaron a identificar nuevas oportunidades de negocio que no habíamos visto. Muy satisfechos.",
    date: "20/12/2024",
  },
  {
    name: "Laura Martínez",
    company: "Exportadora del Este",
    rating: 5,
    text: "Increíble experiencia con Vascruz Group. Nos ayudaron a abrir mercados en África que parecían imposibles. Su conocimiento local y red de contactos es impresionante. Definitivamente los recomendamos.",
    date: "15/01/2025",
  },
  {
    name: "Ricardo Herrera",
    company: "Importadora del Oeste",
    rating: 4,
    text: "Buen trabajo en general. Su intermediación comercial nos permitió conectar con proveedores de calidad. Aunque el proceso inicial fue un poco lento, los resultados fueron satisfactorios.",
    date: "28/01/2025",
  },
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

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
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fabricantes, distribuidores y compradores confían en nuestra
            experiencia en intermediación comercial para conectar sus negocios
            globalmente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Carousel className="mb-8" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/4">
                  <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                    <CardContent className="p-6">
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

                      {/* Testimonial Text */}
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {`"${testimonial.text}"`}
                      </p>
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
                {testimonials.slice(0, 5).map((testimonial, i: number) => (
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
                +100 alianzas exitosas
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-border"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-muted-foreground">
                {(
                  testimonials.reduce((acc, t) => acc + t.rating, 0) /
                  testimonials.length
                ).toFixed(1)}
                /5 rating promedio
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
