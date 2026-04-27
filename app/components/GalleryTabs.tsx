"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type TabKey = "ajax-flori" | "precast" | "tiles";

type GalleryItem = {
  id: string;
  title: string;
  subtitle: string;
  imageDataUri: string;
};

function svgDataUri(opts: {
  title: string;
  subtitle: string;
  a: string;
  b: string;
}) {
  const { title, subtitle, a, b } = opts;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="1200" height="800" rx="48" fill="url(#g)"/>
  <g opacity="0.12">
    <path d="M-50 650 C 250 450, 500 900, 800 700 S 1350 500, 1300 250" fill="none" stroke="#fff" stroke-width="26"/>
    <path d="M-100 320 C 200 120, 520 620, 860 420 S 1400 220, 1280 20" fill="none" stroke="#fff" stroke-width="18"/>
  </g>
  <g filter="url(#s)">
    <rect x="84" y="92" width="1032" height="616" rx="36" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.35)"/>
    <g transform="translate(140 190)">
      <text x="0" y="0" fill="#ffffff" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="56" font-weight="800" letter-spacing="-0.5">${title}</text>
      <text x="0" y="62" fill="rgba(255,255,255,0.86)" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="26" font-weight="600">${subtitle}</text>
      <g transform="translate(0 120)" opacity="0.92">
        <rect x="0" y="0" width="240" height="14" rx="7" fill="rgba(255,255,255,0.80)"/>
        <rect x="0" y="34" width="520" height="14" rx="7" fill="rgba(255,255,255,0.60)"/>
        <rect x="0" y="68" width="460" height="14" rx="7" fill="rgba(255,255,255,0.52)"/>
        <rect x="0" y="102" width="380" height="14" rx="7" fill="rgba(255,255,255,0.45)"/>
      </g>
    </g>
  </g>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function makeItems(prefix: string, colors: Array<[string, string]>) {
  return colors.map(([a, b], i) => {
    const n = i + 1;
    const title = `${prefix} ${n.toString().padStart(2, "0")}`;
    return {
      id: `${prefix}-${n}`,
      title,
      subtitle: "Just Bulidtech Construction",
      imageDataUri: svgDataUri({ title, subtitle: "Premium finish • Strong build", a, b }),
    } satisfies GalleryItem;
  });
}

export default function GalleryTabs() {
  const [tab, setTab] = useState<TabKey>("ajax-flori");

  const galleries = useMemo(() => {
    const ajax = makeItems("Ajax Flori", [
      ["#0ea5e9", "#1d4ed8"],
      ["#06b6d4", "#0f766e"],
      ["#22c55e", "#15803d"],
      ["#84cc16", "#365314"],
      ["#eab308", "#b45309"],
      ["#f97316", "#9a3412"],
      ["#ef4444", "#991b1b"],
      ["#a855f7", "#6d28d9"],
      ["#ec4899", "#9d174d"],
      ["#14b8a6", "#0f172a"],
    ]);

    const precast = makeItems("Precast", [
      ["#0f172a", "#334155"],
      ["#111827", "#374151"],
      ["#1f2937", "#4b5563"],
      ["#0b1220", "#475569"],
      ["#111827", "#0ea5e9"],
      ["#0f172a", "#22c55e"],
      ["#0f172a", "#f97316"],
      ["#111827", "#a855f7"],
      ["#0f172a", "#ef4444"],
      ["#0b1220", "#eab308"],
    ]);

    const tiles = makeItems("Tiles", [
      ["#f8fafc", "#cbd5e1"],
      ["#fff7ed", "#fed7aa"],
      ["#fdf2f8", "#fbcfe8"],
      ["#f0fdf4", "#bbf7d0"],
      ["#eff6ff", "#bfdbfe"],
      ["#f5f3ff", "#ddd6fe"],
      ["#fefce8", "#fde68a"],
      ["#ecfeff", "#a5f3fc"],
      ["#f1f5f9", "#94a3b8"],
      ["#fafafa", "#a1a1aa"],
    ]);

    return { ajax, precast, tiles };
  }, []);

  const active = tab === "ajax-flori" ? galleries.ajax : tab === "precast" ? galleries.precast : galleries.tiles;

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <header className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold text-zinc-800 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100">
                  Just Bulidtech Construction
                  <span className="h-1 w-1 rounded-full bg-zinc-400/70" />
                  Modern UI
                </div>
                <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                  Explore our products & finishes
                </h1>
                <p className="mt-2 max-w-2xl text-pretty text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base">
                  Select a tab to view 10 curated visuals for that category.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setTab("ajax-flori")}
                  className={[
                    "h-11 rounded-2xl px-4 text-sm font-semibold transition",
                    tab === "ajax-flori"
                      ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                      : "border border-black/10 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
                  ].join(" ")}
                >
                  Ajax Flori on Rent
                </button>
                <button
                  type="button"
                  onClick={() => setTab("precast")}
                  className={[
                    "h-11 rounded-2xl px-4 text-sm font-semibold transition",
                    tab === "precast"
                      ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                      : "border border-black/10 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
                  ].join(" ")}
                >
                  Precast
                </button>
                <button
                  type="button"
                  onClick={() => setTab("tiles")}
                  className={[
                    "h-11 rounded-2xl px-4 text-sm font-semibold transition",
                    tab === "tiles"
                      ? "bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                      : "border border-black/10 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
                  ].join(" ")}
                >
                  Tiles Advise &amp; Flix
                </button>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {active.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={item.imageDataUri}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-extrabold tracking-tight text-zinc-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{item.subtitle}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100">
                      2026
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                    <span className="rounded-full bg-emerald-500/15 px-2 py-1 font-semibold text-emerald-700 dark:text-emerald-300">
                      Quality
                    </span>
                    <span className="rounded-full bg-sky-500/15 px-2 py-1 font-semibold text-sky-700 dark:text-sky-300">
                      Finish
                    </span>
                    <span className="rounded-full bg-amber-500/15 px-2 py-1 font-semibold text-amber-800 dark:text-amber-200">
                      Durability
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

