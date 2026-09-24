import React from 'react';
import { Award, BookOpen, ShieldCheck, CheckCircle2, Calendar, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { portfolioData, TrainingItem, CertificationItem } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const TrainingCertificates: React.FC = () => {
  const { training, certifications } = portfolioData;

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 1: Training */}
        <div id="training" className="scroll-mt-24">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 mb-3 shadow-md">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Full Stack Training</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Training <span className="gradient-text">Programs</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"></div>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            {training.map((item: TrainingItem) => (
              <ScrollReveal key={item.id} delayMs={150}>
                <div
                  className="glass-card p-8 sm:p-10 rounded-[32px] bg-[#0F1524]/90 border border-slate-800 shadow-2xl space-y-6 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      {item.certificateLabel}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{item.title}</h3>
                    <p className="text-base font-bold text-purple-400 mt-1">{item.organization}</p>
                  </div>

                  {/* CipherSchools Training Snapshot & Certificate Verification Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left: Training Snapshot Image */}
                    {item.snapshotImage && (
                      <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-[#050811] aspect-[16/9] shadow-lg flex items-center justify-center p-1.5">
                        <img
                          src={item.snapshotImage}
                          alt="CipherSchools Training Snapshot"
                          className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Right: CipherSchools Certificate Verification Card */}
                    <div className="lg:col-span-5 bg-[#070A11]/90 rounded-2xl border border-slate-800/90 p-6 flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                            Official Credential
                          </span>
                        </div>

                        <h4 className="text-lg font-extrabold text-white leading-snug">
                          CipherSchools Training Certificate
                        </h4>
                        <p className="text-xs font-bold text-purple-400 mt-1">
                          Full-Stack Web Development using MERN Stack
                        </p>

                        <div className="mt-4 space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 font-medium">Program:</span>
                            <span className="font-semibold text-slate-200">MERN Development</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 font-medium">Organization:</span>
                            <span className="font-semibold text-purple-300">CipherSchools</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 font-medium">Capstone Project:</span>
                            <span className="font-semibold text-amber-400">MedRemind Tracker</span>
                          </div>
                        </div>
                      </div>

                      {/* Direct Certificate Google Drive Link Button */}
                      {item.certificateUrl && (
                        <div className="pt-2">
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-xs font-extrabold text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 transition-all hover:scale-[1.02]"
                          >
                            <span>View Training Certificate</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#070A11]/60 border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Section 2: Certificates */}
        <div id="certificates" className="scroll-mt-24">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 mb-3 shadow-md">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Industry Verified Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Verified <span className="gradient-text">Certificates</span>
              </h2>
              <p className="text-slate-400 text-base max-w-xl mt-2 font-normal">
                Official industry credentials from Oracle, TATA, Infosys, Nasscom, CipherSchools, and Deloitte with direct verification links.
              </p>
              <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert: CertificationItem, idx: number) => {
              const isOracle = cert.issuer.includes('Oracle');
              const isTata = cert.issuer.includes('TATA');
              const isInfosys = cert.issuer.includes('Infosys');
              const isNasscom = cert.issuer.includes('Nasscom');
              const isCipher = cert.issuer.includes('Cipher');

              const getIssuerColor = () => {
                if (isOracle) return 'text-red-400 border-red-500/30 bg-red-500/10';
                if (isTata) return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
                if (isInfosys) return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
                if (isNasscom) return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
                if (isCipher) return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
                return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
              };

              return (
                <ScrollReveal key={cert.id} delayMs={idx * 80}>
                  <div
                    className="glass-card p-7 rounded-[28px] bg-[#0F1524]/90 border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group h-full min-h-[290px]"
                  >
                    <div>
                      {/* Top Bar: Icon Badge + Date */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <div className={`p-3 rounded-2xl border ${getIssuerColor()} group-hover:scale-110 transition-transform`}>
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-slate-300 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 shadow-inner">
                          {cert.date}
                        </span>
                      </div>

                      {/* Title & Issuer */}
                      <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors mb-1.5 leading-snug">
                        {cert.title}
                      </h3>
                      <span className="text-xs font-bold text-purple-400 block mb-3">
                        {cert.issuer}
                      </span>

                      {/* Credential ID Tag if available */}
                      {cert.credentialId && (
                        <div className="inline-block bg-[#070A11] px-2.5 py-1 rounded-md border border-slate-800 text-[10px] font-mono font-semibold text-slate-400 mb-3">
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </div>

                    {/* Direct Google Drive Certificate Link */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white border border-slate-800 text-xs font-bold text-blue-400 flex items-center justify-center gap-2 transition-all shadow-md group-hover:border-blue-500"
                      >
                        <span>View Verified Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
