import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block py-1 px-3 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-bold mb-6 tracking-widest uppercase"
        >
          &gt; Estudiante de Ingeniería en Sistemas y Desarrollo Full Stack
        </motion.span>

        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
          Soy <span className="text-white">Baltasar</span><br />
          <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-blue-400 bg-clip-text text-transparent">
            <Typewriter
              words={['Full Stack Developer', 'Ingeniero en Sistemas', 'Software Builder']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 font-light leading-relaxed"
        >
          Apasionado por el desarrollo <span className="animate-shimmer font-medium">Full Stack</span>. 
          Enfocado en transformar lógica compleja en interfaces elegantes.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="#proyectos" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-white/5">
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;