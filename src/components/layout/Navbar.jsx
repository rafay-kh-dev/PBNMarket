import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import { CONTACT_LINKS } from '../../constants/contact'

const NAV_LINKS = [
  { label: 'Services',  href: '#services'  },
  { label: 'Why Us',   href: '#why-us'    },
  { label: 'Results',  href: '#results'   },
  { label: 'FAQ',      href: '#faq'       },
]

export default function Navbar() {
  const [active, setActive] = useState('Services')
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Outer shell — frosted gradient pill */}
      <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-gradient-to-b from-white/80 to-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)]">
        {/* Inner glass pill */}
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/65 backdrop-blur-xl border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 mr-3 pl-1">
            <span className="relative w-8 h-8 flex items-center justify-center rounded-full bg-[#DC2626] shadow-[0_2px_8px_rgba(220,38,38,0.4)]">
              {/* inner top shine */}
              <span className="absolute top-0.5 left-1 w-4 h-2 rounded-full bg-white/30 blur-[2px]" />
              <span className="font-bold text-white text-sm font-[Sora] z-10">P</span>
            </span>
            <span className="font-semibold text-[#0F172A] text-sm tracking-tight hidden sm:block">
              PBN<span className="text-[#DC2626]">Market</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setActive(label)}
                className="relative px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-[#0F172A] transition-colors duration-150"
              >
                {active === label && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[#0F172A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${active === label ? 'text-white' : ''}`}>
                  {label}
                </span>
              </a>
            ))}
          </nav>

          {/* Live orders badge */}
          <div className="hidden sm:flex items-center gap-1.5 ml-3 mr-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-live" />
            <span className="text-xs font-medium text-slate-600 whitespace-nowrap">23 orders today</span>
          </div>

          {/* CTA */}
          <motion.a
            href={CONTACT_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A] text-white text-sm font-semibold hover:bg-slate-800 transition-colors duration-200"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            <span>Get Started</span>
            <motion.span
              animate={{ rotate: hovered ? -45 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Send size={14} />
            </motion.span>
          </motion.a>

        </div>
      </div>
    </motion.div>
  )
}

