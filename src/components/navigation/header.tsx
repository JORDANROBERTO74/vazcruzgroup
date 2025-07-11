"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/local-switcher";
import { Menu, X } from "lucide-react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { useLocale, useMessages } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const messages = useMessages();
  const menuItems = (messages as any)?.header?.menu?.items || [];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Fallback si no hay elementos de menú
  if (menuItems.length === 0) {
    return (
      <header className="sticky top-0 z-50 w-100vw border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href={`/${locale}`} className="flex items-center space-x-2">
                <img
                  src="/img/logo.png"
                  alt="VasCruz Group LLC"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-100vw border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-2"
              onClick={closeMenu}
            >
              <img
                src="/img/logo.png"
                alt="VasCruz Group LLC"
                width={75}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation
            menuItems={menuItems}
            locale={locale}
            pathname={pathname}
          />

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LocaleSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation
          menuItems={menuItems}
          locale={locale}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          pathname={pathname}
        />
      </div>
    </header>
  );
};

export default Header;
