import Image from "next/image";
import { reasons } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

const icons = [
  <path key="a" d="M12 3 5 6v6c0 4.2 2.8 7.4 7 9 4.2-1.6 7-4.8 7-9V6l-7-3Z" />,
  <path key="b" d="M4 8h16l-1.2 9H5.2L4 8Zm3-3h4l1 3H6l1-3Zm6 0h4l1 3h-6l1-3Z" />,
  <path key="c" d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 3h7v4h-7v-4Z" />,
  <path key="d" d="M5 16v2h4l1 3h4l1-3h4v-2l-2-5H7l-2 5Zm7-13a3 3 0 0 1 3 3v1H9V6a3 3 0 0 1 3-3Z" />,
  <path key="e" d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />,
];

const metrics = [
  { n: "07", l: "Part families" },
  { n: "08", l: "Brands in the finder" },
  { n: "02", l: "Direct phone lines" },
  { n: "01", l: "Oldham counter" },
];

export function Why() {
  return (
    <section id="why" className="scroll-mt-24 bg-ink px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          kicker="The counter"
          title="Why choose us"
          text="110 Parts is built for people who want the correct component, a fair figure, and a reply that does not wander."
        />

        <div className="border-y border-white/10">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="group grid gap-4 border-b border-white/10 py-5 transition last:border-b-0 hover:bg-racing/10 md:grid-cols-[80px_48px_1fr] md:items-center md:gap-6 md:px-3"
            >
              <p className="metal-silver font-display text-5xl leading-none">
                {String(index + 1).padStart(2, "0")}
              </p>
              <span className="inline-flex h-12 w-12 items-center justify-center border border-racing/50 text-racing transition group-hover:bg-racing group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  {icons[index]}
                </svg>
              </span>
              <div>
                <h3 className="font-display text-3xl leading-none uppercase">{reason.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ash md:text-base">{reason.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-10 min-h-56 max-w-7xl overflow-hidden border border-white/10">
        <Image
          src="/images/road.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-racing/40" />
        <dl className="relative grid gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.l}>
              <dt className="font-display text-6xl leading-none text-white">{item.n}</dt>
              <dd className="mt-2 text-sm tracking-wide text-silver uppercase">{item.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
