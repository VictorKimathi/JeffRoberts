import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-[#0F1112] text-white min-h-screen w-full">
      <Navigation />
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>;
}