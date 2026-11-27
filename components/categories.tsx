"use client";

import Image from "next/image";
import { categories, type CategoryId } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { useSite } from "@/components/site-state";

const spans: Record<CategoryId, string> = {
  panels: "sm:col-span-2 lg:col-span-4 min-h-[280px] lg:min-h-[340px]",
  brakes: "sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[300px] lg:min-h-[560px]",
  batteries: "min-h-[240px]",
  engine: "min-h-[240px]",
  filters: "min-h-[240px]",
  spark: "min-h-[240px]",
  suspension: "sm:col-span-2 min-h-[250px]",
  accessories: "sm:col-span-2 min-h-[250px]",
};

export function Categories() {
  const { explore } = useSite();

  return (
    <section id="categories" className="scroll-mt-24 bg-ink px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          kicker="Catalogue"
          title="Featured categories"
          text="New parts, second-hand parts, and body panels. Pick a category and jump straight into the matching stock."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.id}
              className={`group relative overflow-hidden border border-white/10 bg-panel ${spans[category.id]}`}
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10 transition group-hover:via-black/50" />
              <span className="absolute top-0 right-0 h-9 w-9 bg-racing [clip-path:polygon(100%_0,0_0,100%_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 sm:p-5">
                <div>
                  <h3 className="font-display text-3xl leading-none uppercase sm:text-4xl">{category.name}</h3>
                  <p className="mt-2 max-w-sm text-sm text-silver">{category.blurb}</p>
                </div>
                <button
                  type="button"
                  onClick={() => explore(category.id)}
                  className="inline-flex h-10 w-fit items-center bg-white px-4 font-display text-sm tracking-[0.16em] text-ink uppercase transition group-hover:-translate-y-0.5 group-hover:bg-racing group-hover:text-white"
                >
                  Explore Category
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
