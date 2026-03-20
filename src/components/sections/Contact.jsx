import React from 'react';
import { Button } from '../ui/Button';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';

export const Contact = () => {
  const { ref, isVisible } = useSectionReveal();

  const containerClass = cn(
    "py-32 max-w-4xl mx-auto px-6 transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  return (
    <section id="contact" className="relative border-t border-primary/10">
      <div ref={ref} className={containerClass}>
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl font-serif text-primary mb-6">Contact Me</h2>
          <div className="w-16 h-[1.5px] bg-gold mb-8"></div>
          <p className="text-charcoal/70 max-w-md font-sans leading-relaxed">
            Available for professional inquiries, collaborative endeavors, and structured problem solving.
          </p>
        </div>

        <div className="border border-primary/20 bg-tan/20 p-8 md:p-12 relative">
          
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/50 -translate-x-1 -translate-y-1"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/50 translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/50 -translate-x-1 translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/50 translate-x-1 translate-y-1"></div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-primary/10 hover:border-primary/40 transition-colors">
              <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 md:mb-0 w-32">Email</span>
              <a href="mailto:priyanshusamanta23@gmail.com" className="font-serif italic text-lg text-charcoal hover:text-gold transition-colors">
                priyanshusamanta23@gmail.com
              </a>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-primary/10 hover:border-primary/40 transition-colors">
              <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 md:mb-0 w-32">GitHub</span>
              <a href="https://github.com/priyanshudotgit" target="_blank" rel="noreferrer" className="font-serif italic text-lg text-charcoal hover:text-gold transition-colors">
                priyanshudotgit
              </a>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-primary/10 hover:border-primary/40 transition-colors">
              <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 md:mb-0 w-32">LinkedIn</span>
              <a href="https://www.linkedin.com/in/priyanshusamanta/" target="_blank" rel="noreferrer" className="font-serif italic text-lg text-charcoal hover:text-gold transition-colors">
                PriyanshuSamanta
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.location.href = "mailto:yourmail@gmail.com?subject=Hello%20Priyanshu&body=Hi%20Priyanshu,%0A%0AI%20wanted%20to%20connect%20with%20you.%0A%0ARegards";
              }}
            >
              Initiate Conversation
            </Button>
          </div>
        </div>

      </div>
    </section>);

};