import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1112] border-b border-[#22272B]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-wider">
              JEFF ROBERTS<span className="text-[#FF6900]">.</span>
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium tracking-wide hover:text-[#FF6900] transition-colors">
              HOME
            </a>
            <a href="#projects" className="font-medium tracking-wide hover:text-[#FF6900] transition-colors">
              PORTFOLIO
            </a>
            <a href="#about" className="font-medium tracking-wide hover:text-[#FF6900] transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="font-medium tracking-wide hover:text-[#FF6900] transition-colors">
              CONTACT
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="font-medium tracking-wide hover:text-[#FF6900] transition-colors" onClick={toggleMenu}>
                HOME
              </a>
              <a href="#projects" className="font-medium tracking-wide hover:text-[#FF6900] transition-colors" onClick={toggleMenu}>
                PORTFOLIO
              </a>
              <a href="#about" className="font-medium tracking-wide hover:text-[#FF6900] transition-colors" onClick={toggleMenu}>
                ABOUT
              </a>
              <a href="#contact" className="font-medium tracking-wide hover:text-[#FF6900] transition-colors" onClick={toggleMenu}>
                CONTACT
              </a>
            </div>
          </div>}
      </div>
    </nav>;
}