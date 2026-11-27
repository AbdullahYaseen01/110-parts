"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CatalogFilter } from "@/lib/site";

type Draft = {
  part: string;
  car: string;
  condition: string;
  nonce: number;
};

type SiteContextValue = {
  filter: CatalogFilter;
  setFilter: (filter: CatalogFilter) => void;
  explore: (filter: CatalogFilter) => void;
  draft: Draft;
  enquire: (part: string, car?: string, condition?: string) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<CatalogFilter>("all");
  const [draft, setDraft] = useState<Draft>({ part: "", car: "", condition: "", nonce: 0 });

  const value = useMemo<SiteContextValue>(
    () => ({
      filter,
      setFilter,
      explore: (next) => {
        setFilter(next);
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      },
      draft,
      enquire: (part, car, condition) => {
        setDraft((current) => ({
          part,
          car: car ?? current.car,
          condition: condition ?? current.condition,
          nonce: current.nonce + 1,
        }));
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    }),
    [draft, filter],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
