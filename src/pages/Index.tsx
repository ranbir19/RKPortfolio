import Navigation from '@/components/Navigation';
// BackgroundAnimation removed per request
import FloatingElements from '@/components/ui/FloatingElements';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Reveal from '@/components/Reveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingElements />
  <Navigation />
      <main>
        <Reveal y={0}>
          <Hero />
        </Reveal>
        <Reveal delayMs={100}>
          <About />
        </Reveal>
        <Reveal delayMs={150}>
          <Portfolio />
        </Reveal>
        <Reveal delayMs={200}>
          <Services />
        </Reveal>
        <Reveal delayMs={250}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
