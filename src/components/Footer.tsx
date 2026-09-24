import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { name, github, linkedin, email, quote } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A11] border-t border-slate-800/80 pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Quote */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-electric to-brand-violet p-[2px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[6px] flex items-center justify-center font-bold text-xs text-white">
                  AP
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {name}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 italic font-serif">
              "{quote}"
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-blue hover:bg-slate-800 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-violet hover:bg-slate-800 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:from-blue-500 hover:to-indigo-500 transition-all ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>© {new Date().getFullYear()} Aman Pandey. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with React, Next.js tech & Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
};
