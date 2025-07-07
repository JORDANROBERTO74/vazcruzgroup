"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  Target,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Roberto Vascruz",
    position: "CEO & Fundador",
    description:
      "Visionario empresarial con más de 15 años de experiencia en comercio internacional y desarrollo de negocios globales.",
    expertise: [
      "Estrategia Global",
      "Desarrollo de Negocios",
      "Alianzas Estratégicas",
    ],
    contact: {
      email: "roberto@vascruzgroup.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/robertovascruz",
    },
  },
  {
    name: "María González",
    position: "Directora de Operaciones",
    description:
      "Especialista en optimización de procesos logísticos y gestión de relaciones comerciales internacionales.",
    expertise: ["Logística", "Operaciones", "Gestión de Proyectos"],
    contact: {
      email: "maria@vascruzgroup.com",
      phone: "+1 (555) 123-4568",
      linkedin: "linkedin.com/in/mariagonzalez",
    },
  },
  {
    name: "Carlos Rodríguez",
    position: "Director de Desarrollo Comercial",
    description:
      "Experto en análisis de mercados y estrategias de expansión internacional con amplia experiencia en Latinoamérica.",
    expertise: [
      "Análisis de Mercado",
      "Expansión Internacional",
      "Negociación",
    ],
    contact: {
      email: "carlos@vascruzgroup.com",
      phone: "+1 (555) 123-4569",
      linkedin: "linkedin.com/in/carlosrodriguez",
    },
  },
  {
    name: "Ana Martínez",
    position: "Directora de Alianzas Estratégicas",
    description:
      "Especialista en creación y gestión de alianzas comerciales estratégicas y networking empresarial.",
    expertise: [
      "Alianzas Estratégicas",
      "Networking",
      "Relaciones Comerciales",
    ],
    contact: {
      email: "ana@vascruzgroup.com",
      phone: "+1 (555) 123-4570",
      linkedin: "linkedin.com/in/anamartinez",
    },
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutTeam() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Nuestro Equipo
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Líderes en Intermediación Comercial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro equipo ejecutivo combina décadas de experiencia en comercio
            internacional, estrategia empresarial y desarrollo de alianzas
            comerciales.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {member.position}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{member.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Áreas de Experiencia:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">
                      Contacto:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>{member.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{member.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Linkedin className="w-4 h-4" />
                        <span>{member.contact.linkedin}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
