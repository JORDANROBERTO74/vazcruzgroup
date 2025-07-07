"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "100+", label: "Alianzas Estratégicas" },
  { number: "25+", label: "Mercados Globales" },
  { number: "98%", label: "Satisfacción del Cliente" },
  { number: "24/7", label: "Soporte Dedicado" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Nuestros Números Hablan
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Resultados que demuestran nuestro compromiso con el éxito de
            nuestros clientes en el comercio internacional y la intermediación
            comercial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-primary-foreground"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
