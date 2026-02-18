import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                    'ontouchstart' in window;
    
    if (isMobile) return; 

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-dark-bg text-white relative overflow-hidden">
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.07), transparent 80%)`
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;