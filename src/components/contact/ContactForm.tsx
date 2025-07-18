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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContactForm } from "@/hooks/useContactForm";
import { useToast } from "@/hooks/use-toast";
import { useMessages } from "next-intl";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),
  email: z.string().email("Ingrese un email válido"),
  company: z.string().min(2, "El nombre de la empresa es requerido"),
  phone: z
    .string()
    .min(10, "Ingrese un número de teléfono válido")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Formato de teléfono inválido"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
  businessType: z.enum(["manufacturer", "distributor", "buyer", "other"], {
    required_error: "Debe seleccionar un tipo de negocio",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const contactMutation = useContactForm();
  const messages = useMessages();

  // Extract form data from messages
  const formData = (messages as any)?.contact?.form;
  const badge = formData?.badge;
  const title = formData?.title;
  const subtitle = formData?.subtitle;
  const fields = formData?.fields;
  const placeholders = formData?.placeholders;
  const businessTypes = formData?.businessTypes;
  const submit = formData?.submit;
  const sending = formData?.sending;
  const success = formData?.success;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // Validación en tiempo real al perder el foco
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
      console.error("Error sending contact form:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Error desconocido al enviar el mensaje";

      toast({
        title: "Error al enviar mensaje",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Fallback if no form data
  if (!formData) {
    return (
      <div className="max-w-2xl mx-auto text-center p-8">
        <p className="text-muted-foreground">Contact form not available</p>
      </div>
    );
  }

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
          {success?.title}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          {success?.description}
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80"
        >
          {success?.button}
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
          {badge}
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Form Card */}
      <Card className="border-border shadow-xl bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Send className="w-5 h-5 text-primary" />
            {formData?.info?.title || "Contact Information"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  {fields?.name}
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder={placeholders?.name}
                  className={`h-11 ${
                    errors.name
                      ? "border-destructive focus:border-destructive"
                      : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive flex items-start gap-1">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errors.name.message}</span>
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  {fields?.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder={placeholders?.email}
                  className={`h-11 ${
                    errors.email
                      ? "border-destructive focus:border-destructive"
                      : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-start gap-1">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Company and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  {fields?.company}
                </Label>
                <Input
                  id="company"
                  {...register("company")}
                  placeholder={placeholders?.company}
                  className={`h-11 ${
                    errors.company
                      ? "border-destructive focus:border-destructive"
                      : ""
                  }`}
                />
                {errors.company && (
                  <p className="text-sm text-destructive flex items-start gap-1">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errors.company.message}</span>
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  {fields?.phone}
                </Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder={placeholders?.phone}
                  className={`h-11 ${
                    errors.phone
                      ? "border-destructive focus:border-destructive"
                      : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive flex items-start gap-1">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errors.phone.message}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Business Type */}
            <div className="space-y-2">
              <Label htmlFor="businessType" className="text-sm font-medium">
                {fields?.businessType}
              </Label>
              <Select
                value={watch("businessType") || undefined}
                onValueChange={(value) =>
                  setValue(
                    "businessType",
                    value as "manufacturer" | "distributor" | "buyer" | "other"
                  )
                }
              >
                <SelectTrigger
                  className={`h-11 ${
                    errors.businessType
                      ? "border-destructive focus:border-destructive"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Seleccione su tipo de negocio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manufacturer">
                    {businessTypes?.manufacturer}
                  </SelectItem>
                  <SelectItem value="distributor">
                    {businessTypes?.distributor}
                  </SelectItem>
                  <SelectItem value="buyer">{businessTypes?.buyer}</SelectItem>
                  <SelectItem value="other">{businessTypes?.other}</SelectItem>
                </SelectContent>
              </Select>
              {errors.businessType && (
                <p className="text-sm text-destructive flex items-start gap-1">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{errors.businessType.message}</span>
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                {fields?.subject}
              </Label>
              <Input
                id="subject"
                {...register("subject")}
                placeholder={placeholders?.subject}
                className={`h-11 ${
                  errors.subject
                    ? "border-destructive focus:border-destructive"
                    : ""
                }`}
              />
              {errors.subject && (
                <p className="text-sm text-destructive flex items-start gap-1">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{errors.subject.message}</span>
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                {fields?.message}
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder={placeholders?.message}
                rows={6}
                className={`resize-none ${
                  errors.message
                    ? "border-destructive focus:border-destructive"
                    : ""
                }`}
              />
              {errors.message && (
                <p className="text-sm text-destructive flex items-start gap-1">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{errors.message.message}</span>
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
                  {sending}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  {submit}
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
