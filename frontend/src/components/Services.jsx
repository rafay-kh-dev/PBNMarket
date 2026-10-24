import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Clock, Globe, ArrowUpRight, ShieldCheck, Layers } from "lucide-react";
import { CONTACT } from "../data";

const categories = [
  { id: "Global Authority", label: "Global Authority", count: 4 },
  { id: "Regional (.ID)", label: "Indonesian (.ID)", count: 3 },
  { id: "Academic & Gov", label: "Academic & GOV", count: 3 },
  { id: "Enterprise Bundles", label: "All-In-One Bundles", count: 3 },
];

const servicesData = [
  // ── Category 1: Global Authority ──
  {
    id: 1,
    category: "Global Authority",
    badge: "#1 Flagship",
    title: "Editorial Guest Posting",
    tag: "DA/DR 30+ to 50+ Free Choice",
    unitPrice: 15,
    unitLabel: "post",
    defaultQty: 5,
    qtyOptions: [1, 5, 10, 25, 50, 100],
    tiers: [
      { label: "1K+ Traffic", price: 15 },
      { label: "5K+ Traffic", price: 30 },
      { label: "10K+ Traffic", price: 60 },
      { label: "25K+ Traffic", price: 120 },
      { label: "50K+ Traffic", price: 240 },
    ],
    desc: "Real authority placements with verified organic traffic. Customised outreach across General, SaaS, and iGaming niches with zero footprint risk.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "5–7 Days",
    features: [
      "Verified monthly organic traffic tiers (1K+ up to 50K+)",
      "DA/DR 30+ to 50+ free authority selection included",
      "Bespoke human-written contextual editorial articles",
    ],
    popular: true,
  },
  {
    id: 2,
    category: "Global Authority",
    badge: "Most Popular",
    title: "Homepage PBN Post",
    tag: "Guaranteed DA/DR 50+",
    unitPrice: 1,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000, 2500],
    desc: "Publish niche-relevant, human-edited articles directly on the main homepage feed of aged, high-authority domains with zero footprints.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "5–7 Days",
    features: [
      "400–600 words unique contextual article per placement",
      "Guaranteed Moz DA 50+ & Ahrefs DR 50+ vetted domains",
      "100% Dofollow contextual link placement on homepage",
    ],
    popular: true,
  },
  {
    id: 3,
    category: "Global Authority",
    badge: "High Link Juice",
    title: "Sidebar Blogroll",
    tag: "Sitewide DA/DR 50+",
    unitPrice: 2,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000, 2500],
    desc: "Pass massive sitewide link equity from every indexed page of our aged DA/DR 50+ domains directly to your money site to accelerate Domain Rating.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "3–5 Days",
    features: [
      "Sitewide homepage & inner-page authority transfer",
      "Strictly capped outbound link (OBL) ratio (<15 links)",
      "Instant Googlebot discovery & rapid indexing",
    ],
    popular: false,
  },
  {
    id: 4,
    category: "Global Authority",
    badge: "Pinned Top",
    title: "Homepage Sticky Post",
    tag: "Locked Top Slot • DR 50+",
    unitPrice: 2,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000, 2500],
    desc: "Lock your contextual article permanently at the very top of our DA/DR 50+ homepages so your placement never rolls off into inner pagination.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "5–7 Days",
    features: [
      "Permanently pinned in the top homepage slot",
      "Maximum homepage crawl priority & link juice",
      "500+ word niche article with customised anchor text",
    ],
    popular: false,
  },

  // ── Category 2: Regional (.ID) ──
  {
    id: 5,
    category: "Regional (.ID)",
    badge: "Regional .ID",
    title: ".ID Homepage Post",
    tag: "Indonesian DA/DR 50+",
    unitPrice: 2,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000, 2500],
    desc: "Dominate Google.co.id and Southeast Asian SERPs with contextual homepage articles published on aged, authoritative Indonesian country-code domains.",
    tlds: ".ID • .CO.ID • .WEB.ID",
    turnaround: "5–7 Days",
    features: [
      "Native Bahasa Indonesia or English contextual articles",
      "Aged .ID, .CO.ID, .WEB.ID & .OR.ID domains",
      "Geo-targeted Indonesian & Singaporean hosting IPs",
    ],
    popular: true,
  },
  {
    id: 6,
    category: "Regional (.ID)",
    badge: "Local Power",
    title: ".ID Sidebar Blogroll",
    tag: "Sitewide .ID • DA/DR 50+",
    unitPrice: 3,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000, 2500],
    desc: "Push competitive Indonesian keywords into the Top 3 with sitewide blogroll placements across our highest-authority .ID and .CO.ID domains.",
    tlds: ".ID • .CO.ID • .OR.ID",
    turnaround: "3–5 Days",
    features: [
      "Direct homepage & sitewide .ID link equity",
      "Geo-targeted Indonesian Class-C IP distribution",
      "Strong regional trust signals for Google.co.id",
    ],
    popular: false,
  },
  {
    id: 7,
    category: "Regional (.ID)",
    badge: "Pinned .ID",
    title: ".ID Sticky Post",
    tag: "Pinned Top • DA/DR 50+",
    unitPrice: 2.5,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000, 2500],
    desc: "Combine contextual relevance with permanent top-of-homepage positioning across aged DA/DR 50+ Indonesian (.ID / .CO.ID) domains.",
    tlds: ".ID • .CO.ID • .WEB.ID",
    turnaround: "5–7 Days",
    features: [
      "Locked top-of-homepage .ID contextual placement",
      "Unique Bahasa Indonesia or English niche article",
      "Safe drip-feed publishing schedule available",
    ],
    popular: false,
  },

  // ── Category 3: Academic & Gov ──
  {
    id: 8,
    category: "Academic & Gov",
    badge: "Academic Trust",
    title: "EDU PBN Blogpost",
    tag: "Institutional DA/DR 50+",
    unitPrice: 3,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [25, 50, 100, 250, 500, 1000],
    desc: "Skyrocket your E-E-A-T signals, AI Overview citations, and Domain Rating with contextual articles published on aged educational domains.",
    tlds: ".EDU • .AC.ID • .SCH.ID",
    turnaround: "5–7 Days",
    features: [
      "Contextual article on aged .EDU & academic domains",
      "Massive boost to Ahrefs DR & institutional trust",
      "Natural anchor text & citation integration",
    ],
    popular: false,
  },
  {
    id: 9,
    category: "Academic & Gov",
    badge: "Max Authority",
    title: "EDU PBN Blogroll",
    tag: "University Sidebar • DR 50+",
    unitPrice: 5,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [25, 50, 100, 250, 500, 1000],
    desc: "University and academic sidebar placements delivering massive sitewide institutional authority to push ultra-competitive keywords into the Top 3.",
    tlds: ".EDU • .AC.ID • .SCH.ID",
    turnaround: "3–5 Days",
    features: [
      "Sitewide academic sidebar link equity transfer",
      "High-trust institutional backlink profile",
      "Built for Finance, SaaS, iGaming, Crypto & E-Com",
    ],
    popular: true,
  },
  {
    id: 10,
    category: "Academic & Gov",
    badge: "Exclusive Tier",
    title: "EDU & GOV Backlink",
    tag: "DA 50–85+ Official Trust",
    unitPrice: 20,
    unitLabel: "link",
    defaultQty: 25,
    qtyOptions: [10, 25, 50, 100, 250],
    desc: "Ultra-high-trust placements on official academic (.AC.ID, .SCH.ID) and government (.GO.ID) properties with competitor-proof stealth integration.",
    tlds: ".AC.ID • .SCH.ID • .GO.ID",
    turnaround: "5–7 Days",
    features: [
      "Authentic .AC.ID, .SCH.ID & .GO.ID extensions",
      "Competitor-proof stealth link integration",
      "Unmatched institutional trust & AI citation weight",
    ],
    popular: false,
  },

  // ── Category 4: Enterprise Bundles ──
  {
    id: 11,
    category: "Enterprise Bundles",
    badge: "All-In-One",
    title: "Complete SEO Package",
    tag: "Multi-Tier DR 50+ Mix",
    unitPrice: 5,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "A diversified, done-for-you authority campaign combining Standard PBN Homepage Posts, Sitewide Blogrolls, and High-Trust EDU placements into one balanced profile.",
    tlds: ".COM • .ID • .EDU Mix",
    turnaround: "5–7 Days",
    features: [
      "Balanced mix of Homepage, Sticky & EDU placements",
      "Natural anchor text diversification (Branded, Exact, Partial)",
      "Drip-feed velocity tailored to your domain age",
    ],
    popular: false,
  },
  {
    id: 12,
    category: "Enterprise Bundles",
    badge: "Page 1 Power",
    title: "Rank on First Page",
    tag: "DR 50–80+ Powerhouse",
    unitPrice: 8,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Engineered for stubborn keywords stuck on Page 2 or Page 3. Combines our highest-metric Pinned Sticky Posts, EDU Blogrolls, and Institutional links.",
    tlds: ".COM • .EDU • .AC.ID • .GO.ID",
    turnaround: "5–7 Days",
    features: [
      "Priority placement on our highest-DR (DR 60–80+) domains",
      "Includes Pinned Sticky Posts + EDU/GOV institutional links",
      "Competitor gap analysis & anchor velocity planning",
    ],
    popular: true,
  },
  {
    id: 13,
    category: "Enterprise Bundles",
    badge: "Enterprise Custom",
    title: "Custom SEO Solutions",
    tag: "Multi-Client Agency Split",
    unitPrice: 4,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000, 2500],
    desc: "Need customised drip-feed schedules, specific country TLDs, multi-client agency splitting, or bespoke anchor ratios? Configure your allocation below.",
    tlds: "Custom TLD & Geo Selection",
    turnaround: "3–7 Days",
    features: [
      "Split link volume across unlimited client domains",
      "Customised geo-targeting (Global .COM, .ID, or EDU)",
      "Flexible drip-feed schedules from 3 days to 30 days",
    ],
    popular: false,
  },
];

