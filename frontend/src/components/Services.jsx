import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { CONTACT } from "../data";

const categories = [
  "Global Authority",
  "Regional (.ID)",
  "Academic & Gov",
  "Enterprise Bundles",
];

const servicesData = [
  // --- Category 1: Global Authority (4 Items -> Will auto-switch to 2x2 Grid) ---
  {
    id: 1,
    category: "Global Authority",
    badge: "Flagship",
    title: "Editorial Guest Posting",
    tag: "DA/DR 30+ to 50+",
    price: "$15",
    priceLabel: "/post",
    minOrder: "Subtotal: $75 (5 Posts)",
    desc: "Real authority placements with verified organic traffic—add multiple tiers to your campaign!",
    tlds: ".COM, .NET, .ORG",
    turnaround: "5–7 Days",
    features: [
      "400–600 words unique contextual article",
      "DA/DR 30+ to 50+ choices",
      "Verified Monthly Organic Traffic (1K to 50K+)",
    ],
  },
  {
    id: 2,
    category: "Global Authority",
    badge: "Most Popular",
    title: "Homepage Post",
    tag: "DA/DR 50+",
    price: "$1",
    priceLabel: "/link",
    minOrder: "Subtotal: $50 (50 Links)",
    desc: "Publish niche-relevant, human-edited articles directly on the main homepage feed of aged domains.",
    tlds: ".COM, .NET, .ORG",
    turnaround: "5–7 Days",
    features: [
      "400–600 words unique contextual article",
      "Guaranteed Moz DA 50+ & Ahrefs DR 50+",
      "100% Dofollow contextual link on homepage",
    ],
  },
  {
    id: 3,
    category: "Global Authority",
    badge: "High Link Juice",
    title: "Sidebar Blogroll",
    tag: "DA/DR 50+",
    price: "$2",
    priceLabel: "/link",
    minOrder: "Subtotal: $100 (50 Links)",
    desc: "Pass massive sitewide link equity from every indexed page directly to your money site.",
    tlds: ".COM, .NET, .ORG",
    turnaround: "3–5 Days",
    features: [
      "Sitewide homepage & inner-page authority transfer",
      "Strictly capped outbound link (OBL) ratio <15",
      "Instant Googlebot discovery & rapid indexing",
    ],
  },
  {
    id: 4,
    category: "Global Authority",
    badge: "Pinned Top",
    title: "Homepage Sticky Post",
    tag: "DA/DR 50+",
    price: "$2",
    priceLabel: "/link",
    minOrder: "Subtotal: $100 (50 Links)",
    desc: "Lock your contextual article permanently at the very top of our homepages so it never rolls off.",
    tlds: ".COM, .NET, .ORG",
    turnaround: "5–7 Days",
    features: [
      "Permanently pinned in the top homepage slot",
      "Maximum homepage crawl priority & link juice",
      "500+ word niche article with custom anchor",
    ],
  },

  // --- Category 2: Regional (.ID) (3 Items -> Will auto-switch to 1x3 Grid) ---
  {
    id: 5,
    category: "Regional (.ID)",
    badge: "Regional .ID",
    title: ".ID Homepage Post",
    tag: "DA/DR 50+",
    price: "$2",
    priceLabel: "/link",
    minOrder: "Subtotal: $100 (50 Links)",
    desc: "Dominate Google.co.id and Southeast Asian SERPs with contextual homepage articles.",
    tlds: ".ID, .CO.ID, .WEB.ID",
    turnaround: "5–7 Days",
    features: [
      "Native Bahasa Indonesia or English articles",
      "Aged .ID, .CO.ID, .WEB.ID & .OR.ID domains",
      "Geo-targeted Indonesian hosting IPs",
    ],
  },
  {
    id: 6,
    category: "Regional (.ID)",
    badge: "Local Power",
    title: ".ID Sidebar Blogroll",
    tag: "DA/DR 50+",
    price: "$3",
    priceLabel: "/link",
    minOrder: "Subtotal: $150 (50 Links)",
    desc: "Push competitive Indonesian keywords into the Top 3 with sitewide blogroll placements.",
    tlds: ".ID, .CO.ID, .OR.ID",
    turnaround: "3–5 Days",
    features: [
      "Direct homepage & sitewide .ID link equity",
      "Geo-targeted Indonesian Class-C IPs",
      "Strong regional trust signals for Google.co.id",
    ],
  },
  {
    id: 7,
    category: "Regional (.ID)",
    badge: "Pinned .ID",
    title: ".ID Sticky Post",
    tag: "DA/DR 50+",
    price: "$2.50",
    priceLabel: "/link",
    minOrder: "Subtotal: $125 (50 Links)",
    desc: "Combine contextual relevance with permanent top-of-homepage positioning across Indonesian domains.",
    tlds: ".ID, .CO.ID, .WEB.ID",
    turnaround: "5–7 Days",
    features: [
      "Locked top-of-homepage .ID placement",
      "Unique Bahasa Indonesia or English article",
      "Safe drip-feed publishing schedule available",
    ],
  },

  // --- Category 3: Academic & Gov (3 Items -> 1x3 Grid) ---
  {
    id: 8,
    category: "Academic & Gov",
    badge: "Academic Trust",
    title: "EDU PBN Blogpost",
    tag: "DA/DR 50+",
    price: "$3",
    priceLabel: "/link",
    minOrder: "Subtotal: $150 (50 Links)",
    desc: "Skyrocket your E-E-A-T signals and Domain Rating with articles on aged educational domains.",
    tlds: ".EDU, .AC.ID, .SCH.ID",
    turnaround: "5–7 Days",
    features: [
      "Contextual article on aged .EDU domains",
      "Massive boost to Ahrefs DR & trust",
      "Natural anchor text & citation integration",
    ],
  },
  {
    id: 9,
    category: "Academic & Gov",
    badge: "Max Authority",
    title: "EDU PBN Blogroll",
    tag: "DA/DR 50+",
    price: "$5",
    priceLabel: "/link",
    minOrder: "Subtotal: $250 (50 Links)",
    desc: "University sidebar placements delivering massive sitewide institutional authority.",
    tlds: ".EDU, .AC.ID, .SCH.ID",
    turnaround: "3–5 Days",
    features: [
      "Sitewide academic sidebar link equity",
      "High-trust institutional backlink profile",
      "Built for Finance, SaaS, iGaming, Crypto",
    ],
  },
  {
    id: 10,
    category: "Academic & Gov",
    badge: "Exclusive Tier",
    title: "EDU & GOV Backlink",
    tag: "DA 50–85+",
    price: "$20",
    priceLabel: "/link",
    minOrder: "Subtotal: $1,000 (50 Links)",
    desc: "Ultra-high-trust placements on official academic and government properties with stealth integration.",
    tlds: ".AC.ID, .SCH.ID, .GO.ID",
    turnaround: "5–7 Days",
    features: [
      "Authentic .AC.ID, .SCH.ID & .GO.ID extensions",
      "Competitor-proof stealth link integration",
      "Unmatched institutional trust weight",
    ],
  },

  // --- Category 4: Enterprise Bundles (3 Items -> 1x3 Grid) ---
  {
    id: 11,
    category: "Enterprise Bundles",
    badge: "All-In-One",
    title: "Complete SEO Package",
    tag: "Multi-Tier DR 50+",
    price: "$5",
    priceLabel: "/link",
    minOrder: "Subtotal: $250 (50 Links)",
    desc: "A diversified, done-for-you authority campaign combining Homepage, Blogrolls, and EDU placements.",
    tlds: ".COM, .ID, .EDU Mix",
    turnaround: "5–7 Days",
    features: [
      "Balanced mix of Homepage, Sticky & EDU",
      "Natural anchor text diversification",
      "Drip-feed velocity tailored to your domain",
    ],
  },
  {
    id: 12,
    category: "Enterprise Bundles",
    badge: "Page 1 Power",
    title: "Rank on First Page",
    tag: "DR 50–80+ Power",
    price: "$8",
    priceLabel: "/link",
    minOrder: "Subtotal: $400 (50 Links)",
    desc: "Engineered for stubborn keywords. Combines highest-metric Sticky Posts and Institutional links.",
    tlds: ".COM, .EDU, .AC.ID",
    turnaround: "5–7 Days",
    features: [
      "Priority placement on DR 60–80+ domains",
      "Includes Pinned Sticky + EDU/GOV links",
      "Competitor gap analysis & planning",
    ],
  },
  {
    id: 13,
    category: "Enterprise Bundles",
    badge: "Enterprise",
    title: "Custom Solutions",
    tag: "Custom DR 50+",
    price: "$4",
    priceLabel: "/link",
    minOrder: "Subtotal: $200 (50 Links)",
    desc: "Need custom drip-feed, specific TLDs, or multi-client splitting? Configure your custom allocation.",
    tlds: "Custom TLD Selection",
    turnaround: "3–7 Days",
    features: [
      "Split link volume across unlimited domains",
      "Custom geo-targeting (Global, ID, EDU)",
      "Custom drip-feed from 3 to 30 days",
    ],
  },
];

