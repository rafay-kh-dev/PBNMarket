import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Users } from "lucide-react";
import { CONTACT_LINKS } from "../../constants/contact";

export const Hero = () => {
  const [config, setConfig] = useState({
    niche: "general",
    da: "50",
    traffic: "5k",
    qty: 25,
  });
  const basePrice = config.niche === "igaming" ? 30 : 15;
  const multiplier =
    config.traffic === "50k"
      ? 16
      : config.traffic === "25k"
        ? 8
        : config.traffic === "10k"
          ? 4
          : config.traffic === "5k"
            ? 2
            : 1;
  const estimatedTotal = basePrice * multiplier * config.qty;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern z-[-2]"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-pbnred animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
                5000+ Agencies Trust Us
              </span>
            </div>

            <h1 className="text-[44px] md:text-[72px] lg:text-[84px] text-pbndark mb-6">
              PBNs That Actually Rank You on <br />
              <span className="font-instrument italic font-normal text-pbnred">
                Page 1
              </span>
            </h1>

            <p className="text-lg md:text-xl text-pbnmuted mb-10 max-w-lg leading-relaxed">
              Dominate search results with high-authority, painstakingly vetted
              private blog networks and premium guest posts. Customised for
              agencies that demand results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT_LINKS.telegram}
                className="flex-1 bg-pbnred text-white px-8 py-4 rounded-2xl font-semibold hover:bg-pbnred-dark transition-all shadow-float flex justify-center items-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" /> Telegram
              </a>
              <a
                href={CONTACT_LINKS.whatsapp}
                className="flex-1 bg-white border border-slate-200 text-pbndark px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all flex justify-center items-center gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href={CONTACT_LINKS.teams}
                className="flex-1 bg-white border border-[#0078D4]/30 text-[#0078D4] px-8 py-4 rounded-2xl font-semibold hover:bg-[#0078D4]/5 transition-all flex justify-center items-center gap-2 text-lg"
              >
                <Users className="w-5 h-5" /> Teams
              </a>
            </div>
          </motion.div>

          {/* Configurator Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pbnred/15 blur-[60px] rounded-full z-[-1]"></div>
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[32px] p-8 shadow-premium relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-sora font-extrabold text-xl">
                  Campaign Setup
                </h3>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  Live Pricing
                </span>
              </div>

              <div className="space-y-6">
                {/* Visual Toggles Example (DA) */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Target Authority ($0 Free Upgrade)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["30", "40", "50"].map((val) => (
                      <button
                        key={val}
                        onClick={() => setConfig({ ...config, da: val })}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${config.da === val ? "border-pbnred bg-pbnred-light text-pbnred border" : "border-slate-200 text-slate-600 border hover:bg-slate-50"}`}
                      >
                        DA/DR {val}+
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold text-slate-700">
                      Link Quantity
                    </label>
                    <span className="text-sm font-bold text-pbndark">
                      {config.qty} Links
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={config.qty}
                    onChange={(e) =>
                      setConfig({ ...config, qty: parseInt(e.target.value) })
                    }
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pbnred"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-end justify-between">
                <div>
                  <p className="text-sm text-pbnmuted font-medium mb-1">
                    Estimated Cost
                  </p>
                  <div className="font-sora font-extrabold text-3xl text-pbndark">
                    ${estimatedTotal}
                    <span className="text-lg text-slate-400 font-medium">
                      .00
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-medium max-w-[120px] text-right">
                  Customize full order via chat
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
