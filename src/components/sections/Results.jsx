import { motion } from 'framer-motion'
import { TrendingUp, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Alex R.',
    role: 'E-commerce SEO Lead',
    country: '🇺🇸',
    quote: 'We jumped from page 4 to page 1 for our main keyword in under 60 days. The DR quality is next level.',
    stars: 5,
    lift: '+6 positions',
  },
  {
    name: 'Marco T.',
    role: 'Agency Owner',
    country: '🇩🇪',
    quote: 'PBNMarket has become our go-to for any competitive niche. Zero footprint, zero penalties, all results.',
    stars: 5,
    lift: '+11 positions',
  },
  {
    name: 'Sarah K.',
    role: 'Affiliate Marketer',
    country: '🇬🇧',
    quote: 'I\'ve tried 6 PBN services. This is the only one that actually delivers consistent, lasting rankings.',
    stars: 5,
    lift: '+8 positions',
  },
]

const CASE_STUDIES = [
  { niche: 'Finance',        before: 'Page 5', after: 'Position 3', time: '74 days',  keyword: 'best credit cards' },
  { niche: 'Health & Wellness', before: 'Page 3', after: 'Position 1', time: '52 days', keyword: 'keto supplements' },
  { niche: 'SaaS / Tech',   before: 'Page 4', after: 'Position 5', time: '60 days',  keyword: 'project management software' },
]

export default function Results() {
  return (
    <section id="results" className="relative py-24 px-4 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest text-[#DC2626] uppercase mb-3">Real Results</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Clients who made it to{' '}
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Instrument Serif', serif", color: '#DC2626' }}
            >
              Page 1
            </span>
          </h2>
        </motion.div>

        {/* Case study cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.niche}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
            >
              <span className="text-[10px] font-bold tracking-widest text-[#DC2626] uppercase">{cs.niche}</span>
              <div className="mt-3 flex items-center gap-3">
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">Before</div>
                  <div className="text-sm font-semibold text-slate-500">{cs.before}</div>
                </div>
                <TrendingUp size={18} className="text-[#DC2626] flex-shrink-0" />
                <div className="text-center">
                  <div className="text-xs text-slate-400 mb-1">After</div>
                  <div className="text-sm font-bold text-[#0F172A]">{cs.after}</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-400">
                <span className="font-medium text-slate-600">"{cs.keyword}"</span> · {cs.time}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.45 }}
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={12} fill="#DC2626" stroke="none" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">{t.country} {t.name}</div>
                  <div className="text-[11px] text-slate-400">{t.role}</div>
                </div>
                <span className="text-xs font-bold text-[#DC2626] bg-red-50 px-2 py-1 rounded-full">
                  {t.lift}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

