import { CONTACT } from "../data";

const stats = [
  { value: "DR 80+", label: "Avg. Domain Rating", indicator: "bg-red-600" },
  { value: "+84%",   label: "Authority Lift",      indicator: "bg-red-400" },
  { value: "99.4%",  label: "Index Rate",          indicator: "bg-red-600" },
  { value: "Zero",   label: "Footprint Risk",      indicator: "bg-red-400" },
];

const checks = [
  "Manual outreach placements",
  "Unique C-Class IPs",
  "Niche-relevant content",
];

/* ── Real avatar images ── */
const avatars = [
  "https://i.pravatar.cc/28?img=11",
  "https://i.pravatar.cc/28?img=23",
  "https://i.pravatar.cc/28?img=47",
  "https://i.pravatar.cc/28?img=56",
];

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-6">

      {/* ── Dot grid ── */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />

      {/* ── Vignette (hides grid at edges) ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_20%,white_100%)]" />

      {/* ── Single centered red glow (more refined than side blobs) ── */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.07)_0%,transparent_60%)]" />

      {/* ── Top decorative line ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-200/70 to-transparent" />

      {/* ── Large watermark ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="font-extrabold text-slate-900/[0.025] select-none tracking-tighter leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(8rem, 20vw, 20rem)" }}
        >
          PAGE 1
        </span>
      </div>

      {/* ══════════════════════════════════════ */}
      <div className="relative w-full max-w-3xl mx-auto text-center">

        {/* ── Headline ── */}
        <h1
          className="leading-[0.88] tracking-tight text-slate-900"
          style={{ fontSize: "clamp(2.5rem, 5.6vw, 5.6rem)" }}
        >
          <span className="block font-light text-slate-500">
            PBNs that{" "}
            <span className="font-instrument italic text-[#DC2626]">actually</span>
          </span>
          <span className="block font-extrabold mt-2">
            rank you on{" "}
            <span className="relative inline-block text-[#DC2626]">
              Page 1
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 220 10" fill="none" preserveAspectRatio="none"
              >
                <path d="M0 7 Q55 1 110 7 Q165 13 220 7" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </span>
          </span>
        </h1>

        {/* ── Subheading — rewritten to avoid bad line breaks ── */}
        <p className="mt-6 text-slate-600 font-normal text-base leading-[1.75] max-w-xl mx-auto">
          Our private authority network gives your agency the ranking edge —
          premium DR 80+ domains, 99.4% index rate, and zero footprint risk.
        </p>

        {/* ── Feature checks ── */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {checks.map((c) => (
            <span key={c} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {c}
            </span>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

          {/* Primary */}
          <div className="relative inline-flex">
            <div className="absolute -inset-1.5 bg-red-400/20 rounded-full blur-md" />
            <a
              href={CONTACT.telegram}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-b from-red-500 to-[#B91C1C] text-white text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-[0_1px_2px_rgba(185,28,28,0.3),0_6px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_2px_4px_rgba(185,28,28,0.4),0_10px_32px_rgba(220,38,38,0.4)] hover:brightness-110 ring-1 ring-inset ring-white/15"
            >
              Get started on Telegram
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <span className="text-slate-300 text-sm font-light hidden sm:block">or</span>

          {/* Secondary — grouped pill */}
          <div className="inline-flex items-center bg-slate-50 border border-slate-200/80 rounded-full px-1 py-1 gap-1">
            <a
              href={CONTACT.whatsapp}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-all duration-150 px-4 py-1.5 rounded-full"
            >
              WhatsApp
            </a>
            <span className="w-px h-4 bg-slate-200" />
            <a
              href={CONTACT.teams}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-all duration-150 px-4 py-1.5 rounded-full"
            >
              MS Teams
            </a>
          </div>
        </div>

        {/* ── Avatar stack social proof ── */}
        <div className="mt-4 flex items-center justify-center gap-2.5">
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="agency"
                className="w-7 h-7 rounded-full border-2 border-white object-cover ring-1 ring-white/60"
              />
            ))}
          </div>
          <p className="text-xs font-medium text-slate-400">
            Trusted by <span className="text-slate-600 font-semibold">200+</span> SEO agencies worldwide
          </p>
        </div>

        {/* ── Stats — individual cards ── */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl px-5 py-4 text-left transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] cursor-default overflow-hidden"
            >
              {/* Hover top accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-400/0 via-red-400 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Color indicator dot */}
              <span className={`inline-block w-1.5 h-1.5 rounded-full ${stat.indicator} mb-2.5`} />

              {/* Value */}
              <div className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#DC2626] transition-colors duration-200 leading-none">
                {stat.value}
              </div>

              {/* Label */}
              <div className="mt-2 text-xs font-medium text-slate-500 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
