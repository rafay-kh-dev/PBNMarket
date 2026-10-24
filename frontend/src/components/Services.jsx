import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Star,
  LayoutTemplate,
  MapPin,
  GraduationCap,
  Rocket,
  Briefcase,
  Send,
  MessageCircle,
} from "lucide-react";
import { CONTACT } from "../data"; // Aapka contact data

const servicesData = [
  {
    id: 1,
    badge: "Flagship",
    title: "Editorial Guest Posting",
    price: "From $15/post",
    desc: "Real authority placements with verified organic traffic. Add multiple tiers (1K+ to 50K+ traffic) to your campaign.",
    tlds: "Verified Niche Sites",
    turnaround: "5–7 Days",
    features: [
      "General, iGaming & Casino",
      "DA/DR 30+ to 50+ choices",
      "Verified Monthly Organic Traffic",
    ],
    icon: <Star className="w-[22px] h-[22px] text-red-600" />,
    popular: false,
  },
  {
    id: 2,
    badge: "Most Popular",
    title: "Global Authority PBNs",
    price: "From $1.00/link",
    desc: "Publish niche-relevant articles directly on the homepage or sidebar of aged, high-authority domains with zero footprints.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "3–7 Days",
    features: [
      "Guaranteed DA 50+ & DR 50+",
      "100% Dofollow contextual links",
      "Homepage, Sticky & Sidebar options",
    ],
    icon: <LayoutTemplate className="w-[22px] h-[22px] text-red-600" />,
    popular: true,
  },
  {
    id: 3,
    badge: "Regional Power",
    title: "Indonesian (.ID) Network",
    price: "From $2.00/link",
    desc: "Dominate Google.co.id and SEA SERPs with contextual articles on aged, authoritative Indonesian country-code domains.",
    tlds: ".ID • .CO.ID • .WEB.ID",
    turnaround: "3–7 Days",
    features: [
      "Bahasa Indonesia or English",
      "Geo-targeted hosting IPs",
      "Homepage & Sitewide Blogrolls",
    ],
    icon: <MapPin className="w-[22px] h-[22px] text-red-600" />,
    popular: false,
  },
  {
    id: 4,
    badge: "Maximum Trust",
    title: "Academic & GOV Backlinks",
    price: "From $3.00/link",
    desc: "Skyrocket your E-E-A-T signals and AI Overview citations with placements on official academic and government properties.",
    tlds: ".EDU • .AC.ID • .GO.ID",
    turnaround: "3–7 Days",
    features: [
      "Massive boost to Ahrefs DR",
      "Competitor-proof integration",
      "Perfect for Finance & Crypto",
    ],
    icon: <GraduationCap className="w-[22px] h-[22px] text-red-600" />,
    popular: false,
  },
  {
    id: 5,
    badge: "Done-For-You",
    title: "All-In-One SEO Packages",
    price: "From $5.00/link",
    desc: "A diversified authority campaign combining Standard PBNs, Blogrolls, and EDU placements into one balanced link profile.",
    tlds: ".COM • .ID • .EDU Mix",
    turnaround: "5–7 Days",
    features: [
      "Mix of Homepage & EDU links",
      "Natural anchor diversification",
      "Forces Top-3 SERP breakthroughs",
    ],
    icon: <Rocket className="w-[22px] h-[22px] text-red-600" />,
    popular: true, // Highlighting the package deals
  },
  {
    id: 6,
    badge: "Agencies",
    title: "Enterprise Custom",
    price: "Custom Allocation",
    desc: "Need custom drip-feed schedules, specific TLDs, or multi-client agency splitting? Configure your custom allocation with our team.",
    tlds: "Custom TLD & Geo",
    turnaround: "Flexible",
    features: [
      "Split across unlimited clients",
      "Custom drip-feed (3 to 30 days)",
      "Dedicated account manager",
    ],
    icon: <Briefcase className="w-[22px] h-[22px] text-red-600" />,
    popular: false,
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

export const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-white px-4 sm:px-6 py-20 lg:py-32 overflow-hidden selection:bg-red-100 selection:text-red-900"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] sm:text-[44px] md:text-[52px] font-sora font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.1]"
          >
            Premium placements. <br className="hidden sm:block" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-[#B91C1C]">
              Wholesale agency rates.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-[15px] sm:text-[17px] text-slate-500 font-medium leading-relaxed"
          >
            Select a service tier below and connect directly with our team to
            configure your campaign, anchors, and drip-feed schedule.
          </motion.p>
        </div>

        {/* ── Services Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {servicesData.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col bg-white rounded-[24px] p-6 sm:p-8 border transition-all duration-300 ${
                pkg.popular
                  ? "border-red-200 shadow-[0_8px_30px_-12px_rgba(220,38,38,0.15)] ring-1 ring-red-50"
                  : "border-slate-200/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.06)] hover:border-slate-300"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-[#B91C1C] text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Icon & Title Area */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-[14px] bg-red-50 border border-red-100/50 flex items-center justify-center shadow-sm">
                  {pkg.icon}
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {pkg.badge}
                  </div>
                  <div className="text-[17px] font-extrabold text-slate-900">
                    {pkg.price}
                  </div>
                </div>
              </div>

              <h3 className="text-[20px] font-sora font-bold text-slate-900 mb-2">
                {pkg.title}
              </h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                {pkg.desc}
              </p>

              {/* Specs Box */}
              <div className="bg-slate-50/80 rounded-xl p-3 mb-6 border border-slate-100 flex items-center justify-between text-[12px] font-semibold text-slate-600">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    Supported TLDs
                  </span>
                  {pkg.tlds}
                </div>
                <div className="flex flex-col gap-0.5 text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    Turnaround
                  </span>
                  {pkg.turnaround}
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 mb-8">
                {pkg.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[13.5px] font-medium text-slate-600"
                  >
                    <svg
                      className="w-4 h-4 text-red-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* ── Lead Generation CTAs ── */}
              <div className="mt-auto flex items-center gap-2">
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-red-600 text-white text-[13.5px] font-semibold py-3 rounded-xl transition-colors duration-300 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Order on Telegram
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Discuss on WhatsApp"
                  className="w-12 h-[46px] flex items-center justify-center bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 rounded-xl transition-all duration-300"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
