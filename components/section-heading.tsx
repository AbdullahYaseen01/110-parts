export function SectionHeading({
  index,
  kicker,
  title,
  text,
}: {
  index: string;
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-display text-sm tracking-[0.42em] text-racing uppercase">
          {index} / {kicker}
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-5xl leading-[0.88] font-semibold uppercase md:text-7xl">
          {title}
        </h2>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-ash md:text-base">{text}</p>
    </div>
  );
}
