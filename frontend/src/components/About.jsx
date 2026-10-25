import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building,
  ShieldCheck,
  CheckCircle2,
  Globe,
  ArrowUpRight,
  Shield,
  Activity,
  Calendar,
  Code,
} from "lucide-react";
import { CONTACT } from "../data";

const stats = [
  { value: "2016", label: "Founded & Operating", title: "Proven Track Record" },
  {
    value: "1,000,000+",
    label: "DA/DR 50+ Links Deployed",
    title: "Verified Authority",
  },
  {
    value: "500+",
    label: "Global SEO Agencies Scaled",
    title: "100% White-Label",
  },
  {
    value: "99.8%",
    label: "Indexation & Network Uptime",
    title: "Zero Footprints",
  },
];

const philosophyChecks = [
  "100% Privately Owned Domain Inventory",
  "Zero Third-Party Reseller Markups",
  "Automated Multi-Gateway Checkout",
  "Unbranded White-Label Agency Sheets",
];

const pillars = [
  {
    id: "01",
    icon: <Shield className="w-5 h-5 text-red-600" />,
    title: "Network Security",
    subtitle: "Strict Class-C IP & Hosting Isolation",
    desc: "Every domain across our .COM, .ID, and .EDU inventory is hosted on isolated Class-C IP blocks, independent DNS providers, and distinct registrars to guarantee zero footprints.",
  },
  {
    id: "02",
    icon: <Activity className="w-5 h-5 text-red-600" />,
    title: "Quality Control",
    subtitle: "Rigorous Domain Vetting (DA/DR 50+)",
    desc: "We acquire and maintain aged domains with clean historical backlink profiles, zero spam scores, and verified Moz DA 50+ and Ahrefs DR 50+ authority metrics.",
  },
  {
    id: "03",
    icon: <Globe className="w-5 h-5 text-red-600" />,
    title: "Global & Local SERPs",
    subtitle: "Multi-Region & Institutional Inventory",
    desc: "From global .COM/.NET/.ORG domains to authentic Indonesian (.ID, .CO.ID) and restricted academic/government (.EDU, .AC.ID, .GO.ID) properties.",
  },
  {
    id: "04",
    icon: <Code className="w-5 h-5 text-red-600" />,
    title: "Agency Ready",
    subtitle: "Self-Serve Automation & White-Label Delivery",
    desc: "Built by engineers at SeoHub Ltd to eliminate manual outreach delays. Calculate bulk pricing in real time, checkout securely, and receive unbranded reports.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "Foundation of Our Private Network",
    desc: "Started acquiring aged, high-authority domains and building isolated hosting infrastructure for private agency clients.",
  },
  {
    year: "2020",
    title: "Expansion into Regional & Academic Tiers",
    desc: "Scaled our Southeast Asian (.ID / .CO.ID) and institutional (.EDU / .AC.ID / .GO.ID) inventory to support competitive international SERPs.",
  },
  {
    year: "2024",
    title: "Consolidation Under SeoHub Ltd",
    desc: "Unified our link-building operations, editorial teams, and technical SEO infrastructure under the corporate umbrella of SeoHub Ltd.",
  },
  {
    year: "2026",
    title: "Launch of Automated Self-Serve Portal",
    desc: "Introduced our real-time bulk package estimator, multi-gateway checkout, and automated white-label dispatch system.",
  },
];

