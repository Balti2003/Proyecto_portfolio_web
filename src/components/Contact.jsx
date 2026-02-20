import { motion } from "framer-motion";
import Reveal from "./Reveal";

const contactLinks = [
  {
    name: "LinkedIn",
    value: "linkedin.com/in/baltasar-lomello",
    icon: "🔗",
    link: "https://www.linkedin.com/in/baltasar-lomello-420119225/",
    color: "hover:text-blue-500",
  },
  {
    name: "GitHub",
    value: "github.com/Balti2003",
    icon: "💻",
    link: "https://github.com/Balti2003",
    color: "hover:text-gray-200",
  },
  {
    name: "Email",
    value: "baltasarlomello@live.com",
    icon: "📧",
    link: "mailto:baltasarlomello@live.com",
    color: "hover:text-accent-purple",
  },
  {
    name: "Instagram",
    value: "@balti.lomello",
    icon: "📸",
    link: "https://instagram.com/balti.lomello",
    color: "hover:text-pink-500",
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <h3 className="text-gray-500 font-mono text-sm mb-4 tracking-[0.2em]">05. CONTACT_INFO</h3>
          <h2 className="text-4xl font-bold mb-16">
            Hablemos de <span className="animate-shimmer">Sistemas</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lado Izquierdo: Texto */}
          <Reveal>
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                ¿Estás buscando un desarrollador para tu equipo o proyecto? 
                Estoy disponible para nuevas oportunidades y colaboraciones.
              </p>
              <div className="p-6 bg-dark-gray/50 border border-white/5 rounded-2xl">
                <p className="text-accent-purple font-mono text-sm mb-2">// Current Location</p>
                <p className="text-white text-xl">Córdoba, Argentina</p>
              </div>
            </div>
          </Reveal>

          {/* Lado Derecho: Enlaces de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 bg-dark-gray border border-white/5 rounded-2xl flex flex-col gap-3 transition-all duration-300 group hover:border-accent-blue/30 hover:bg-white/[0.02] ${item.color}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-gray-500 text-sm font-mono truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;