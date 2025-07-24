// src/lib/sendContactForm.ts
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

// Verificar que las variables de entorno estén definidas
if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  throw new Error("EmailJS environment variables are not properly configured");
}

export async function sendContactForm(values: {
  date: string;
  name: string;
  full_name: string;
  email: string;
  company: string;
  phone: number;
  business_type: string;
  subject: string;
  message: string;
  website_url: string;
  domain: string;
}) {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        date: values.date,
        name: values.name,
        full_name: values.full_name,
        email: values.email,
        company: values.company,
        phone: values.phone,
        business_type: values.business_type,
        subject: values.subject,
        message: values.message,
        website_url: values.website_url,
        domain: values.domain,
      },
      PUBLIC_KEY
    );
    return result;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
}
