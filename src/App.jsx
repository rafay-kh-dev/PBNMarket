import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Results from './components/sections/Results'
import FAQ from './components/sections/FAQ'

export default function App() {
  return (
    <div className="p-2 md:p-3" style={{ background: '#F4F5F7', minHeight: '100vh' }}>
      <div
        className="relative rounded-3xl bg-white overflow-hidden"
        style={{
          border: '1px solid rgba(148,163,184,0.3)',
          minHeight: 'calc(100vh - 16px)',
        }}
      >
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Results />
        <FAQ />

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-8 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} PBNMarket. All rights reserved.
            <span className="mx-2">·</span>
            Premium Private Blog Network Marketplace.
          </p>
        </footer>
      </div>
    </div>
  )
}

