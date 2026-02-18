import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal>
          <h3 className="text-gray-500 font-mono text-sm mb-4 tracking-[0.2em]">01. ABOUT_ME</h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Columna 1: Ingeniería */}
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-dark-gray p-8 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-bold mb-6 italic">Formación <span className="animate-shimmer">Académica</span></h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Actualmente curso la carrera de <strong>Ingeniería en Sistemas</strong>. Esta formación me permite entender la tecnología desde su base estructural, enfocándome en la arquitectura de software, redes y la optimización de procesos complejos.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Mi enfoque está en aplicar el pensamiento sistémico para resolver problemas del mundo real mediante soluciones digitales eficientes.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Columna 2: Especialización Full Stack */}
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Especialización <span className="animate-shimmer">Full Stack</span></h2>
              <p className="text-gray-400 leading-relaxed">
                Complemento mi carrera universitaria con una formación intensiva en <strong>ConquerBlocks</strong>, donde estoy dominando el ecosistema moderno de desarrollo:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-accent-blue font-mono mt-1">01</div>
                  <p className="text-sm text-gray-400"><span className="text-white font-medium">Frontend:</span> Desarrollo de interfaces reactivas y modernas con distintos frameworks como React, Angular, etc y arquitecturas basadas en componentes.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-accent-purple font-mono mt-1">02</div>
                  <p className="text-sm text-gray-400"><span className="text-white font-medium">Backend:</span> Creación de APIs robustas, manejo de bases de datos y lógica de servidor escalable.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-accent-blue font-mono mt-1">03</div>
                  <p className="text-sm text-gray-400"><span className="text-white font-medium">Metodologías:</span> Aplicación de buenas prácticas de código, Git y flujos de trabajo profesionales.</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-gray-500 italic text-sm border-l-2 border-accent-purple pl-4">
                  "Combinando el rigor de la ingeniería con la agilidad del desarrollo Full Stack profesional."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;