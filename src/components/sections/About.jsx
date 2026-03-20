import React from 'react';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';

export const About = () => {
  const { ref:revealRef, isVisible } = useSectionReveal();

  const containerClass = cn(
    "py-24 max-w-7xl mx-auto px-6 transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  return (
    <section id="about" className="relative border-t border-primary/10">
      <div ref={revealRef} className={containerClass}>
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              About the <br />
              <span className="italic">Engineer</span>
            </h2>
            <div className="mt-8 w-16 h-[1.5px] bg-gold"></div>
          </div>
          
          {/* Middle Column: Text */}
          <div className="lg:col-span-4 space-y-6 text-charcoal/80 font-sans leading-relaxed text-lg">
            <p>
              I like working where logic meets creativity, where writing code feels like expressing an idea. For me, engineering isn't just about making things work, but about building things thoughtfully and with clear structure.
            </p>
            <p>
              I solve complex problems in Web Development, DevOps, and Cloud Computing. Much like my deep appreciation for ghazals, I value rhythm, cadence, and meaning in my solutions.
            </p>
          </div>
          
          {/* Right Column: Stats */}
          <div className="lg:col-span-4 space-y-8 pl-0 lg:pl-12 lg:border-l lg:border-primary/20">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60">Institutional Stats</h3>
            <ul className="space-y-6">
              {[
              { label: 'Problem Solving', value: '100+ DSA Problems Solved' },
              { label: 'Work Ethic', value: 'Consistent Builder' },
              { label: 'Expertise', value: 'Multi-domain Learner' }].
              map((stat, idx) =>
              <li key={idx} className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{stat.label}</span>
                  <span className="font-serif italic text-lg text-charcoal">{stat.value}</span>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>
    </section>);

};