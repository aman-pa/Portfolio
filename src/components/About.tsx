import React from 'react';
import { Compass, CheckCircle2, Code2, Database, Terminal, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const { name, college, bioFull } = portfolioData.personalInfo;

  return (
    <section id="about" className="py-24 bg-[#070A11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Profile Overview</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-8">
            <ScrollReveal delayMs={100} className="h-full">
              <div className="bg-[#0F1524]/90 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-4">
                    Computer Science & Engineering Student @ Lovely Professional University
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {bioFull}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    My academic training at <span className="text-slate-200 font-semibold">{college}</span> is backed by practical project implementation across full-stack web engineering, database architecture, and performance optimization.
                  </p>
                </div>

                {/* Key Stack Strengths List */}
                <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Full-Stack Web Engineering (React, Next.js, Node.js)",
                    "Relational & NoSQL Engineering (PostgreSQL, MongoDB)",
                    "300+ DSA Problems Solved on LeetCode",
                    "5-Star Gold Badge in C++ on HackerRank"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Strengths Block */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <ScrollReveal delayMs={150}>
              <div className="p-5 rounded-3xl bg-[#0F1524]/80 border border-slate-800 shadow-md flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100 mb-1">Frontend Engineering</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Building responsive, intuitive interfaces with React.js, Next.js, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={250}>
              <div className="p-5 rounded-3xl bg-[#0F1524]/80 border border-slate-800 shadow-md flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100 mb-1">Backend & Databases</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Architecting RESTful APIs with Node.js/Express and managing PostgreSQL & MongoDB.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={350}>
              <div className="p-5 rounded-3xl bg-[#0F1524]/80 border border-slate-800 shadow-md flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100 mb-1">Algorithmic Mastery</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Active competitive programmer with 300+ LeetCode problems solved & HackerRank Gold in C++.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
