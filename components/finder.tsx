"use client";

import Image from "next/image";
import { useMemo, useState, type FormEvent } from "react";
import { garage, matchesBrand, products } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { useSite } from "@/components/site-state";

type Search = { brand: string; model: string; year: string };

export function Finder() {
  const { enquire } = useSite();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState<Search | null>(null);

  const models = brand ? Object.keys(garage[brand] ?? {}) : [];
  const years = brand && model ? (garage[brand]?.[model] ?? []) : [];

  const results = useMemo(() => {
    if (!search) return products.filter((item) => item.featured);
    return products.filter((item) => matchesBrand(item, search.brand));
  }, [search]);

  function onSearch(event: FormEvent) {
    event.preventDefault();
    if (!brand || !model || !year) {
      setError("Choose a brand, model, and year to search.");
      return;
    }
    setError("");
    setSearch({ brand, model, year });
  }

  function clearSearch() {
    setBrand("");
    setModel("");
    setYear("");
    setSearch(null);
    setError("");
  }

  const heading = search
    ? `Parts for ${search.brand} ${search.model} ${search.year}`
    : "Popular enquiries";

  return (
    <section id="finder" className="scroll-mt-24 relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(242,13,24,0.2),transparent_30%),linear-gradient(#101114,#080808)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          kicker="Fitment"
          title="Find the right parts"
          text="Match a vehicle, then browse the sample catalogue. Every result can be sent straight into an enquiry."
        />

        <form
          onSubmit={onSearch}
          className="grid gap-3 border border-white/10 bg-black/50 p-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:p-5"
        >
          <label className="block text-xs tracking-[0.22em] text-ash uppercase">
            Car brand
            <span className="relative mt-2 block">
              <select
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                  setModel("");
                  setYear("");
                }}
                className="h-12 w-full appearance-none border border-white/15 bg-ink px-3 pr-10 text-sm text-white outline-none focus:border-racing"
              >
                <option value="">Select Car Brand</option>
                {Object.keys(garage).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <Chevron />
            </span>
          </label>
          <label className="block text-xs tracking-[0.22em] text-ash uppercase">
            Model
            <span className="relative mt-2 block">
              <select
                value={model}
                disabled={!brand}
                onChange={(event) => {
                  setModel(event.target.value);
                  setYear("");
                }}
                className="h-12 w-full appearance-none border border-white/15 bg-ink px-3 pr-10 text-sm text-white outline-none focus:border-racing disabled:opacity-40"
              >
                <option value="">Select Model</option>
                {models.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <Chevron />
            </span>
          </label>
          <label className="block text-xs tracking-[0.22em] text-ash uppercase">
            Year
            <span className="relative mt-2 block">
              <select
                value={year}
                disabled={!model}
                onChange={(event) => setYear(event.target.value)}
                className="h-12 w-full appearance-none border border-white/15 bg-ink px-3 pr-10 text-sm text-white outline-none focus:border-racing disabled:opacity-40"
              >
                <option value="">Select Year</option>
                {years.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <Chevron />
            </span>
          </label>
          <button
            type="submit"
            className="h-12 bg-racing px-5 font-display text-lg tracking-wide text-white uppercase shadow-[0_10px_30px_rgba(242,13,24,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff2d36]"
          >
            Search Available Parts
          </button>
        </form>
        {error ? (
          <p className="mt-3 text-sm text-racing" role="alert">
            {error}
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap items-end justify-between gap-3" aria-live="polite">
          <div>
            <p className="font-display text-3xl uppercase">{heading}</p>
            <p className="mt-1 text-sm text-ash">
              {search
                ? `${results.length} sample parts. Confirm year ${search.year} fitment when you enquire.`
                : "Search a vehicle to narrow this list. These are sample matches, ready to enquire."}
            </p>
          </div>
          {search ? (
            <button
              type="button"
              onClick={clearSearch}
              className="border border-white/20 px-4 py-2 font-display text-sm tracking-[0.16em] uppercase hover:border-white"
            >
              Clear search
            </button>
          ) : null}
        </div>

        <div className="mt-4 grid gap-3">
          {results.length === 0 ? (
            <p className="border border-dashed border-white/20 px-4 py-8 text-sm text-silver">
              No sample parts for that vehicle yet. Send an enquiry and we will check fitment.
            </p>
          ) : (
            results.map((product) => (
              <article
                key={product.id}
                className="grid grid-cols-[104px_1fr] gap-3 border border-white/10 bg-black/45 p-3 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-5"
              >
                <div className="relative h-24 overflow-hidden sm:h-28">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-none uppercase">{product.name}</h3>
                  <p className="mt-1 text-sm text-ash">{product.description}</p>
                  <p className="mt-2 font-display text-lg text-silver">{product.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    enquire(
                      product.name,
                      search ? `${search.brand} ${search.model} ${search.year}` : undefined,
                    )
                  }
                  className="col-span-2 h-11 bg-white px-4 font-display tracking-[0.14em] text-ink uppercase transition hover:bg-racing hover:text-white sm:col-span-1"
                >
                  Enquire Now
                </button>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-silver"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="m5 7 5 6 5-6" />
    </svg>
  );
}
