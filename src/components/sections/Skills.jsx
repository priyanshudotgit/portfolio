import React from 'react';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';

export const Skills = () => {
  const { ref, isVisible } = useSectionReveal();

  const containerClass = cn(
    "py-24 max-w-7xl mx-auto px-6 transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  const skillCategories = [
  { title: 'Languages', items: ['C', 'C++', 'JavaScript', 'Python', 'Java'] },
  { title: 'Frameworks / Libraries', items: ['React', 'Tailwind CSS', 'NodeJS'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { title: 'Tools', items: ['Figma', 'Git', 'Linux'] },
  { title: 'Specializations', items: ['Web Development', 'DevOps', 'Cloud Computing'] }];


  return (
    <section id="skills" className="relative border-t border-primary/10">
      <div ref={ref} className={containerClass}>
        
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Technical Proficiency</h2>
          <div className="mt-6 w-16 h-[1.5px] bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, idx) =>
          <div key={idx} className="flex flex-col">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-6 border-b border-primary/20 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, sIdx) =>
              <span
                key={sIdx}
                className="px-4 py-2 border border-primary/20 bg-tan/40 text-charcoal font-sans text-sm hover:bg-primary hover:text-cream transition-colors duration-300 cursor-default">
                
                    {skill}
                  </span>
              )}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>);

};