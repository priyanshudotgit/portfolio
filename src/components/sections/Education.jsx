import React from 'react';
import { Card } from '../ui/Card';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';

export const Education = () => {
  const { ref, isVisible } = useSectionReveal();

  const containerClass = cn(
    "py-24 max-w-3xl mx-auto px-6 transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  return (
    <section id="education" className="relative border-t border-primary/10">
      <div ref={ref} className={containerClass}>
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-primary">Academic Record</h2>
          <div className="mt-4 w-12 h-[1px] bg-gold"></div>
        </div>

        <Card className="p-8 md:p-12 relative overflow-hidden group mb-3">
          <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
            <span className="font-serif italic text-8xl leading-none">LPU</span>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-2xl font-serif text-charcoal">Lovely Professional University</h3>
              <span className="text-xs font-sans uppercase tracking-widest text-primary/70 mt-2 md:mt-0">2023 - Ongoing</span>
            </div>
            
            <p className="text-lg font-sans text-primary mb-6">B.Tech in Computer Science & Engineering</p>
            
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 border border-gold/50 bg-gold/5 inline-flex items-center">
                <span className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal">CGPA: <span className="font-bold">7.92</span></span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 md:p-12 relative overflow-hidden group mb-3">
          <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
            <span className="font-serif italic text-8xl leading-none">Jindal</span>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-2xl font-serif text-charcoal">O.P. Jindal School</h3>
              <span className="text-xs font-sans uppercase tracking-widest text-primary/70 mt-2 md:mt-0">2022 - 2023</span>
            </div>
            
            <p className="text-lg font-sans text-primary mb-6">Higher Secondary</p>
            
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 border border-gold/50 bg-gold/5 inline-flex items-center">
                <span className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal">CGPA: <span className="font-bold">80.4</span></span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
            <span className="font-serif italic text-8xl leading-none">Jindal</span>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-2xl font-serif text-charcoal">O.P. Jindal School</h3>
              <span className="text-xs font-sans uppercase tracking-widest text-primary/70 mt-2 md:mt-0">2020 - 2021</span>
            </div>
            
            <p className="text-lg font-sans text-primary mb-6">Secondary</p>
            
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 border border-gold/50 bg-gold/5 inline-flex items-center">
                <span className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal">CGPA: <span className="font-bold">91.8</span></span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>);

};