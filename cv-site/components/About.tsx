import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-deep-navy relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From Industrial Optimization to <br />
              <span className="text-electric-green">AI Solutions</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                I am Oğuzhan Zengin, a professional creating value at the intersection of process optimization and artificial intelligence. 
                I combine the efficiency perspective gained from my Industrial Engineering background with modern Data Science tools.
              </p>
              <p>
                Leveraging my background (Galatasaray Master's ⋅ Istanbul Bilgi), I build end-to-end AI solutions—from developing 
                RAG-based LLM agents to deploying scalable data infrastructure on AWS (S3, EB).
              </p>
              <p>
                My approach is simple and effective: <span className="text-neon-blue">Measure, Model, Optimize.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((skill, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 rounded-xl hover:bg-charcoal/50 transition-colors duration-300 border border-charcoal hover:border-neon-blue/50 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-deep-navy rounded-lg group-hover:bg-neon-blue/10 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-blue to-electric-green" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;