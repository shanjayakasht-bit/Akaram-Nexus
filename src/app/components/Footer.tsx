import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-[#C9A962]/10">
      <div className="max-w-[1600px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl tracking-wider text-[#F5F5F5]" style={{ fontFamily: 'var(--font-serif)' }}>
                AKARAM
              </span>
              <span className="text-sm tracking-[0.3em] text-[#C9A962]" style={{ fontFamily: 'var(--font-sans)' }}>
                NEXUS
              </span>
            </div>
            <p 
              className="text-[#F5F5F5]/60 leading-relaxed max-w-md"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              A high-end multidisciplinary creative collective dedicated to 
              transforming brands through cinematic storytelling and uncompromising 
              creative excellence.
            </p>
          </div>

          {/* Services column */}
          <div className="md:col-span-2 space-y-4">
            <h4 
              className="text-[#C9A962] tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              SERVICES
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Photography</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Videography</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Video Editing</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Design</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Branding</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2 space-y-4">
            <h4 
              className="text-[#C9A962] tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              COMPANY
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Process</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Work</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-[#F5F5F5]/70 hover:text-[#C9A962] transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Connect column */}
          <div className="md:col-span-3 space-y-4">
            <h4 
              className="text-[#C9A962] tracking-wider text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              CONNECT
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <p className="text-[#F5F5F5]/70 text-sm">hello@akaramnexus.com</p>
              <p className="text-[#F5F5F5]/70 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center border border-[#C9A962]/20 hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#C9A962]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center border border-[#C9A962]/20 hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#C9A962]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center border border-[#C9A962]/20 hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-[#C9A962]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center border border-[#C9A962]/20 hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-[#C9A962]" />
              </a>
            </div>
          </div>
        </div>

        {/* Manifesto / Bottom section */}
        <div className="border-t border-[#C9A962]/10 pt-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <p 
              className="text-lg text-[#F5F5F5]/50 italic leading-relaxed"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              "We believe in the power of intentional creativity—work that doesn't 
              just look good, but creates lasting impact and cultural resonance."
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
            <p 
              className="text-sm text-[#F5F5F5]/40"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              © {currentYear} AKARAM NEXUS. All rights reserved.
            </p>
            <div className="flex items-center gap-8" style={{ fontFamily: 'var(--font-sans)' }}>
              <a href="#" className="text-sm text-[#F5F5F5]/40 hover:text-[#C9A962] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#F5F5F5]/40 hover:text-[#C9A962] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
