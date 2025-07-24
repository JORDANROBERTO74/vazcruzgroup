"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/${locale}`}>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
