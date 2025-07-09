"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Globe,
  Handshake,
  Award,
  CheckCircle,
  Clock,
} from "lucide-react";

const stats = [
  {
    number: "4+",
    label: "Años de Experiencia",
    icon: TrendingUp,
    description: "Desde 2020",
  },
  {
    number: "25+",
    label: "Mercados Globales",
    icon: Globe,
    description: "Presencia internacional",
  },
  {
    number: "100+",
    label: "Alianzas Estratégicas",
    icon: Handshake,
    description: "Conexiones exitosas",
  },
  {
    number: "98%",
    label: "Satisfacción del Cliente",
    icon: Award,
    description: "Clientes satisfechos",
  },
  {
    number: "500+",
    label: "Transacciones Exitosas",
    icon: CheckCircle,
    description: "Operaciones completadas",
  },
  {
    number: "24/7",
    label: "Soporte Dedicado",
    icon: Clock,
    description: "Atención continua",
  },
];

export default function AboutStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Excelencia en Comercio Internacional
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Impulsamos el crecimiento global a través de conexiones estratégicas
            y un servicio de clase mundial en intermediación comercial.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              Estadísticas que Hablan
            </h3>
            <p className="text-primary-foreground/70">
              Nuestro crecimiento y éxito en números
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-primary-foreground/10 rounded-xl p-4 mb-3 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-primary-foreground/60 text-xs">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-foreground/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-primary-foreground mb-3">
              ¿Listo para Crecer con Nosotros?
            </h4>
            <p className="text-primary-foreground/80 mb-4">
              Únase a las cientos de empresas que ya confían en Vascruz Group
              para sus necesidades de intermediación comercial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">
                  500+
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Empresas Satisfechas
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">
                  $50M+
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  En Transacciones
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
