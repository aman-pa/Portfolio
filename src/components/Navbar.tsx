import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { name } = portfolioData.personalInfo;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const targetId = link.href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 76;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070A11]/95 backdrop-blur-md border-b border-slate-800/90 shadow-xl py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo without blinking dot */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600 p-[2px] shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
            <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center font-extrabold text-base text-white">
              AP
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg text-white tracking-tight flex items-center group-hover:text-blue-400 transition-colors">
              <span className="bg-gradient-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                {name}
              </span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              B.Tech CSE @ LPU
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0F1524]/80 p-1.5 rounded-full border border-slate-800 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Direct File Download CV Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Aman_Pandey_Resume.pdf"
            download="Aman_Pandey_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-md shadow-blue-900/40 hover:shadow-blue-600/50 hover:scale-105 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="/Aman_Pandey_Resume.pdf"
            download="Aman_Pandey_Resume.pdf"
            className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-blue-600 flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-1.5 animate-in fade-in duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-400'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="/Aman_Pandey_Resume.pdf"
              download="Aman_Pandey_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
