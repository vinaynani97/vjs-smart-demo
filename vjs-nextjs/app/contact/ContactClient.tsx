"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/data/site";
import { submitInquiry } from "@/lib/api";

const initialForm = {
  full_name: "",
  company_name: "",
  phone: "",
  email: "",
  product_interest: "",
  project_requirement: "",
  message: "",
};

interface FieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  className?: string;
}

const Field = ({ name, label, value, onChange, type = "text", required = false, className = "" }: FieldProps) => (
  <div className={className}>
    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
      {label}{required && " *"}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="mt-2 w-full bg-ink-950 border border-ink-800 px-4 py-3 text-sm text-ink-50 placeholder:text-ink-500 focus:outline-none focus:border-signal-500"
    />
  </div>
);

interface ContactRowProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const ContactRow = ({ icon: Icon, label, value, href }: ContactRowProps) => {
  const inner = (
    <div className="flex items-start gap-4 group">
      <div className="w-11 h-11 grid place-items-center border border-ink-800 text-signal-500 group-hover:bg-signal-500 group-hover:text-white transition-colors shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">{label}</p>
        <p className="text-base text-ink-100 mt-1.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : <div>{inner}</div>;
};

export default function ContactClient() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitInquiry({ ...form, source: "contact_page" });
      toast.success("Inquiry submitted. We'll be in touch within 1 business day.");
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const waLink = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <section className="relative border-b border-ink-800/80 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[520px] h-[520px] bg-signal-500/15 blur-[140px] rounded-full" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-32">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Contact Us</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter mt-6 max-w-4xl leading-[0.98] text-balance">
            Talk to our <span className="text-signal-500">engineering team</span>.
          </h1>
          <p className="text-lg text-ink-300 max-w-2xl mt-6 leading-relaxed">
            Tell us about your plant, your process and your goals. We&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: company details */}
          <Reveal className="lg:col-span-5 space-y-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Office</p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight mt-4">Get in touch</h2>
            </div>

            <ul className="space-y-6">
              <ContactRow icon={MapPin} label="Office Address" value={COMPANY.address} />
              <ContactRow
                icon={Phone}
                label="Phone"
                value={COMPANY.phone}
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value={COMPANY.email}
                href={`mailto:${COMPANY.email}`}
              />
              <ContactRow icon={Clock} label="Working Hours" value={COMPANY.hours} />
            </ul>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-cta"
              className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>

            <div className="border border-ink-800 overflow-hidden aspect-[16/10] mt-2">
              <iframe
                title="VJS Smart Systems Location"
                src={COMPANY.mapsEmbed}
                className="w-full h-full grayscale-[40%] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Right: inquiry form */}
          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="border border-ink-800 bg-ink-900/40">
              <div className="p-8 border-b border-ink-800">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Inquiry Form</p>
                <h3 className="font-display text-2xl lg:text-3xl font-medium tracking-tight mt-3">
                  Tell us about your project
                </h3>
              </div>

              {submitted ? (
                <div data-testid="contact-success" className="p-12 text-center">
                  <div className="w-14 h-14 grid place-items-center bg-signal-500 mx-auto">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-display text-2xl mt-6">Thanks — message received.</p>
                  <p className="text-ink-300 mt-3">Our engineering team will reach out within one business day.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    data-testid="send-another"
                    className="mt-8 inline-flex items-center gap-2 border border-ink-700 hover:border-signal-500 hover:text-signal-500 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  data-testid="contact-form"
                  className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <Field name="full_name" label="Full Name" value={form.full_name} onChange={onChange} required />
                  <Field name="company_name" label="Company Name" value={form.company_name} onChange={onChange} />
                  <Field name="phone" label="Phone Number" value={form.phone} onChange={onChange} required />
                  <Field name="email" label="Email Address" type="email" value={form.email} onChange={onChange} required />
                  <Field
                    name="product_interest"
                    label="Product / Service Interested In"
                    value={form.product_interest}
                    onChange={onChange}
                    className="md:col-span-2"
                  />
                  <Field
                    name="project_requirement"
                    label="Project Requirement"
                    value={form.project_requirement}
                    onChange={onChange}
                    className="md:col-span-2"
                  />
                  <div className="md:col-span-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={onChange}
                      rows={5}
                      placeholder="Share your application, environment, timelines and any technical details..."
                      className="mt-2 w-full bg-ink-950 border border-ink-800 px-4 py-3 text-sm text-ink-50 placeholder:text-ink-500 focus:outline-none focus:border-signal-500 resize-none"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between pt-4 border-t border-ink-800">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                      We respond within 1 business day
                    </p>
                    <button
                      data-testid="contact-submit"
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center justify-center gap-2 bg-signal-500 hover:bg-signal-600 disabled:opacity-60 text-white px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-colors"
                    >
                      {submitting ? "Sending..." : <><span>Send Inquiry</span> <Send className="w-4 h-4" /></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
