"use client";

export default function SiteFooter() {
  return (
    <footer className="mt-10 w-full">
      <div className="w-full px-4 pb-10 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-[28px] bg-white/5 shadow-[0_26px_90px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
          <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(circle_at_12%_120%,rgba(245,158,11,0.22),transparent_55%),radial-gradient(circle_at_88%_-20%,rgba(234,179,8,0.12),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-75 [mask-image:linear-gradient(to_right,transparent,black,transparent)] [background:linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
          <div className="pointer-events-none absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.10),transparent_55%)]" />

          <div className="relative flex flex-col gap-6 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight text-amber-300">
                  Just Bulidtech Construction
                </div>
                <div className="text-xs text-white/60">Build smart. Build strong.</div>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm sm:items-end sm:text-right">
              <div className="text-white/70 break-words">
                <span className="text-amber-300/90 font-semibold">Location:</span>{" "}
                <span className="font-semibold text-white/80">
                  FACTORY ADDRESS: BLOCK NO-84, KHATA NO-356, OLD SURVEY NO-89/1,
                  VILLAGE-KARAN, PALSANA, Surat, Gujarat, 394305
                </span>
              </div>
              <div className="text-white/70">
                <span className="text-amber-300/90 font-semibold">Call:</span>{" "}
                <span className="font-semibold text-white/80">+91 78019 04022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