export const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredServices = servicesData.filter(
    (pkg) => pkg.category === activeTab,
  );

  // 🚀 THE MAGIC: Dynamic Grid Class (2x2 for 4 items, 1x3 for 3 items)
  const gridLayoutClass =
    filteredServices.length === 4
      ? "grid-cols-1 md:grid-cols-2 max-w-4xl" // Perfect 2x2 symmetry for Global Authority
      : "grid-cols-1 md:grid-cols-3 max-w-[1280px]"; // Perfect 3-card row for others

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative w-full bg-[#FAFAFA] px-4 sm:px-6 pt-12 lg:pt-16 pb-20 lg:pb-32 overflow-hidden selection:bg-red-100 selection:text-red-900"
    >
      <div className="relative z-10 w-full mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[48px] md:text-[56px] font-sora font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08]"
          >
            The Ultimate Network.
            <br className="hidden sm:block" />
            <span className="font-instrument italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-[#991b1b] pr-2">
              Wholesale Rates.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[15.5px] sm:text-[17px] text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Select your required authority tier below. Connect directly with our
            team on Telegram or WhatsApp to configure your campaign and anchors.
          </motion.p>
        </div>

        {/* ── Animated Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 sm:mb-16 px-2"
        >
          <div className="flex flex-wrap items-center justify-center p-1.5 bg-slate-200/50 backdrop-blur-xl rounded-[22px] shadow-sm max-w-fit ring-1 ring-slate-900/5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-[16px] text-[14px] sm:text-[15px] font-medium transition-colors duration-300 outline-none ${
                  activeTab === category
                    ? "text-slate-900 font-semibold"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-white rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-slate-100"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── DYNAMIC CARDS GRID (Symmetry Fixed) ── */}
        <motion.div
          layout
          className={`grid gap-6 lg:gap-8 mx-auto ${gridLayoutClass}`}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative flex flex-col bg-white rounded-[32px] p-8 sm:p-10 transition-all duration-500 ${
                  pkg.badge === "Most Popular" || pkg.badge === "Page 1 Power"
                    ? "shadow-[0_8px_30px_-10px_rgba(220,38,38,0.12)] ring-1 ring-red-100 hover:shadow-[0_20px_40px_-12px_rgba(220,38,38,0.18)]"
                    : "shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] ring-1 ring-slate-900/5 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)] hover:ring-slate-900/10"
                }`}
              >
                {/* Minimalist Top Glow Line */}
                <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-[32px]" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Clean Headers */}
                  <div className="mb-6 flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      {pkg.badge === "Most Popular" ||
                      pkg.badge === "Page 1 Power" ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
                          <Sparkles className="w-3.5 h-3.5" />
                          {pkg.badge}
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-[24px] sm:text-[26px] font-sora font-extrabold text-slate-900 mb-2 tracking-tight leading-tight">
                      {pkg.title}
                    </h3>
                    <div className="text-[13px] font-medium text-slate-400 mb-4">
                      {pkg.tag}
                    </div>
                    <p className="text-[14.5px] text-slate-500 font-normal leading-relaxed">
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Vercel-Style Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[52px] sm:text-[60px] font-light text-slate-900 tracking-tighter leading-none">
                        {pkg.price}
                      </span>
                      <span className="text-[15px] font-medium text-slate-400">
                        {pkg.priceLabel}
                      </span>
                    </div>
                    <div className="mt-2 text-[12px] font-semibold text-slate-400">
                      {pkg.minOrder}
                    </div>
                  </div>

                  {/* Clean Inline Meta Data */}
                  <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium text-slate-500 mb-8 pb-6 border-b border-slate-100">
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100/80">
                      <span className="text-slate-400">TLDs:</span>{" "}
                      <span className="text-slate-700">{pkg.tlds}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100/80">
                      <span className="text-slate-400">Time:</span>{" "}
                      <span className="text-slate-700">{pkg.turnaround}</span>
                    </span>
                  </div>

                  {/* Sleek Features List */}
                  <ul className="space-y-3.5 mb-10 flex-1">
                    {pkg.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[14px] font-normal text-slate-600 leading-relaxed"
                      >
                        <Check className="w-4.5 h-4.5 text-red-400 shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* ── Exact Requested Img CTAs ── */}
                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 bg-gradient-to-b from-red-500 to-[#B91C1C] hover:from-red-600 hover:to-[#991b1b] text-white text-[13px] font-bold py-3.5 rounded-xl shadow-[0_4px_12px_rgba(220,38,38,0.2)] hover:shadow-[0_6px_16px_rgba(220,38,38,0.3)] transition-all duration-300"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/telegram/default.svg"
                        alt="Telegram"
                        className="h-4.5 w-4.5 object-contain brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                      />
                      Telegram
                    </a>

                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[13px] font-bold py-3.5 rounded-xl shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/whatsapp/wordmark.svg"
                        alt="WhatsApp"
                        className="h-4.5 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
