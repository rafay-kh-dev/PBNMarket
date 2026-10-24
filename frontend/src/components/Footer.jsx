import { CONTACT } from "../data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // 🚀 Magic Function: Scroll to services and open exact tab
  const handleServiceClick = (e, categoryName) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      // 1. Scroll slightly above the section for perfect view
      const topOffset = servicesSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
      
      // 2. Dispatch event to change tab in Services.jsx
      window.dispatchEvent(new CustomEvent("switchCategory", { detail: categoryName }));
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200 relative overflow-hidden flex flex-col justify-between">
      
      {/* ── Main Content Container ── */}
      <div className="w-full max-w-[1300px] mx-auto px-5 lg:px-8 pt-12 sm:pt-16 lg:pt-20 flex-1 flex flex-col">
        
        {/* Top Grid (Experience Text & Link Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 mb-12 sm:mb-16 lg:mb-24">
          
          {/* Left: Heading (Fixed exactly like your screenshot) */}
          <div className="flex items-start">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-sora font-medium text-[#0f172a] tracking-tight leading-[1.15]">
              Experience SEO <br />
              <span className="text-red-600 font-bold">liftoff.</span>
            </h2>
          </div>

          {/* Right: Links Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:ml-auto lg:w-[80%]">
            
            {/* Product Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-slate-900 mb-1">Product</h4>
              <a href="#services" onClick={(e) => handleServiceClick(e, "Global Authority")} className="text-[14px] text-slate-500 hover:text-red-600 transition-colors w-fit">
                Homepage Post
              </a>
              <a href="#services" onClick={(e) => handleServiceClick(e, "Global Authority")} className="text-[14px] text-slate-500 hover:text-red-600 transition-colors w-fit">
                Sidebar Blogroll
              </a>
              <a href="#services" onClick={(e) => handleServiceClick(e, "Regional (.ID)")} className="text-[14px] text-slate-500 hover:text-red-600 transition-colors w-fit">
                .ID Extensions
              </a>
              <a href="#services" onClick={(e) => handleServiceClick(e, "Academic & Gov")} className="text-[14px] text-slate-500 hover:text-red-600 transition-colors w-fit">
                EDU & GOV Links
              </a>
              <a href="#services" onClick={(e) => handleServiceClick(e, "Enterprise Bundles")} className="text-[14px] text-slate-500 hover:text-red-600 transition-colors w-fit">
                SEO Bundles
              </a>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-slate-900 mb-1">Resources</h4>
              <a href="#services" onClick={(e) => handleServiceClick(e, "Global Authority")} className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors w-fit">Pricing</a>
              <a href="#process" onClick={(e) => handleServiceClick(e, "Global Authority")} className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors w-fit">Process</a>
              <a href="#faq" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors w-fit">FAQs</a>
              <a href="#services" onClick={(e) => handleServiceClick(e, "Regional (.ID)")} className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors w-fit">.ID Network</a>
              <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors w-fit">Contact Support</a>
            </div>
          </div>
        </div>

        {/* ── Middle: Fluid Giant Typography (FIXED: Now beautifully kerned in font-sora) ── */}
        <div className="w-full flex justify-center mt-auto pb-6 sm:pb-8">
          <h1 className="text-[13vw] sm:text-[140px] lg:text-[160px] xl:text-[180px] font-sora font-extrabold text-[#0f172a] tracking-[-0.02em] leading-[0.8] whitespace-nowrap select-none">
            PBNMarket
          </h1>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-slate-200 bg-white">
        <div className="w-full max-w-[1300px] mx-auto px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Left: EXACT Favicon & Copyright */}
          <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-[13px] font-medium text-slate-500">
            <img src="/favicon.svg" alt="PBNMarket Logo" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
            <span>&copy; {currentYear} All rights reserved.</span>
          </div>

          {/* Center: Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-[13px] font-medium text-slate-500">
            <a href="#process" className="hover:text-slate-900 transition-colors">About Us</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQs</a>
            <a href="#services" onClick={(e) => handleServiceClick(e, "Global Authority")} className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>

          {/* Right: Powered By */}
          <div className="text-[13px] font-medium text-slate-500">
            Powered by <a href="https://seohub.ltd" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline">SeoHub Ltd</a>
          </div>
        </div>
      </div>
    </footer>
  );
};