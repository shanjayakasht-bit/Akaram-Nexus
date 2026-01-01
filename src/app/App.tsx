import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { ServicesGrid } from './components/ServicesGrid';
import { FeaturedWork } from './components/FeaturedWork';
import { CreativeProcess } from './components/CreativeProcess';
import { TeamPhilosophy } from './components/TeamPhilosophy';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <BrandStory />
        <ServicesGrid />
        <FeaturedWork />
        <CreativeProcess />
        <TeamPhilosophy />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
