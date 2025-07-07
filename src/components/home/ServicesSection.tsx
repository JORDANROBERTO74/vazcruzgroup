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

const services = [
  {
    icon: Handshake,
    title: "Representación Comercial",
    description:
      "Representamos a fabricantes y distribuidores en mercados nacionales e internacionales, facilitando conexiones comerciales estratégicas.",
    features: [
      "Conexión con compradores",
      "Negociación de contratos",
      "Gestión de relaciones comerciales",
    ],
  },
  {
    icon: BarChart3,
    title: "Análisis y Logística",
    description:
      "Análisis de mercado detallado y optimización de procesos logísticos para maximizar la eficiencia operativa.",
    features: [
      "Estudios de mercado",
      "Optimización logística",
      "Análisis de costos",
    ],
  },
  {
    icon: Target,
    title: "Desarrollo de Negocios Globales",
    description:
      "Estrategias de expansión internacional y desarrollo de nuevos mercados para el crecimiento sostenible.",
    features: [
      "Expansión internacional",
      "Estrategias de entrada",
      "Desarrollo de mercados",
    ],
  },
  {
    icon: Users,
    title: "Alianzas Clave",
    description:
      "Creación y gestión de alianzas estratégicas que potencian el crecimiento y la competitividad empresarial.",
    features: [
      "Alianzas estratégicas",
      "Networking empresarial",
      "Colaboraciones comerciales",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description:
      "Implementación de soluciones innovadoras y tecnologías emergentes para mantener la ventaja competitiva.",
    features: [
      "Soluciones innovadoras",
      "Tecnologías emergentes",
      "Mejora continua",
    ],
  },
  {
    icon: Building2,
    title: "Expansión Estratégica",
    description:
      "Asesoría integral para la expansión empresarial con enfoque en mercados emergentes y oportunidades de crecimiento.",
    features: [
      "Planificación estratégica",
      "Identificación de oportunidades",
      "Gestión de riesgos",
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

export default function ServicesSection() {
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
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Soluciones Integrales de Intermediación Comercial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos servicios especializados que conectan fabricantes,
            distribuidores y compradores, facilitando transacciones fluidas y
            estratégicas en un entorno global cada vez más complejo.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
