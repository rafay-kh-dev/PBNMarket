import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Globe, Clock, Layers } from "lucide-react";
import { CONTACT } from "../data";

const categories = [
  {
    id: "Global Authority",
    label: "Global Authority",
    mobileLabel: "Global PBNs",
    count: 4,
  },
  {
    id: "Regional (.ID)",
    label: "Indonesian (.ID)",
    mobileLabel: "Indonesian (.ID)",
    count: 3,
  },
  {
    id: "Academic & Gov",
    label: "Academic & GOV",
    mobileLabel: "EDU & GOV",
    count: 3,
  },
  {
    id: "Enterprise Bundles",
    label: "All-In-One Bundles",
    mobileLabel: "SEO Bundles",
    count: 3,
  },
];

const servicesData = [
  {
    id: 1,
    category: "Global Authority",
    badge: "Flagship Outreach",
    title: "Editorial Guest Posting",
    tag: "DA/DR 30+ to 50+ • Real Organic Traffic",
    unitPrice: 15,
    unitLabel: "post",
    defaultQty: 5,
    qtyOptions: [1, 5, 10, 25, 50],
    tiers: [
      { label: "1K+ Traffic", short: "1K+", price: 15 },
      { label: "5K+ Traffic", short: "5K+", price: 30 },
      { label: "10K+ Traffic", short: "10K+", price: 60 },
      { label: "25K+ Traffic", short: "25K+", price: 120 },
    ],
    desc: "Real authority placements with verified organic traffic. Customised outreach across General, SaaS, and iGaming niches with zero footprint risk.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "5–7 Days",
    features: [
      "Verified monthly organic traffic tiers (1K+ to 25K+)",
      "DA/DR 30+ to 50+ free authority selection",
      "Bespoke human-written contextual editorial articles",
    ],
    popular: false,
    isFlagship: true,
    orders: "1,500+",
  },
  {
    id: 2,
    category: "Global Authority",
    badge: "Best Seller",
    title: "Homepage PBN Post",
    tag: "Guaranteed DA/DR 50+",
    unitPrice: 1,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Publish niche-relevant, human-edited articles directly on the main homepage feed of aged, high-authority domains.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "5–7 Days",
    features: [
      "400–600 words unique contextual article",
      "Guaranteed Moz DA 50+ & Ahrefs DR 50+",
      "100% Dofollow contextual link on homepage",
    ],
    popular: true,
    orders: "2,400+",
  },
  {
    id: 3,
    category: "Global Authority",
    badge: "Max Link Juice",
    title: "Sidebar Blogroll",
    tag: "Sitewide DA/DR 50+",
    unitPrice: 2,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Pass massive sitewide link equity from every indexed page of our aged DA/DR 50+ domains directly to your money site.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "3–5 Days",
    features: [
      "Sitewide homepage & inner-page authority",
      "Strictly capped outbound links (OBL <15)",
      "Instant Googlebot discovery & indexing",
    ],
    popular: false,
  },
  {
    id: 4,
    category: "Global Authority",
    badge: "Permanent Spot",
    title: "Homepage Sticky Post",
    tag: "Locked Top Slot • DR 50+",
    unitPrice: 2,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Lock your contextual article permanently at the very top of our DA/DR 50+ homepages so it never rolls off.",
    tlds: ".COM • .NET • .ORG",
    turnaround: "5–7 Days",
    features: [
      "Permanently pinned in top homepage slot",
      "Maximum homepage crawl priority",
      "500+ word niche article with custom anchors",
    ],
    popular: false,
  },
  {
    id: 5,
    category: "Regional (.ID)",
    badge: "Most Ordered",
    title: ".ID Homepage Post",
    tag: "Indonesian DA/DR 50+",
    unitPrice: 2,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Dominate Google.co.id and Southeast Asian SERPs with contextual homepage articles on authoritative Indonesian domains.",
    tlds: ".ID • .CO.ID • .WEB.ID",
    turnaround: "5–7 Days",
    features: [
      "Native Bahasa Indonesia or English articles",
      "Aged .ID, .CO.ID, .WEB.ID domains",
      "Geo-targeted Indonesian hosting IPs",
    ],
    popular: true,
    orders: "1,800+",
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
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Push competitive Indonesian keywords into the Top 3 with sitewide blogroll placements across high-authority .ID domains.",
    tlds: ".ID • .CO.ID • .OR.ID",
    turnaround: "3–5 Days",
    features: [
      "Direct homepage & sitewide .ID equity",
      "Geo-targeted Indonesian Class-C IPs",
      "Strong regional trust signals",
    ],
    popular: false,
  },
  {
    id: 7,
    category: "Regional (.ID)",
    badge: "Permanent .ID",
    title: ".ID Sticky Post",
    tag: "Pinned Top • DA/DR 50+",
    unitPrice: 2.5,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Combine contextual relevance with permanent top-of-homepage positioning across aged DA/DR 50+ Indonesian domains.",
    tlds: ".ID • .CO.ID • .WEB.ID",
    turnaround: "5–7 Days",
    features: [
      "Locked top-of-homepage .ID placement",
      "Unique Bahasa Indonesia or English article",
      "Safe drip-feed publishing schedule",
    ],
    popular: false,
  },
  {
    id: 8,
    category: "Academic & Gov",
    badge: "Academic Trust",
    title: "EDU PBN Blogpost",
    tag: "Institutional DA/DR 50+",
    unitPrice: 3,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [25, 50, 100, 250, 500],
    desc: "Skyrocket your E-E-A-T signals, AI Overview citations, and Domain Rating with articles on aged educational domains.",
    tlds: ".EDU • .AC.ID • .SCH.ID",
    turnaround: "5–7 Days",
    features: [
      "Contextual article on aged .EDU domains",
      "Massive boost to Ahrefs DR & trust",
      "Natural anchor text & citation integration",
    ],
    popular: false,
  },
  {
    id: 9,
    category: "Academic & Gov",
    badge: "Top Pick",
    title: "EDU PBN Blogroll",
    tag: "University Sidebar • DR 50+",
    unitPrice: 5,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [25, 50, 100, 250, 500],
    desc: "University and academic sidebar placements delivering massive sitewide institutional authority to push competitive keywords.",
    tlds: ".EDU • .AC.ID • .SCH.ID",
    turnaround: "3–5 Days",
    features: [
      "Sitewide academic sidebar link equity",
      "High-trust institutional backlink profile",
      "Built for Finance, SaaS, iGaming, Crypto",
    ],
    popular: true,
    orders: "950+",
  },
  {
    id: 10,
    category: "Academic & Gov",
    badge: "Ultra Premium",
    title: "EDU & GOV Backlink",
    tag: "DA 50–85+ Official Trust",
    unitPrice: 20,
    unitLabel: "link",
    defaultQty: 25,
    qtyOptions: [10, 25, 50, 100, 250],
    desc: "Ultra-high-trust placements on official academic and government properties with competitor-proof stealth integration.",
    tlds: ".AC.ID • .SCH.ID • .GO.ID",
    turnaround: "5–7 Days",
    features: [
      "Authentic .AC.ID, .SCH.ID & .GO.ID extensions",
      "Competitor-proof stealth link integration",
      "Unmatched institutional trust weight",
    ],
    popular: false,
  },
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
    desc: "A diversified, done-for-you authority campaign combining Standard PBN Homepage Posts, Sitewide Blogrolls, and High-Trust EDU placements.",
    tlds: ".COM • .ID • .EDU Mix",
    turnaround: "5–7 Days",
    features: [
      "Balanced mix of Homepage, Sticky & EDU",
      "Natural anchor text diversification",
      "Drip-feed velocity tailored to your domain",
    ],
    popular: false,
  },
  {
    id: 12,
    category: "Enterprise Bundles",
    badge: "Recommended",
    title: "Rank on First Page",
    tag: "DR 50–80+ Powerhouse",
    unitPrice: 8,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Engineered for stubborn keywords stuck on Page 2 or Page 3. Combines our highest-metric Sticky Posts and Institutional links.",
    tlds: ".COM • .EDU • .AC.ID • .GO.ID",
    turnaround: "5–7 Days",
    features: [
      "Priority placement on our highest-DR domains",
      "Includes Pinned Sticky Posts + EDU/GOV links",
      "Competitor gap analysis & planning included",
    ],
    popular: true,
    orders: "1,200+",
  },
  {
    id: 13,
    category: "Enterprise Bundles",
    badge: "Agency Custom",
    title: "Custom SEO Solutions",
    tag: "Multi-Client Agency Split",
    unitPrice: 4,
    unitLabel: "link",
    defaultQty: 50,
    qtyOptions: [50, 100, 250, 500, 1000],
    desc: "Need customised drip-feed schedules, specific country TLDs, multi-client splitting, or bespoke anchor ratios? Configure allocation below.",
    tlds: "Custom TLD & Geo Selection",
    turnaround: "3–7 Days",
    features: [
      "Split link volume across unlimited clients",
      "Customised geo-targeting (.COM, .ID, EDU)",
      "Flexible drip-feed schedules (3 to 30 days)",
    ],
    popular: false,
  },
];

const TelegramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.9 2.6c-.4-.3-1-.4-1.6-.2L2.4 9.3c-.7.3-1.2.9-1.1 1.6.1.7.6 1.2 1.3 1.4l4.6 1.4 10.6-6.7c.2-.1.5 0 .6.2.1.2 0 .4-.1.6l-8.6 7.8v4.6c0 .6.4 1.1 1 1.3.5.1 1.1-.1 1.4-.5l2.6-3.1 4.8 3.5c.4.3.9.4 1.4.2.5-.2.8-.6.9-1.2L22.6 4c.1-.6-.2-1.1-.7-1.4z" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ServiceCard = ({ service, isHighlighted }) => {
  const [qty, setQty] = useState(service.defaultQty);
  const [tierIdx, setTierIdx] = useState(0);
  const [showCustom, setShowCustom] = useState(false);
  const [customQtyInput, setCustomQtyInput] = useState("");

  const activeUnitPrice = service.tiers
    ? service.tiers[tierIdx].price
    : service.unitPrice;
  const subtotal = (activeUnitPrice * qty).toLocaleString("en-US", {
    minimumFractionDigits: activeUnitPrice % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: 2,
  });

  // 🚀 WhatsApp & Telegram Pre-filled Message Logic
  const orderMessage = encodeURIComponent(
    `Hi PBNMarket Team! I'd like to order:\n\n• Package: ${service.title}\n` +
      (service.tiers ? `• Tier: ${service.tiers[tierIdx].label}\n` : ``) +
      `• Quantity: ${qty} ${service.unitLabel}s\n• Rate: $${activeUnitPrice}/${service.unitLabel}\n• Total: $${subtotal} USD\n\nPlease share the next steps.`,
  );

  const whatsappUrl = CONTACT.whatsapp.includes("?")
    ? `${CONTACT.whatsapp}&text=${orderMessage}`
    : `${CONTACT.whatsapp}?text=${orderMessage}`;

  const telegramUrl = CONTACT.telegram.includes("?")
    ? `${CONTACT.telegram}&text=${orderMessage}`
    : `${CONTACT.telegram}?text=${orderMessage}`;

  const handlePreset = (q) => {
    setQty(q);
    setShowCustom(false);
  };
  const handleCustomQty = (val) => {
    setCustomQtyInput(val);
    const num = parseInt(val, 10);
    if (num > 0) setQty(num);
  };
  const isFlagship = service.isFlagship;

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 30 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      id={`service-card-${service.id}`}
      className={`group relative bg-white rounded-3xl p-5 sm:p-7 transition-all duration-300 ${
        isFlagship
          ? "lg:col-span-3 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center shadow-[0_10px_35px_-12px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/90 hover:ring-red-200"
          : "flex flex-col justify-between"
      } ${
        isHighlighted
          ? "ring-4 ring-red-500 shadow-[0_0_50px_rgba(220,38,38,0.4)] scale-[1.02] z-20"
          : service.popular
            ? "shadow-[0_14px_40px_-12px_rgba(220,38,38,0.16)] ring-2 ring-red-500"
            : !isFlagship
              ? "shadow-[0_4px_20px_-8px_rgba(15,23,42,0.05)] ring-1 ring-slate-200/90 hover:shadow-[0_14px_34px_-10px_rgba(15,23,42,0.08)] hover:ring-slate-300"
              : ""
      }`}
    >
      {(service.popular || isFlagship || isHighlighted) && (
        <div className="absolute top-0 inset-x-8 h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
      )}

      <div className={isFlagship ? "lg:col-span-7 lg:pr-4" : ""}>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border ${service.popular || isFlagship || isHighlighted ? "bg-red-50 text-red-600 border-red-100" : "bg-slate-50 text-slate-500 border-slate-200/80"}`}
          >
            {(service.popular || isFlagship) && (
              <Sparkles className="w-3 h-3" />
            )}
            {service.badge}
          </span>
          {service.orders && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[11px] font-bold">
              ✓ {service.orders} ordered
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-[22px] sm:text-[24px] font-sora font-extrabold text-slate-800 tracking-tight leading-snug">
              {service.title}
            </h3>
            <span className="text-[11.5px] font-semibold text-red-600/90 block mt-0.5">
              {service.tag}
            </span>
          </div>
          <div className="text-right bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/70 shrink-0">
            <div className="flex items-baseline justify-end gap-0.5">
              <span className="text-[20px] sm:text-[24px] font-extrabold text-slate-800 tracking-tight leading-none">
                ${activeUnitPrice}
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                /{service.unitLabel}
              </span>
            </div>
          </div>
        </div>

        <p className="text-[13.5px] sm:text-[14px] text-slate-500 font-medium leading-relaxed mt-3 mb-4">
          {service.desc}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            <Globe className="w-3 h-3 text-red-500" /> {service.tlds}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            <Clock className="w-3 h-3 text-red-500" /> {service.turnaround}
          </span>
        </div>

        <ul
          className={`space-y-2.5 mb-6 ${isFlagship ? "lg:mb-0 lg:grid lg:grid-cols-3 lg:gap-3 lg:space-y-0 lg:pt-2" : ""}`}
        >
          {service.features.map((feat, i) => (
            <li
              key={i}
              className={`flex items-start gap-2.5 text-[13px] font-semibold text-slate-700 leading-snug ${isFlagship ? "lg:bg-slate-50/70 lg:p-3 lg:rounded-xl lg:border lg:border-slate-100" : ""}`}
            >
              <span className="w-4.5 h-4.5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-red-600 stroke-[3]" />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${isFlagship ? "lg:col-span-5" : "mt-auto"} bg-[#FAFAFA] rounded-3xl p-4 sm:p-5 border border-slate-200/80 flex flex-col gap-4 shadow-inner`}
      >
        {service.tiers && (
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Layers className="w-3.5 h-3.5 text-red-500" />
              1. Select Monthly Traffic Tier
            </div>
            <div className="grid grid-cols-4 gap-1 bg-white p-1 rounded-xl border border-slate-200/80 shadow-sm">
              {service.tiers.map((tier, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setTierIdx(idx)}
                  className={`py-2 rounded-lg text-center transition-all flex flex-col items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${tierIdx === idx ? "bg-red-600 text-white shadow-md scale-[1.02]" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  <span className="text-[11.5px] font-bold leading-none">
                    {tier.short}
                  </span>
                  <span
                    className={`text-[10px] font-bold mt-1 leading-none ${tierIdx === idx ? "text-red-100" : "text-slate-400"}`}
                  >
                    ${tier.price}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              {service.tiers ? "2. Select Quantity" : "Select Quantity"} (
              {service.unitLabel}s)
            </span>
            <span className="text-[11px] font-bold text-slate-500">
              {qty} × ${activeUnitPrice}
            </span>
          </div>

          <div className="grid grid-cols-6 gap-1.5">
            {service.qtyOptions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handlePreset(q)}
                className={`py-2 rounded-xl text-[12px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 border ${!showCustom && qty === q ? "bg-slate-900 border-slate-900 text-white shadow-md scale-[1.02]" : "bg-white border-slate-200/90 text-slate-600 hover:border-slate-300"}`}
              >
                {q >= 1000 ? `${q / 1000}k` : q}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setShowCustom(true);
                setCustomQtyInput("");
              }}
              className={`py-2 rounded-xl text-[11px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 border ${showCustom ? "bg-slate-900 border-slate-900 text-white shadow-md scale-[1.02]" : "bg-white border-slate-200/90 text-slate-500 hover:border-slate-300"}`}
            >
              Custom
            </button>
          </div>

          {showCustom && (
            <input
              type="number"
              min="1"
              value={customQtyInput}
              onChange={(e) => handleCustomQty(e.target.value)}
              placeholder={`Enter custom ${service.unitLabel} quantity...`}
              autoFocus
              className="mt-2.5 w-full px-4 py-2.5 rounded-xl border border-red-300 bg-white text-[13px] font-bold text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-200 shadow-sm"
            />
          )}
        </div>

        <div className="pt-3 border-t border-slate-200/70 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">
              Total ({qty})
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[32px] sm:text-[36px] font-extrabold text-slate-800 tracking-tight leading-none">
                ${subtotal}
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase">
                USD
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* 🚀 Telegram CTA with pre-filled message URL */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn h-[48px] flex items-center justify-center gap-1.5 bg-gradient-to-b from-red-500 to-[#B91C1C] hover:from-red-600 hover:to-[#991b1b] text-white text-[13.5px] font-bold rounded-xl shadow-[0_4px_12px_rgba(220,38,38,0.25)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              <TelegramIcon className="w-4 h-4 shrink-0 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span>Telegram</span>
            </a>

            {/* WhatsApp CTA with pre-filled message URL */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn h-[48px] flex items-center justify-center gap-1.5 bg-white hover:bg-emerald-50/40 border border-slate-200/90 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 text-[13.5px] font-bold rounded-xl shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="w-4.5 h-4.5 text-[#25D366] shrink-0 group-hover/btn:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const sectionRef = useRef(null);
  const gridTopRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    const handleNavigate = (e) => {
      const payload = e.detail;
      const targetCategory =
        typeof payload === "string" ? payload : payload?.category;
      const targetServiceId =
        typeof payload === "object" ? payload?.serviceId : null;

      if (targetCategory) {
        setActiveTab(targetCategory);
      }

      setTimeout(() => {
        if (targetServiceId) {
          const cardEl = document.getElementById(
            `service-card-${targetServiceId}`,
          );
          if (cardEl) {
            const headerOffset = window.innerWidth < 640 ? 140 : 150;
            const top =
              cardEl.getBoundingClientRect().top +
              window.scrollY -
              headerOffset;
            window.scrollTo({ top, behavior: "smooth" });

            setHighlightedId(targetServiceId);
            setTimeout(() => setHighlightedId(null), 2500);
          }
        } else {
          const sectionEl = document.getElementById("services");
          if (sectionEl) {
            const headerOffset = window.innerWidth < 640 ? 80 : 100;
            const top =
              sectionEl.getBoundingClientRect().top +
              window.scrollY -
              headerOffset;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      }, 500);
    };

    window.addEventListener("navigateToService", handleNavigate);
    window.addEventListener("switchCategory", handleNavigate);
    return () => {
      window.removeEventListener("navigateToService", handleNavigate);
      window.removeEventListener("switchCategory", handleNavigate);
    };
  }, []);

  const handleTabChange = (catId) => {
    setActiveTab(catId);
    setTimeout(() => {
      const sectionEl = document.getElementById("services");
      if (sectionEl) {
        const headerOffset = window.innerWidth < 640 ? 80 : 100;
        const top =
          sectionEl.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 500);
  };

  const displayedServices = servicesData.filter(
    (s) => s.category === activeTab,
  );
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#FAFAFA] px-4 sm:px-6 pt-12 lg:pt-20 pb-20 lg:pb-32 selection:bg-red-100 selection:text-red-900"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.25]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] min-w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.035)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.125rem,4.5vw,3.5rem)] font-sora font-extrabold text-slate-800 tracking-[-0.03em] leading-[1.08]"
          >
            The ultimate catalogue.
            <br className="hidden sm:block" /> Built for{" "}
            <span className="font-instrument italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-[#991b1b] pr-2">
              scale.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-[15px] sm:text-[18px] text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Choose a network category below, select your link volume directly
            inside any package, and launch your SEO campaign instantly.
          </motion.p>
        </div>

        <div className="sticky top-[70px] sm:top-[84px] z-40 mb-8 sm:mb-12 flex justify-center">
          <div className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex gap-1.5 p-1.5 bg-white/85 backdrop-blur-2xl rounded-2xl sm:rounded-[20px] border border-slate-200/80 shadow-[0_8px_30px_-6px_rgba(15,23,42,0.08)]">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabChange(cat.id)}
                  className={`relative flex items-center justify-center gap-2 px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-[14px] text-[13px] sm:text-[14.5px] font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${isActive ? "text-white" : "text-slate-600 hover:text-slate-800 hover:bg-slate-50/80"}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-gradient-to-b from-red-500 to-[#B91C1C] rounded-xl sm:rounded-[14px] shadow-[0_4px_12px_rgba(220,38,38,0.28)]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 sm:hidden truncate">
                    {cat.mobileLabel}
                  </span>
                  <span className="relative z-10 hidden sm:inline">
                    {cat.label}
                  </span>
                  <span
                    className={`relative z-10 text-[11px] px-1.5 py-0.5 rounded-md font-extrabold leading-none ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div ref={gridTopRef} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
          >
            {displayedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isHighlighted={highlightedId === service.id}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
