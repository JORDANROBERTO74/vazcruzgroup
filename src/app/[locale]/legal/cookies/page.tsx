"use client";

import { motion } from "framer-motion";
import { useMessages } from "next-intl";

export default function CookiePolicy() {
  const messages = useMessages();

  // Extract data from messages
  const data = (messages as any)?.footer?.legalPages?.cookies;

  // Fallback
  if (!data) {
    return (
      <section className="-mt-[64px] pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">
              Cookie policy content not available
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
              {data?.title || "Cookie Policy"}
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
                Last updated: {data?.lastUpdated || "Not available"}
              </p>
            )}

            {/* Introduction */}
            {data?.introduction && (
              <div className="mb-8">
                <p className="text-foreground leading-relaxed mb-4">
                  {data?.introduction || "Introduction"}
                </p>
              </div>
            )}

            {/* What Are Cookies */}
            {data?.sections?.what && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.what?.title || "What Are Cookies"}
                </h2>
                {data?.sections?.what?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.what?.content || "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Types of Cookies */}
            {data?.sections?.types && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.types?.title || "Types of Cookies We Use"}
                </h2>
                {data?.sections?.types?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.types?.content || "Content not available"}
                  </p>
                )}
                {data?.sections?.types?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.types?.items.map(
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

            {/* How We Use Cookies */}
            {data?.sections?.usage && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.usage?.title || "How We Use Cookies"}
                </h2>
                {data?.sections?.usage?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.usage?.content || "Content not available"}
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

            {/* Managing Cookies */}
            {data?.sections?.management && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.management?.title || "Managing Cookies"}
                </h2>
                {data?.sections?.management?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.management?.content ||
                      "Content not available"}
                  </p>
                )}
                {data?.sections?.management?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.management?.items.map(
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

            {/* Third-Party Services */}
            {data?.sections?.thirdParty && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.thirdParty?.title || "Third-Party Services"}
                </h2>
                {data?.sections?.thirdParty?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.thirdParty?.content ||
                      "Content not available"}
                  </p>
                )}
                {data?.sections?.thirdParty?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.thirdParty?.items.map(
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

            {/* Cookie Consent */}
            {data?.sections?.consent && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.consent?.title || "Cookie Consent"}
                </h2>
                {data?.sections?.consent?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.consent?.content ||
                      "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Changes to Cookie Policy */}
            {data?.sections?.changes && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.changes?.title || "Changes to Cookie Policy"}
                </h2>
                {data?.sections?.changes?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.changes?.content ||
                      "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Contact Section */}
            {data?.contact && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.contact?.title || "Contact Us"}
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
                      Phone: {data?.contact?.phone}
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
