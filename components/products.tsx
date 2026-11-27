"use client";

import Image from "next/image";
import { filterLabels, productsFor, type CatalogFilter } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { useSite } from "@/components/site-state";

const chips: CatalogFilter[] = [
  "all",
  "brakes",
  "batteries",
  "engine",
  "filters",
  "spark",
  "suspension",
  "accessories",
];

export function Products() {
  const { filter, setFilter, enquire } = useSite();
  const list = productsFor(filter);

  return (
    <section
      id="products"
      className="scroll-mt-24 relative overflow-hidden px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(242,13,24,0.22),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(80,150,255,0.12),transparent_28%),linear-gradient(#0c0c0e,#080808)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          kicker="Stock"
          title="Featured products"
          text="Guide prices for the parts drivers ask for most. Enquire and we will confirm fitment and the final figure."
        />

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter parts">
          {chips.map((chip) => {
            const active = chip === filter;
            return (
              <button
                key={chip}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(chip)}
                className={`shrink-0 border px-3 py-2 font-display text-sm tracking-[0.14em] uppercase transition ${
                  active
                    ? "border-racing bg-racing text-white"
                    : "border-white/15 bg-black/40 text-silver hover:border-white/40 hover:text-white"
                }`}
              >
                {filterLabels[chip]}
              </button>
            );
          })}
        </div>

        <p className="mb-5 font-display text-sm tracking-[0.28em] text-ash uppercase">
          Showing {filterLabels[filter]} · {list.length} {list.length === 1 ? "part" : "parts"}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col border border-white/10 bg-panel/90 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-racing/70 hover:shadow-[0_22px_50px_rgba(242,13,24,0.18)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute top-0 right-0 h-8 w-8 bg-racing [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                <span className="absolute bottom-3 left-3 bg-black/75 px-2 py-1 font-display text-sm tracking-widest text-silver uppercase">
                  {product.price}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-3xl leading-none uppercase">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ash">{product.description}</p>
                <p className="mt-3 text-xs tracking-wide text-silver/80 uppercase">
                  Guide price · confirmed on enquiry
                </p>
                <button
                  type="button"
                  onClick={() => enquire(product.name)}
                  className="mt-4 inline-flex h-11 items-center justify-center bg-white font-display text-base tracking-[0.16em] text-ink uppercase transition hover:bg-racing hover:text-white"
                >
                  Enquire Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
