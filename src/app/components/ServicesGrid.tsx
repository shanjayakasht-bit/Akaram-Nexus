import { motion } from 'motion/react';
import { Camera, Film, Code, Palette, Briefcase, Users, Video, Edit3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Cinematic imagery that captures brand essence with artistic precision and emotional depth.'
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Premium video production crafted with storytelling mastery and technical excellence.'
  },
  {
    icon: Edit3,
    title: 'Video Editing',
    description: 'Post-production artistry that transforms footage into compelling visual narratives.'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Sophisticated visual systems that elevate brand identity across all touchpoints.'
  },
  {
    icon: Film,
    title: 'Content Creation',
    description: 'Strategic content that resonates, engages, and drives meaningful connections.'
  },
  {
    icon: Code,
    title: 'Technical Solutions',
    description: 'Cutting-edge digital experiences built with innovation and precision engineering.'
  },
  {
    icon: Briefcase,
    title: 'Branding',
    description: 'Comprehensive brand development that positions you as a category leader.'
  },
  {
    icon: Users,
    title: 'Account Management',
    description: 'White-glove service ensuring seamless execution from concept to delivery.'
  }
];

export function ServicesGrid() {
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
      id="services"
      ref={sectionRef}
      className="relative py-32 bg-black"
    >
      <div className="max-w-[1600px] mx-auto px-8">
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
              What We Do
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <h2 
            className="text-5xl md:text-7xl text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Full-Spectrum Mastery
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-[#0A0A0A] to-[#141414] border border-[#C9A962]/10 hover:border-[#C9A962]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#C9A962]/10 group-hover:bg-[#C9A962]/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#C9A962]" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 
                    className="text-xl text-[#F5F5F5] group-hover:text-[#C9A962] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-sm text-[#F5F5F5]/60 leading-relaxed"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
