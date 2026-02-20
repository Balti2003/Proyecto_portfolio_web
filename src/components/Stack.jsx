import Reveal from "./Reveal";
import { motion } from "framer-motion";

const technologies = [
  { name: "Python", color: "hover:text-blue-500" },
  { name: "Git & GitHub", color: "hover:text-red-500" },
  { name: "Node.Js", color: "hover:text-green-500" },
  { name: "Express", color: "hover:text-orange-500" },
  { name: "SQL", color: "hover:text-white-500" },
  { name: "Java", color: "hover:text-purple-500" },
  { name: "Django", color: "hover:text-green-500" },
  { name: "HTML", color: "hover:text-orange-500" },
  { name: "CSS", color: "hover:text-blue-500" },
  { name: "JavaScript", color: "hover:text-yellow-400" },
  { name: "TypeScript", color: "hover:text-purple-500" },
  { name: "Wordpress", color: "hover:text-white" },
  { name: "React", color: "hover:text-accent-blue" },
  { name: "Angular", color: "hover:text-yellow-500" },
];

const Stack = () => {
  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <h3 className="text-gray-500 font-mono text-sm mb-4 text-center tracking-[0.2em]">03. SKILLS_INDEX</h3>
          <h2 className="text-4xl font-bold text-center mb-16">Mi Stack <span className="animate-shimmer">Tecnológico</span></h2>
        </Reveal>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`px-6 py-3 bg-dark-gray border border-white/5 rounded-2xl text-gray-400 font-medium transition-all duration-300 hover:border-accent-blue/30 hover:bg-accent-blue/5 hover:-translate-y-1 cursor-default ${tech.color}`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;