"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { href: string; label: string; short: string };

const tabs: Tab[] = [
  { href: "/ajax-flori", label: "Ajax Flori on Rent", short: "Ajax" },
  { href: "/precast", label: "Precast", short: "Precast" },
  { href: "/tiles", label: "Tiles Advise & Flix", short: "Tiles" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-black/50 backdrop-blur-2xl">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 blur-2xl [background:radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.20),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(234,179,8,0.10),transparent_55%)]" />

            <div className="rounded-[28px] bg-white/5 shadow-[0_26px_90px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
              <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
                <Link href="/ajax-flori" className="flex min-w-0 items-center gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-extrabold tracking-tight text-amber-300 sm:text-base">
                      Just Bulidtech Construction
                    </div>
                    <div className="truncate text-xs text-white/60">Build smart. Build strong.</div>
                  </div>
                </Link>

                <nav
                  aria-label="Categories"
                  className="w-full sm:w-auto"
                >
                  <div className="relative flex w-full items-center rounded-2xl bg-black/30 p-1 ring-1 ring-white/10 sm:w-auto">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl [background:linear-gradient(90deg,rgba(255,255,255,0.06),transparent,rgba(255,255,255,0.06))]" />
                    {tabs.map((t) => {
                      const active = pathname === t.href;
                      return (
                        <Link
                          key={t.href}
                          href={t.href}
                          aria-current={active ? "page" : undefined}
                          className={[
                            "relative z-10 flex-1 select-none rounded-xl px-3 py-2 text-center text-xs font-semibold transition-all sm:flex-initial sm:px-4 sm:text-sm",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60",
                            active
                              ? "bg-gradient-to-b from-amber-300 to-amber-500 text-black shadow-[0_14px_34px_rgba(245,158,11,0.22)]"
                              : "text-amber-200/90 hover:bg-white/10 hover:text-amber-200",
                          ].join(" ")}
                        >
                          <span className="hidden sm:inline">{t.label}</span>
                          <span className="sm:hidden">{t.short}</span>
                        </Link>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

