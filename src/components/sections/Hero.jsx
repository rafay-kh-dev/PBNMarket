import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap, Eye } from "lucide-react";
import OrderButtons from "../ui/OrderButtons";

// Orbital node data
const NODES = [
  {
    icon: TrendingUp,
    label: "+84%",
    sub: "authority lift",
    angle: 315,
    r: 280,
    color: "#DC2626",
  },
  {
    icon: ShieldCheck,
    label: "DR 80+",
    sub: "domain rating",
    angle: 45,
    r: 260,
    color: "#7C3AED",
  },
  {
    icon: Zap,
    label: "99.4%",
    sub: "index rate",
    angle: 135,
    r: 280,
    color: "#059669",
  },
  {
    icon: Eye,
    label: "Zero",
    sub: "footprint",
    angle: 225,
    r: 260,
    color: "#0891B2",
  },
];

function OrbitalNode({ icon: Icon, label, sub, angle, r, color, delay = 0 }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * r;
  const y = Math.sin(rad) * r;

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        x: x - 56,
        y: y - 36,
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.6, duration: 0.5, ease: "easeOut" }}
    >
      <div className="glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2.5 w-[120px]">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}18` }}
        >
          <Icon size={15} style={{ color }} strokeWidth={2.5} />
        </div>
        <div>
          <div className="text-sm font-bold text-[#0F172A] leading-none">
            {label}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5 leading-none">
            {sub}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Soft radial glows */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left pink glow */}
        <div
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, #fda4af 0%, transparent 70%)",
          }}
        />
        {/* Right pink glow */}
        <div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, #fda4af 0%, transparent 70%)",
          }}
        />
        {/* Center subtle glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, #fecdd3 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Orbital ring (decorative dashed circle) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] hidden lg:block">
        <svg
          width="560"
          height="560"
          viewBox="0 0 560 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="280"
            cy="280"
            r="275"
            stroke="rgba(220,38,38,0.1)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <circle
            cx="280"
            cy="280"
            r="200"
            stroke="rgba(100,116,139,0.08)"
            strokeWidth="1"
            strokeDasharray="4 10"
          />
        </svg>
      </div>

      {/* Orbital nodes */}
      <div className="hidden lg:block pointer-events-none absolute left-1/2 top-1/2 w-0 h-0">
        {NODES.map((node, i) => (
          <OrbitalNode key={node.label} {...node} delay={i * 0.1} />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-live" />
          <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
            Premium PBN Marketplace
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.12] tracking-tight"
        >
          PBNs That Actually
          <br />
          Rank You on{" "}
          <span
            className="italic font-normal"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: "#DC2626",
            }}
          >
            Page 1
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="mt-5 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed"
        >
          Battle-tested private blog networks with real authority, zero
          footprint, and a 99.4% indexation rate. Your Page 1 ranking starts
          here.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
          className="mt-8"
        >
          <OrderButtons />
        </motion.div>

        {/* Social proof micro-row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-slate-400 font-medium"
        >
          {[
            "🔒 Discreet & Confidential",
            "⚡ Links Live in 7 Days",
            "♻️ Free Replacements",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
