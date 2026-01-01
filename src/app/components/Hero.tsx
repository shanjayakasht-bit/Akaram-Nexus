import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-[#141414]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#C9A962 1px, transparent 1px), linear-gradient(90deg, #C9A962 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center space-y-8"
        >
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <p className="text-xs tracking-[0.3em] text-[#C9A962] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
              Creative Collective
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Your Unfair
            <br />
            <span className="text-[#C9A962]">Advantage.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-[#F5F5F5]/60 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            We transform brands through cinematic storytelling, 
            precision design, and uncompromising creative excellence.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-8"
          >
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-12 py-5 bg-[#C9A962] text-black tracking-wider hover:bg-[#D4B975] transition-all duration-300 inline-flex items-center gap-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Explore Our Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#C9A962] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
