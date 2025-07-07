"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timelineData = [
  {
    year: "2020",
    title: "Fundación de Vascruz Group LLC",
    description:
      "Nacimos con la visión de revolucionar la intermediación comercial, estableciendo nuestra sede en Miami, Florida.",
    achievement: "Fundación de la empresa",
  },
  {
    year: "2021",
    title: "Primeras Alianzas Estratégicas",
    description:
      "Establecimos nuestras primeras alianzas comerciales y comenzamos a operar en mercados latinoamericanos.",
    achievement: "25+ alianzas iniciales",
  },
  {
    year: "2022",
    title: "Expansión Internacional",
    description:
      "Ampliamos nuestra presencia a mercados europeos y asiáticos, diversificando nuestro portafolio de servicios.",
    achievement: "15+ mercados nuevos",
  },
  {
    year: "2023",
    title: "Innovación Tecnológica",
    description:
      "Implementamos soluciones digitales avanzadas para optimizar nuestros procesos de intermediación comercial.",
    achievement: "98% satisfacción cliente",
  },
  {
    year: "2024",
    title: "Liderazgo en el Sector",
    description:
      "Consolidamos nuestra posición como líder en intermediación comercial con presencia en 25+ mercados globales.",
    achievement: "100+ alianzas estratégicas",
  },
];

export default function AboutTimeline() {
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
            Nuestra Historia
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Un Viaje de Crecimiento y Éxito
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde nuestros humildes comienzos hasta convertirnos en líderes del
            sector, cada año ha marcado un hito en nuestro compromiso con la
            excelencia comercial.
          </p>
        </motion.div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border shadow-lg bg-card">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">
                      {item.year}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <Badge variant="secondary" className="text-sm">
                    {item.achievement}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-5 gap-8 relative z-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="border-border shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-primary-foreground font-bold text-xl">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-card-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {item.achievement}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
