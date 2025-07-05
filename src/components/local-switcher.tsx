"use client";

import { useLocale, useMessages } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { upperCase } from "lodash";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathName = usePathname();
  const localActive = useLocale();
  const [selectedLocale, setSelectedLocale] = useState(localActive);
  const messages = useMessages();
  const object: any = messages?.header;

  const onSelectChange = (nextLocale: string) => {
    setSelectedLocale(nextLocale);
    startTransition(() => {
      router.push(
        `/${nextLocale}${pathName.substring(localActive.length + 1)}`
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isPending} asChild>
        <Button variant="outline" className="w-full justify-start">
          <Languages className="mr-2 h-4 w-4" />
          {upperCase(selectedLocale)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuRadioGroup
          value={selectedLocale}
          onValueChange={onSelectChange}
        >
          {object?.languageButton?.languages?.map((item: any) => (
            <DropdownMenuRadioItem key={item.id} value={item.id}>
              {item.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
