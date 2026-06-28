import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the VJS Smart Systems engineering team. We respond within 1 business day.",
};

export default function Page() {
  return <ContactClient />;
}
