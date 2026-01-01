import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Nocturne',
    category: 'Photography × Branding',
    image: 'https://images.unsplash.com/photo-1750610546688-64ff8b75da69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwaG90b2dyYXBoeSUyMGRhcmt8ZW58MXx8fHwxNjc3MTgwMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A cinematic exploration of light and shadow'
  },
  {
    title: 'Elevation',
    category: 'Video Production × Design',
    image: 'https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzY3MTgwMDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Transforming vision into visual poetry'
  },
  {
    title: 'Resonance',
    category: 'Content × Strategy',
    image: 'https://images.unsplash.com/photo-1763256552751-db613582fb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGNyZWF0aXZlfGVufDF8fHx8MTc2NzE4MDA1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Stories that echo beyond the screen'
  },
  {
    title: 'Synthesis',
    category: 'Tech × Experience',
    image: 'https://images.unsplash.com/photo-1737731662588-729f42147158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwdGVjaCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjcxODAwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Where technology meets timeless design'
  },
  {
    title: 'Essence',
    category: 'Photography × Editorial',
    image: 'https://images.unsplash.com/photo-1635182473361-1f72e7b4be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBzdHVkaW98ZW58MXx8fHwxNjc3MTA3OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Capturing the soul of modern creativity'
  },
  {
    title: 'Momentum',
    category: 'Branding × Motion',
    image: 'https://images.unsplash.com/photo-1763256552751-db613582fb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc2NzE4MDA2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Building brands with unstoppable energy'
  }
];

export function FeaturedWork() {
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
      id="work"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black"
    >
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#C9A962]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A962] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
              Selected Projects
            </span>
          </div>
          <h2 
            className="text-5xl md:text-7xl text-[#F5F5F5]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Crafted with Intention
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative overflow-hidden bg-[#0A0A0A] cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Hover icon */}
                <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-[#C9A962] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p 
                  className="text-xs tracking-[0.2em] text-[#C9A962] uppercase"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.category}
                </p>
                <h3 
                  className="text-3xl text-[#F5F5F5]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-sm text-[#F5F5F5]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all work CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            className="group inline-flex items-center gap-3 text-[#C9A962] hover:text-[#D4B975] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span className="tracking-wider">View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
