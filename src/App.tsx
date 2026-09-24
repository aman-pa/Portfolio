import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TrainingCertificates } from './components/TrainingCertificates';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 selection:bg-blue-600/30 selection:text-blue-400">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TrainingCertificates />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
