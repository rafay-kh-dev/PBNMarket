import { motion } from 'framer-motion'
import { WHY_US } from '../../constants/services'
import { CheckCircle2 } from 'lucide-react'

const POINTS = [
  'Real domains with aged authority — no freshly registered garbage.',
  'Unique C-Class IPs, hosting environments, and CMS for every site.',
  'Topically relevant content written by human SEO specialists.',
  'Monthly health checks — if a link drops, we replace it free.',
  'Transparent reporting: live dashboard with every link\'s status.',
  'Trusted by 500+ SEO agencies across 40+ countries.',
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 px-4 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #fda4af 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold tracking-widest text-[#DC2626] uppercase mb-3">Why PBNMarket</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-6">
              Numbers that speak{' '}
              <span
                className="italic font-normal"
                style={{ fontFamily: "'Instrument Serif', serif", color: '#DC2626' }}
              >
                for themselves
              </span>
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {WHY_US.map((item, i) => (
                <motion.div
                  key={item.stat}
                  className="glass-card rounded-2xl p-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <div className="text-2xl font-bold text-[#DC2626] mb-1">{item.stat}</div>
                  <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: feature list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-4"
          >
            {POINTS.map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-[#DC2626]" strokeWidth={2} />
                <p className="text-sm text-slate-600 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

