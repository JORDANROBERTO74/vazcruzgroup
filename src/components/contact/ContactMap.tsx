"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MapWrapper from "@/components/map-wrapper";
import { useMessages } from "next-intl";

export default function ContactMap() {
  const messages = useMessages();

  // Extract map data from messages
  const mapData = (messages as any)?.contact?.map;
  const badge = mapData?.badge;
  const title = mapData?.title;
  const subtitle = mapData?.subtitle;
  const location = mapData?.location;
  const cta = mapData?.cta;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Fallback if no map data
  if (!mapData) {
    return (
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Map content not available</p>
          </div>
        </div>
      </section>
    );
  }

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
            {badge}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
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
                <span className="md:hidden">{location?.title}</span>
                <span className="hidden md:inline">{location?.title}</span>
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
                {cta?.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                {cta?.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {cta?.support}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    48h
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {cta?.response}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {cta?.confidentiality}
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
