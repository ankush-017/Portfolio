import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import ProjectSection from './ProjectSection.jsx';

function Project() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`relative flex flex-col items-center justify-start px-6 md:px-20 py-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#050505] text-white' : 'bg-slate-50 text-zinc-900'}`}>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center z-10"
      >
        <h2 className="text-sm font-mono tracking-[0.3em] text-emerald-500 mb-4 uppercase">
          &lt; Featured_Work /&gt;
        </h2>
        <h1 className="text-4xl md:text-5xl text-emerald-500 font-black mb-6 tracking-tight">
          Highlighted <span className="text-transparent bg-clip-text text-rose-500">Projects</span>
        </h1>
        <p className={`max-w-2xl mx-auto mb-16 text-base md:text-lg ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
          A collection of systems and applications focused on performance, scalability, and user experience.
        </p>
      </motion.div>

      <ProjectSection />
    </section>
  );
}

export default Project;