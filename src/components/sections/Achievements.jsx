import React from 'react';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';

export const Achievements = () => {
  const { ref, isVisible } = useSectionReveal();

  const containerClass = cn(
    "py-24 max-w-4xl mx-auto px-6 transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  const achievements = [
  { year: '2026', title: 'Solved 100+ DSA Problems', desc: 'Consistent algorithmic practice on LeetCode & GeeksforGeeks.' },
  { year: '2025', title: 'Design Thinking & Figma Prototyping', desc: 'Recognized in the Top 5 of the Figma UI/UX Design cohort.' },
  { year: '2024', title: 'Hackathon Pre-Finalist', desc: 'Developed a scalable prototype for the problem statement under 4 hours.' }];


  return (
    <section id="achievements" className="relative border-t border-primary/10">
      <div ref={ref} className={containerClass}>
        
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif text-primary">Milestones</h2>
          <div className="mt-4 w-12 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="space-y-6">
          {achievements.map((item, idx) =>
          <div key={idx} className="group relative border-l border-primary/20 pl-8 py-4 hover:border-gold transition-colors duration-500">
              <div className="absolute left-[-5px] top-6 w-[9px] h-[9px] bg-cream border border-primary group-hover:bg-gold group-hover:border-gold transition-colors duration-500 rotate-45"></div>
              
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary/60 mb-2 block">{item.year}</span>
              <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="font-sans text-charcoal/70 text-sm max-w-2xl">{item.desc}</p>
            </div>
          )}
        </div>

      </div>
    </section>);

};