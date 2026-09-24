import React from 'react';
import { Code2, Globe, Wrench, BrainCircuit, Sparkles } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Skills: React.FC = () => {
  const { skillsCategories } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-purple-400" />;
      default:
        return <BrainCircuit className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 mb-3 shadow-md">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-2 font-normal">
              Organized across programming languages, frontend frameworks, developer tools, and leadership.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4"></div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category: SkillCategory, idx: number) => (
            <ScrollReveal key={idx} delayMs={idx * 100}>
              <div
                className="glass-card p-8 rounded-[32px] bg-[#0F1524]/90 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="font-extrabold text-lg text-white">{category.title}</h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3.5 py-2 rounded-xl bg-[#070A11] border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 shadow-sm flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
