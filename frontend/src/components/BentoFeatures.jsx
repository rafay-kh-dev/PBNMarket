import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Activity, Zap, PenTool } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Zero Footprint Architecture",
    description:
      "Military-grade isolation. Every domain sits on unique premium C-Class IPs, bespoke registrars, and authentic cloud hosting. No patterns. No traces.",
    icon: <ShieldCheck className="w-[22px] h-[22px] text-red-600" />,
    span: "md:col-span-2",
    bgGlow: "bg-red-500/5",
    iconBg:
      "bg-red-50/80 border-red-100/60 shadow-[0_4px_12px_rgba(220,38,38,0.1)]",
  },
  {
    id: 2,
    title: "Vetted DR 80+ Metrics",
    description:
      "We don't rely on inflated metrics. Every domain undergoes manual spam checks and historical archive verification.",
    icon: <Activity className="w-[22px] h-[22px] text-slate-700" />,
    span: "md:col-span-1",
    bgGlow: "bg-slate-500/5",
    iconBg: "bg-white border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.03)]",
  },
  {
    id: 3,
    title: "Lightning Indexing",
    description:
      "Our proprietary loops ensure your links are crawled and recognized by search engines within 24-48 hours.",
    icon: <Zap className="w-[22px] h-[22px] text-slate-700" />,
    span: "md:col-span-1",
    bgGlow: "bg-slate-500/5",
    iconBg: "bg-white border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.03)]",
  },
  {
    id: 4,
    title: "Editorial-Grade Content",
    description:
      "No spun garbage. Hand-crafted, niche-relevant articles written to ensure maximum contextual relevance, passing maximum link juice to your money site.",
    icon: <PenTool className="w-[22px] h-[22px] text-red-600" />,
    span: "md:col-span-2",
    bgGlow: "bg-red-500/5",
    iconBg:
      "bg-red-50/80 border-red-100/60 shadow-[0_4px_12px_rgba(220,38,38,0.1)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 25 },
  },
};

export const BentoFeatures = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 lg:py-32 overflow-hidden selection:bg-red-100 selection:text-red-900"
    >
      {/* ── Seamless Top Fade & Background Grid ── */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.35]" />

      <div className="relative z-20 max-w-5xl mx-auto">
        {/* ── Master Heading (Badge Removed) ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[48px] md:text-[56px] font-sora font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08]"
          >
            Engineered for stealth.
            <br className="hidden sm:block" />
            Built for{" "}
            <span className="font-instrument italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-[#991b1b] pr-2">
              power.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[15.5px] sm:text-[17px] text-slate-500 font-medium leading-relaxed max-w-xl mx-auto"
          >
            We don't just build links; we architect impenetrable ranking
            ecosystems. Discover what makes our network untouchable.
          </motion.p>
        </div>

        {/* ── Ultra-Premium Bento Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }} /* Mobile Tactile Touch */
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white/60 backdrop-blur-2xl border border-slate-200/70 p-6 sm:p-10 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white/90 hover:border-slate-300 transition-all duration-300 cursor-default ${feature.span}`}
            >
              {/* Top Sub-pixel Hover Line */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Inner Aurora Glow */}
              <div
                className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${feature.bgGlow} blur-[40px] rounded-[32px] pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Floating Icon Dock */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] border flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-[1.08] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-[19px] sm:text-[22px] font-sora font-bold text-slate-900 mb-2.5 sm:mb-3 tracking-tight drop-shadow-sm">
                  {feature.title}
                </h3>

                <p className="text-[13.5px] sm:text-[15px] font-medium text-slate-500 leading-[1.65]">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Blueprint Mesh (For Wide Cards Only) */}
              {feature.span === "md:col-span-2" && (
                <div className="absolute right-[-10%] bottom-[-10%] sm:right-0 sm:bottom-0 pointer-events-none opacity-0 group-hover:opacity-[0.12] transition-opacity duration-700">
                  <svg
                    width="220"
                    height="220"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id={`grid-${feature.id}`}
                        width="18"
                        height="18"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1.5" fill="#DC2626" />
                      </pattern>
                      <mask id={`mask-${feature.id}`}>
                        <radialGradient
                          id={`grad-${feature.id}`}
                          cx="100%"
                          cy="100%"
                          r="100%"
                        >
                          <stop offset="0%" stopColor="white" stopOpacity="1" />
                          <stop
                            offset="100%"
                            stopColor="black"
                            stopOpacity="0"
                          />
                        </radialGradient>
                        <rect
                          width="200"
                          height="200"
                          fill={`url(#grad-${feature.id})`}
                        />
                      </mask>
                    </defs>
                    <rect
                      width="200"
                      height="200"
                      fill={`url(#grid-${feature.id})`}
                      mask={`url(#mask-${feature.id})`}
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
