import React from 'react';
import { PROJECTS } from '../constants';
import { Layers, Server } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-deep-navy relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Projects</h2>
          <p className="text-gray-400">Technical architectures, cloud solutions, and industrial applications.</p>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row gap-8 lg:items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Visual/Card */}
              <div className="lg:w-1/2">
                <div className="glass-panel rounded-2xl p-8 h-full border-t border-neon-blue/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     {project.category === 'Data Science' ? <Server size={100} /> : <Layers size={100} />}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs font-mono uppercase rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm font-mono">{project.period}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <h4 className="text-lg text-electric-green mb-6">@ {project.company}</h4>

                  <ul className="space-y-3 mb-8">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-neon-blue rounded-full flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-charcoal text-gray-300 text-xs rounded border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Connector (Desktop) */}
              <div className="hidden lg:flex flex-col items-center justify-center w-12 self-stretch relative">
                <div className="w-px h-full bg-gray-800"></div>
                <div className="absolute top-10 w-4 h-4 bg-deep-navy border-2 border-neon-blue rounded-full"></div>
              </div>

              {/* Empty space for alternate layout */}
              <div className="lg:w-1/2 hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
