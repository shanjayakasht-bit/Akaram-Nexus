import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    icon: Search,
    description: 'We immerse ourselves in your brand, audience, and market to uncover strategic insights that inform every creative decision.'
  },
  {
    number: '02',
    title: 'Create',
    icon: Lightbulb,
    description: 'Our multidisciplinary team crafts compelling narratives through design, motion, and storytelling that resonates with precision.'
  },
  {
    number: '03',
    title: 'Execute',
    icon: Rocket,
    description: 'Flawless production and technical implementation ensure your vision comes to life with uncompromising quality.'
  },
  {
    number: '04',
    title: 'Elevate',
    icon: TrendingUp,
    description: 'Continuous refinement and strategic optimization amplify impact and drive measurable results for your brand.'
  }
];

export function CreativeProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="process"
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A962]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-[1400px] mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A962] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
              Our Methodology
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <h2 
            className="text-5xl md:text-7xl text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            From Vision to Reality
          </h2>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-[#C9A962]/20 via-[#C9A962]/50 to-[#C9A962]/20" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left side (alternates) */}
                <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'} space-y-6`}>
                  <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    <span 
                      className="text-7xl text-[#C9A962]/20"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 
                    className="text-4xl text-[#F5F5F5]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-[#F5F5F5]/70 leading-relaxed max-w-md"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#141414] border-2 border-[#C9A962] rounded-full">
                    <step.icon className="w-8 h-8 text-[#C9A962]" />
                  </div>
                </div>

                {/* Right side (alternates) */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                  <div className="lg:hidden w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#141414] border-2 border-[#C9A962] rounded-full mb-6">
                    <step.icon className="w-7 h-7 text-[#C9A962]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
