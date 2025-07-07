"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Users, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactMap() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const globalPresence = [
    {
      region: "América del Norte",
      countries: ["Estados Unidos", "Canadá", "México"],
      icon: Building2,
    },
    {
      region: "América del Sur",
      countries: ["Brasil", "Argentina", "Chile", "Colombia", "Perú"],
      icon: Globe,
    },
    {
      region: "Europa",
      countries: ["España", "Alemania", "Francia", "Italia", "Países Bajos"],
      icon: Users,
    },
    {
      region: "Asia",
      countries: ["China", "Japón", "Corea del Sur", "India"],
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Presencia Global
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Conectando Mercados Internacionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra red global nos permite facilitar transacciones comerciales
            en múltiples mercados, conectando fabricantes, distribuidores y
            compradores en todo el mundo.
          </p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <Card className="border-border shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Nuestra Ubicación Principal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Miami, Florida, USA
                    </h3>
                    <p className="text-muted-foreground">
                      Oficina principal de Vascruz Group LLC
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary/20 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-1500"></div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Global Presence */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalPresence.map((region, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center mb-4">
                  <region.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {region.region}
                </h3>
                <ul className="space-y-1">
                  {region.countries.map((country, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {country}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mt-16 text-center"
        >
          <Card className="border-border shadow-lg bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Listo para expandir su negocio?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para ayudarle a conectar
                con nuevos mercados y oportunidades comerciales globales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Soporte Disponible
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    48h
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Respuesta Garantizada
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Confidencialidad
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