export const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 350, damping: 30 },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-white px-4 sm:px-6 py-20 lg:py-32 overflow-hidden selection:bg-red-100 selection:text-red-900 border-t border-slate-100"
    >
      <div className="pointer-events-none absolute top-0 right-0 w-[50vw] h-[50vw] bg-red-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-slate-200/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 1. HERO & INTRODUCTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-widest mb-6"
          >
            <Building className="w-3.5 h-3.5 text-red-500" /> A Division of
            SeoHub Ltd
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-[clamp(2.125rem,4.5vw,4rem)] font-sora font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08] mb-6"
          >
            Engineering organic authority <br className="hidden sm:block" />
            {/* 🚀 FIXED: Consistent Stylish Typography (Instrument Serif + Italic) */}
            <span className="font-instrument italic font-normal text-transparent bg-clip-text bg-linear-to-br from-red-600 to-[#991b1b] pr-2">
              at enterprise scale.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[15.5px] sm:text-[18px] text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-8"
          >
            <strong className="text-slate-700 font-bold">PBNMarket</strong> is a
            premier SEO and private link infrastructure platform operating under
            SeoHub Ltd. We empower global SEO agencies, e-commerce brands, and
            enterprise marketing teams with verified DA/DR 50+ placements across
            .COM, .ID, .EDU, and .GOV networks.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("switchCategory", {
                    detail: "Global Authority",
                  }),
                );
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[13.5px] font-bold px-6 py-3.5 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
            >
              Explore Our 13 Services
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 text-[13.5px] font-bold px-6 py-3.5 rounded-xl border border-red-200/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              Contact SeoHub Ltd Desk
            </a>
          </motion.div>
        </motion.div>

        {/* 2. STATS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24 lg:mb-32"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#FAFAFA] border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col items-start justify-center shadow-[0_4px_20px_-8px_rgba(15,23,42,0.05)] hover:shadow-[0_14px_34px_-10px_rgba(15,23,42,0.08)] transition-all duration-300"
            >
              <div className="text-[11px] font-bold text-red-600 uppercase tracking-widest mb-3">
                {stat.title}
              </div>
              <div className="text-[32px] sm:text-[36px] font-sora font-extrabold text-slate-800 tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[13.5px] font-semibold text-slate-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. PHILOSOPHY & CORPORATE PROFILE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-7 lg:pr-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-4"
            >
              Our Engineering Philosophy
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-sora font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
            >
              Why we built PBNMarket.
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-[15px] sm:text-[16px] text-slate-500 font-medium leading-[1.75] mb-5"
            >
              Traditional link building is broken—plagued by slow manual
              outreach, unverified domain metrics, footprint-heavy reseller
              blogs, and opaque invoicing. Under the leadership of{" "}
              <strong className="text-slate-700">SeoHub Ltd</strong>, we
              engineered PBNMarket to give SEO professionals direct, self-serve
              access to a privately owned, enterprise-grade domain ecosystem.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-[15px] sm:text-[16px] text-slate-500 font-medium leading-[1.75] mb-8"
            >
              Whether you are scaling a local Indonesian brand on Google.co.id,
              competing in global English SERPs, or reinforcing E-E-A-T and AI
              Overview citations with institutional .EDU and .GOV authority, our
              platform delivers predictable rankings with complete transparency.
            </motion.p>

            <motion.ul
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {philosophyChecks.map((check, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <span className="text-[13.5px] font-semibold text-slate-700 leading-snug">
                    {check}
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#FAFAFA] border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_-6px_rgba(15,23,42,0.06)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                Corporate Profile
              </div>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span className="text-[13px] font-medium text-slate-500">
                    Parent Company
                  </span>
                  <span className="text-[13px] font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> SeoHub
                    Ltd
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span className="text-[13px] font-medium text-slate-500">
                    Flagship Brand
                  </span>
                  <span className="text-[13px] font-bold text-slate-900">
                    PBNMarket
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span className="text-[13px] font-medium text-slate-500">
                    Network Guarantee
                  </span>
                  <span className="text-[13px] font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                    DA 50+ / DR 50+
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span className="text-[13px] font-medium text-slate-500">
                    Supported Networks
                  </span>
                  <span className="text-[13px] font-bold text-slate-900">
                    .COM • .ID • .EDU • .GOV
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-slate-500">
                    Support Desk
                  </span>
                  <a
                    href="mailto:jasa-backlinks@seohubltd.com"
                    className="text-[13px] font-bold text-red-600 hover:underline"
                  >
                    Support@seohubltd.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white border border-slate-200/80 text-[12px] font-bold text-slate-700 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm"
                >
                  WhatsApp <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white border border-slate-200/80 text-[12px] font-bold text-slate-700 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 shadow-sm"
                >
                  Telegram <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. INFRASTRUCTURE STANDARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mb-24 lg:mb-32"
        >
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              Infrastructure Standards
            </div>
            <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-sora font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Built for safety, speed, and <br className="hidden sm:block" />
              {/* 🚀 FIXED: Consistent Stylish Typography */}
              <span className="font-instrument italic font-normal text-transparent bg-clip-text bg-linear-to-br from-red-600 to-[#991b1b] pr-2">
                SERP dominance.
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#FAFAFA] border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start transition-all duration-300 hover:bg-white hover:shadow-[0_14px_34px_-10px_rgba(15,23,42,0.08)] hover:border-slate-300"
              >
                <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm">
                  {pillar.icon}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Pillar {pillar.id}
                  </div>
                  <h4 className="text-[18px] sm:text-[20px] font-sora font-extrabold text-slate-900 mb-1 leading-tight">
                    {pillar.title}
                  </h4>
                  <div className="text-[12px] font-bold text-red-600 mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-500 font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. THE JOURNEY (Timeline) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-widest mb-4">
              <Calendar className="w-3.5 h-3.5" /> History
            </div>
            <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-sora font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Our journey from 2016 to 2026.
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-0">
            <div className="absolute left-6.75 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-0" />

            <div className="flex flex-col gap-10 sm:gap-16 relative z-10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex-1 w-full sm:w-1/2 ${idx % 2 === 0 ? "sm:text-left" : "sm:text-right"}`}
                  >
                    <div className="text-[28px] sm:text-[36px] font-sora font-black text-slate-200 tracking-tighter leading-none mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-[17px] sm:text-[19px] font-extrabold text-slate-800 mb-2 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-full bg-white border-[3px] border-red-100 items-center justify-center relative z-10 shadow-[0_0_15px_rgba(220,38,38,0.15)]">
                    <div className="w-3 h-3 rounded-full bg-red-600" />
                  </div>

                  <div className="hidden flex-1 sm:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
