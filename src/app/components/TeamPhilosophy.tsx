import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function TeamPhilosophy() {
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
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left: The philosophy statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#C9A962]" />
                <span className="text-xs tracking-[0.3em] text-[#C9A962] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                  The Collective
                </span>
              </div>
              <h2 
                className="text-5xl md:text-6xl text-[#F5F5F5] leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Masters of<br />
                Their Craft
              </h2>
            </div>

            <div className="space-y-6">
              <p 
                className="text-lg text-[#F5F5F5]/80 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                We're not a traditional agency. We're a collective of world-class 
                creatives, strategists, and technologists united by a singular mission: 
                to create work that transcends expectations.
              </p>
              <p 
                className="text-lg text-[#F5F5F5]/80 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Every project is approached with relentless attention to detail, 
                strategic precision, and a commitment to excellence that shows in 
                every frame, every pixel, every word.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-[#C9A962] mt-3" />
                <p className="text-[#F5F5F5]/70" style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="text-[#C9A962]">Multidisciplinary:</span> Photography, video, 
                  design, tech, and strategy under one roof
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-[#C9A962] mt-3" />
                <p className="text-[#F5F5F5]/70" style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="text-[#C9A962]">Global perspective:</span> Culturally fluent 
                  with modern sensibilities
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-[#C9A962] mt-3" />
                <p className="text-[#F5F5F5]/70" style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="text-[#C9A962]">Timeless approach:</span> Trends fade, 
                  excellence endures
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Stats/highlights */}
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#C9A962]/10">
                <div className="space-y-2">
                  <div 
                    className="text-5xl text-[#C9A962]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    100+
                  </div>
                  <p 
                    className="text-sm text-[#F5F5F5]/60 tracking-wide"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Brands Elevated
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#C9A962]/10">
                <div className="space-y-2">
                  <div 
                    className="text-5xl text-[#C9A962]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    8
                  </div>
                  <p 
                    className="text-sm text-[#F5F5F5]/60 tracking-wide"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Core Disciplines
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#C9A962]/10">
                <div className="space-y-2">
                  <div 
                    className="text-5xl text-[#C9A962]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    24/7
                  </div>
                  <p 
                    className="text-sm text-[#F5F5F5]/60 tracking-wide"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Creative Excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
