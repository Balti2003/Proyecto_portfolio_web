import Reveal from "./Reveal";
import { useState } from "react";

const myProjects = [
  {
    title: "Sistema de Tickets (Frontend)",
    description: "Plataforma de gestión de incidencias y tickets de soporte desarrollado con Angular. Esta aplicación ofrece una interfaz de usuario de alto nivel orientada a la eficiencia operativa y funcionalidades avanzadas de gestión.",
    tech: ["Angular", "HTML", "Tailwind-CSS", "JS"],
    link: "https://github.com/Balti2003/Proyecto_ticketing_angular"
  },
  {
    title: "Sistema de Tickets (Backend)",
    description: "API REST desarrollada con Node.js y Express para gestionar tickets de soporte. Incluye autenticación JWT, validación de datos y persistencia en base de datos MongoDB.",
    tech: ["Node.Js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/Balti2003/Proyecto_ticketing_express"
  },
  {
    title: "Proyecto MotosBL",
    description: "Plataforma web moderna para la exhibición y cotización de motocicletas, desarrollado con Angular y estilizado utilizando Tailwind CSS para una interfaz profesional y totalmente responsiva.",
    tech: ["Angular", "HTML", "Tailwind-CSS", "JS"],
    link: "https://github.com/Balti2003/Proyecto_Motos_Angular"
  },
  {
    title: "Sistema de Pedidos Bocatto",
    description: "Plataforma de pedidos online para comidas rápidas. Permite a los usuarios registrarse, navegar por el menú y realizar pedidos, y a los administradores gestionar el menú y los pedidos.",
    tech: ["Django", "Python", "HTML", "Bootstrap-CSS", "MySQL"],
    link: "https://github.com/Balti2003/Proyecto_Bocatto_django"
  },
  {
    title: "Sistema instagram",
    description: "Aplicación web tipo Instagram. Permite a los usuarios crear perfiles, seguir a otros usuarios, realizar publicaciones, interactuar con me gustas y comentarios en distintas publicaciones y enviar mensajes de contacto.",
    tech: ["Django", "Python", "HTML", "Bootstrap-CSS", "SQLite"],
    link: "https://github.com/Balti2003/Proyecto_instagram_django"
  },
  {
    title: "Sistema de Biblioteca",
    description: "API que permite gestionar una colección de libros, con funcionalidades para agregar, eliminar y actualizar libros, así como para consultar la lista de libros disponibles.",
    tech: ["Java", "Spring Boot", "HTML", "CSS", "JS"],
    link: "https://github.com/Balti2003/Proyecto_Api_Biblioteca"
  },
  {
    title: "Sistema VTV",
    description: "Sistema que simula la gestión de la Verificación Técnica Vehicular (VTV). Utiliza programación orientada a objetos para modelar y gestionar la información relacionada con los vehículos y las inspecciones realizadas.",
    tech: ["Java"],
    link: "https://github.com/Balti2003/Proyecto_Sistema_VTV"
  },
  {
    title: "Sistema E-commerce",
    description: "Plataforma E-commerce para la compra de productos. Permite a los usuarios registrarse, navegar productos, agregarlos al carrito y generar pedidos.",
    tech: ["Django", "Python", "HTML", "Bootstrap-CSS", "SQLite"],
    link: "https://github.com/Balti2003/Proyecto_Ecommerce_Django"
  },
  {
    title: "Audiophile E-commerce",
    description: "Adaptación del sitio Audiophile desarrollada con WordPress. El sitio simula una tienda de productos de audio (auriculares, parlantes y más), con un diseño limpio y funcional.",
    tech: ["WordPress", "PHP", "Laragon", "MySQL"],
    link: "https://github.com/Balti2003/Proyecto_wordpress_audiophile"
  },
  {
    title: "Proyectos HTML y CSS",
    description: "Colección de proyectos desarrollados con HTML y CSS. Incluye páginas web estáticas y diseños responsivos.",
    tech: ["HTML", "CSS"],
    link: "https://github.com/Balti2003/Proyectos_HTML_CSS"
  },
  {
    title: "Proyectos React",
    description: "Colección de proyectos desarrollados con React. Cada proyecto incluye un enfoque diferente y una funcionalidad especial.",
    tech: ["React", "HTML", "CSS", "JS"],
    link: "https://github.com/Balti2003/Proyectos_React"
  },
  {
    title: "Proyectos Python",
    description: "Colección de proyectos desarrollados con Python. Cada proyecto está diseñado para abordar un problema específico o implementar una característica única.",
    tech: ["Python", "pygame", "tkinter", "turtle"],
    link: "https://github.com/Balti2003/Proyectos_python"
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? myProjects : myProjects.slice(0, 6);

  return (
    <section id="proyectos" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h3 className="text-gray-500 font-mono text-sm mb-4 tracking-[0.2em]">03. RECENT_WORKS</h3>
        <h2 className="text-4xl font-bold mb-16 text-white">
          Proyectos <span className="text-accent-blue">Destacados</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Reveal key={index}>
              <div className="group h-full relative bg-dark-gray rounded-3xl overflow-hidden border border-white/5 hover:border-accent-purple/30 transition-all duration-500">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-accent-purple/10 rounded-xl text-accent-purple">
                       {/* Icono de código */}
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    <a href={project.link} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">{project.title}</h4>
                  <p className="text-gray-400 mb-6 font-light leading-relaxed flex-grow text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md bg-white/5 text-[9px] uppercase tracking-widest font-bold text-accent-blue/70 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-dark-gray border border-white/10 rounded-xl font-bold hover:border-accent-purple/50 transition-all hover:text-accent-purple shadow-xl"
          >
            {showAll ? "Ver Menos" : "Ver Todos los Proyectos"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;