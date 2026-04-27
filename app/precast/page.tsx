import GalleryGrid from "../components/GalleryGrid";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function PrecastPage() {
  return (
    <div className="bt-bg-animated min-h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.18),transparent_42%),radial-gradient(circle_at_75%_15%,rgba(234,179,8,0.10),transparent_48%),radial-gradient(circle_at_60%_90%,rgba(245,158,11,0.08),transparent_55%),linear-gradient(120deg,#050507,#0b0b12,#050507)]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-balance text-2xl font-extrabold tracking-tight text-amber-400 sm:text-3xl">
            Precast
          </h1>
          <p className="mt-2 text-sm text-white/60">Select another tab in the header to switch pages.</p>
        </div>
        <GalleryGrid tab="precast" count={4} />
      </main>
      <SiteFooter />
    </div>
  );
}

