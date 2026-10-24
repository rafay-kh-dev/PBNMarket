import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, PenTool, ShieldCheck, TrendingUp } from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Strategy & Targeting",
    desc: "We analyse your domain, identify keyword gaps, and engineer a precise anchor text velocity plan tailored for Google's latest algorithms.",
    icon: <Target className="w-5 h-5 text-red-600" />,
  },
  {
    id: "02",
    title: "Content Engineering",
    desc: "Our native writers craft highly relevant, contextual, and engaging editorial articles designed to pass manual reviews and maximise link equity.",
    icon: <PenTool className="w-5 h-5 text-red-600" />,
  },
  {
    id: "03",
    title: "Stealth Deployment",
    desc: "Links are drip-fed onto aged DA/DR 50+ domains with unique Class-C IPs, zero footprints, and strictly capped outbound link ratios.",
    icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
  },
  {
    id: "04",
    title: "Rankings & Reporting",
    desc: "Watch your keywords climb the SERPs. You receive a fully white-labelled, unbranded agency report ready to be handed directly to your clients.",
    icon: <TrendingUp className="w-5 h-5 text-red-600" />,
  },
];

export const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 30 } },
  };

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="relative w-full bg-white px-4 sm:px-6 py-20 lg:py-32 overflow-hidden selection:bg-red-100 selection:text-red-900"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] sm:text-[48px] md:text-[56px] font-sora font-extrabold text-slate-800 tracking-[-0.03em] leading-[1.08]"
          >
            The deployment{" "}
            <span className="font-instrument italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-[#991b1b] pr-2">
              protocol.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-6 text-[15.5px] sm:text-[17px] text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            A completely hands-off, white-label link building infrastructure designed to scale your agency without the operational headache.
          </motion.p>
        </div>

        {/* ── Process Grid (1x4 on Desktop, Stacked on Mobile) ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {/* Subtle connecting line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-red-100 via-red-200 to-red-100 z-0" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group bg-[#FAFAFA] rounded-[28px] p-8 sm:p-10 border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-[0_12px_40px_-12px_rgba(220,38,38,0.12)] transition-all duration-300 z-10 flex flex-col h-full overflow-hidden"
            >
              {/* Huge Faint Background Number (The Linear SaaS Touch) */}
              <div className="absolute -right-4 -bottom-8 text-[120px] font-sora font-extrabold text-slate-900/[0.03] group-hover:text-red-600/[0.04] transition-colors duration-500 pointer-events-none select-none tracking-tighter">
                {step.id}
              </div>

              {/* Icon Circle */}
              <div className="relative w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-red-100 group-hover:shadow-[0_8px_20px_rgba(220,38,38,0.15)]">
                {step.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[12px] font-bold text-red-500 uppercase tracking-widest">
                    Step {step.id}
                  </span>
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-sora font-extrabold text-slate-800 tracking-tight leading-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};