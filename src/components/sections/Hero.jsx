import React, {useRef} from 'react';
import { Button } from '../ui/Button';

export const Hero = ({ projectsRef }) => {
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col space-y-8">
          <div>
            <span className="inline-block text-xs md:text-xs font-sans uppercase tracking-[0.3em] font-medium text-gold mb-6 relative">
              <span className="absolute -left-6 top-1/2 w-4 h-[1px] bg-gold"></span>
              Priyanshu Samanta
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal leading-tight">
              Full Stack <br />
              <span className="italic text-primary">Developer</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-charcoal/80 font-sans max-w-lg leading-relaxed">
            A dynamic builder exploring Web, DevOps, and Cloud often accompanied by <span className="font-serif italic text-primary">ghazals</span>.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button variant="primary" onClick={scrollToProjects}>Explore Work</Button>
            <Button variant="ghost"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/CV2025.pdf";
                      link.download = "priyanshuResume.pdf";
                      link.click();
                    }}
            >Download Resume</Button>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
          
          {/* Orbital Ring Animation */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-gold/30 rounded-full animate-spin-slow flex items-center justify-center">
            <div className="absolute top-0 w-3 h-3 bg-gold rounded-full transform -translate-y-1/2"></div>
            <div className="absolute bottom-0 w-2 h-2 bg-primary rounded-full transform translate-y-1/2"></div>
          </div>
          
          <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-primary/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
            <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Floating Artifact */}
          <div className="relative z-10 w-48 h-64 md:w-64 md:h-80 border border-primary/20 shadow-2xl animate-floating flex flex-col p-4 items-center justify-center group overflow-hidden"
                style={{ 
                  backgroundImage: 'url("/pfp4.jpg")', 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
            {/* <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="w-16 h-16 border-[0.5px] border-primary/40 rotate-45 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700">
              <div className="w-8 h-8 border-[0.5px] border-gold rotate-45"></div>
            </div>
            <div className="text-center font-sans">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-2">Artifact No. 001</span>
              <div className="w-12 h-[1px] bg-primary/30 mx-auto"></div>
            </div> */}
          </div>
          
        </div>

      </div>
    </section>);

};