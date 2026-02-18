import { motion } from "framer-motion";

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Empieza invisible y un poco más abajo
      whileInView={{ opacity: 1, y: 0 }} // Cuando se ve, sube y aparece
      viewport={{ once: true }} // Solo se anima la primera vez que lo ves
      transition={{ duration: 0.8, ease: "easeOut" }} // Movimiento suave
    >
      {children}
    </motion.div>
  );
};

export default Reveal;