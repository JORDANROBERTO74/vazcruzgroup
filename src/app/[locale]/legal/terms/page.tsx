"use client";

import { motion } from "framer-motion";
import { useMessages } from "next-intl";

export default function TermsAndConditions() {
  const messages = useMessages();

  // Extract data from messages
  const data = (messages as any)?.footer?.legalPages?.terms;

  // Fallback
  if (!data) {
    return (
      <section className="-mt-[64px] pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">Terms content not available</p>
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
              {data?.title || "Terms and Conditions"}
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

            {/* Acceptance of Terms */}
            {data?.sections?.acceptance && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.acceptance?.title || "Acceptance of Terms"}
                </h2>
                {data?.sections?.acceptance?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.acceptance?.content ||
                      "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Our Services */}
            {data?.sections?.services && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.services?.title || "Our Services"}
                </h2>
                {data?.sections?.services?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.services?.content ||
                      "Content not available"}
                  </p>
                )}
                {data?.sections?.services?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.services?.items.map(
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

            {/* User Obligations */}
            {data?.sections?.obligations && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.obligations?.title || "User Obligations"}
                </h2>
                {data?.sections?.obligations?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.obligations?.content ||
                      "Content not available"}
                  </p>
                )}
                {data?.sections?.obligations?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.obligations?.items.map(
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

            {/* Limitations of Liability */}
            {data?.sections?.limitations && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.limitations?.title ||
                    "Limitations of Liability"}
                </h2>
                {data?.sections?.limitations?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.limitations?.content ||
                      "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Intellectual Property */}
            {data?.sections?.intellectual && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.intellectual?.title ||
                    "Intellectual Property"}
                </h2>
                {data?.sections?.intellectual?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.intellectual?.content ||
                      "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Termination */}
            {data?.sections?.termination && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.termination?.title || "Termination"}
                </h2>
                {data?.sections?.termination?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.termination?.content ||
                      "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Changes to Terms */}
            {data?.sections?.changes && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.changes?.title || "Changes to Terms"}
                </h2>
                {data?.sections?.changes?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.changes?.content ||
                      "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Governing Law */}
            {data?.sections?.governing && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.governing?.title || "Governing Law"}
                </h2>
                {data?.sections?.governing?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.governing?.content ||
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
