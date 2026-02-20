import React from 'react';
import Reveal from "./Reveal";

const education = [
    {
        title: "Técnico Programador",
        institution: "Instituto Provincial de Educación Técnica (IPET 411) - Noetinger",
        date: "2016 - 2022",
        description: "Formación técnica en programación y fundamentos de la informática. Proyectos prácticos en diversos lenguajes y tecnologías."
    },
    {
        title: "Ingeniería en Sistemas de Información",
        institution: "Universidad Tecnológica Nacional - Facultad Regional Villa María",
        date: "2023 - 202x (Presente)",
        description: "Formación centrada en la arquitectura de software, algoritmos avanzados, gestión de bases de datos y pensamiento sistémico."
    },
    {
        title: "Full Stack Developer",
        institution: "ConquerBlocks",
        date: "2024 - 2026",
        description: "Especialización en Full-Stack (Frontend & Backend). Desarrollo de aplicaciones escalables y metodologías modernas."
    }
];

const softSkills = [
  "Resolución de Problemas",
  "Pensamiento Analítico",
  "Metodologías Ágiles",
  "Trabajo en Equipo",
  "Adaptabilidad",
  "Comunicación Técnica"
];

const Experience = () => {
  return (
    <section id="trayectoria" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-500 font-mono text-sm mb-4 tracking-[0.2em]">02. MY_TRAJECTORY</h3>
        <h2 className="text-4xl font-bold mb-16">Formación y <span className="animate-shimmer">Habilidades</span></h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Columna Educación (Timeline) */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="text-accent-blue">/</span> Educación
            </h4>
            <div className="space-y-8 border-l border-white/10 ml-4">
              {education.map((item, index) => (
                <Reveal key={index}>
                  <div className="relative pl-8 pb-2">
                    {/* Punto del timeline */}
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_10px_#3b82f6]" />
                    
                    <span className="text-accent-blue font-mono text-sm">{item.date}</span>
                    <h5 className="text-xl font-bold mt-1 text-white">{item.title}</h5>
                    <p className="text-accent-purple/80 text-sm mb-3">{item.institution}</p>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Columna Soft Skills */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="text-accent-purple">/</span> Habilidades Blandas
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Reveal key={index}>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-purple/30 transition-all duration-300 group">
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {skill}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            
            {/* Pequeña nota de perfil ingeniero */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border border-white/5">
              <p className="text-sm italic text-gray-400 leading-relaxed">
                "Mi enfoque combina el rigor analítico de la ingeniería con la agilidad del desarrollo moderno para resolver problemas complejos con código limpio y eficiente."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;