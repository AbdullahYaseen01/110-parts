export const phones = {
  landlineDisplay: "0161 425 4420",
  landlineTel: "tel:01614254420",
  mobileDisplay: "07722 566 832",
  mobileTel: "tel:07722566832",
} as const;

export const address = {
  street: "Meek Street, Plot 4",
  postcode: "OL2 6HL",
  full: "Meek Street, Plot 4, OL2 6HL",
  maps: "https://www.google.com/maps/search/?api=1&query=Meek+Street+Plot+4+OL2+6HL",
} as const;

export const whatsappNumber = "447722566832";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "#categories", label: "Categories" },
  { href: "#products", label: "Parts" },
  { href: "#finder", label: "Find Parts" },
  { href: "#why", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const categoryIds = [
  "panels",
  "brakes",
  "batteries",
  "engine",
  "filters",
  "spark",
  "suspension",
  "accessories",
] as const;

export type Stock = "New" | "Second-hand" | "Either";

export type CategoryId = (typeof categoryIds)[number];
export type CatalogFilter = CategoryId | "all";

export const categories: {
  id: CategoryId;
  name: string;
  blurb: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    id: "panels",
    name: "Body Panels",
    blurb: "Bumpers, bonnets, wings, and doors in new and second-hand stock.",
    image: "/images/hero.jpg",
    imageAlt: "Car body ready for panel replacement",
  },
  {
    id: "brakes",
    name: "Brake Systems",
    blurb: "Discs, pads, and calipers for a firm, clean stop.",
    image: "/images/brakes.jpg",
    imageAlt: "Vented brake disc with a red caliper",
  },
  {
    id: "batteries",
    name: "Car Batteries",
    blurb: "High-crank power for cold mornings and daily starts.",
    image: "/images/battery.jpg",
    imageAlt: "Black and silver car battery",
  },
  {
    id: "engine",
    name: "Engine Parts",
    blurb: "Mounts and hard-working components that keep the engine settled.",
    image: "/images/engine.jpg",
    imageAlt: "Polished automotive engine close-up",
  },
  {
    id: "filters",
    name: "Oil & Air Filters",
    blurb: "Clean oil and clean air between services.",
    image: "/images/filters.jpg",
    imageAlt: "Oil filter and pleated air filter",
  },
  {
    id: "spark",
    name: "Spark Plugs",
    blurb: "Sharper ignition, smoother idle, cleaner response.",
    image: "/images/spark.jpg",
    imageAlt: "Three automotive spark plugs",
  },
  {
    id: "suspension",
    name: "Suspension & Steering",
    blurb: "Struts and steering parts for a tight, settled drive.",
    image: "/images/suspension.jpg",
    imageAlt: "Coilover strut and steering component",
  },
  {
    id: "accessories",
    name: "Accessories",
    blurb: "Lighting and performance details that finish the car.",
    image: "/images/accessories.jpg",
    imageAlt: "Premium car accessories on a dark background",
  },
];

export const filterLabels: Record<CatalogFilter, string> = {
  all: "Featured",
  panels: "Body Panels",
  brakes: "Brake Systems",
  batteries: "Car Batteries",
  engine: "Engine Parts",
  filters: "Oil & Air Filters",
  spark: "Spark Plugs",
  suspension: "Suspension & Steering",
  accessories: "Accessories",
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  category: CategoryId;
  brands: string[] | "all";
  featured: boolean;
  condition: Stock;
};

