"use client";

import Link from "next/link";
import { useMessages } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const Footer = () => {
  const messages = useMessages();
  const object: any = messages?.footer;

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center">
          <div className="flex justify-center items-center w-full">
            <p className="text-sm text-muted-foreground">{object?.copyright}</p>
          </div>
          {/* <div className="flex justify-center items-center gap-6 w-full">
            {socialMedias.map((socialMedia) => (
              <TooltipProvider key={socialMedia?.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      key={socialMedia?.name}
                      href={socialMedia?.url}
                      target="_blank"
                    >
                      <Button variant="outline" size="icon">
                        {socialMedia?.icon}
                        <span className="sr-only">{socialMedia?.name}</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{socialMedia?.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div> */}
          <nav className="hidden md:flex justify-end gap-6 w-full">
            {object?.menu?.items?.map((item: any) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
