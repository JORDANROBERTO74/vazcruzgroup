"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Shield,
  Handshake,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
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
    <section className="-mt-[64px] h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full"
        >
          {/* Left Column - Main Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 mb-12 lg:mb-0"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Vascruz Group LLC
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                <div>Conectando</div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                  Negocios
                </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                  Globalmente
                </div>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Especialistas en intermediación y representación comercial
                mayorista, uniendo fabricantes, distribuidores y compradores en
                mercados nacionales e internacionales.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Handshake className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Representación Comercial
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Alcance Global
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Asesoría Experta
                </span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Conoce Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Graph Transformation */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">
                        Crecimiento Empresarial
                      </h3>
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <p className="text-primary-foreground/80 text-sm">
                      Desarrollo de negocios y expansión estratégica 2020-2024
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Desarrollo de Negocios</span>
                        <span className="font-semibold">+85%</span>
                      </div>
                      <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                        <div
                          className="bg-primary-foreground h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Alianzas Estratégicas</span>
                        <span className="font-semibold">+92%</span>
                      </div>
                      <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                        <div
                          className="bg-primary-foreground h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Expansión Internacional</span>
                        <span className="font-semibold">+78%</span>
                      </div>
                      <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                        <div
                          className="bg-primary-foreground h-2 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Satisfacción del Cliente</span>
                        <span className="font-semibold">+96%</span>
                      </div>
                      <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                        <div
                          className="bg-primary-foreground h-2 rounded-full"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
