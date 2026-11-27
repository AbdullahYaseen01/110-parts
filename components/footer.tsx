"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { address, categories, nav, phones, whatsappLink } from "@/lib/site";
import { useSite } from "@/components/site-state";

export function Footer() {
  const { explore } = useSite();

  return (
    <footer className="border-t border-racing/60 bg-black px-4 pt-12 pb-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt="110 PARTS"
            width={1014}
            height={457}
            className="h-20 w-auto bg-black sm:h-24"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
            Premium car parts for a reliable drive. The right component, confirmed before you buy.
          </p>
          <div className="mt-5 flex gap-2">
            <Social href={whatsappLink()} label="WhatsApp">
              <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.8 12.6c-.2.56-1.15 1.06-1.6 1.12-.4.06-.92.1-1.5-.08-.34-.1-.78-.26-1.34-.5-2.36-1.02-3.9-3.4-4.02-3.56-.12-.16-.96-1.28-.96-2.44 0-1.16.6-1.73.82-1.96.2-.22.52-.34.7-.34.18 0 .34 0 .5.01.16 0 .37-.06.58.44.22.52.74 1.78.8 1.9.06.14.1.28.02.46-.08.18-.14.28-.26.44-.12.14-.26.32-.38.44-.12.12-.24.24-.1.46.14.22.6.98 1.28 1.58.88.78 1.62 1.02 1.86 1.14.24.12.36.1.5-.06.14-.16.58-.68.74-.9.16-.22.3-.18.5-.1.2.06 1.32.62 1.54.74.22.1.38.16.44.26.06.1.06.56-.14 1.12Z" />
            </Social>
            <Social href="#contact" label="Facebook">
              <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
            </Social>
            <Social href="#contact" label="Instagram">
              <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.2 6.3a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
            </Social>
            <Social href="#contact" label="TikTok">
              <path d="M14 4c.4 2.2 1.8 3.8 4 4.2v2.4c-1.4 0-2.7-.4-4-1.2v5.8a5.2 5.2 0 1 1-5.2-5.2c.3 0 .6 0 .8.1v2.6a2.6 2.6 0 1 0 1.8 2.5V4H14Z" />
            </Social>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.2em] uppercase">Quick navigation</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-ash transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.2em] uppercase">Product categories</h2>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => explore(category.id)}
                  className="text-left text-sm text-ash transition hover:text-white"
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.2em] uppercase">Contact details</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={phones.landlineTel} className="text-silver hover:text-white">
                {phones.landlineDisplay}
              </a>
            </li>
            <li>
              <a href={phones.mobileTel} className="text-silver hover:text-white">
                {phones.mobileDisplay}
              </a>
            </li>
            <li>
              <a href={address.maps} target="_blank" rel="noopener noreferrer" className="text-ash hover:text-white">
                {address.full}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-xs tracking-wide text-ash uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 110 PARTS. All rights reserved.</p>
        <p>Quality Parts. Reliable Performance.</p>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:-translate-y-0.5 hover:border-racing hover:bg-racing"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
