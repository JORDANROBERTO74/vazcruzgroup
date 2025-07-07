"use client";

import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const missionData = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description:
      "Facilitar el crecimiento empresarial global conectando fabricantes, distribuidores y compradores a través de intermediación comercial estratégica y representación experta.",
    highlights: [
      "Conexiones comerciales estratégicas",
      "Representación profesional",
      "Desarrollo de mercados globales",
    ],
  },
  {
    icon: Eye,
    title: "Nuestra Visión",
    description:
      "Ser el líder reconocido en intermediación comercial, creando un ecosistema global donde las empresas puedan expandirse y prosperar sin fronteras.",
    highlights: [
      "Liderazgo en intermediación",
      "Ecosistema comercial global",
      "Expansión sin fronteras",
    ],
  },
  {
    icon: Lightbulb,
    title: "Nuestro Propósito",
    description:
      "Impulsar el éxito empresarial a través de alianzas estratégicas, innovación constante y un compromiso inquebrantable con la excelencia comercial.",
    highlights: [
      "Alianzas estratégicas",
      "Innovación constante",
      "Excelencia comercial",
    ],
  },
];

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
            Misión y Visión
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestros Pilares Fundamentales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guiados por nuestra misión, visión y propósito, trabajamos
            incansablemente para crear valor y oportunidades de crecimiento para
            nuestros clientes en el mercado global.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {missionData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
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
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
