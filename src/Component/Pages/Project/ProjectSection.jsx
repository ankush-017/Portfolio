import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { projectFile } from './project.js';

function ProjectSection() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl'>
      {projectFile.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`group relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-500 ${
            darkMode 
            ? 'bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900' 
            : 'bg-white border-zinc-200 hover:shadow-2xl shadow-sm'
          }`}
        >
          {/* Image Container */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold tracking-tight group-hover:text-emerald-500 transition-colors">
                {item.name}
              </h3>
              <Code2 size={18} className="opacity-20" />
            </div>

            <p className={`text-sm leading-relaxed mb-6 flex-grow ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              {item.desc}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {item.techstack.split(',').map((tech, i) => (
                <span 
                  key={i} 
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${
                    darkMode 
                    ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' 
                    : 'bg-emerald-50 border-emerald-100 text-emerald-700'
                  }`}
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-auto">
              {item.link && (
                <a
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex items-center gap-2 text-sm font-bold transition-all ${
                    darkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-black"
                  }`}
                >
                  <Github size={18} /> Code
                </a>
              )}
              {item.demo && (
                <a
                  href={item.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="ml-auto flex items-center gap-2 bg-emerald-500 text-zinc-950 px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-400 transition-all active:scale-95"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectSection;