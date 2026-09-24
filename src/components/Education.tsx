import React from 'react';
import { GraduationCap, School, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { portfolioData, EducationItem } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-[#070A11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 mb-3 shadow-md">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Education <span className="gradient-text">History</span>
            </h2>
            <p className="text-slate-400 text-base max-w-md mt-2 font-normal">
              Official academic degrees and institution credentials.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"></div>
          </div>
        </ScrollReveal>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto relative">
          
          <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-slate-800"></div>

          <div className="space-y-12 relative">
            {education.map((item: EducationItem, idx: number) => {
              const isEven = idx % 2 === 0;
              const isLPU = item.id === 'lpu';

              return (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-10">
                    <ScrollReveal delayMs={idx * 150}>
                      <div className="glass-card p-8 rounded-[32px] bg-[#0F1524]/90 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-300 space-y-4">
                        
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5" />
                            {item.score}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                            {item.degree}
                          </h3>

                          {/* Institution with LPU Logo if LPU */}
                          <div className="mt-2 flex items-center gap-2">
                            {isLPU ? (
                              <a
                                href="https://www.lpu.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
                              >
                                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden flex-shrink-0 shadow-sm">
                                  <img src="/lpu_logo.png" alt="LPU Logo" className="w-full h-full object-contain" />
                                </div>
                                <span>{item.institution}</span>
                                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                              </a>
                            ) : (
                              <h4 className="text-sm font-bold text-purple-400 flex items-center gap-1.5">
                                <School className="w-4 h-4 text-purple-400" />
                                {item.institution}
                              </h4>
                            )}
                          </div>

                          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {item.location}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                          {item.description}
                        </p>

                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Center Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 mt-8 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#070A11] border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-125 transition-transform">
                      <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
