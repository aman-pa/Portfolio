import React, { useState } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Wrench, Layers, Calendar, Globe, Image as ImageIcon } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState<string>(
    project.image || (project.galleryImages && project.galleryImages[0]) || ''
  );

  // Helper to map thumbnail labels
  const getLabel = (url: string, index: number) => {
    if (url.includes('sanitizeq_hero')) return 'SanitizeQ Landing';
    if (url.includes('sanitizeq_dashboard')) return 'Live Dashboard';
    if (url.includes('cover')) return 'Cover View';
    if (url.includes('schedule')) return 'Today Schedule';
    if (url.includes('analytics')) return 'Adherence (89%)';
    if (url.includes('doctors')) return 'Connected Doctors';
    if (url.includes('pillbox')) return 'Digital Pill Box';
    if (url.includes('cipherschools')) return 'CipherSchools Snapshot';
    if (url.includes('hero')) return 'Climate Hero';
    if (url.includes('pillars')) return '3 Core Pillars';
    if (url.includes('features')) return 'Risk Dashboard';
    if (url.includes('users')) return 'Stakeholders';
    return `Shot #${index + 1}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0B0F19] rounded-3xl border border-slate-800 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 transition-all shadow-lg"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title Bar */}
        <div className="p-6 bg-[#070A11] border-b border-slate-800 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-700 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-blue-400" />
              {project.period}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-slate-300 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Main Display Image Viewer (Crystal Clear HD View without darkening overlays) */}
        {activeImage ? (
          <div className="relative w-full h-[320px] sm:h-[460px] bg-[#03060E] border-b border-slate-800 flex items-center justify-center p-3 sm:p-5 overflow-hidden">
            <img
              src={activeImage}
              alt={project.title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-all duration-300 border border-slate-800/60"
            />
          </div>
        ) : (
          <div className="relative w-full h-[220px] bg-gradient-to-br from-[#0F1524] to-[#070A11] border-b border-slate-800 flex flex-col items-center justify-center p-6 text-center">
            <Globe className="w-12 h-12 text-blue-400 mb-2 opacity-80" />
            <h3 className="text-lg font-bold text-white">Hygiene & Washroom Management Infrastructure</h3>
            <p className="text-xs text-slate-400 max-w-md mt-1">Real operational system screenshots will be uploaded soon. Live project deployment accessible below.</p>
          </div>
        )}

        {/* Real Screenshot Gallery Thumbnails Row */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="px-6 py-4 bg-[#070A11] border-b border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                Full-Resolution Screenshots (Click to View):
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {project.galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative h-24 rounded-xl overflow-hidden border-2 bg-[#03060E] p-1 flex flex-col items-center justify-between transition-all shadow-md group ${
                    activeImage === imgUrl
                      ? 'border-blue-500 ring-2 ring-blue-500/30 scale-105'
                      : 'border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  <img src={imgUrl} alt={`Screenshot ${idx + 1}`} className="w-full h-16 object-contain rounded" />
                  <span className="text-[10px] font-bold text-slate-300 truncate w-full text-center px-1">
                    {getLabel(imgUrl, idx)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Modal Content Details */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-sm font-extrabold text-white shadow-lg shadow-blue-900/40 transition-all hover:scale-105"
              >
                <Globe className="w-4 h-4" />
                <span>Open Live Application</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sm font-bold text-slate-100 transition-all shadow-sm"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Problem & Contribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#0F1524] border border-slate-800">
              <h3 className="text-sm font-bold text-blue-400 flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4" />
                <span>Objective & Problem Statement</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1524] border border-slate-800">
              <h3 className="text-sm font-bold text-purple-400 flex items-center gap-2 mb-2">
                <Wrench className="w-4 h-4" />
                <span>Technical Implementation & Role</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          </div>

          {/* CV Bullet Highlights */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Project Key Highlights (from Official CV)</span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0F1524]/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Tech Stack Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
