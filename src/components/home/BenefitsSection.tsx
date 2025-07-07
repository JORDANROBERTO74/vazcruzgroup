"use client";

import { motion } from "framer-motion";
import { Globe, Handshake, Target, Award, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Conectamos negocios en mercados nacionales e internacionales",
  },
  {
    icon: Handshake,
    title: "Representación Experta",
    description: "Intermediación profesional entre fabricantes y compradores",
  },
  {
    icon: Target,
    title: "Desarrollo Estratégico",
    description: "Estrategias de crecimiento y expansión empresarial",
  },
  {
    icon: Users,
    title: "Alianzas Clave",
    description: "Creación de redes comerciales estratégicas",
  },
  {
    icon: Shield,
    title: "Asesoría Integral",
    description: "Soporte completo en negociación y contratos",
  },
  {
    icon: Award,
    title: "Innovación Constante",
    description: "Soluciones adaptadas a las necesidades del mercado",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir Vascruz Group LLC?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra experiencia en desarrollo de negocios, análisis de mercado y
            negociación de contratos nos permite ofrecer soluciones integrales a
            cada uno de nuestros clientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
