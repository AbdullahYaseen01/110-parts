const items = [
  "New Parts",
  "Second-hand Parts",
  "Body Panels",
  "Brake Systems",
  "Car Batteries",
  "Engine Parts",
  "Oil & Air Filters",
  "Spark Plugs",
  "Suspension & Steering",
  "Accessories",
  "Headlights",
  "Performance",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track py-3">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 px-4 font-display text-lg tracking-[0.28em] text-silver uppercase"
          >
            <span className="text-racing">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