export const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const [selectedQty, setSelectedQty] = useState(servicesData[0].defaultQty);
  const [selectedTierIdx, setSelectedTierIdx] = useState(0);

  const categoryServices = servicesData.filter((s) => s.category === activeCategory);
  const activeService = servicesData.find((s) => s.id === selectedServiceId) || categoryServices[0];

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    const firstInCat = servicesData.find((s) => s.category === catId);
    if (firstInCat) {
      setSelectedServiceId(firstInCat.id);
      setSelectedQty(firstInCat.defaultQty);
      setSelectedTierIdx(0);
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedServiceId(service.id);
    setSelectedQty(service.defaultQty);
    setSelectedTierIdx(0);
  };

  const activeUnitPrice = activeService.tiers
    ? activeService.tiers[selectedTierIdx]?.price || activeService.unitPrice
    : activeService.unitPrice;

  const subtotal = (activeUnitPrice * selectedQty).toLocaleString("en-US", {
    minimumFractionDigits: activeUnitPrice % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: 2,
  });

  const orderSummaryText = encodeURIComponent(
    `Hi PBNMarket Team! I'd like to configure a campaign:\n\n` +
    `• Service: ${activeService.title} (${activeService.tag})\n` +
    (activeService.tiers ? `• Tier: ${activeService.tiers[selectedTierIdx].label}\n` : ``) +
    `• Quantity: ${selectedQty} ${activeService.unitLabel}s\n` +
    `• Estimated Total: $${subtotal} USD\n\n` +
    `Please share the next steps.`
  );

  const whatsappUrl = CONTACT.whatsapp.includes("?")
    ? `${CONTACT.whatsapp}&text=${orderSummaryText}`
    : `${CONTACT.whatsapp}?text=${orderSummaryText}`;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#FAFAFA] px-4 sm:px-6 pt-10 lg:pt-12 pb-16 lg:pb-24 overflow-hidden selection:bg-red-100 selection:text-red-900"
    >
      {/* Subtle Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.04)_0%,transparent_70%)] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* ── Section Heading ── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] sm:text-[44px] md:text-[52px] font-sora font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.08]"
          >
            The ultimate catalogue.<br className="hidden sm:block" />
            Built for{" "}
            <span className="font-instrument italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-[#991b1b] pr-2">
              scale.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 sm:mt-4 text-[14.5px] sm:text-[16px] text-slate-500 font-medium leading-relaxed"
          >
            Configure your customised link allocation below and connect with our campaign engineers on Telegram or WhatsApp for instant deployment.
          </motion.p>
        </div>

        {/* ── Category Pill Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-start sm:justify-center mb-6 sm:mb-9 overflow-x-auto no-scrollbar pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-[13px] sm:text-[14px] font-semibold transition-colors duration-200 whitespace-nowrap outline-none ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-gradient-to-b from-red-500 to-[#B91C1C] rounded-xl shadow-[0_4px_12px_rgba(220,38,38,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span
                    className={`relative z-10 text-[11px] px-1.5 py-0.5 rounded-md font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            DESKTOP & LAPTOP: COMPACT SPLIT-SCREEN SHOWROOM (Fits 100% on Screen)
           ══════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          
          {/* ── LEFT COLUMN (5 Cols): Service Selector List ── */}
          <div className="col-span-5 flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {categoryServices.map((service, idx) => {
                  const isSelected = activeService.id === service.id;
                  return (
                    <motion.button
                      key={service.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      onClick={() => handleServiceSelect(service)}
                      className={`group relative w-full text-left p-4 xl:p-5 rounded-[22px] transition-all duration-300 outline-none overflow-hidden ${
                        isSelected
                          ? "bg-white shadow-[0_12px_30px_-10px_rgba(220,38,38,0.14)] ring-2 ring-red-500"
                          : "bg-white/75 hover:bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.04)] ring-1 ring-slate-200/80 hover:ring-slate-300"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-500 to-[#B91C1C]" />
                      )}

                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                                isSelected || service.popular
                                  ? "bg-red-50 text-red-600 border border-red-100"
                                  : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              {service.popular && <Sparkles className="w-2.5 h-2.5" />}
                              {service.badge}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-400 truncate">
                              {service.tag}
                            </span>
                          </div>

                          <div className="text-[16px] xl:text-[17px] font-sora font-bold text-slate-900 group-hover:text-red-600 transition-colors truncate">
                            {service.title}
                          </div>
                        </div>

                        <div className="text-right shrink-0 pl-2">
                          <div className="text-[20px] xl:text-[22px] font-extrabold text-slate-900 tracking-tight leading-none">
                            ${service.unitPrice}
                          </div>
                          <div className="text-[10.5px] font-semibold text-slate-400 mt-1">
                            per {service.unitLabel}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Agency Trust Note */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/70 border border-slate-200/70 text-[12px] font-medium text-slate-500">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>100% replacement guarantee & white-label agency reporting.</span>
            </div>
          </div>

          {/* ── RIGHT COLUMN (7 Cols): Compact Full-View Configurator Card ── */}
          <div className="col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full flex flex-col justify-between bg-white rounded-[28px] p-6 xl:p-8 shadow-[0_16px_50px_-15px_rgba(0,0,0,0.07)] ring-1 ring-slate-200/80 overflow-hidden"
              >
                {/* Top Crimson Accent Line */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />

                <div>
                  {/* Header + Unit Rate */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-100 text-[10.5px] font-bold text-red-600 uppercase tracking-wider">
                          <Sparkles className="w-3 h-3" />
                          {activeService.badge}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
                          <Globe className="w-3 h-3 text-red-500" />
                          {activeService.tlds}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
                          <Clock className="w-3 h-3 text-red-500" />
                          {activeService.turnaround}
                        </span>
                      </div>

                      <h3 className="text-[22px] xl:text-[26px] font-sora font-extrabold text-slate-900 tracking-tight leading-tight">
                        {activeService.title}
                      </h3>
                    </div>

                    <div className="text-right bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/60 shrink-0">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Unit Rate
                      </div>
                      <div className="flex items-baseline justify-end gap-0.5 mt-0.5">
                        <span className="text-[22px] xl:text-[24px] font-extrabold text-slate-900 tracking-tight leading-none">
                          ${activeUnitPrice}
                        </span>
                        <span className="text-[12px] font-semibold text-slate-500">
                          /{activeService.unitLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-[13.5px] xl:text-[14.5px] text-slate-600 font-medium leading-relaxed">
                    {activeService.desc}
                  </p>

                  {/* Compact Deliverables List */}
                  <div className="mt-4 grid grid-cols-1 gap-2">
                    {activeService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[13px] xl:text-[13.5px] font-medium text-slate-700">
                        <span className="w-4.5 h-4.5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-red-600 stroke-[2.5]" />
                        </span>
                        {feat}
                      </div>
                    ))}
                  </div>

                  {/* Optional Traffic Tier Selector (Editorial Guest Posting) */}
                  {activeService.tiers && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <Layers className="w-3.5 h-3.5 text-red-500" />
                        Select Verified Monthly Traffic Tier
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        {activeService.tiers.map((tier, idx) => (
                          <button
                            key={tier.label}
                            onClick={() => setSelectedTierIdx(idx)}
                            className={`py-1.5 px-1.5 rounded-xl text-center border transition-all ${
                              selectedTierIdx === idx
                                ? "bg-red-50/90 border-red-500 text-red-700 font-bold shadow-sm"
                                : "bg-slate-50/70 border-slate-200/70 text-slate-600 hover:bg-white font-medium"
                            }`}
                          >
                            <div className="text-[11.5px] leading-tight">{tier.label.split(" ")[0]}</div>
                            <div className="text-[10px] opacity-80">${tier.price}/post</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity Selector */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Select Campaign Volume ({activeService.unitLabel}s)
                      </span>
                      <span className="text-[11px] font-semibold text-red-600">
                        Instant Agency Allocation
                      </span>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                      {activeService.qtyOptions.map((qty) => {
                        const isQtySelected = selectedQty === qty;
                        return (
                          <button
                            key={qty}
                            onClick={() => setSelectedQty(qty)}
                            className={`py-2 rounded-xl text-[13px] font-bold transition-all duration-200 border ${
                              isQtySelected
                                ? "bg-gradient-to-b from-red-500 to-[#B91C1C] text-white border-red-600 shadow-[0_3px_10px_rgba(220,38,38,0.25)]"
                                : "bg-slate-50 hover:bg-white text-slate-700 border-slate-200/80"
                            }`}
                          >
                            {qty >= 1000 ? `${qty / 1000}k` : qty}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ── FIXED CONVERSION BAR (Zero Text Wrapping, Identical 48px Button Heights) ── */}
                <div className="mt-5 p-4 xl:px-5 xl:py-4 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                      Campaign Total ({selectedQty} {activeService.unitLabel}s)
                    </div>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-[28px] xl:text-[32px] font-extrabold text-slate-900 tracking-tight leading-none">
                        ${subtotal}
                      </span>
                      <span className="text-[11.5px] font-semibold text-slate-400">USD</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    {/* Fixed 48px Height + whitespace-nowrap so "Order on Telegram" NEVER breaks into 2 lines */}
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-12 px-5 inline-flex items-center justify-center gap-2 bg-gradient-to-b from-red-500 to-[#B91C1C] hover:from-red-600 hover:to-[#991b1b] text-white text-[13.5px] font-bold rounded-xl shadow-[0_4px_14px_rgba(220,38,38,0.28)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.38)] transition-all duration-300 whitespace-nowrap shrink-0"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" viewBox="0 0 24 24">
                        <path d="M21.9 2.6c-.4-.3-1-.4-1.6-.2L2.4 9.3c-.7.3-1.2.9-1.1 1.6.1.7.6 1.2 1.3 1.4l4.6 1.4 10.6-6.7c.2-.1.5 0 .6.2.1.2 0 .4-.1.6l-8.6 7.8v4.6c0 .6.4 1.1 1 1.3.5.1 1.1-.1 1.4-.5l2.6-3.1 4.8 3.5c.4.3.9.4 1.4.2.5-.2.8-.6.9-1.2L22.6 4c.1-.6-.2-1.1-.7-1.4z" />
                      </svg>
                      <span>Order on Telegram</span>
                    </a>

                    {/* Fixed 48px Height WhatsApp Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-12 px-4 inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl shadow-sm transition-all duration-300 whitespace-nowrap shrink-0"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/whatsapp/wordmark.svg"
                        alt="WhatsApp"
                        className="h-4.5 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            MOBILE & TABLET (<1024px): FULL-VIEW SMART CONFIGURATOR
           ══════════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden flex flex-col gap-3">
          {categoryServices.map((service) => {
            const isExpanded = activeService.id === service.id;
            return (
              <div
                key={service.id}
                className={`rounded-[22px] bg-white transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "shadow-[0_12px_30px_-10px_rgba(220,38,38,0.15)] ring-2 ring-red-500"
                    : "shadow-sm ring-1 ring-slate-200/80"
                }`}
              >
                {/* Accordion Header Bar */}
                <button
                  onClick={() => handleServiceSelect(service)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 outline-none"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                          isExpanded || service.popular
                            ? "bg-red-50 text-red-600 border border-red-100"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {service.badge}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 truncate">
                        {service.tag}
                      </span>
                    </div>
                    <div className="text-[17px] sm:text-[18px] font-sora font-bold text-slate-900 truncate">
                      {service.title}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-[20px] sm:text-[22px] font-extrabold text-slate-900 leading-none">
                      ${service.unitPrice}
                    </div>
                    <div className="text-[10.5px] font-medium text-slate-400 mt-0.5">
                      /{service.unitLabel}
                    </div>
                  </div>
                </button>

                {/* Accordion Expanded Configurator */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-slate-100"
                    >
                      <p className="text-[13px] sm:text-[14px] text-slate-600 font-medium leading-relaxed mb-3">
                        {service.desc}
                      </p>

                      {/* Compact Specs */}
                      <div className="flex flex-wrap gap-2 mb-3.5 text-[11px] font-semibold">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-700">
                          TLDs: {service.tlds}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-700">
                          ⏱ {service.turnaround}
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-4">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] font-medium text-slate-700">
                            <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5 stroke-[2.5]" />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      {/* Traffic Tiers for Mobile (Editorial Guest Post) */}
                      {service.tiers && (
                        <div className="mb-4">
                          <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                            Select Traffic Tier
                          </div>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                            {service.tiers.map((tier, idx) => (
                              <button
                                key={tier.label}
                                onClick={() => setSelectedTierIdx(idx)}
                                className={`py-1.5 px-2 rounded-lg text-[11px] border ${
                                  selectedTierIdx === idx
                                    ? "bg-red-50 border-red-500 text-red-700 font-bold"
                                    : "bg-slate-50 border-slate-200 text-slate-600"
                                }`}
                              >
                                {tier.label.split(" ")[0]} (${tier.price})
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Mobile Volume Selector */}
                      <div className="mb-4">
                        <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Select Quantity ({service.unitLabel}s)
                        </div>
                        <div className="grid grid-cols-6 gap-1.5">
                          {service.qtyOptions.map((qty) => (
                            <button
                              key={qty}
                              onClick={() => setSelectedQty(qty)}
                              className={`py-2 rounded-lg text-[12px] font-bold border ${
                                selectedQty === qty
                                  ? "bg-red-600 text-white border-red-600 shadow-sm"
                                  : "bg-slate-50 text-slate-700 border-slate-200"
                              }`}
                            >
                              {qty >= 1000 ? `${qty / 1000}k` : qty}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Total + Equal Height Buttons */}
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-bold text-slate-400 uppercase whitespace-nowrap">
                            Campaign Total ({selectedQty} {service.unitLabel}s)
                          </span>
                          <span className="text-[22px] sm:text-[24px] font-extrabold text-slate-900 leading-none">
                            ${subtotal} <span className="text-[11px] font-semibold text-slate-400">USD</span>
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <a
                            href={CONTACT.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-11 px-3 flex items-center justify-center gap-2 bg-gradient-to-b from-red-500 to-[#B91C1C] text-white text-[13px] font-bold rounded-xl shadow-[0_4px_12px_rgba(220,38,38,0.25)] whitespace-nowrap"
                          >
                            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                              <path d="M21.9 2.6c-.4-.3-1-.4-1.6-.2L2.4 9.3c-.7.3-1.2.9-1.1 1.6.1.7.6 1.2 1.3 1.4l4.6 1.4 10.6-6.7c.2-.1.5 0 .6.2.1.2 0 .4-.1.6l-8.6 7.8v4.6c0 .6.4 1.1 1 1.3.5.1 1.1-.1 1.4-.5l2.6-3.1 4.8 3.5c.4.3.9.4 1.4.2.5-.2.8-.6.9-1.2L22.6 4c.1-.6-.2-1.1-.7-1.4z" />
                            </svg>
                            <span>Telegram</span>
                          </a>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-11 px-3 flex items-center justify-center gap-1.5 bg-white border border-slate-200 rounded-xl shadow-sm whitespace-nowrap"
                          >
                            <img
                              src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/whatsapp/wordmark.svg"
                              alt="WhatsApp"
                              className="h-4.5 w-auto object-contain"
                            />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};