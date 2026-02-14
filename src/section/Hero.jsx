
export default function Hero() {
  return (
    <section
  id="hero"
  className="h-screen flex items-center justify-center bg-black text-white">

      <h1 className="text-5xl font-bold">Trung</h1>
      <p className="mt-4 text-xl text-gray-400">
        I build modern web applications
      </p>
      <button className="mt-6 px-6 py-2 border border-white hover:bg-white hover:text-black transition">
        View Projects
      </button>
    </section>
  )
}
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Trung
      </motion.h1>
    </section>
  );
}

