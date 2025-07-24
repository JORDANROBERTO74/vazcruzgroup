"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useContactForm } from "@/hooks/useContactForm";
import { useToast } from "@/hooks/use-toast";
import { useMessages } from "next-intl";
import moment from "moment";

const contactSchema = z.object({
  full_name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),
  email: z.string().email("Ingrese un email válido"),
  company: z.string().min(2, "El nombre de la empresa es requerido"),
  phone: z
    .string()
    .min(10, "Ingrese un número de teléfono válido")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Formato de teléfono inválido"),
  business_type: z.enum(["manufacturer", "distributor", "buyer", "other"], {
    required_error: "Debe seleccionar un tipo de negocio",
  }),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
  website_url: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [origin, setOrigin] = useState("");
  const { toast } = useToast();
  const { mutateAsync, isLoading } = useContactForm();
  const messages = useMessages();

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  // Extract form data from messages
  const companyName = (messages as any)?.footer?.company?.name;

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
  const errorMessages = formData?.error;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // Validación en tiempo real al perder el foco
    defaultValues: {
      full_name: "",
      email: "",
      company: "",
      phone: "",
      business_type: undefined,
      message: "",
      subject: "",
      website_url: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await mutateAsync({
        ...data,
        name: companyName || "",
        phone: parseInt(data.phone, 10),
        website_url: data.website_url || "",
        domain: origin || window.location.origin,
        date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      });

      if (res.status === 200) {
        setIsSubmitted(true);
        //form.reset();
        toast({
          title: success?.title || "Message Sent!",
          description:
            success?.description ||
            "Thank you for contacting us. Our team will contact you within the next 24 hours to discuss your commercial needs.",
          variant: "default",
        });
      } else {
        toast({
          title: errorMessages?.title || "Error Sending Message",
          description:
            errorMessages?.description ||
            "There was an error sending your message. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Error desconocido al enviar el mensaje";

      toast({
        title: errorMessages?.title || "Error Sending Message",
        description: errorMessage || errorMessages?.description,
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fields?.name}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={placeholders?.name}
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fields?.email}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={placeholders?.email}
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Company and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fields?.company}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={placeholders?.company}
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fields?.phone}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={placeholders?.phone}
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Business Type and Website URL Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="business_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fields?.businessType}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Seleccione su tipo de negocio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="manufacturer">
                            {businessTypes?.manufacturer}
                          </SelectItem>
                          <SelectItem value="distributor">
                            {businessTypes?.distributor}
                          </SelectItem>
                          <SelectItem value="buyer">
                            {businessTypes?.buyer}
                          </SelectItem>
                          <SelectItem value="other">
                            {businessTypes?.other}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {fields?.website_url || "Sitio Web"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder={
                            placeholders?.website_url || "https://ejemplo.com"
                          }
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fields?.subject}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={placeholders?.subject}
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fields?.message}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={placeholders?.message}
                        rows={6}
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting || isLoading}
                className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:opacity-70"
              >
                {form.formState.isSubmitting || isLoading ? (
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
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
