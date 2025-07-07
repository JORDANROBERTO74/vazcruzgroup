"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ContactHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="-mt-[64px] pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Handshake className="w-4 h-4 mr-2" />
              Conectemos Negocios
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              <div>Establezcamos</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Conexiones
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Comerciales
              </div>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Estamos aquí para facilitar sus transacciones comerciales.
              Conectamos fabricantes, distribuidores y compradores en mercados
              nacionales e internacionales.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2 text-center">
              Email
            </h3>
            <p className="text-muted-foreground text-center text-sm">
              info@vascruzgroup.com
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2 text-center">
              Teléfono
            </h3>
            <p className="text-muted-foreground text-center text-sm">
              +1 (555) 123-4567
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2 text-center">
              Ubicación
            </h3>
            <p className="text-muted-foreground text-center text-sm">
              Miami, Florida, USA
            </p>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2 text-center">
              Horarios
            </h3>
            <p className="text-muted-foreground text-center text-sm">
              Lun - Vie: 9AM - 6PM
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
