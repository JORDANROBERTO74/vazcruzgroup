import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  menuItems: any[];
  locale: string;
  pathname: string;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  menuItems,
  locale,
  pathname,
}) => {
  return (
    <nav
      className="hidden md:flex items-center space-x-8"
      role="navigation"
      aria-label="Main navigation"
    >
      {menuItems.map((item: any) => {
        const isActive =
          pathname.split("/")[2] === (item.href.split("/")[1] || undefined);
        return (
          <Link
            key={item.href}
            href={`/${locale}${item.href}`}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNavigation;
