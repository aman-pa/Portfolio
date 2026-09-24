import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Typewriter } from './Typewriter';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const { name, github, linkedin, email, avatarUrl } = portfolioData.personalInfo;

  const typewriterRoles = [
    "Full Stack Developer",
    "Data Analyst",
    "AI/ML Engineer",
    "MERN Stack Specialist",
    "C++ Algorithmic Programmer",
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Greeting, Name, Official LPU Badge & Typewriter */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            <ScrollReveal delayMs={50}>
              {/* Greeting Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md hover:border-blue-500/50 transition-colors">
                <span className="text-xs font-semibold text-slate-300 tracking-wide">
                  Hi, I'm
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              {/* Main Name Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Aman <span className="gradient-text drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">Pandey</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={150}>
              {/* Typewriter Animated Role Subtitle */}
              <div className="text-lg sm:text-2xl font-extrabold min-h-[36px] flex items-center gap-2 text-slate-200">
                <span className="text-slate-300 font-medium">I am a</span>
                <Typewriter words={typewriterRoles} typingSpeed={80} deletingSpeed={40} pauseDuration={1800} />
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              {/* Official LPU Logo Badge & Link */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-300">
                <a
                  href="https://www.lpu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 px-3.5 py-1.5 rounded-full transition-all group shadow-md"
                  title="Visit Lovely Professional University Official Website"
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden flex-shrink-0 shadow-sm">
                    <img src="/lpu_logo.png" alt="LPU Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-slate-200 group-hover:text-amber-400 font-bold transition-colors">
                    Lovely Professional University
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400 transition-colors opacity-70" />
                </a>

                <span className="text-slate-500 font-bold">—</span>

                <span className="text-emerald-400 font-extrabold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full shadow-sm">
                  CGPA: 8.88
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={250}>
              {/* Short Bio */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal max-w-xl">
                Computer Science & Engineering undergraduate skilled in MERN stack, Next.js, C++, and database engineering. Solved 300+ DSA problems on LeetCode with HackerRank 5-Star C++ Gold Badge.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={300}>
              {/* Action Buttons: Direct File Download CV */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* DIRECT PDF FILE DOWNLOAD */}
                <a
                  href="/Aman_Pandey_Resume.pdf"
                  download="Aman_Pandey_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-100 bg-slate-900 border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download CV</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={350}>
              {/* Social Icons Bar */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full max-w-md">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white hover:scale-110 transition-all shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white hover:scale-110 transition-all shadow-md"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Hero Portrait */}
          <div className="lg:col-span-6 flex justify-center items-center relative group">
            <ScrollReveal delayMs={200}>
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                
                {/* Blue Backdrop Circle */}
                <div className="absolute w-[82%] h-[82%] rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 opacity-90 shadow-2xl shadow-blue-600/40 group-hover:scale-105 transition-transform duration-500"></div>

                {/* Portrait Image */}
                <div className="relative z-10 w-[92%] h-[98%] flex items-end justify-center">
                  <img
                    src={avatarUrl}
                    alt={name}
                    className="w-full h-full object-cover object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Handwritten signature script tag overlay */}
                <div className="absolute bottom-4 right-2 z-20 pointer-events-none">
                  <div className="font-serif italic text-xl sm:text-2xl text-slate-200 tracking-wider font-light drop-shadow-md select-none transform rotate-[-6deg] group-hover:rotate-0 transition-transform duration-300">
                    Build<br />
                    <span className="pl-3">Learn</span><br />
                    <span className="pl-6">Grow</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
