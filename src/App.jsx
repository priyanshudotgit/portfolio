import React, {useRef} from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Resume } from './components/sections/Resume';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certificates } from './components/sections/Certificates';
import { Achievements } from './components/sections/Achievements';
import { DarkFeature } from './components/sections/DarkFeature';
import { Contact } from './components/sections/Contact';

function App() {
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  return (
    <div className="relative min-h-screen font-sans selection:bg-gold/30 selection:text-primary">
      {/* Global Noise Overlay */}
      <div className="noise-overlay text-transparent select-none bg-primary/0 pointer-events-none"></div>

      <Navbar resumeRef={resumeRef} />
      
      <main>
        <Hero projectsRef={projectsRef} />
        <About />
        <Resume ref={resumeRef} />
        <Education />
        <Skills />
        <Projects ref={projectsRef} />
        <Certificates />
        <Achievements />
        <DarkFeature />
        <Contact />
      </main>

      <footer className="py-12 border-t border-primary/10 text-center bg-tan/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-serif italic text-primary/60 text-lg mb-2">Code is a form of quiet poetry — structured, expressive, and timeless.</p>
          <p className="text-xs uppercase tracking-[0.3em] font-sans text-charcoal/40">© {new Date().getFullYear()} PriyanshuDotGit</p>
        </div>
      </footer>
    </div>);

}

export default App;