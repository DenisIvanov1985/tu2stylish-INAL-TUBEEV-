import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import WhatWeCreate from '@/components/WhatWeCreate';
import Worldwide from '@/components/Worldwide';
import FeaturedProject from '@/components/FeaturedProject';
import GlobalPresence from '@/components/GlobalPresence';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Manifesto />
      <WhatWeCreate />
      <FeaturedProject />
      <Worldwide />
      <GlobalPresence />
      <Footer />
    </main>
  );
}
