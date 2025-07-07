"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useContactForm } from "@/hooks/useContactForm";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingrese un email válido"),
  company: z.string().min(2, "El nombre de la empresa es requerido"),
  phone: z.string().min(10, "Ingrese un número de teléfono válido"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
  businessType: z.enum(["manufacturer", "distributor", "buyer", "other"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const contactMutation = useContactForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const currentTime = new Date().toLocaleString();
      await contactMutation.mutateAsync({
        ...data,
        time: currentTime,
      });

      setIsSubmitted(true);
      reset();
      toast({
        title: "Mensaje enviado exitosamente",
        description: "Nos pondremos en contacto con usted pronto.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error al enviar mensaje",
        description: "Por favor, intente nuevamente más tarde.",
        variant: "destructive",
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center p-8 lg:p-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Gracias por contactarnos. Nuestro equipo se pondrá en contacto con
          usted en las próximas 24 horas para discutir sus necesidades
          comerciales.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80"
        >
          Enviar otro mensaje
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Header Section */}
      <div className="text-center">
        <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
          Formulario de Contacto
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Conectemos su Negocio
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Complete el formulario y nuestro equipo de expertos en intermediación
          comercial se pondrá en contacto con usted para discutir oportunidades
          de negocio.
        </p>
      </div>

      {/* Form Card */}
      <Card className="border-border shadow-xl bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Send className="w-5 h-5 text-primary" />
            Información de Contacto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nombre Completo *
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Su nombre completo"
                  className={`h-11 ${
                    errors.name ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Corporativo *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="su@empresa.com"
                  className={`h-11 ${
                    errors.email ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Company and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Empresa *
                </Label>
                <Input
                  id="company"
                  {...register("company")}
                  placeholder="Nombre de su empresa"
                  className={`h-11 ${
                    errors.company ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.company && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="+1 (555) 123-4567"
                  className={`h-11 ${
                    errors.phone ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Business Type */}
            <div className="space-y-2">
              <Label htmlFor="businessType" className="text-sm font-medium">
                Tipo de Negocio *
              </Label>
              <select
                id="businessType"
                {...register("businessType")}
                className={`w-full h-11 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                  errors.businessType
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }`}
              >
                <option value="">Seleccione su tipo de negocio</option>
                <option value="manufacturer">Fabricante</option>
                <option value="distributor">Distribuidor</option>
                <option value="buyer">Comprador</option>
                <option value="other">Otro</option>
              </select>
              {errors.businessType && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.businessType.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Asunto *
              </Label>
              <Input
                id="subject"
                {...register("subject")}
                placeholder="¿En qué podemos ayudarle?"
                className={`h-11 ${
                  errors.subject ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.subject && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Mensaje *
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Describa sus necesidades comerciales, productos de interés, o cómo podemos ayudarle a conectar con nuevos mercados..."
                rows={6}
                className={`resize-none ${
                  errors.message ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || contactMutation.isLoading}
              className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:opacity-70"
            >
              {isSubmitting || contactMutation.isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                  Enviando mensaje...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
