"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Users, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MapWrapper from "@/components/map-wrapper";

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

        {/* Interactive Map */}
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
                <span className="md:hidden">Nuestra Ubicación</span>
                <span className="hidden md:inline">
                  Nuestra Ubicación Principal
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <MapWrapper
                center={[25.9564, -80.1392]} // Aventura, Florida coordinates
                zoom={15}
                height="h-96"
                showMarker={true}
              />
            </CardContent>
          </Card>
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
