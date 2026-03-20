import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useSectionReveal } from '../../hooks/useSectionReveal';
import { cn } from '../../utils/cn';
import { ExternalLink, CheckCircle, X } from 'lucide-react';

export const Certificates = () => {
  const { ref, isVisible } = useSectionReveal();
  const [selectedCert, setSelectedCert] = useState(null);

  const containerClass = cn(
    "py-24 max-w-7xl mx-auto px-6 transition-all duration-1000 transform",
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  );

  const certs = [
  { title: 'Bits and Bytes of Computer Networking', platform: 'Coursera', verify: "https://www.coursera.org/account/accomplishments/verify/0X5C66S0W96Z", image: "/google.jpg" },
  { title: 'Software Engineering: Implementation and Testing', platform: 'Coursera', verify: "https://www.coursera.org/account/accomplishments/verify/FYUB5NZY4VEV", image: "/software.jpg" },
  { title: 'Design Thinking & Figma', platform: 'Lovely Professional University', verify: "https://www.lpu.in/skilldevelopment/details/856/think-design-prototype-summer-training-on-design-thinking-figma", image: "/figma.jpg" }];


  return (
    <section id="certificates" className="relative border-t border-primary/10">
      <div ref={ref} className={containerClass}>
        
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-primary">Certifications</h2>
          <div className="mt-4 w-12 h-[1px] bg-gold"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) =>
          <Card key={idx} className="p-6 flex flex-col justify-between">
              <div>
                <CheckCircle className="w-8 h-8 text-gold mb-6 stroke-1" />
                <h3 className="font-serif text-xl text-primary mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-xs uppercase tracking-widest font-sans text-charcoal/60 mb-8">{cert.platform}</p>
              </div>
              
              <div className="flex gap-4 mt-auto">
                <Button variant="outline" size="sm" className="flex-1 text-[10px]" onClick={() => setSelectedCert(cert)}>Preview</Button>
                <Button variant="ghost" size="sm" className="flex-1 text-[10px]"
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = cert.verify;
                          link.target="_blank";
                          link.click();
                        }}
                        >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3 ml-2 inline" />
                </Button>
              </div>
            </Card>
          )}
        </div>

      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm transition-opacity"
             onClick={() => setSelectedCert(null)}>
          <div className="relative w-full max-w-3xl bg-charcoal border border-primary/20 rounded-xl overflow-hidden shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-primary/10 bg-charcoal relative z-10">
              <h3 className="font-serif text-xl text-primary">{selectedCert.title}</h3>
              <button onClick={() => setSelectedCert(null)} className="text-primary/60 hover:text-primary transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 bg-cream/5 flex flex-col items-center justify-center min-h-[400px]">
              {selectedCert.image ? (
                <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full max-h-[60vh] object-contain rounded shadow-lg" />
              ) : (
                <div className="text-center p-8 bg-charcoal border border-primary/10 rounded-lg shadow-inner w-full max-w-md relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-gold rounded-full flex items-center justify-center bg-gold/5">
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </div>
                  <p className="font-serif text-2xl text-primary mb-2">Certificate of Completion</p>
                  <p className="text-base font-sans text-primary/80 mb-6">{selectedCert.platform}</p>
                  <p className="mt-4 text-xs font-sans text-primary/40 block border-t border-primary/10 pt-4">
                    Image preview not available.<br/>
                    Add an <code>image</code> URL to the certificate object <br/>in `Certificates.jsx` to display it here.
                  </p>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-primary/10 bg-charcoal flex justify-end relative z-10">
              <Button onClick={() => window.open(selectedCert.verify, "_blank")}>
                Verify Certificate
                <ExternalLink className="w-4 h-4 ml-2 inline" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>);

};