import Image from "next/image";
import { address } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-ink px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="relative">
          <div className="absolute -top-3 -left-3 h-full w-full border border-racing/70" />
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
            <Image
              src="/images/workshop.jpg"
              alt="110 Parts workshop with engines and spare parts under red light"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="absolute right-4 bottom-4 max-w-[14rem] bg-racing px-4 py-3 font-display text-2xl leading-none uppercase">
            New. Second-hand. Body panels.
          </p>
        </div>
        <div>
          <SectionHeading
            index="05"
            kicker="The house"
            title="About 110 Parts"
            text="New parts, second-hand parts, and body panels from one counter."
          />
          <div className="space-y-4 text-base leading-relaxed text-silver">
            <p>
              110 Parts supplies new parts and checked second-hand parts, plus the body panels a repair often needs: bumpers, bonnets, wings, and doors. The job is the same either way. Find the component that fits the car, and be straight about whether it is new or used.
            </p>
            <p>
              Mechanical stock sits beside the panels. Brakes, batteries, engine parts, filters, spark plugs, suspension, and lighting. Tell us the brand, model, and year, and whether you want new or second-hand.
            </p>
            <p>
              The counter is at {address.full}. Call, message, or send the form — the reply is about the part, the fit, and the price.
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px bg-white/10">
            {[
              ["Spec", "Checked"],
              ["Prices", "Confirmed"],
              ["Reply", "Direct"],
            ].map(([label, value]) => (
              <div key={label} className="bg-panel px-3 py-4">
                <dt className="text-xs tracking-[0.2em] text-ash uppercase">{label}</dt>
                <dd className="mt-1 font-display text-2xl uppercase">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
