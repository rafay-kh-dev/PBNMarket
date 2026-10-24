import { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { CONTACT } from "../data";

const stats = [
  {
    prefix: "DR ",
    value: 80,
    suffix: "+",
    label: "Avg. Domain Rating",
    indicator: "bg-red-600",
    decimals: 0,
  },
  {
    prefix: "+",
    value: 84,
    suffix: "%",
    label: "Authority Lift",
    indicator: "bg-red-400",
    decimals: 0,
  },
  {
    prefix: "",
    value: 99.4,
    suffix: "%",
    label: "Index Rate",
    indicator: "bg-red-600",
    decimals: 1,
  },
  {
    prefix: "",
    value: "Zero",
    suffix: "",
    label: "Footprint Risk",
    indicator: "bg-red-400",
    isString: true,
  },
];

const checks = [
  "Manual outreach placements",
  "Unique C-Class IPs",
  "Niche-relevant content",
];

const avatars = [
  "https://i.pravatar.cc/28?img=11",
  "https://i.pravatar.cc/28?img=23",
  "https://i.pravatar.cc/28?img=47",
  "https://i.pravatar.cc/28?img=56",
];

const CountUp = ({ prefix, value, suffix, decimals, isString }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView || isString) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(val) {
        if (ref.current) {
          ref.current.textContent = val.toFixed(decimals);
        }
      },
    });
    return () => controls.stop();
  }, [value, decimals, isInView, isString]);

  if (isString)
    return (
      <span>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  return (
    <span>
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 sm:px-6 pt-24 lg:pt-16 pb-12 lg:pb-10 selection:bg-red-100 selection:text-red-900">
      {/* ── Background Grid ── */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_50%,transparent_10%,#FAFAFA_100%)]" />

      {/* ── MOBILE-FIRST AURORA GLOW (Visible only on small screens) ── */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="lg:hidden pointer-events-none absolute top-[15%] left-1/2 -translate-x-1/2 w-[90vw] h-[50vh] bg-red-500/10 blur-[80px] rounded-full z-0"
      />

      {/* ── DESKTOP-ONLY ENHANCEMENTS (Arcs & Floating Glass Orbs) ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 -left-[12vw] w-[20vw] h-[95vh] rounded-[100%] border-r-[3px] border-r-red-500/50 bg-gradient-to-r from-transparent to-red-500/10 shadow-[30px_0_80px_-15px_rgba(220,38,38,0.35)] backdrop-blur-[2px]"
        />
        <div className="absolute top-1/2 -translate-y-1/2 -left-[15vw] w-[20vw] h-[110vh] rounded-[100%] border-r-[1.5px] border-r-slate-300/80 shadow-[20px_0_40px_-10px_rgba(0,0,0,0.05)]" />

        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[8%] w-24 h-24 rounded-full bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,1)] backdrop-blur-md"
        />

        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 -translate-y-1/2 -right-[12vw] w-[20vw] h-[95vh] rounded-[100%] border-l-[3px] border-l-red-500/50 bg-gradient-to-l from-transparent to-red-500/10 shadow-[-30px_0_80px_-15px_rgba(220,38,38,0.35)] backdrop-blur-[2px]"
        />
        <div className="absolute top-1/2 -translate-y-1/2 -right-[15vw] w-[20vw] h-[110vh] rounded-[100%] border-l-[1.5px] border-l-slate-300/80 shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.05)]" />

        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[20%] right-[10%] w-16 h-16 rounded-full bg-red-500/5 border border-red-500/10 shadow-[0_8px_32px_rgba(220,38,38,0.05),inset_0_1px_2px_rgba(255,255,255,0.6)] backdrop-blur-xl"
        />
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-200/50 to-transparent" />

      {/* ══════════════════════════════════════ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-4xl mx-auto text-center z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="leading-[1.02] sm:leading-[0.92] tracking-tight text-slate-900"
          style={{ fontSize: "clamp(2.75rem, 8.5vw, 5rem)" }}
        >
          <span className="block font-light text-slate-500 mb-1.5 sm:mb-0">
            PBNs that{" "}
            <span className="font-instrument italic text-[#DC2626]">
              actually
            </span>
          </span>
          <span className="block font-extrabold mt-0.5 sm:mt-1.5 drop-shadow-sm">
            rank you on{" "}
            <span className="relative inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-[length:200%_auto] animate-[shimmerText_3s_linear_infinite]">
              Page 1
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 sm:h-2.5 text-red-600/30"
                viewBox="0 0 120 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9.5C32 2.5 88 2.5 118 9.5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-5 sm:mt-6 text-slate-600 font-medium text-[15.5px] sm:text-base md:text-lg leading-[1.65] max-w-2xl mx-auto px-1"
        >
          Our private authority network gives your agency the ranking edge —
          premium DR 80+ domains, 99.4% index rate, and zero footprint risk.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-6 flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-6 gap-y-3 px-1"
        >
          {checks.map((c) => (
            <span
              key={c}
              className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm text-slate-600 font-semibold bg-white/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/60 shadow-sm"
            >
              <svg
                className="w-4 h-4 text-red-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {c}
            </span>
          ))}
        </motion.div>

        {/* ── CTA Group ── */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto px-2 sm:px-0"
        >
          {/* Animated Sweep Button - Tactile on Mobile */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto relative flex justify-center items-center gap-2 bg-gradient-to-b from-red-500 to-[#B91C1C] text-white text-[15px] font-semibold px-8 h-14 rounded-full shadow-[0_4px_14px_0_rgba(220,38,38,0.39),inset_0_-2px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_24px_rgba(220,38,38,0.35),inset_0_-2px_0_0_rgba(0,0,0,0.2)] ring-1 ring-inset ring-white/15 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full animate-[shimmerSweep_3s_infinite_ease-in-out] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            <span className="relative z-10 flex items-center gap-2">
              Get started on Telegram
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </motion.a>

          {/* Secondary Pill - Tactile on Mobile */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="flex items-center w-full sm:w-auto bg-slate-50 border border-slate-200/80 rounded-full p-1.5 gap-1 shadow-sm h-14 z-20 relative"
          >
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex justify-center items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all duration-200 px-5 h-full sm:py-2 rounded-full"
            >
              WhatsApp
            </a>
            <span className="w-px h-5 bg-slate-200 mx-1" />
            <a
              href={CONTACT.teams}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex justify-center items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all duration-200 px-5 h-full sm:py-2 rounded-full"
            >
              MS Teams
            </a>
          </motion.div>
        </motion.div>

        {/* ── Avatar Glass Badge (Premium Mobile Touch) ── */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-9 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] px-4 py-2 rounded-full">
            <div className="flex -space-x-2.5">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-900/5 relative hover:z-10 transition-transform hover:scale-110"
                />
              ))}
            </div>
            <p className="text-[11.5px] sm:text-xs font-medium text-slate-600">
              Trusted by <span className="text-slate-900 font-bold">200+</span>{" "}
              SEO agencies
            </p>
          </div>
        </motion.div>

        {/* ── High-End Glassmorphism Stats Cards (Mobile Tactile Touch) ── */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 px-1 sm:px-0"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-[20px] px-3.5 sm:px-5 py-4 sm:py-5 text-left transition-all duration-300 hover:bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-slate-200/80 hover:ring-slate-300 overflow-hidden cursor-default"
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full ${stat.indicator} shadow-sm`}
                />
              </div>

              <div className="text-[24px] sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-none drop-shadow-sm">
                <CountUp
                  prefix={stat.prefix}
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isString={stat.isString}
                />
              </div>

              <div className="mt-1.5 sm:mt-2 text-[11.5px] sm:text-xs font-semibold text-slate-500 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmerText {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
      `,
        }}
      />
    </section>
  );
};
