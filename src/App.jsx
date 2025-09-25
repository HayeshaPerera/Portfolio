import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollEffect from './hooks/useScrollEffect';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

function App() {
  const { activeSection, isScrolled } = useScrollEffect();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation activeSection={activeSection} isScrolled={isScrolled} />
      <Hero />
      <Story />
      <Skills />
      <Projects />
      <Certifications />
      <Journey />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;