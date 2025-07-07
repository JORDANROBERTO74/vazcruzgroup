"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const offices = [
  {
    city: "Aventura, Florida",
    address:
      "3530 Mystic Pointe Drive Apt 2403, Aventura, Florida, 33180, EE.UU.",
    phone: "+591 77004600",
    email: "grupovascruzllc@gmail.com",
  },
];

const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
  { name: "Blog", href: "/blog" },
  { name: "Certificaciones", href: "/certificaciones" },
];

const specialties = [
  { name: "Importación", href: "/servicios/importacion" },
  { name: "Exportación", href: "/servicios/exportacion" },
  { name: "Despacho Aduanal", href: "/servicios/despacho" },
  { name: "Consultoría", href: "/servicios/consultoria" },
  { name: "OEA", href: "/servicios/oea" },
  { name: "Logística", href: "/servicios/logistica" },
];

const legalLinks = [
  { name: "Aviso de Privacidad", href: "/legal/privacidad" },
  { name: "Términos y Condiciones", href: "/legal/terminos" },
  { name: "Política de Cookies", href: "/legal/cookies" },
  { name: "Accesibilidad", href: "/legal/accesibilidad" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/vazcruzgroup",
    icon: Facebook,
  },
  { name: "Twitter", href: "https://twitter.com/vazcruzgroup", icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/vazcruzgroup",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/vazcruzgroup",
    icon: Instagram,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Aquí iría la lógica para suscribir al newsletter
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-foreground text-white" role="contentinfo">
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
                <Globe className="w-8 h-8 text-primary" aria-hidden="true" />
                <span className="text-xl font-bold">VazCruz Group LLC</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Especialistas en intermediación y representación comercial
                mayorista, uniendo fabricantes, distribuidores y compradores en
                mercados nacionales e internacionales.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3">
                  Suscríbete a nuestro newsletter
                </h4>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    aria-label="Correo electrónico para newsletter"
                  />
                  <Button type="submit" aria-label="Suscribirse al newsletter">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                {isSubscribed && (
                  <p className="text-green-400 text-sm mt-2">
                    ¡Gracias por suscribirte!
                  </p>
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label={`Síguenos en ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
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
                Enlaces Rápidos
              </h3>
              <ul className="space-y-3" aria-labelledby="quick-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
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
                Especialidades
              </h3>
              <ul className="space-y-3" aria-labelledby="specialties">
                {specialties.map((specialty, index) => (
                  <li key={index}>
                    <a
                      href={specialty.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                      {specialty.name}
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
                Oficinas
              </h3>
              <div className="space-y-4" aria-labelledby="offices">
                {offices.map((office, index) => (
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
              © {new Date().getFullYear()} VazCruz Group. Todos los derechos
              reservados.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end gap-4 lg:gap-6 text-sm"
            >
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
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
