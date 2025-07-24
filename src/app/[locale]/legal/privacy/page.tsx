"use client";

import { motion } from "framer-motion";
import { useMessages } from "next-intl";

export default function PrivacyPolicy() {
  const messages = useMessages();

  // Extract data from messages
  const data = (messages as any)?.footer?.legalPages?.privacy;

  // Fallback
  if (!data) {
    return (
      <section className="-mt-[64px] pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">
              Privacy content not available
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page Banner */}
      <section className="bg-primary text-primary-foreground py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              {data?.title || "Política de Privacidad"}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Last Updated */}
            {data?.lastUpdated && (
              <p className="text-lg text-muted-foreground mb-8">
                Última actualización: {data?.lastUpdated || "No disponible"}
              </p>
            )}

            {/* Introduction */}
            {data?.introduction && (
              <div className="mb-8">
                <p className="text-foreground leading-relaxed mb-4">
                  {data?.introduction || "Introducción"}
                </p>
              </div>
            )}

            {/* Information We Collect */}
            {data?.sections?.information && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.information?.title ||
                    "Información que recopilamos"}
                </h2>
                {data?.sections?.information?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.information?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
                {data?.sections?.information?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.information?.items.map(
                      (item: string, itemIdx: number) => (
                        <li
                          key={itemIdx}
                          className="text-foreground mb-2 flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}

            {/* How We Use Your Information */}
            {data?.sections?.usage && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.usage?.title || "Cómo usamos tu información"}
                </h2>
                {data?.sections?.usage?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.usage?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
                {data?.sections?.usage?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.usage?.items.map(
                      (item: string, itemIdx: number) => (
                        <li
                          key={itemIdx}
                          className="text-foreground mb-2 flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}

            {/* Information Sharing */}
            {data?.sections?.sharing && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.sharing?.title ||
                    "Información que compartimos"}
                </h2>
                {data?.sections?.sharing?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.sharing?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
                {data?.sections?.sharing?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.sharing?.items.map(
                      (item: string, itemIdx: number) => (
                        <li
                          key={itemIdx}
                          className="text-foreground mb-2 flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}

            {/* Data Security */}
            {data?.sections?.security && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.security?.title || "Seguridad de los datos"}
                </h2>
                {data?.sections?.security?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.security?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
                {data?.sections?.security?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.security?.items.map(
                      (item: string, itemIdx: number) => (
                        <li
                          key={itemIdx}
                          className="text-foreground mb-2 flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}

            {/* Your Rights */}
            {data?.sections?.rights && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.rights?.title || "Tus derechos"}
                </h2>
                {data?.sections?.rights?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.rights?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
                {data?.sections?.rights?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.rights?.items.map(
                      (item: string, itemIdx: number) => (
                        <li
                          key={itemIdx}
                          className="text-foreground mb-2 flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}

            {/* Data Retention */}
            {data?.sections?.retention && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.retention?.title || "Retención de datos"}
                </h2>
                {data?.sections?.retention?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.retention?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
              </div>
            )}

            {/* Third Party Links */}
            {data?.sections?.thirdParty && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.thirdParty?.title || "Enlaces a terceros"}
                </h2>
                {data?.sections?.thirdParty?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.thirdParty?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
              </div>
            )}

            {/* Children's Privacy */}
            {data?.sections?.children && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.children?.title || "Privacidad de los niños"}
                </h2>
                {data?.sections?.children?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.children?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
              </div>
            )}

            {/* Changes to Privacy Policy */}
            {data?.sections?.changes && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.changes?.title ||
                    "Cambios a la Política de Privacidad"}
                </h2>
                {data?.sections?.changes?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.changes?.content ||
                      "Contenido no disponible"}
                  </p>
                )}
              </div>
            )}

            {/* Contact Section */}
            {data?.contact && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.contact?.title || "Contacto"}
                </h2>
                <div className="space-y-2">
                  {data?.contact?.address && (
                    <p className="text-foreground">{data?.contact?.address}</p>
                  )}
                  {data?.contact?.email && (
                    <p className="text-foreground">
                      Email: {data?.contact?.email}
                    </p>
                  )}
                  {data?.contact?.phone && (
                    <p className="text-foreground">
                      Teléfono: {data?.contact?.phone}
                    </p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
