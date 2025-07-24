"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

interface LegalContactSectionProps {
  title: string;
  subtitle: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export default function LegalContactSection({
  title,
  subtitle,
  contact,
}: LegalContactSectionProps) {
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

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      content: contact.email,
    },
    {
      icon: Phone,
      title: "Phone",
      content: contact.phone,
    },
    {
      icon: MapPin,
      title: "Address",
      content: contact.address,
    },
  ];

  return (
    <motion.div variants={itemVariants}>
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <Card
              key={idx}
              className="border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
            >
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl text-card-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {item.content}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}
