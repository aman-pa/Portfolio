import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, ArrowUpRight, Calendar, Globe, Code2, Award } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Web Application', 'Frontend / Analytics'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getCleanDomain = (url?: string) => {
    if (!url) return 'localhost:3000';
    return url.replace('https://', '').replace('http://', '').replace(/\/$/, '');
  };

  return (
    <section id="projects" className="py-24 bg-[#070A11] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Category Filters */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                <span>• PROOF OF CRAFT</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
                Production-ready MERN & Full Stack web applications built with real screenshots, live deployments, and database architecture.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-[#0F1422] p-1.5 rounded-2xl border border-slate-800/80 shadow-inner">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Spacious 2-Column Cards Grid with Full-Width Featured Span for Odd Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: Project, idx: number) => {
            const isFullWidth = filteredProjects.length % 2 !== 0 && idx === filteredProjects.length - 1;

            return (
              <ScrollReveal
                key={project.id}
                delayMs={idx * 120}
                className={isFullWidth ? 'lg:col-span-2' : ''}
              >
                <div
                  className={`glass-card rounded-[28px] overflow-hidden bg-[#0D111A]/95 border border-slate-800/90 hover:border-amber-500/40 hover:shadow-[0_25px_60px_rgba(245,158,11,0.08)] transition-all duration-500 flex flex-col justify-between group h-full ${
                    isFullWidth ? 'lg:flex-row lg:items-stretch' : ''
                  }`}
                >
                  
                  {/* Left Column (Screenshot / Browser Frame) */}
                  <div className={`flex flex-col justify-between ${isFullWidth ? 'lg:w-[50%] border-b lg:border-b-0 lg:border-r border-slate-800/80' : ''}`}>
                    {/* Browser Window Header Mockup */}
                    <div className="bg-[#151A26] px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                      </div>
                      
                      <div className="bg-[#090C13] px-4 py-1 rounded-md text-[11px] font-mono text-slate-400 border border-slate-800/90 flex items-center gap-2 max-w-[240px] sm:max-w-[320px] truncate shadow-inner">
                        <Globe className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{getCleanDomain(project.liveUrl)}</span>
                      </div>

                      <div className="w-10"></div>
                    </div>

                    {/* High-Resolution Screenshot Frame */}
                    {project.image ? (
                      <div className="relative w-full aspect-video bg-[#05070E] flex items-center justify-center p-2 overflow-hidden border-b border-slate-800/80 flex-grow">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain rounded-lg transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#121724] via-[#090D16] to-[#161C2E] flex flex-col items-center justify-center p-8 text-center border-b border-slate-800/80 flex-grow">
                        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                          <Code2 className="w-8 h-8" />
                        </div>
                        <span className="text-base font-extrabold text-white">{project.title}</span>
                        <span className="text-xs font-mono text-slate-400 mt-1">Live Backend Architecture & API Infrastructure</span>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Card Content & Details) */}
                  <div className={`flex flex-col justify-between p-6 sm:p-8 ${isFullWidth ? 'lg:w-[50%]' : ''}`}>
                    <div className="space-y-4">
                      
                      {/* Meta Tags Row */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="bg-[#1C2232] px-3 py-1 rounded-md text-[11px] font-mono font-extrabold text-amber-400 border border-amber-500/20 uppercase shadow-sm">
                          {project.period}
                        </span>
                        <span className="bg-[#1C2232] px-3 py-1 rounded-md text-[11px] font-mono font-extrabold text-slate-300 border border-slate-700 uppercase shadow-sm">
                          {project.category}
                        </span>
                        {project.id === 'climate-systems' && (
                          <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-md text-[11px] font-mono font-extrabold flex items-center gap-1.5 shadow-sm">
                            <Award className="w-3.5 h-3.5 text-amber-400" />
                            <span>Infernoverse Hackathon @ LPU</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors tracking-tight leading-snug">
                          {project.title} — {project.subtitle.split('—')[0].trim()}
                        </h3>
                      </div>

                      {/* Bullet Points Highlights (Directly on Card) */}
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pt-1">
                        {project.keyFeatures.slice(0, 4).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="text-amber-400 font-bold text-base leading-none mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-3">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1.5 rounded-lg bg-[#161B28] border border-slate-800 text-xs font-mono font-semibold text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Card Footer Actions Bar */}
                    <div className="pt-6 mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80">
                      <div className="flex items-center gap-3">
                        {/* View on GitHub Button (Gold Outlined) */}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/15 text-amber-300 hover:text-amber-200 text-xs font-mono font-bold transition-all shadow-sm"
                          >
                            <Github className="w-4 h-4 text-amber-400" />
                            <span>View on GitHub</span>
                          </a>
                        )}

                        {/* Live Demo Button */}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-lg shadow-blue-900/30 transition-all hover:scale-105"
                          >
                            <Globe className="w-4 h-4" />
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3 opacity-80" />
                          </a>
                        )}
                      </div>

                      {/* Case Study Details Modal Button */}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                        title="View Full Case Study & Screenshots"
                      >
                        <ArrowUpRight className="w-4 h-4 text-amber-400" />
                      </button>
                    </div>

                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal Viewer */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
