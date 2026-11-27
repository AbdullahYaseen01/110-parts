import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hello 110 PARTS, I would like to enquire about a car part.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp 110 Parts"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-display text-base tracking-wide text-ink uppercase shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition hover:-translate-y-0.5 hover:bg-[#3ee07a]"
    >
      <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.04c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.24-.28.64-.41.85-.41.21 0 .42 0 .6.01.19.01.45-.07.7.53.26.62.88 2.14.96 2.3.08.16.13.34.03.55-.1.21-.16.34-.31.52-.15.18-.32.4-.46.54-.14.14-.29.29-.12.56.16.27.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.32.07.12.07.68-.17 1.36Z" />
      </svg>
      <span className="relative">WhatsApp</span>
    </a>
  );
}
