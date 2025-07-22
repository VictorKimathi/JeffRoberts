import React from 'react';
import { Button } from './Button';
import { ArrowDownIcon } from 'lucide-react';
export function Hero() {
  return <section id="home" className="relative pt-24 pb-32 md:pt-32 md:pb-48 flex items-center min-h-screen">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F1112] via-[#181C1F] to-[#0F1112]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-6">
            TECH WRITING
            <span className="block">REDEFINED</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Transforming complex technology into engaging, accessible stories
            that inform and inspire readers across platforms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto">

            <Button>VIEW PORTFOLIO</Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">

            <Button variant="secondary">CONTACT ME</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll down">
          <ArrowDownIcon size={32} className="text-[#FF6900]" />
        </a>
      </div>
    </section>;
}