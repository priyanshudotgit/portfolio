import React from 'react';
import { Button } from '../ui/Button';

export const Navbar = ({resumeRef}) => {
  const links = ['About', 'Education', 'Skills', 'Projects', 'Certificates', 'Achievements', 'Contact'];

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-cream/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center justify-center w-12 h-12 border border-primary/20 bg-tan/30">
          <span className="font-serif text-xl font-bold text-primary">Ps</span>
        </div>

        {/* Center Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) =>
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/70 hover:text-primary transition-colors">
            
              {link}
            </a>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          {/* <div className="hidden md:flex items-center space-x-2 text-xs uppercase tracking-widest text-charcoal/50">
             <span className="text-primary font-medium">Exhibit</span>
             <span className="w-8 h-[1px] bg-primary/30"></span>
             <span className="hover:text-primary cursor-pointer transition-colors">Discover</span>
            </div> */}
          <Button variant="outline" size="sm" className="hidden sm:flex" onClick={scrollToResume}>
            Resume
          </Button>
        </div>
        
      </div>
    </nav>);

};