"use client";

import { useParams } from "next/navigation";
import { useMessages } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CheckCircle,
  Search,
  Clock,
  BookOpen,
  BarChart3,
  FileText,
  Video,
  Package,
  Truck,
  Globe,
  Target,
  Shield,
  Award,
  Zap,
  Share2,
  Copy,
  MessageCircle,
  Users,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import CategoryHero from "@/components/services/CategoryHero";

export default function CategoryPage() {
  const { locale } = useParams();
  const params = useParams();
  const messages = useMessages();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [priceFilter, setPriceFilter] = useState("all");
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const slug = params.slug as string;
  const localeString = Array.isArray(locale) ? locale[0] : locale;

  // Extract categories data from messages
  const categoriesData = (messages as any)?.services?.categories;
  const categories = categoriesData?.items;
  const stats = (messages as any)?.home?.testimonials;

  // Animation variants
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

  // Extract category translations
  const categoryTranslations = (messages as any)?.services?.category;

  // Find the category by slug
  const category = categories?.find((cat: any) => cat.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {categoryTranslations?.notFound?.title || "Categoría no encontrada"}
          </h1>
          <p className="text-gray-600 mb-6">
            {categoryTranslations?.notFound?.description ||
              "La categoría que buscas no existe."}
          </p>
          <Button onClick={() => router.push(`/${localeString}/services`)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {categoryTranslations?.notFound?.button || "Volver a Servicios"}
          </Button>
        </div>
      </div>
    );
  }

  // Filter and sort products
  const filteredProducts = category.products?.filter((product: any) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesPrice = true;
    if (priceFilter === "under-25") {
      matchesPrice = parseFloat(product.price) < 25;
    } else if (priceFilter === "25-50") {
      matchesPrice =
        parseFloat(product.price) >= 25 && parseFloat(product.price) <= 50;
    } else if (priceFilter === "over-50") {
      matchesPrice = parseFloat(product.price) > 50;
    }

    return matchesSearch && matchesPrice;
  });

  const sortedProducts = filteredProducts?.sort((a: any, b: any) => {
    switch (sortBy) {
      case "price-low":
        return parseFloat(a.price) - parseFloat(b.price);
      case "price-high":
        return parseFloat(b.price) - parseFloat(a.price);
      case "name":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      BookOpen,
      BarChart3,
      FileText,
      Video,
      Package,
      Truck,
      Globe,
      Users,
      Target,
      Shield,
      Award,
      Zap,
    };
    return icons[iconName] || BookOpen;
  };

  const handleShare = (product: any) => {
    setSelectedProduct(product);
    setShareDialogOpen(true);
  };

  const getProductUrl = (product: any) => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/${localeString}/services/${slug}/${product.slug}`;
    }
    return "";
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const shareToWhatsApp = (url: string, productTitle: string) => {
    const message = `¡Mira este producto: ${productTitle}\n\n${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <CategoryHero category={category} locale={localeString} />

      {/* Features Section - Moved below header for better flow */}
      {category.features && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-12 bg-gradient-to-r from-gray-50 to-blue-50"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {categoryTranslations?.title1}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {categoryTranslations?.description1}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {category.features.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="flex items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-foreground font-semibold text-lg">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Products Section */}
      {category.products && category.products.length > 0 && (
        <motion.section
          id="products-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-16 bg-background"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {categoryTranslations?.title2}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {categoryTranslations?.description2}{" "}
                <span className="font-semibold text-blue-600">
                  {category.title.toLowerCase()}
                </span>
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <div className="relative flex-1 md:flex-initial">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder={
                        categoryTranslations?.filters?.search?.placeholder
                      }
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue
                        placeholder={
                          categoryTranslations?.filters?.sort?.placeholder
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryTranslations?.filters?.sort?.options?.map(
                        (option: any) => {
                          const value: any = Object.values(option)[0];
                          return (
                            <SelectItem key={value?.id} value={value?.id}>
                              {value?.text}
                            </SelectItem>
                          );
                        }
                      )}
                    </SelectContent>
                  </Select>
                  <Select value={priceFilter} onValueChange={setPriceFilter}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue
                        placeholder={
                          categoryTranslations?.filters?.price?.placeholder
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryTranslations?.filters?.price?.options?.map(
                        (option: any) => {
                          const value: any = Object.values(option)[0];
                          return (
                            <SelectItem key={value?.id} value={value?.id}>
                              {value?.text}
                            </SelectItem>
                          );
                        }
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-sm text-muted-foreground">
                  {sortedProducts?.length}{" "}
                  {categoryTranslations?.filters?.results}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {sortedProducts?.map((product: any, index: number) => {
                const IconComponent = getIconComponent(product.icon);
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Card className="h-full flex flex-col border-border shadow-lg hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden relative">
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge
                            variant="secondary"
                            className={`text-xs font-semibold ${
                              product.badge === "Más Vendido"
                                ? "bg-orange-100 text-orange-700 border-orange-200"
                                : product.badge === "Popular"
                                ? "bg-blue-100 text-blue-700 border-blue-200"
                                : product.badge === "Premium"
                                ? "bg-purple-100 text-purple-700 border-purple-200"
                                : product.badge === "Nuevo"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : product.badge === "Mejor Valor"
                                ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                : "bg-gray-100 text-gray-700 border-gray-200"
                            }`}
                          >
                            {product.badge}
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <CardTitle className="text-xl text-card-foreground mb-2 line-clamp-2">
                          {product.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground line-clamp-3">
                          {product.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex flex-col flex-1">
                        <div className="flex flex-col flex-1">
                          {/* Contenido superior */}
                          <div>
                            <div className="mb-4">
                              <span className="text-3xl font-bold text-primary">
                                ${product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through ml-2">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>

                            <ul className="space-y-2 mb-6">
                              {product.features
                                ?.slice(0, 3)
                                .map((feature: string, idx: number) => (
                                  <li
                                    key={idx}
                                    className="flex items-center text-sm text-muted-foreground"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                    <span className="line-clamp-1">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>

                          {/* Contenido inferior - duration y botones */}
                          <div className="mt-auto space-y-4">
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{product.duration}</span>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Button
                                type="button"
                                className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                                onClick={() => {
                                  router.push(
                                    `/${locale}/services/${slug}/${product.slug}`
                                  );
                                }}
                              >
                                {product.cta}
                              </Button>

                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="w-10 h-10"
                                onClick={() => handleShare(product)}
                              >
                                <Share2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* No Results */}
            {sortedProducts?.length === 0 && (
              <motion.div variants={itemVariants} className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {categoryTranslations?.noResults?.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {categoryTranslations?.noResults?.description}
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSortBy("popular");
                    setPriceFilter("all");
                  }}
                  variant="outline"
                >
                  {categoryTranslations?.noResults?.button}
                </Button>
              </motion.div>
            )}
          </div>
        </motion.section>
      )}

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {categoryTranslations?.share?.title || "Compartir Producto"}
            </DialogTitle>
            <DialogDescription>
              {categoryTranslations?.share?.description ||
                "Comparte este producto con otros"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Product URL Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {categoryTranslations?.share?.urlLabel || "Enlace del producto"}
              </label>
              <div className="relative">
                <Input
                  value={selectedProduct ? getProductUrl(selectedProduct) : ""}
                  readOnly
                  className="pr-20 bg-gray-50"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="absolute right-1 top-1 h-8 px-3"
                  onClick={() =>
                    selectedProduct &&
                    copyToClipboard(getProductUrl(selectedProduct))
                  }
                >
                  {copySuccess ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              {copySuccess && (
                <p className="text-sm text-green-600">
                  {categoryTranslations?.share?.copied || "¡Enlace copiado!"}
                </p>
              )}
            </div>

            {/* Share Options */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                {categoryTranslations?.share?.optionsLabel || "Compartir en"}
              </label>

              <div className="grid grid-cols-1 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() =>
                    selectedProduct &&
                    shareToWhatsApp(
                      getProductUrl(selectedProduct),
                      selectedProduct.title
                    )
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-3 text-green-600" />
                  {categoryTranslations?.share?.whatsapp || "WhatsApp"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() =>
                    selectedProduct &&
                    copyToClipboard(getProductUrl(selectedProduct))
                  }
                >
                  <Copy className="w-5 h-5 mr-3 text-blue-600" />
                  {categoryTranslations?.share?.copyLink || "Copiar enlace"}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