export const products: Product[] = [
  {
    id: "brake-discs",
    name: "Brake Discs",
    description: "Vented rotors machined for clean, consistent stopping power.",
    price: "From £46.99",
    image: "/images/brakes.jpg",
    imageAlt: "Premium brake disc and red caliper",
    category: "brakes",
    brands: "all",
    featured: true,
    condition: "New",
  },
  {
    id: "used-brake-discs",
    name: "Second-hand Brake Discs",
    description: "Checked used rotors when a sound second-hand set is the right call.",
    price: "From £22.00",
    image: "/images/brakes.jpg",
    imageAlt: "Second-hand brake disc",
    category: "brakes",
    brands: "all",
    featured: false,
    condition: "Second-hand",
  },
  {
    id: "brake-pads",
    name: "Brake Pads",
    description: "Matched pad sets for quiet bite and even disc wear.",
    price: "From £28.00",
    image: "/images/brakes.jpg",
    imageAlt: "Brake assembly used for pad enquiries",
    category: "brakes",
    brands: "all",
    featured: false,
    condition: "New",
  },
  {
    id: "batteries",
    name: "Car Batteries",
    description: "High-crank batteries sized for reliable starts, day after day.",
    price: "From £89.00",
    image: "/images/battery.jpg",
    imageAlt: "Modern car battery",
    category: "batteries",
    brands: "all",
    featured: true,
    condition: "New",
  },
  {
    id: "bumpers",
    name: "Front & Rear Bumpers",
    description: "New and second-hand bumpers matched to the car, including colour-coded options on enquiry.",
    price: "From £65.00",
    image: "/images/hero.jpg",
    imageAlt: "Vehicle bodywork for bumper enquiries",
    category: "panels",
    brands: "all",
    featured: true,
    condition: "Either",
  },
  {
    id: "bonnets",
    name: "Bonnets",
    description: "Replacement bonnets, new or second-hand, checked for fit before they leave the counter.",
    price: "From £80.00",
    image: "/images/workshop.jpg",
    imageAlt: "Workshop stock including body panels",
    category: "panels",
    brands: "all",
    featured: true,
    condition: "Either",
  },
  {
    id: "wings",
    name: "Wings & Doors",
    description: "Wings, doors, and related panels for accident repair, in new and used condition.",
    price: "From £55.00",
    image: "/images/workshop.jpg",
    imageAlt: "Body panels held in the workshop",
    category: "panels",
    brands: "all",
    featured: true,
    condition: "Either",
  },
  {
    id: "engine-mounts",
    name: "Engine Mounts",
    description: "Fresh mounts that cut vibration and keep the engine located.",
    price: "From £42.00",
    image: "/images/engine.jpg",
    imageAlt: "Engine bay components",
    category: "engine",
    brands: "all",
    featured: false,
    condition: "New",
  },
  {
    id: "engine-components",
    name: "Engine Components",
    description: "New service parts, plus checked second-hand components when that is the better fit.",
    price: "From £36.00",
    image: "/images/engine.jpg",
    imageAlt: "Close-up of a performance engine",
    category: "engine",
    brands: "all",
    featured: false,
    condition: "Either",
  },
  {
    id: "oil-filters",
    name: "Engine Oil Filters",
    description: "Tight-seal filters that keep oil flow clean between services.",
    price: "From £11.50",
    image: "/images/filters.jpg",
    imageAlt: "Engine oil filter",
    category: "filters",
    brands: "all",
    featured: true,
    condition: "New",
  },
  {
    id: "air-filters",
    name: "Air Filters",
    description: "High-flow panels that protect the intake without starving it.",
    price: "From £14.00",
    image: "/images/filters.jpg",
    imageAlt: "Automotive air filter",
    category: "filters",
    brands: "all",
    featured: false,
    condition: "New",
  },
  {
    id: "spark-plugs",
    name: "Spark Plugs",
    description: "Precise plugs for a smoother idle and sharper throttle response.",
    price: "From £7.99",
    image: "/images/spark.jpg",
    imageAlt: "Set of spark plugs",
    category: "spark",
    brands: "all",
    featured: true,
    condition: "New",
  },
  {
    id: "struts",
    name: "Suspension Struts",
    description: "Replacement struts that bring back control and ride height.",
    price: "From £95.00",
    image: "/images/suspension.jpg",
    imageAlt: "Suspension strut",
    category: "suspension",
    brands: ["Toyota", "Honda", "Ford", "Nissan", "Volkswagen"],
    featured: false,
    condition: "Either",
  },
  {
    id: "steering",
    name: "Steering Components",
    description: "Arms and links for a steering feel that stays tight.",
    price: "From £68.00",
    image: "/images/suspension.jpg",
    imageAlt: "Steering and suspension hardware",
    category: "suspension",
    brands: ["BMW", "Audi", "Mercedes-Benz"],
    featured: false,
    condition: "Either",
  },
  {
    id: "headlights",
    name: "Headlights",
    description: "New and second-hand lamp units that restore night visibility.",
    price: "From £124.00",
    image: "/images/headlights.jpg",
    imageAlt: "Modern LED headlight assembly",
    category: "accessories",
    brands: ["Toyota", "Honda", "Ford", "Nissan", "Volkswagen"],
    featured: true,
    condition: "Either",
  },
  {
    id: "performance",
    name: "Performance Accessories",
    description: "Intakes, caps, and driver details for a sharper car.",
    price: "From £34.00",
    image: "/images/performance.jpg",
    imageAlt: "Performance intake and red anodized parts",
    category: "accessories",
    brands: ["BMW", "Audi", "Mercedes-Benz", "Volkswagen"],
    featured: true,
    condition: "New",
  },
];

export function productsFor(filter: CatalogFilter) {
  if (filter === "all") return products.filter((item) => item.featured);
  return products.filter((item) => item.category === filter);
}

export function matchesBrand(product: Product, brand: string) {
  return product.brands === "all" || product.brands.includes(brand);
}

function years(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, index) => from + index);
}

const recent = years(2016, 2026);
const to2024 = years(2016, 2024);
const from2018 = years(2018, 2026);

export const garage: Record<string, Record<string, number[]>> = {
  Toyota: {
    Corolla: recent,
    Yaris: recent,
    RAV4: recent,
    Hilux: from2018,
  },
  Honda: {
    Civic: recent,
    Jazz: to2024,
    "CR-V": recent,
  },
  BMW: {
    "3 Series": recent,
    "5 Series": recent,
    X5: from2018,
  },
  "Mercedes-Benz": {
    "A-Class": recent,
    "C-Class": recent,
    "E-Class": recent,
  },
  Ford: {
    Fiesta: years(2016, 2023),
    Focus: recent,
    Kuga: from2018,
  },
  Audi: {
    A3: recent,
    A4: recent,
    Q5: from2018,
  },
  Nissan: {
    Qashqai: recent,
    Juke: recent,
    Micra: to2024,
  },
  Volkswagen: {
    Golf: recent,
    Polo: recent,
    Tiguan: from2018,
  },
};

export const brands = Object.keys(garage);

export const reasons = [
  {
    title: "New and Second-hand Parts",
    copy: "New stock when you want it, and checked second-hand parts when a sound used component is the smarter buy.",
  },
  {
    title: "Competitive Pricing",
    copy: "Guide prices stay clear for both new and used parts, and the final figure is confirmed before you commit.",
  },
  {
    title: "Body Panels in Stock",
    copy: "Bumpers, bonnets, wings, and doors sit alongside brakes, batteries, engine parts, filters, and lighting.",
  },
  {
    title: "Reliable Customer Support",
    copy: "Talk to a person by phone or WhatsApp and get a straight answer on the part you need.",
  },
  {
    title: "Fast Order Processing",
    copy: "Enquiries are picked up quickly so the right component can be lined up without the runaround.",
  },
] as const;
