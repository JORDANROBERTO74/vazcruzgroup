import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "@/components/local-switcher";

interface MobileNavigationProps {
  menuItems: any[];
  locale: string;
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  menuItems,
  locale,
  isOpen,
  onClose,
  pathname,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="space-y-1 pb-3 pt-2">
        {menuItems.map((item: any) => {
          const isActive =
            pathname.split("/")[2] === (item.href.split("/")[1] || undefined);
          return (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className={cn(
                "block px-3 py-2 text-base font-medium transition-colors hover:text-primary",
                isActive ? "text-primary bg-accent" : "text-muted-foreground"
              )}
              onClick={onClose}
              aria-current={isActive ? "page" : undefined}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="border-t pt-4 pb-3 space-y-2">
        <div className="px-3">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
