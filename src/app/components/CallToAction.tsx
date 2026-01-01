import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative py-40 bg-gradient-to-b from-black to-[#0A0A0A] overflow-hidden"
    >
      {/* Gradient orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#C9A962]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1000px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* Overline */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A962] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
              Let's Collaborate
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>

          {/* Headline */}
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl text-[#F5F5F5] leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Build with<br />
            <span className="text-[#C9A962]">Akaram Nexus</span>
          </h2>

          {/* Description */}
          <p 
            className="text-xl text-[#F5F5F5]/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Ready to elevate your brand with intentional, cinematic creativity? 
            Let's discuss how we can bring your vision to life.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button
              className="group px-10 py-5 bg-[#C9A962] text-black hover:bg-[#D4B975] transition-all duration-300 inline-flex items-center gap-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <Mail className="w-5 h-5" />
              <span className="tracking-wider">Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="group px-10 py-5 bg-transparent border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962]/10 transition-all duration-300 inline-flex items-center gap-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span className="tracking-wider">View Our Process</span>
            </button>
          </div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-12 space-y-4"
          >
            <p 
              className="text-sm text-[#F5F5F5]/50 tracking-wider"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              OR REACH US DIRECTLY
            </p>
            <a 
              href="mailto:hello@akaramnexus.com"
              className="text-lg text-[#C9A962] hover:text-[#D4B975] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              hello@akaramnexus.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
