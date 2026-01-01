import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function BrandStory() {
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
      className="relative py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: The name explanation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#C9A962]" />
                <span className="text-xs tracking-[0.3em] text-[#C9A962] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                  Foundation × Connection
                </span>
              </div>
              <h2 
                className="text-5xl md:text-6xl text-[#F5F5F5]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Built on Purpose
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <h3 
                  className="text-2xl text-[#C9A962]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  AKARAM
                </h3>
                <p 
                  className="text-[#F5F5F5]/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Rooted in foundation. Our name speaks to the timeless principles 
                  that ground every decision—integrity, craft, and depth.
                </p>
              </div>

              <div className="space-y-3">
                <h3 
                  className="text-2xl text-[#C9A962]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  NEXUS
                </h3>
                <p 
                  className="text-[#F5F5F5]/70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Where disciplines converge. A creative intersection that connects 
                  brands, stories, and audiences in ways that resonate globally.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-12 bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#C9A962]/10 backdrop-blur-sm">
              <blockquote 
                className="text-2xl md:text-3xl leading-relaxed text-[#F5F5F5] italic"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                "We don't just create content. We architect experiences 
                that leave a lasting imprint on culture."
              </blockquote>
            </div>

            <div className="space-y-6">
              <p 
                className="text-[#F5F5F5]/80 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                AKARAM NEXUS is a multidisciplinary creative collective built for 
                the modern brand—those who refuse to blend in and demand excellence 
                at every touchpoint.
              </p>
              <p 
                className="text-[#F5F5F5]/80 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                From photography and video production to branding, design, and technical 
                innovation, we bring strategic precision and cinematic craft to every project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
