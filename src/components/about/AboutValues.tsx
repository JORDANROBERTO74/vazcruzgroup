"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Target,
  Award,
  Heart,
  Zap,
  Globe,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integridad",
    description:
      "Actuamos con honestidad y transparencia en todas nuestras relaciones comerciales",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Fomentamos alianzas estratégicas basadas en la confianza mutua",
  },
  {
    icon: Target,
    title: "Excelencia",
    description:
      "Buscamos la perfección en cada transacción y servicio que ofrecemos",
  },
  {
    icon: Award,
    title: "Innovación",
    description:
      "Implementamos soluciones creativas para desafíos comerciales complejos",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos dedicamos completamente al éxito de nuestros clientes",
  },
  {
    icon: Zap,
    title: "Agilidad",
    description:
      "Respondemos rápidamente a las necesidades cambiantes del mercado",
  },
  {
    icon: Globe,
    title: "Diversidad",
    description: "Valoramos y celebramos la diversidad cultural y empresarial",
  },
  {
    icon: Handshake,
    title: "Confianza",
    description:
      "Construimos relaciones duraderas basadas en la confianza mutua",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutValues() {
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
            Nuestros Valores Corporativos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estos principios fundamentales guían cada decisión que tomamos y
            cada relación que construimos, asegurando un servicio excepcional y
            resultados sobresalientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
