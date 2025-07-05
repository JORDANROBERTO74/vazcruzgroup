"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useMessages } from "next-intl";

interface ThemeToggleProps {
  variant:
    | "ghost"
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "secondary";
}

export function ThemeToggle({ variant }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const messages = useMessages();
  const object: any = messages?.header;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{object?.themeButton?.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
