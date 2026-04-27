"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type TabKey = "ajax-flori" | "precast" | "tiles";

type GalleryItem = {
  id: string;
  title: string;
  subtitle: string;
  src: string;
};

type ImgExt = "jpg" | "jpeg" | "png" | "webp";

function makeItems(tabSlug: string, prefix: string, ext: ImgExt, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    const title = `${prefix} ${n.toString().padStart(2, "0")}`;
    return {
      id: `${tabSlug}-${n}`,
      title,
      subtitle: "Just Bulidtech Construction",
      src: `/gallery/${tabSlug}/${n.toString().padStart(2, "0")}.${ext}`,
    } satisfies GalleryItem;
  });
}

function configForTab(tab: TabKey): { prefix: string; ext: ImgExt } {
  switch (tab) {
    case "ajax-flori":
      return { prefix: "Ajax Flori", ext: "jpeg" };
    case "precast":
      return { prefix: "Precast", ext: "jpeg" };
    case "tiles":
      return { prefix: "Tiles", ext: "png" };
  }
}

export default function GalleryGrid(props: { tab: TabKey; count?: number }) {
  const { tab, count = 4 } = props;
  const [broken, setBroken] = useState<Record<string, true>>({});
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = useMemo(() => {
    const cfg = configForTab(tab);
    return makeItems(tab, cfg.prefix, cfg.ext, count);
  }, [tab, count]);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <div className="bt-fade-in">
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/55 p-4 backdrop-blur-md"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black/60 shadow-[0_30px_120px_rgba(0,0,0,0.80)] ring-1 ring-white/10">
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white/90 ring-1 ring-white/10 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={active.src}
                alt={active.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-black/40 px-5 py-4">
              <div className="min-w-0">
                <div className="truncate text-sm font-extrabold tracking-tight text-amber-300">
                  {active.title}
                </div>
                <div className="truncate text-xs text-white/60">{active.subtitle}</div>
              </div>
              <div className="text-xs font-semibold text-white/60">Press ESC to close</div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-md"
          >
            <button
              type="button"
              className="relative block aspect-[3/2] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60"
              onClick={() => {
                if (!broken[item.id]) setActive(item);
              }}
            >
              {broken[item.id] ? (
                <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.35),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))] p-6 text-center">
                  <div>
                    <div className="text-sm font-extrabold tracking-tight text-amber-300">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-white/60">
                      Image missing. Add file: <span className="font-semibold">{item.src}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  onError={() => setBroken((b) => ({ ...b, [item.id]: true }))}
                />
              )}
            </button>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-extrabold tracking-tight text-amber-400">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{item.subtitle}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-semibold text-amber-300">
                  2026
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

