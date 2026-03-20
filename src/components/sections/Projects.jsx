import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';

export const Projects = React.forwardRef((props, ref) => {
  const { ref:revealRef, isVisible } = useSectionReveal();

  const containerClass = cn(
    "py-24 max-w-7xl mx-auto px-6 transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  const projects = [
  { title: 'Employee Leave Management System', desc: 'Built a web-based Employee Leave Management System to manage leave requests and approvals efficiently.', tech: ['React', 'Node.js', 'MongoDB'], src: '/elms.jpg', view: "https://employee-lms-silk.vercel.app/", source: "https://github.com/priyanshudotgit/employeeLeaveManagement-PEP" },
  { title: 'Telemetry Dashboard', desc: 'Engineered a low-latency WebSocket architecture to stream live system metrics.', tech: ['Python', 'CustomTkinter'], src: '/telemetry.jpg', view: "#", source: "https://github.com/priyanshudotgit/Real-Time-Process-Monitoring-Dashboard" },
  { title: 'Lead Generation AI Chatbot', desc: 'Developed a context-aware chatbot, implementing prompt engineering.', tech: ['Python', 'Javascript'], src: '/chatbot.jpg', view: "#", source: "https://github.com/priyanshudotgit/Lead_Generation_AIChatbot" }];


  return (
    <section id="projects" className="relative border-t border-primary/10" ref={ref}>
      <div ref={revealRef} className={containerClass}>
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="inline-block text-xs font-sans uppercase tracking-[0.3em] font-medium text-gold mb-4">Exhibition</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">Selected Works</h2>
          </div>
          <p className="max-w-xs text-charcoal/70 font-sans mt-4 md:mt-0 text-sm">
            An archive of major engineering projects demonstrating capability and structured implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) =>
          <Card key={idx} className="flex flex-col h-full overflow-hidden group">
              {/* Image Container */}
              <div className="h-48 bg-charcoal/50 overflow-hidden relative">
                <img
                src={project.src}
                alt="Project Thumbnail"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 mix-blend-multiply"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-primary mb-3">{project.title}</h3>
                <p className="text-charcoal/70 font-sans text-sm mb-6 flex-1">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) =>
                <span key={idx} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 border border-primary/20 text-primary">
                      {t}
                    </span>
                )}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1"
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = project.view;
                            link.target="_blank";
                            link.click();
                          }}
                        >View</Button>
                  <Button variant="ghost" size="sm" className="flex-1"
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = project.source;
                            link.target="_blank";
                            link.click();
                          }}
                        >Source</Button>
                </div>
              </div>
            </Card>
          )}
        </div>

      </div>
    </section>);

});