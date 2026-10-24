import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import { SERVICES } from "../../constants/services";
import { OrderButtons } from "../ui/OrderButtons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-32 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pbndark mb-6">
            Engineered for Dominance
          </h2>
          <p className="text-lg text-pbnmuted">
            Our meticulously crafted SEO packages. Zero footprints. Maximum link
            equity.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className={`rounded-[32px] p-8 shadow-premium hover:-translate-y-2 transition-all duration-500 border flex flex-col group relative overflow-hidden ${
                service.isDark
                  ? "bg-pbndark border-slate-800"
                  : service.isHighlight
                    ? "bg-pbnred-light border-red-100"
                    : "bg-white border-slate-100 hover:border-pbnred/30"
              }`}
            >
              {service.isDark && (
                <div className="absolute inset-0 noise-bg opacity-30"></div>
              )}

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tlds.map((tld) => (
                      <span
                        key={tld}
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          service.isDark
                            ? "bg-white/10 text-white backdrop-blur-md"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tld}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex items-center text-sm font-semibold gap-1 ${service.isDark ? "text-slate-400" : "text-slate-400"}`}
                  >
                    <Clock className="w-4 h-4" /> {service.tat}
                  </div>
                </div>

                <h3
                  className={`text-2xl font-extrabold mb-2 ${service.isDark ? "text-white" : "text-pbndark group-hover:text-pbnred transition-colors"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm font-medium mb-4 ${service.isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  {service.type}
                </p>

                <div
                  className={`font-sora font-extrabold text-4xl mb-8 ${service.isDark ? "text-white" : "text-pbnred"}`}
                >
                  ${service.price.toFixed(2)}
                  <span
                    className={`text-lg font-medium ${service.isDark ? "text-slate-500" : "text-slate-400"}`}
                  >
                    /link
                  </span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-pbnred shrink-0 mt-0.5" />
                      <span
                        className={`font-medium text-sm ${service.isDark ? "text-slate-300" : "text-slate-600"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <OrderButtons isDark={service.isDark} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
