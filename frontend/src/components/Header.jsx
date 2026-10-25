import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Globe,
  ShieldCheck,
  Layers,
  Menu,
  X,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { CONTACT } from "../data";

const navCatalogue = [
  {
    categoryId: "Global Authority",
    label: "Global Authority",
    shortLabel: "Global",
    badge: ".COM • .NET • .ORG",
    icon: <Globe className="w-4 h-4 text-red-600" />,
    items: [
      {
        id: 1,
        title: "Editorial Guest Posting",
        price: "$15/post",
        tag: "Flagship Outreach",
      },
      {
        id: 2,
        title: "Homepage PBN Post",
        price: "$1/link",
        tag: "Best Seller",
        popular: true,
      },
      {
        id: 3,
        title: "Sidebar Blogroll",
        price: "$2/link",
        tag: "Sitewide Juice",
      },
      {
        id: 4,
        title: "Homepage Sticky Post",
        price: "$2/link",
        tag: "Pinned Top Slot",
      },
    ],
  },
  {
    categoryId: "Regional (.ID)",
    label: "Indonesian (.ID)",
    shortLabel: ".ID Network",
    badge: "Google.co.id",
    icon: <Sparkles className="w-4 h-4 text-red-600" />,
    items: [
      {
        id: 5,
        title: ".ID Homepage Post",
        price: "$2/link",
        tag: "Most Ordered",
        popular: true,
      },
      {
        id: 6,
        title: ".ID Sidebar Blogroll",
        price: "$3/link",
        tag: "Local Authority",
      },
      {
        id: 7,
        title: ".ID Sticky Post",
        price: "$2.5/link",
        tag: "Pinned .ID",
      },
    ],
  },
  {
    categoryId: "Academic & Gov",
    label: "Academic & GOV",
    shortLabel: "EDU & GOV",
    badge: "High Trust",
    icon: <ShieldCheck className="w-4 h-4 text-red-600" />,
    items: [
      {
        id: 8,
        title: "EDU PBN Blogpost",
        price: "$3/link",
        tag: "Academic Trust",
      },
      {
        id: 9,
        title: "EDU PBN Blogroll",
        price: "$5/link",
        tag: "Top Pick",
        popular: true,
      },
      {
        id: 10,
        title: "EDU & GOV Backlink",
        price: "$20/link",
        tag: "DA 50–85+ Official",
      },
    ],
  },
  {
    categoryId: "Enterprise Bundles",
    label: "All-In-One Bundles",
    shortLabel: "Bundles",
    badge: "Done-For-You",
    icon: <Layers className="w-4 h-4 text-red-600" />,
    items: [
      {
        id: 11,
        title: "Complete SEO Package",
        price: "$5/link",
        tag: "Multi-Tier Mix",
      },
      {
        id: 12,
        title: "Rank on First Page",
        price: "$8/link",
        tag: "Page 1 Power",
        popular: true,
      },
      {
        id: 13,
        title: "Custom SEO Solutions",
        price: "$4/link",
        tag: "Multi-Client Split",
      },
    ],
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

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveCat, setMobileActiveCat] = useState(
    navCatalogue[0].categoryId,
  );
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMegaMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSelectService = (categoryId, serviceId = null) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    window.dispatchEvent(
      new CustomEvent("navigateToService", {
        detail: { category: categoryId, serviceId },
      }),
    );
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 50);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 160);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[70] px-3 sm:px-6 pt-2.5 sm:pt-4 pointer-events-none">
        <div
          ref={dropdownRef}
          /* 🚀 FIXED: Pure black shadows replaced with Slate `rgba(15,23,42)` */
          className={`pointer-events-auto max-w-[1280px] mx-auto rounded-2xl sm:rounded-[24px] transition-all duration-300 ${
            scrolled || megaMenuOpen || mobileMenuOpen
              ? "bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_14px_40px_-12px_rgba(15,23,42,0.08)]"
              : "bg-white/80 backdrop-blur-xl border border-slate-200/70 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.04)]"
          }`}
        >
          <div className="h-[62px] sm:h-[70px] px-3.5 sm:px-6 flex items-center justify-between gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMegaMenuOpen(false);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl shrink-0"
            >
              <div className="relative flex items-center justify-center">
                <img
                  src="/favicon.svg"
                  alt="PBNMarket Logo"
                  className="w-9 h-9 sm:w-10 sm:h-10 shadow-[0_4px_14px_rgba(220,38,38,0.28)] group-hover:scale-105 transition-transform duration-300 rounded-xl"
                />
              </div>
              <div className="flex flex-col items-start leading-none text-left ml-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[19px] sm:text-[22px] font-sora font-extrabold text-slate-800 tracking-tight">
                    PBN<span className="text-red-600">Market</span>
                  </span>
                </div>
                {/* 🚀 FIXED: Bumped tiny text to 11px for readability */}
                <span className="mt-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  Powered by <span className="text-red-600">SeoHub Ltd</span>
                </span>
              </div>
            </a>

            {/* 🚀 FIXED: Breakpoint changed from lg to xl to prevent iPad overlapping */}
            <nav className="hidden xl:flex items-center gap-1 p-1 bg-slate-100/80 rounded-2xl border border-slate-200/60">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                  aria-expanded={megaMenuOpen}
                  aria-controls="services-mega-menu"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                    megaMenuOpen
                      ? "bg-white text-red-600 shadow-xs border border-red-100/80"
                      : "text-slate-700 hover:text-slate-800 hover:bg-white/70"
                  }`}
                >
                  <span>Services & Pricing</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${megaMenuOpen ? "rotate-180 text-red-600" : "text-slate-400"}`}
                  />
                </button>
              </div>

              <button
                onClick={() => handleSelectService("Regional (.ID)")}
                className="px-3.5 py-2 rounded-xl text-[13px] font-bold text-slate-600 hover:text-red-600 hover:bg-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                .ID Network
              </button>
              <button
                onClick={() => handleSelectService("Academic & Gov")}
                className="px-3.5 py-2 rounded-xl text-[13px] font-bold text-slate-600 hover:text-red-600 hover:bg-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                EDU & GOV
              </button>
              <button
                onClick={() => handleSelectService("Enterprise Bundles")}
                className="px-3.5 py-2 rounded-xl text-[13px] font-bold text-slate-600 hover:text-red-600 hover:bg-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                SEO Bundles
              </button>
              <a
                href="#process"
                onClick={(e) => handleScrollToSection(e, "process")}
                className="px-3.5 py-2 rounded-xl text-[13px] font-semibold text-slate-600 hover:text-slate-800 hover:bg-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                Protocol
              </a>
              <a
                href="#faq"
                onClick={(e) => handleScrollToSection(e, "faq")}
                className="px-3.5 py-2 rounded-xl text-[13px] font-semibold text-slate-600 hover:text-slate-800 hover:bg-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                FAQs
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 h-10 px-3.5 rounded-xl bg-white hover:bg-emerald-50/40 border border-slate-200/90 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 text-[12.5px] font-bold shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-9 sm:h-10 px-3 sm:px-4 inline-flex items-center gap-1.5 bg-gradient-to-b from-red-500 to-[#B91C1C] hover:from-red-600 hover:to-[#991b1b] text-white text-[12px] sm:text-[13px] font-bold rounded-xl shadow-[0_4px_12px_rgba(220,38,38,0.25)] transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
              >
                <TelegramIcon className="w-3.5 h-3.5 shrink-0 group-hover:-translate-y-0.5 transition-transform" />
                <span>Telegram</span>
              </a>

              {/* 🚀 FIXED: Breakpoint changed from lg to xl */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`xl:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  mobileMenuOpen
                    ? "bg-red-50 border-red-200 text-red-600"
                    : "bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-white"
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Mega Menu (Also shifted to xl) */}
          <AnimatePresence>
            {megaMenuOpen && (
              <motion.div
                id="services-mega-menu"
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="hidden xl:block overflow-hidden border-t border-slate-100"
              >
                <div className="p-6 bg-gradient-to-b from-white/70 to-slate-50/90">
                  <div className="grid grid-cols-4 gap-4">
                    {navCatalogue.map((cat) => (
                      <div
                        key={cat.categoryId}
                        className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:border-red-200/80 transition-colors flex flex-col"
                      >
                        <button
                          type="button"
                          onClick={() => handleSelectService(cat.categoryId)}
                          className="group flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-8 h-8 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                              {cat.icon}
                            </span>
                            <div>
                              <div className="text-[13.5px] font-sora font-extrabold text-slate-800 group-hover:text-red-600 transition-colors">
                                {cat.label}
                              </div>
                              {/* 🚀 FIXED: Raised tiny text size */}
                              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                {cat.badge}
                              </div>
                            </div>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </button>
                        <div className="flex flex-col gap-1.5 flex-1">
                          {cat.items.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() =>
                                handleSelectService(cat.categoryId, item.id)
                              }
                              className="group/item w-full text-left px-2.5 py-2 rounded-xl hover:bg-red-50/70 transition-all flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                            >
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[12.5px] font-bold text-slate-700 group-hover/item:text-red-600 truncate transition-colors">
                                    {item.title}
                                  </span>
                                  {item.popular && (
                                    <span className="px-1.5 py-0.2 rounded-full bg-red-50 border border-red-100 text-[10px] font-extrabold text-red-600 uppercase shrink-0">
                                      Hot
                                    </span>
                                  )}
                                </div>
                                <span className="text-[11px] font-semibold text-slate-400 block">
                                  {item.tag}
                                </span>
                              </div>
                              <span className="text-[11px] font-extrabold text-slate-700 group-hover/item:text-red-600 bg-slate-50 group-hover/item:bg-white px-2 py-0.5 rounded-md border border-slate-200/70 shrink-0">
                                {item.price}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-5 text-slate-500 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                        Zero-Footprint Class-C IPs
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                        100% White-Label Reports
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                        1-Year Link Guarantee
                      </span>
                    </div>
                    <a
                      href="#services"
                      onClick={(e) => handleScrollToSection(e, "services")}
                      className="inline-flex items-center gap-1 font-bold text-red-600 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md"
                    >
                      <span>Explore Full Catalogue</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Drawer (Also shifted to xl) */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="xl:hidden overflow-hidden border-t border-slate-100"
              >
                <div className="p-4 sm:p-5 max-h-[82vh] overflow-y-auto">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                    1. Choose Network Category
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 mb-4 p-1 bg-slate-100/80 rounded-xl border border-slate-200/60">
                    {navCatalogue.map((cat) => (
                      <button
                        key={cat.categoryId}
                        type="button"
                        onClick={() => setMobileActiveCat(cat.categoryId)}
                        className={`py-2 px-2.5 rounded-lg text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${mobileActiveCat === cat.categoryId ? "bg-white text-red-600 shadow-xs border border-red-100" : "text-slate-600 hover:text-slate-800"}`}
                      >
                        {cat.icon}
                        <span className="truncate">{cat.shortLabel}</span>
                      </button>
                    ))}
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                    2. Tap a Package to Jump Directly
                  </div>
                  <div className="flex flex-col gap-2 mb-5">
                    {navCatalogue
                      .find((c) => c.categoryId === mobileActiveCat)
                      ?.items.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            handleSelectService(mobileActiveCat, item.id)
                          }
                          className="w-full text-left p-3 rounded-xl bg-slate-50/90 hover:bg-red-50/60 active:bg-red-50 border border-slate-200/80 hover:border-red-200 flex items-center justify-between gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[13.5px] font-sora font-bold text-slate-800 truncate">
                                {item.title}
                              </span>
                              {item.popular && (
                                <span className="px-2 py-0.5 rounded-full bg-red-50 border border-red-100 text-[10px] font-bold text-red-600 uppercase shrink-0">
                                  Popular
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] font-semibold text-slate-400">
                              {item.tag}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[12px] font-extrabold text-red-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-xs">
                              {item.price}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </button>
                      ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 mb-4">
                    <a
                      href="#process"
                      onClick={(e) => handleScrollToSection(e, "process")}
                      className="py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center text-[12.5px] font-bold text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      Deployment Protocol
                    </a>
                    <a
                      href="#faq"
                      onClick={(e) => handleScrollToSection(e, "faq")}
                      className="py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center text-[12.5px] font-bold text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      Common FAQs
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={CONTACT.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 flex items-center justify-center gap-2 bg-gradient-to-b from-red-500 to-[#B91C1C] text-white text-[13px] font-bold rounded-xl shadow-[0_4px_12px_rgba(220,38,38,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                      <TelegramIcon className="w-4 h-4" />
                      <span>Telegram</span>
                    </a>
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-xl shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {(megaMenuOpen || mobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              setMegaMenuOpen(false);
              setMobileMenuOpen(false);
            }}
            className="fixed inset-0 bg-slate-800/10 backdrop-blur-[2px] z-[60]"
          />
        )}
      </AnimatePresence>
    </>
  );
};
