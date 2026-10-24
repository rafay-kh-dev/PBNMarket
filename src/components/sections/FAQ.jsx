import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQS } from '../../constants/services'
import OrderButtons from '../ui/OrderButtons'

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-[#0F172A]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-slate-100"
        >
          <Plus size={14} className="text-slate-600" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100/80 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 px-4 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute right-1/4 bottom-0 w-80 h-80 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #fda4af 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest text-[#DC2626] uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Common{' '}
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Instrument Serif', serif", color: '#DC2626' }}
            >
              questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3 mb-14">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          className="glass-card rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-bold text-[#0F172A] mb-2">
            Ready to rank on{' '}
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Instrument Serif', serif", color: '#DC2626' }}
            >
              Page 1?
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            Reach out now and get a free site analysis + custom link plan.
          </p>
          <div className="flex justify-center">
            <OrderButtons />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

