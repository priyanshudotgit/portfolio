import React from 'react';
import { Card } from '../ui/Card';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';

export const DarkFeature = () => {
  const { ref, isVisible } = useSectionReveal();

  const containerClass = cn(
    "py-32 max-w-7xl mx-auto px-6 transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  const features = [
  { title: 'Problem Solving', num: '01' },
  { title: 'System Thinking', num: '02' },
  { title: 'UI Precision', num: '03' },
  { title: 'Continuous Learning', num: '04' }];


  return (
    <section className="relative bg-darkbg text-cream overflow-hidden">
      {/* Dark Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      <div ref={ref} className={containerClass}>
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-cream mb-6">Core Philosophy</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) =>
          <Card key={idx} className="bg-transparent border-gold/50 hover:border-gold/20 p-8 h-64 flex flex-col justify-between group" withPlaque={false}>
              <div className="text-right">
                <span className="font-serif italic text-4xl text-cream/50 group-hover:text-gold/80 transition-colors duration-500">
                  {feature.num}
                </span>
              </div>
              <h3 className="text-xl font-sans font-light tracking-wide uppercase text-cream/90">
                {feature.title}
              </h3>
            </Card>
          )}
        </div>

      </div>
    </section>);

};