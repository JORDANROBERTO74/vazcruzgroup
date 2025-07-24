"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMessages } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

// Icon mapping for social media
const socialIcons = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  Instagram,
};

export default function Footer() {
  const router = useRouter();
  const { locale } = useParams();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const messages = useMessages();

  // Extract footer data from messages
  const footerData = (messages as any)?.footer;
  const company = footerData?.company;
  const newsletter = footerData?.newsletter;
  const sections = footerData?.sections;
  const social = footerData?.social;
  const legal = footerData?.legal;

  const services = (messages as any)?.services;
  const specialties = services?.categories?.items;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Aquí iría la lógica para suscribir al newsletter
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  // Fallback if no footer data
  if (!footerData) {
    return (
      <footer className="bg-foreground text-white w-100vw" role="contentinfo">
        <div className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-300">Footer content not available</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-foreground text-white w-100vw" role="contentinfo">
      {/* Main Footer */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/img/logo.png"
                  alt="VasCruz Group LLC"
                  width={75}
                  height={60}
                  className="object-contain cursor-pointer"
                  onClick={() => router.push(`/${locale}/`)}
                />
                <span className="text-xl font-bold">{company?.name}</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {company?.description}
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3">
                  {newsletter?.title}
                </h4>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletter?.placeholder}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    aria-label={newsletter?.placeholder}
                  />
                  <Button type="submit" aria-label={newsletter?.button}>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                {isSubscribed && (
                  <p className="text-green-400 text-sm mt-2">
                    {newsletter?.success}
                  </p>
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {social?.links?.map((socialLink: any, index: number) => {
                  const IconComponent =
                    socialIcons[socialLink.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={index}
                      href={socialLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                      aria-label={`Síguenos en ${socialLink.name}`}
                    >
                      {IconComponent && <IconComponent className="w-5 h-5" />}
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6" id="quick-links">
                {sections?.quickLinks?.title}
              </h3>
              <ul
                className="grid grid-cols-2 md:grid-cols-1 gap-3"
                aria-labelledby="quick-links"
              >
                {sections?.quickLinks?.items?.map(
                  (link: any, index: number) => (
                    <li key={index}>
                      <a
                        href={`/${locale}/${link.href}`}
                        className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight
                          className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                        {link.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6" id="specialties">
                {services?.categories?.title}
              </h3>
              <ul
                className="grid grid-cols-2 md:grid-cols-1 gap-3"
                aria-labelledby="specialties"
              >
                {specialties?.map((specialty: any, index: number) => (
                  <li key={index}>
                    <a
                      href={`/${locale}/services/${specialty.slug}`}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                      {specialty.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Offices */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6" id="offices">
                {sections?.offices?.title}
              </h3>
              <div className="space-y-4" aria-labelledby="offices">
                {sections?.offices?.items?.map((office: any, index: number) => (
                  <div key={index} className="border-l-2 border-blue-600 pl-4">
                    <h4 className="font-semibold text-blue-400 mb-1">
                      {office.city}
                    </h4>
                    <div className="space-y-1 text-sm text-gray-300">
                      <div className="flex items-start gap-2">
                        <MapPin
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        <a
                          href={`tel:${office.phone}`}
                          className="hover:text-white transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-white transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6 lg:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              {legal?.copyright}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end gap-4 lg:gap-6 text-sm"
            >
              {legal?.links?.map((link: any, index: number) => (
                <a
                  key={index}
                  href={`/${locale}/${link.href}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
