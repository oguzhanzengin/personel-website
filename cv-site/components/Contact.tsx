import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { CONTACT_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-deep-navy border-t border-charcoal pt-16 pb-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's Optimize Together.</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Whether you need deep learning models, cloud architecture, or industrial process improvement, I'm ready to add data-driven value to your team.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-charcoal rounded-full text-gray-400 hover:text-white hover:bg-neon-blue/20 hover:border-neon-blue border border-transparent transition-all">
                <Linkedin size={24} />
              </a>
              <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-charcoal rounded-full text-gray-400 hover:text-white hover:bg-neon-blue/20 hover:border-neon-blue border border-transparent transition-all">
                <Github size={24} />
              </a>
              <a href={`mailto:${CONTACT_LINKS.email}`} className="p-3 bg-charcoal rounded-full text-gray-400 hover:text-white hover:bg-neon-blue/20 hover:border-neon-blue border border-transparent transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-start md:items-end">
             <div className="text-right">
                <div className="text-electric-green font-mono text-sm mb-2">STATUS</div>
                <div className="text-white text-lg font-medium flex items-center justify-end gap-2">
                   <span className="w-2 h-2 bg-electric-green rounded-full animate-pulse"></span>
                   Open to Opportunities
                </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Oğuzhan Zengin. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-mono">Built with React, Tailwind & Gemini API.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
