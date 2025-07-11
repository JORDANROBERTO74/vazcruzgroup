"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMessages } from "next-intl";
import {
  ArrowLeft,
  ShoppingCart,
  Star,
  Clock,
  CheckCircle,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function ProductPage() {
  const { locale } = useParams();
  const router = useRouter();
  const messages = useMessages();
  const params = useParams();
  const categorySlug = params.slug as string;
  const productSlug = params.product as string;
  const [isPaid, setIsPaid] = React.useState(false);

  // Extract product data from messages
  const categoriesData = (messages as any)?.services?.categories?.items;
  const category = categoriesData?.find(
    (cat: any) => cat.slug === categorySlug
  );
  const product = category?.products?.find(
    (prod: any) => prod.slug === productSlug
  );

  // Extract product page messages
  const productMessages = (messages as any)?.product;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const handleSubmit = (paymentLink: string) => {
    setIsPaid(true);
    window.open(paymentLink, "_blank");
  };

  const handlePayment = (product: any) => {
    // Create message with payment data using messages
    const whatsappMessages = (messages as any)?.product?.whatsapp
      ?.messageTemplate;
    const phoneNumber = (messages as any)?.product?.whatsapp?.phoneNumber;

    const paymentMessage = `${whatsappMessages?.greeting}

*${product.title}*
${product.description}

*${whatsappMessages?.price}* $${product.price}
${
  product.originalPrice
    ? `*${whatsappMessages?.originalPrice}* $${product.originalPrice}`
    : ""
}
${product.duration ? `*${whatsappMessages?.duration}* ${product.duration}` : ""}
${product.delivery ? `*${whatsappMessages?.delivery}* ${product.delivery}` : ""}

${
  product.features
    ? `*${whatsappMessages?.features}*
${product.features.map((feature: string) => `• ${feature}`).join("\n")}`
    : ""
}

${
  product.benefits
    ? `*${whatsappMessages?.benefits}*
${product.benefits.map((benefit: string) => `• ${benefit}`).join("\n")}`
    : ""
}

${whatsappMessages?.closing}`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(paymentMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new window
    window.open(whatsappUrl, "_blank");
    setIsPaid(true);
  };

  // Fallback if product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {productMessages?.notFound?.title}
            </h1>
            <Button asChild>
              <Link href={`/services/${categorySlug}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {productMessages?.notFound?.button}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <section className="-mt-[64px] pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-8"
          >
            {/* Back Button */}
            <div className="flex w-full">
              <motion.div variants={itemVariants} className="mb-6">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground hover:bg-blue-50 transition-colors"
                  onClick={() => {
                    router.push(`/${locale}/services/${categorySlug}`);
                  }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {productMessages?.backButton} {category?.title}
                </Button>
              </motion.div>
            </div>

            {/* Product Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium"
              >
                {product.badge || category?.title}
              </Badge>
            </motion.div>

            {/* Product Title */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                {product.title}
              </h1>
            </motion.div>

            {/* Product Description */}
            <motion.div variants={itemVariants}>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {product.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Info */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Price Card */}
                <motion.div variants={itemVariants}>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {productMessages?.pricing?.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-4xl font-bold text-primary">
                            ${product.price}
                          </p>
                          {product.originalPrice && (
                            <p className="text-lg text-muted-foreground line-through">
                              ${product.originalPrice}
                            </p>
                          )}
                        </div>
                        {product.badge && (
                          <Badge variant="secondary" className="text-sm">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      {product.duration && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          {productMessages?.pricing?.duration}{" "}
                          {product.duration}
                        </div>
                      )}
                      {product.delivery && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {productMessages?.pricing?.delivery}{" "}
                          {product.delivery}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Features Card */}
                <motion.div variants={itemVariants}>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {productMessages?.features?.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {product.features?.map(
                          (feature: string, index: number) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-primary mr-3" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={itemVariants}>
                  {isPaid && (
                    <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        {productMessages?.cta?.paymentConfirmation}
                      </p>
                    </div>
                  )}

                  {isPaid ? (
                    <Button
                      type="button"
                      size="lg"
                      className="w-full group bg-green-500 text-white hover:bg-green-600"
                      onClick={() => handlePayment(product)}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {productMessages?.cta?.paid}
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      size="lg"
                      className="w-full group"
                      onClick={() => handleSubmit(product?.paymentLink)}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {product.cta || productMessages?.cta?.default}
                    </Button>
                  )}
                </motion.div>
              </motion.div>

              {/* Product Details */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Detailed Description */}
                <motion.div variants={itemVariants}>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {productMessages?.details?.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-gray max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                          {product.detailedDescription || product.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Benefits */}
                {product.benefits && (
                  <motion.div variants={itemVariants}>
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">
                          {productMessages?.benefits?.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {product.benefits.map(
                            (benefit: string, index: number) => (
                              <div key={index} className="flex items-start">
                                <Star className="w-5 h-5 text-primary mr-3 mt-0.5" />
                                <span className="text-muted-foreground">
                                  {benefit}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Additional Info */}
                {product.additionalInfo && (
                  <motion.div variants={itemVariants}>
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">
                          {productMessages?.additionalInfo?.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {product.additionalInfo.map(
                            (info: any, index: number) => (
                              <div
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-muted-foreground">
                                  {info.label}
                                </span>
                                <span className="font-medium">
                                  {info.value}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
