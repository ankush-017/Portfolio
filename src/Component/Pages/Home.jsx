import React from 'react';
import ParticlesBackground from '../ParticlesBackground';
import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import { motion } from 'framer-motion';

function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO SECTION - The Entry Point */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Particle Layer */}
        {/* <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div> */}

        {/* Hero Content Layer */}
        <div className="relative z-10 w-full">
          <Hero />
        </div>
        
        {/* Subtle Scroll Indicator for SDE Look */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-[30px] h-[50px] border-2 border-emerald-500/30 rounded-full flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-rose-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* CORE CONTENT - The Engineering Depth */}
      <section id="about-section" className="relative z-10 bg-transparent">
        <About />
      </section>

      {/* <section id="skills-section" className="relative z-10 bg-transparent">
        <Skill />
      </section> */}
      
      {/* You can add a Contact or Footer section here later */}
    </main>
  );
}
export default Home;