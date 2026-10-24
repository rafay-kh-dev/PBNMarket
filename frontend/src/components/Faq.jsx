import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { CONTACT } from "../data"; // Aapka contact data

const faqs = [
  {
    question: "Are your PBNs safe from Google footprints?",
    answer: "Absolutely. We engineer our network with strict zero-footprint protocols. Every domain is hosted on unique premium Class-A, B, and C IPs across different premium providers (AWS, DigitalOcean, Google Cloud). We use distinct CMS installations, premium themes, and block all third-party crawlers (like Ahrefs/Majestic) to keep your links completely hidden from competitors.",
  },
  {
    question: "Do you provide white-labelled reporting for agencies?",
    answer: "Yes, 100% white-labelled. We understand you are reselling these placements to your own clients. Our reports come in clean, unbranded spreadsheets that you can instantly copy, paste, or forward to your clients without any mention of PBNMarket.",
  },
  {
    question: "What is your link replacement policy?",
    answer: "We offer an iron-clad 1-year placement guarantee. In the rare event that a domain drops its metrics or a link is removed, our system alerts us automatically, and we will replace your placement with a domain of equal or higher authority completely free of charge.",
  },
  {
    question: "Can I split my order across multiple client domains?",
    answer: "Yes, you can. For our bulk packages (like the 50+ link tiers), you can split your allocation across as many URLs and anchor texts as you need. Just send us your spreadsheet via Telegram or WhatsApp after ordering, and our team will handle the custom distribution.",
  },
  {
    question: "How long does it take for the links to index?",
    answer: "Our domains are highly authoritative and crawled frequently by Googlebot. Most placements naturally index within 3 to 7 days of publishing. We do not use spammy third-party indexers; we rely purely on the natural crawl rate of our powerful domains.",
  },
  {
    question: "Do you accept foreign language or casino/iGaming niches?",
    answer: "Yes, we do. Our Indonesian (.ID) network is perfectly optimised for Bahasa Indonesia. For general .COM/.ORG placements, we accept Casino, iGaming, and Crypto niches under our specific flagship tiers. Please confirm your niche with our team on Telegram before ordering.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200/80 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left outline-none group"
      >
        <span className={`text-[16px] sm:text-[18px] font-sora font-bold transition-colors duration-300 ${
          isOpen ? "text-red-600" : "text-slate-800 group-hover:text-red-600"
        }`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen ? "bg-red-50 text-red-500" : "bg-slate-50 text-slate-400 group-hover:bg-red-50 group-hover:text-red-400"
        }`}>
          <ChevronDown className={`w-4.5 h-4.5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "rotate-180" : ""
          }`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14.5px] sm:text-[15.5px] text-slate-500 font-medium leading-relaxed pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Faq = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0); // Pehla question default open rakhenge

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="relative w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 lg:py-32 overflow-hidden selection:bg-red-100 selection:text-red-900"
    >
      {/* Background Soft Aurora */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.03)_0%,transparent_70%)] z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* ── Section Header ── */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-[11px] font-bold text-red-600 uppercase tracking-widest mb-6"
          >
            <MessageCircleQuestion className="w-3.5 h-3.5" />
            Common Queries
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[34px] sm:text-[44px] md:text-[52px] font-sora font-extrabold text-slate-800 tracking-[-0.03em] leading-[1.08]"
          >
            Got questions? <br className="hidden sm:block" />
            We have{" "}
            <span className="font-instrument italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-[#991b1b] pr-2">
              answers.
            </span>
          </motion.h2>
        </div>

        {/* ── FAQ Accordion Container ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-[32px] p-6 sm:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)] border border-slate-200/60"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-center flex flex-col items-center justify-center gap-3"
        >
          <p className="text-[14.5px] font-medium text-slate-500">
            Didn't find what you were looking for?
          </p>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-slate-800 hover:text-red-600 transition-colors"
          >
            Chat with our experts on Telegram
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};