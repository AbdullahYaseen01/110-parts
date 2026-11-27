"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, phones } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-black/85 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="shrink-0 bg-black px-1" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="110 PARTS car parts"
            width={1014}
            height={457}
            priority
            className="h-14 w-auto sm:h-[68px]"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[15px] tracking-[0.16em] text-silver uppercase transition hover:text-racing"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phones.mobileTel}
            className="hidden h-10 items-center bg-racing px-4 font-display text-base tracking-wide text-white uppercase shadow-[0_8px_24px_rgba(242,13,24,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff2a33] sm:inline-flex"
          >
            {phones.mobileDisplay}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-black/50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-[76px] bottom-0 z-50 overflow-y-auto border-t border-white/10 bg-black px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-4xl tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-6 grid gap-3">
            <a href={phones.landlineTel} className="font-display text-2xl text-silver">
              {phones.landlineDisplay}
            </a>
            <a href={phones.mobileTel} className="font-display text-2xl text-racing">
              {phones.mobileDisplay}
            </a>
          </div>
        </nav>
      ) : null}
    </>
  );
}
