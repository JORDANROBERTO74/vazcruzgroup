// src/lib/sendContactForm.ts
import emailjs from "emailjs-com";

const SERVICE_ID = "service_61duuqb";
const TEMPLATE_ID = "template_npp5jry";
const PUBLIC_KEY = "KNZIs_YY8-uLYnjkn";

export async function sendContactForm(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
  time: string;
}) {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
        time: values.time,
      },
      PUBLIC_KEY
    );

    return result;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
}
