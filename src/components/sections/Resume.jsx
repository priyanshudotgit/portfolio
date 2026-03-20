import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';

export const Resume = React.forwardRef((props, ref) => {
  const { ref:revealRef, isVisible } = useSectionReveal();

  const containerClass = cn(
    "py-24 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  return (
    <section id="resume" className="relative border-t border-primary/10 bg-tan/20" ref={ref}>
      <div ref={revealRef} className={containerClass}>
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-sans uppercase tracking-[0.3em] font-medium text-gold mb-4">Official Document</span>
        </div>
        
        <Card className="max-w-3xl w-full p-12 md:p-16 flex flex-col items-center text-center group cursor-pointer">
          <div className="w-16 h-16 border border-primary/20 group-hover:border-primary/50 flex items-center justify-center mb-8 rotate-45 transition-colors duration-500">
             <div className="absolute font-serif italic text-2xl -rotate-45 text-primary">R</div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2">Curriculum Vitae</h2>
          <p className="text-sm uppercase tracking-widest text-charcoal/50 font-sans mb-12">Resume.pdf</p>
          
          <p className="text-charcoal/80 max-w-md mx-auto mb-10 leading-relaxed font-sans">
            A comprehensive record of academic background, technical proficiencies, and professional milestones.
          </p>
          
          <Button variant="primary" className="group-hover:px-12 transition-all duration-300"
                  onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/CV2025.pdf";
                      link.download = "priyanshuResume.pdf";
                      link.click();
                    }}>
            Download Resume
          </Button>
        </Card>
      </div>
    </section>);

});