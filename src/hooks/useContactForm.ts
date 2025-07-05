// src/hooks/useContactForm.ts
import { useMutation } from "react-query";
import { sendContactForm } from "@/lib/sendContactForm";

export function useContactForm() {
  return useMutation({
    mutationFn: sendContactForm,
  });
}
