"use client";

import { motion } from "framer-motion";
import { useMessages } from "next-intl";

export default function AccessibilityPage() {
  const messages = useMessages();

  // Extract data from messages
  const data = (messages as any)?.footer?.legalPages?.accessibility;

  // Fallback
  if (!data) {
    return (
      <section className="-mt-[64px] pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">
              Accessibility content not available
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
              {data?.title || "Website Accessibility Statement"}
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

            {/* Our Commitment */}
            {data?.sections?.commitment && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.commitment?.title || "Our Commitment"}
                </h2>
                {data?.sections?.commitment?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.commitment?.content ||
                      "Content not available"}
                  </p>
                )}
              </div>
            )}

            {/* Accessibility Standards */}
            {data?.sections?.standards && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.standards?.title ||
                    "Accessibility Standards"}
                </h2>
                {data?.sections?.standards?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.standards?.content ||
                      "Content not available"}
                  </p>
                )}
                {data?.sections?.standards?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.standards?.items.map(
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

            {/* Accessibility Features */}
            {data?.sections?.features && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.features?.title || "Accessibility Features"}
                </h2>
                {data?.sections?.features?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.features?.content ||
                      "Content not available"}
                  </p>
                )}
                {data?.sections?.features?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.features?.items.map(
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

            {/* Getting Assistance */}
            {data?.sections?.assistance && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.assistance?.title || "Getting Assistance"}
                </h2>
                {data?.sections?.assistance?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.assistance?.content ||
                      "Content not available"}
                  </p>
                )}
                {data?.sections?.assistance?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.assistance?.items.map(
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

            {/* Technical Requirements */}
            {data?.sections?.technical && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.technical?.title || "Technical Requirements"}
                </h2>
                {data?.sections?.technical?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.technical?.content ||
                      "Content not available"}
                  </p>
                )}
                {data?.sections?.technical?.items && (
                  <ul className="space-y-2 mb-6">
                    {data?.sections?.technical?.items.map(
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

            {/* Testing and Evaluation */}
            {data?.sections?.testing && (
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 mb-4">
                  {data?.sections?.testing?.title || "Testing and Evaluation"}
                </h2>
                {data?.sections?.testing?.content && (
                  <p className="text-foreground leading-relaxed mb-4">
                    {data?.sections?.testing?.content ||
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
