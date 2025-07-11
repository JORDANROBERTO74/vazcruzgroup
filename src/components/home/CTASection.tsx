"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLocale, useMessages } from "next-intl";

export default function CTASection() {
  const router = useRouter();
  const locale = useLocale();
  const messages = useMessages();

  // Extract CTA data from messages
  const ctaData = (messages as any)?.home?.cta;
  const title = ctaData?.title;
  const subtitle = ctaData?.subtitle;
  const contact = ctaData?.contact;
  const buttons = ctaData?.buttons;

  // Fallback if no CTA data
  if (!ctaData) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">CTA content not available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <motion.a
                href={contact?.whatsapp?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 md:gap-4 p-4 md:p-6 bg-background-to-br rounded-xl border-2 border-primary hover:border-primary/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/80 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-foreground text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                    {contact?.whatsapp?.title}
                  </p>
                  <p className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300 text-xs md:text-sm">
                    {contact?.whatsapp?.phone}
                  </p>
                  <p className="text-xs md:text-sm text-primary font-medium">
                    {contact?.whatsapp?.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
              </motion.a>

              <motion.a
                href={contact?.email?.href}
                className="group flex items-center justify-center gap-3 md:gap-4 p-4 md:p-6 bg-background-to-br rounded-xl border-2 border-primary hover:border-primary/80 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/80 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-foreground text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                    {contact?.email?.title}
                  </p>
                  <p className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300 text-xs md:text-sm">
                    {contact?.email?.email}
                  </p>
                  <p className="text-xs md:text-sm text-primary font-medium">
                    {contact?.email?.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
              </motion.a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex justify-end w-full">
                <Button
                  className="w-full md:w-auto"
                  size="lg"
                  onClick={() => {
                    router.push(`/${locale}/contact`);
                  }}
                >
                  {buttons?.primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-start w-full">
                <Button
                  className="w-full md:w-auto"
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    router.push(`/${locale}/services`);
                  }}
                >
                  {buttons?.secondary}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
