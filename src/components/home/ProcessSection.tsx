"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const processes = [
  {
    step: "01",
    title: "Evaluación Inicial",
    description:
      "Análisis de necesidades comerciales y objetivos de expansión del cliente.",
  },
  {
    step: "02",
    title: "Identificación de Oportunidades",
    description:
      "Búsqueda y evaluación de mercados, fabricantes y distribuidores potenciales.",
  },
  {
    step: "03",
    title: "Negociación y Acuerdos",
    description:
      "Facilitación de reuniones y negociación de términos comerciales favorables.",
  },
  {
    step: "04",
    title: "Seguimiento y Optimización",
    description:
      "Monitoreo continuo de relaciones comerciales y mejora de procesos.",
  },
];

export default function ProcessSection() {
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
          <Badge variant="outline" className="mb-4">
            Nuestro Proceso
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Metodología de Intermediación Comercial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro proceso sistemático garantiza conexiones comerciales
            exitosas y relaciones duraderas entre fabricantes, distribuidores y
            compradores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Desktop Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary transform -translate-y-1/2 z-0"></div>

          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Card className="h-full border-border shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-primary-foreground font-bold text-xl">
                        {process.step}
                      </span>
                    </div>
                    {/* Mobile step indicator */}
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {process.description}
                  </p>
                </CardContent>
              </Card>

              {/* Improved Desktop Arrows */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center shadow-md border border-border">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
