import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AKARAM NEXUS transformed our brand identity into something we never imagined possible. Their attention to detail and creative vision is unmatched.",
    author: "Sarah Chen",
    position: "Founder, Lume Studios",
    company: "Tech Startup"
  },
  {
    quote: "Working with this collective elevated our entire visual strategy. Every frame, every design choice was intentional and powerful.",
    author: "Marcus Williams",
    position: "Creative Director",
    company: "Global Fashion Brand"
  },
  {
    quote: "They don't just deliver projects—they deliver experiences that resonate with our audience on a deeper level. True creative partners.",
    author: "Amara Okafor",
    position: "CEO",
    company: "Impact Ventures"
  }
];

export function Testimonials() {
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
      ref={sectionRef}
      className="relative py-32 bg-black"
    >
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A962] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
              Client Voices
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <h2 
            className="text-5xl md:text-7xl text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Trusted by Visionaries
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative p-10 bg-gradient-to-br from-[#0A0A0A] to-[#141414] border border-[#C9A962]/10 hover:border-[#C9A962]/30 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-[#C9A962]/30" />
              </div>

              {/* Quote */}
              <blockquote 
                className="text-lg text-[#F5F5F5]/90 leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="space-y-1">
                <p 
                  className="text-[#F5F5F5]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {testimonial.author}
                </p>
                <p 
                  className="text-sm text-[#C9A962]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {testimonial.position}
                </p>
                <p 
                  className="text-xs text-[#F5F5F5]/50 tracking-wider"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {testimonial.company}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A962]/5 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
