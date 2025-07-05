"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter, usePathname } from "next/navigation";
import LocalSwitcher from "@/components/local-switcher";
import { useTheme } from "next-themes";
import { useLocale, useMessages } from "next-intl";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = React.useState("/img/logo-dark.png");
  const messages = useMessages();
  const object: any = messages?.header;

  React.useEffect(() => {
    if (theme === "light") {
      setLogoSrc("/img/logo-dark.png");
    } else {
      setLogoSrc("/img/logo-light.png");
    }
  }, [theme]);

  const handleClick = (href: string) => {
    router.push(`/${locale}/${href}`);
  };

  return (
    <header className="border-b border-border">
      <div className="hidden md:flex mx-auto px-4 py-4 justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src={logoSrc} alt="Logo" width={48} height={38} priority />
        </Link>
        <div className="flex items-center justify-end gap-6 w-full">
          <nav className="flex items-center gap-6 w-full max-w-fit">
            {object?.menu?.items?.map((item: any) => {
              const isActive =
                pathname.split("/")[2] ===
                (item.href.split("/")[1] || undefined);

              return (
                <div
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`w-fit text-sm hover:underline hover:text-muted-foreground cursor-pointer ${
                    isActive ? "text-muted-foreground" : ""
                  }`}
                >
                  {item.name}
                </div>
              );
            })}
          </nav>
          <div className="flex items-center gap-1 w-full max-w-fit">
            <div className="w-full">
              <ThemeToggle variant="ghost" />
            </div>
            <div className="w-full">
              <LocalSwitcher />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden max-w-6xl mx-auto px-4 py-4 justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src={logoSrc} alt="Logo" width={40} height={32} priority />
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-4 justify-between">
            <div>
              <SheetHeader>
                <SheetTitle>{object?.menu?.label}</SheetTitle>
                <SheetDescription />
              </SheetHeader>
              {object?.menu?.items?.map((item: any, index: number) => {
                const isActive =
                  pathname.split("/")[2] ===
                  (item.href.split("/")[1] || undefined);

                return (
                  <SheetClose key={index} className="grid gap-4 py-2 w-full">
                    {index !== 0 && <Separator />}
                    <div
                      onClick={() => {
                        setIsOpen(false);
                        handleClick(item.href);
                      }}
                      className={`text-md font-medium text-center hover:text-muted-foreground cursor-pointer ${
                        isActive ? "text-muted-foreground" : ""
                      }`}
                    >
                      {item?.name}
                    </div>
                  </SheetClose>
                );
              })}
            </div>
            <SheetFooter>
              <div className="flex justify-between items-center">
                <ThemeToggle variant="outline" />
                <div>
                  <LocalSwitcher />
                </div>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
