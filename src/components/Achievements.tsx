import React from 'react';
import { Trophy, Star, ExternalLink, Calendar, Code, CheckCircle } from 'lucide-react';
import { portfolioData, AchievementItem } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400 mb-3 shadow-md">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Coding Competence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-slate-400 text-base max-w-md mt-2 font-normal">
              Algorithmic problem solving on LeetCode and HackerRank.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full mt-4"></div>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item: AchievementItem, idx: number) => (
            <ScrollReveal key={item.id} delayMs={idx * 150}>
              <div
                className="glass-card p-8 rounded-[32px] bg-[#0F1524]/90 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5 shadow-sm">
                      <Star className="w-4 h-4 fill-amber-400" />
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    {item.platform}
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      Verified Milestone
                    </span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
