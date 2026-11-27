"use client";

import { FormEvent, useEffect, useState } from "react";
import { address, phones, whatsappLink } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { useSite } from "@/components/site-state";

type Errors = Partial<Record<"name" | "phone" | "email" | "part" | "message", string>>;

const fields = ["name", "phone", "email", "part", "message"] as const;

export function Contact() {
  const { draft } = useSite();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [car, setCar] = useState("");
  const [part, setPart] = useState("");
  const [condition, setCondition] = useState("Either");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!draft.nonce) return;
    setPart(draft.part);
    if (draft.car) setCar(draft.car);
    if (draft.condition) setCondition(draft.condition);
    setSent(false);
  }, [draft.nonce, draft.part, draft.car, draft.condition]);

  function enquiryText() {
    return [
      "110 PARTS enquiry",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Car: ${car.trim() || "Not specified"}`,
      `Part: ${part.trim()}`,
      `Stock: ${condition === "Either" ? "New or second-hand" : condition}`,
      `Message: ${message.trim()}`,
    ].join("\n");
  }

  function validate() {
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your name.";
    const digits = phone.replace(/[^\d+]/g, "");
    if (!/^(0\d{10}|\+44\d{10})$/.test(digits)) next.phone = "Enter a valid UK phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email.";
    if (!part.trim()) next.part = "Tell us which part you need.";
    if (!message.trim()) next.message = "Add a short message.";
    return next;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    const first = fields.find((field) => next[field]);
    if (first) {
      document.getElementById(first)?.focus();
      setSent(false);
      return;
    }
    setSent(true);
    window.open(whatsappLink(enquiryText()), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(242,13,24,0.28),transparent_36%),radial-gradient(circle_at_100%_0%,rgba(255,160,40,0.12),transparent_26%),#0c0c0e]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border border-white/10 bg-black/60 p-5 sm:p-7">
          <SectionHeading
            index="06"
            kicker="Enquiry"
            title="Contact us"
            text="Say whether you need a new part, a second-hand part, or a body panel. The form opens WhatsApp with your message ready to send."
          />
          <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Name" value={name} error={errors.name} onChange={setName} autoComplete="name" />
            <Field id="phone" label="Phone Number" value={phone} error={errors.phone} onChange={setPhone} autoComplete="tel" />
            <Field id="email" label="Email" value={email} error={errors.email} onChange={setEmail} autoComplete="email" type="email" />
            <Field id="car" label="Car Model" value={car} onChange={setCar} placeholder="e.g. BMW 3 Series 2020" />
            <Field id="part" label="Required Part" value={part} error={errors.part} onChange={setPart} />
            <label className="block text-xs tracking-[0.2em] text-ash uppercase">
              Stock
              <span className="relative mt-2 block">
                <select
                  id="condition"
                  value={condition}
                  onChange={(event) => setCondition(event.target.value)}
                  className="h-12 w-full appearance-none border border-white/15 bg-ink px-3 text-sm tracking-normal text-white normal-case outline-none focus:border-racing"
                >
                  <option value="New">New</option>
                  <option value="Second-hand">Second-hand</option>
                  <option value="Either">New or second-hand</option>
                </select>
              </span>
            </label>
            <label className="block text-xs tracking-[0.2em] text-ash uppercase sm:col-span-2">
              Message
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                maxLength={1000}
                className="mt-2 w-full resize-y border border-white/15 bg-ink px-3 py-3 text-sm tracking-normal text-white normal-case outline-none focus:border-racing"
              />
              {errors.message ? <span className="mt-1 block text-racing normal-case">{errors.message}</span> : null}
            </label>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center bg-racing px-6 font-display text-lg tracking-wider text-white uppercase shadow-[0_12px_30px_rgba(242,13,24,0.4)] transition hover:-translate-y-0.5 hover:bg-[#ff2d36]"
              >
                Send Enquiry
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[#25D366] px-6 font-display text-lg tracking-wider text-ink uppercase transition hover:-translate-y-0.5 hover:bg-[#3ee07a]"
              >
                <WhatsAppMark />
                WhatsApp Enquiry
              </a>
            </div>
          </form>
          {sent ? (
            <p className="mt-4 border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-3 text-sm text-silver" role="status">
              WhatsApp should be open with your enquiry. If it did not appear, use the WhatsApp button and paste the details.
            </p>
          ) : null}
        </div>

        <aside className="flex flex-col justify-between gap-6 border border-racing/40 bg-gradient-to-b from-racing/20 to-black p-5 sm:p-7">
          <div>
            <p className="font-display text-sm tracking-[0.32em] text-racing uppercase">110 Parts</p>
            <h3 className="mt-2 font-display text-5xl leading-[0.9] uppercase">Talk to the counter</h3>
            <p className="mt-4 text-sm leading-relaxed text-silver">
              Call either line, or message the mobile on WhatsApp. Tell us the vehicle, the part, and whether you want it new or second-hand.
            </p>
          </div>
          <div className="space-y-4">
            <a href={phones.landlineTel} className="block">
              <span className="text-xs tracking-[0.22em] text-ash uppercase">Landline</span>
              <span className="mt-1 block font-display text-4xl text-white">{phones.landlineDisplay}</span>
            </a>
            <a href={phones.mobileTel} className="block">
              <span className="text-xs tracking-[0.22em] text-ash uppercase">Mobile / WhatsApp</span>
              <span className="metal-red mt-1 block font-display text-4xl">{phones.mobileDisplay}</span>
            </a>
            <a href={address.maps} target="_blank" rel="noopener noreferrer" className="block">
              <span className="text-xs tracking-[0.22em] text-ash uppercase">Address</span>
              <span className="mt-1 block text-lg text-white">{address.street}</span>
              <span className="block font-display text-3xl tracking-wide">{address.postcode}</span>
            </a>
          </div>
          <p className="text-sm text-ash">Quality Parts. Reliable Performance.</p>
        </aside>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  placeholder,
  className = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`block text-xs tracking-[0.2em] text-ash uppercase ${className}`}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full border border-white/15 bg-ink px-3 text-sm tracking-normal text-white normal-case outline-none placeholder:text-ash/70 focus:border-racing"
      />
      {error ? <span className="mt-1 block text-racing normal-case">{error}</span> : null}
    </label>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.04c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.24-.28.64-.41.85-.41.21 0 .42 0 .6.01.19.01.45-.07.7.53.26.62.88 2.14.96 2.3.08.16.13.34.03.55-.1.21-.16.34-.31.52-.15.18-.32.4-.46.54-.14.14-.29.29-.12.56.16.27.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.32.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}
