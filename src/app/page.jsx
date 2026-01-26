import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import WhatWeCreate from '@/components/WhatWeCreate';
import Worldwide from '@/components/Worldwide';
import AboutFounder from '@/components/AboutFounder';
import GlobalPresence from '@/components/GlobalPresence';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollToTop />
      <main>
        <Navigation />
        <Hero />
        <Manifesto />
        <WhatWeCreate />
        <AboutFounder />
                <Worldwide />
        <GlobalPresence />
        <Footer />
      </main>
    </>
  );
}
