import { CONTACT } from "../data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleServiceClick = (e, categoryName, serviceId = null) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("navigateToService", {
        detail: { category: categoryName, serviceId },
      }),
    );
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200 relative overflow-hidden flex flex-col justify-between">
      <div className="w-full max-w-[1300px] mx-auto px-5 lg:px-8 pt-12 sm:pt-16 lg:pt-20 flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 mb-12 sm:mb-16 lg:mb-24">
          <div className="flex items-start">
            {/* Header matches correct heading scales now */}
            <h2 className="text-[clamp(2.125rem,4vw,3rem)] font-sora font-medium text-slate-900 tracking-tight leading-[1.15]">
              Experience SEO <br />
              <span className="text-red-600 font-bold">liftoff.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:ml-auto lg:w-[80%]">
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-slate-900 mb-1">
                Product
              </h4>
              <a
                href="#services"
                onClick={(e) => handleServiceClick(e, "Global Authority", 2)}
                className="text-[14px] text-slate-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md transition-colors w-fit"
              >
                Homepage Post
              </a>
              <a
                href="#services"
                onClick={(e) => handleServiceClick(e, "Global Authority", 3)}
                className="text-[14px] text-slate-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md transition-colors w-fit"
              >
                Sidebar Blogroll
              </a>
              <a
                href="#services"
                onClick={(e) => handleServiceClick(e, "Regional (.ID)", 5)}
                className="text-[14px] text-slate-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md transition-colors w-fit"
              >
                .ID Extensions
              </a>
              <a
                href="#services"
                onClick={(e) => handleServiceClick(e, "Academic & Gov", 10)}
                className="text-[14px] text-slate-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md transition-colors w-fit"
              >
                EDU & GOV Links
              </a>
              <a
                href="#services"
                onClick={(e) => handleServiceClick(e, "Enterprise Bundles", 12)}
                className="text-[14px] text-slate-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md transition-colors w-fit"
              >
                SEO Bundles
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-slate-900 mb-1">
                Resources
              </h4>

              <a
                href="#"
                className="text-[14px] text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-md transition-colors w-fit"
              >
                Case Studies
              </a>
              <a
                href="#"
                className="text-[14px] text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-md transition-colors w-fit"
              >
                Blog
              </a>
              <a
                href="#services"
                onClick={(e) => handleServiceClick(e, "Global Authority")}
                className="text-[14px] text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-md transition-colors w-fit"
              >
                Pricing
              </a>
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-md transition-colors w-fit"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>

        {/* 🚀 FIXED: Changed h1 to p (SEO Semantic fix) + Fluid Clamp Sizing */}
        <div className="w-full flex justify-center mt-auto pb-6 sm:pb-8">
          <p
            aria-hidden="true"
            className="text-[clamp(3.5rem,13vw,180px)] font-sora font-extrabold text-slate-900 tracking-[-0.02em] leading-[0.8] whitespace-nowrap select-none"
          >
            PBNMarket
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="w-full max-w-[1300px] mx-auto px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-[13px] font-medium text-slate-500">
            <img
              src="/favicon.svg"
              alt="PBNMarket"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
            <span>&copy; {currentYear} All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-[13px] font-medium text-slate-500">
            <a
              href="#about"
              className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-md"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-md"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-md"
            >
              Terms of Service
            </a>
          </div>
          <div className="text-[13px] font-medium text-slate-500">
            Powered by{" "}
            <a
              href="https://seohub.ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md"
            >
              SeoHub Ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
