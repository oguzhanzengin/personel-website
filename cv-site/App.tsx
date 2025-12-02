import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import InnovationLab from './components/InnovationLab';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Ensure the page starts at the top when loaded/refreshed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-deep-navy text-gray-100 font-sans selection:bg-neon-blue selection:text-deep-navy">
      <Navbar />
      
      <main>
        {/* We don't need onOpenChat anymore since the link scrolls to the embedded chat */}
        <Hero onOpenChat={() => {}} />
        <About />
        <Projects />
        <InnovationLab />
        <Contact />
      </main>
    </div>
  );
};

export default App;