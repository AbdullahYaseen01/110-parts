import Image from "next/image";

const floats = [
  {
    src: "/images/brakes.jpg",
    alt: "Floating brake disc",
    label: "Brake discs",
    className: "float-a ml-auto w-40 xl:w-48",
  },
  {
    src: "/images/battery.jpg",
    alt: "Floating car battery",
    label: "Batteries",
    className: "float-b w-44 xl:w-52",
  },
  {
    src: "/images/spark.jpg",
    alt: "Floating spark plugs",
    label: "Spark plugs",
    className: "float-c ml-10 w-36 xl:w-44",
  },
];

const specs = [
  { k: "Stock", v: "New and second-hand" },
  { k: "Panels", v: "Bumpers, wings, doors" },
  { k: "Contact", v: "Phone and WhatsApp" },
  { k: "Counter", v: "Meek Street, OL2 6HL" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
      <div className="pointer-events-none absolute -top-10 left-[-8%] h-80 w-80 rounded-full bg-racing/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[18%] bottom-24 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-[-10%] h-px w-[68%] rotate-[-16deg] bg-gradient-to-r from-transparent via-racing to-transparent" />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-4 pt-28 pb-8 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_440px]">
          <div className="rise max-w-3xl">
            <p className="inline-flex items-center gap-3 border border-white/15 bg-black/50 px-3 py-1.5 font-display text-sm tracking-[0.32em] text-silver uppercase backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-racing shadow-[0_0_12px_#f20d18]" />
              New · Second-hand · Body panels
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.35rem,8.4vw,6.7rem)] leading-[0.84] font-semibold uppercase">
              <span className="block">The Right Part.</span>
              <span className="metal-red block">The Perfect Drive.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
              New parts, checked second-hand parts, and body panels. Bumpers, wings, bonnets, and the mechanical parts that get the car back on the road.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center bg-racing px-6 font-display text-lg tracking-wider text-white uppercase shadow-[0_14px_40px_rgba(242,13,24,0.45)] transition hover:-translate-y-0.5 hover:bg-[#ff2d36]"
              >
                Explore Parts
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center border border-white/30 bg-white/5 px-6 font-display text-lg tracking-wider text-white uppercase backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-3 text-sm text-silver">
              <span className="h-px w-8 bg-racing" />
              New parts. Second-hand parts. Body panels.
            </p>
          </div>

          <div className="pointer-events-none relative hidden h-[430px] lg:block">
            {floats.map((item) => (
              <article
                key={item.label}
                className={`pointer-events-auto relative mb-4 overflow-hidden border border-white/15 bg-black/70 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ${item.className}`}
              >
                <div className="relative h-28 xl:h-32">
                  <Image src={item.src} alt={item.alt} fill sizes="220px" className="object-cover" />
                  <span className="absolute top-0 right-0 h-7 w-7 bg-racing [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                </div>
                <p className="px-3 py-2 font-display text-sm tracking-[0.18em] uppercase">{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px bg-white/15 md:grid-cols-4 lg:hidden">
          {floats.map((item) => (
            <article key={item.label} className="relative min-h-28 overflow-hidden bg-black">
              <Image src={item.src} alt={item.alt} fill sizes="40vw" className="object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent px-2 py-2 font-display text-xs tracking-widest uppercase">
                {item.label}
              </span>
            </article>
          ))}
          <article className="flex items-end bg-racing px-3 py-3 font-display text-lg leading-none uppercase">
            Body panels in stock
          </article>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
          {specs.map((item) => (
            <div key={item.k} className="bg-black/75 px-4 py-4 backdrop-blur">
              <dt className="font-display text-xs tracking-[0.28em] text-racing uppercase">{item.k}</dt>
              <dd className="mt-1 text-sm text-silver">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
