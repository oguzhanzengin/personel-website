import React from 'react';
import { ArrowRight, Cpu, Database } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-navy pt-16">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-pulse text-charcoal opacity-30">
        <Database size={64} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-bounce text-charcoal opacity-30 delay-700">
        <Cpu size={64} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue font-mono text-sm">
          AI Architect ⋅ Data Scientist ⋅ Industrial Engineer
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Data-Driven <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-green">
            Elegance
          </span>
        </h1>
        
        <p className="mt-4 text-xl text-tech-gray max-w-2xl mx-auto mb-10 leading-relaxed">
          Bridging the gap between industrial optimization and scalable cloud-based AI solutions. 
          Specialized in advanced machine learning and process value creation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#lab"
            className="group relative px-8 py-4 bg-neon-blue text-deep-navy font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="flex items-center gap-2">
               Ask my AI Assistant <Cpu className="w-5 h-5" />
            </span>
          </a>
          
          <a 
            href="#projects"
            className="px-8 py-4 bg-transparent border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-electric-green hover:text-electric-green transition-colors flex items-center gap-2"
          >
            View Projects <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;