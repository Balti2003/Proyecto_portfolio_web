const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-sm font-bold">
          <span className="animate-shimmer">balti.dev</span>
        </div>
        
        <p className="text-gray-600 text-xs font-mono uppercase tracking-[0.2em]">
          &gt; No dejes de programar
        </p>

        <p className="text-gray-500 text-[10px] uppercase">
          © 2026 Baltasar Lomello - Futuro Ing. en Sistemas y Desarrollador Full Stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;