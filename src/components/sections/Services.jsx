import { motion } from 'framer-motion'
import { SERVICES } from '../../constants/services'

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-8">
      {/* Soft background accent */}
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
          <p className="text-xs font-semibold tracking-widest text-[#DC2626] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Services built for{' '}
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Instrument Serif', serif", color: '#DC2626' }}
            >
              real results
            </span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            Every service is engineered to build sustainable authority — not just
            temporary ranking spikes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group glass-card rounded-2xl p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${svc.color}15` }}
                >
                  <Icon size={20} style={{ color: svc.color }} strokeWidth={2} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full mb-3"
                  style={{ background: `${svc.color}12`, color: svc.color }}
                >
                  {svc.tag}
                </span>

                <h3 className="text-base font-bold text-[#0F172A] mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{svc.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

