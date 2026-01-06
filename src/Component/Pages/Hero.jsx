import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';
import profile from '../../assets/image.png';
import { Download, CircleArrowDown, Linkedin, Github, Mail, Instagram, Cpu, Globe, Database } from 'lucide-react';
import { Link } from 'react-scroll';

function Hero() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className={`pt-2 md:pt-16 flex flex-col md:flex-row min-h-screen w-full items-center justify-center px-6 lg:px-20 overflow-hidden transition-colors duration-500 ${darkMode ? "bg-zinc-950 text-white" : "bg-slate-50 text-zinc-900"}`}>

            {/* --- Animated Background Decorative Glows --- */}
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-rose-500/15 blur-[120px] rounded-full pointer-events-none"
            />

            {/* --- Left Content Section --- */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 z-20 flex flex-col items-center md:items-start text-center md:text-left pt-32 md:pt-0"
            >
                <motion.div variants={itemVariants}>
                    <h3 className={`text-sm md:text-lg font-mono mb-3 tracking-[0.4em] font-bold px-3 py-1 rounded-md border inline-block ${darkMode ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" : "text-emerald-700 border-emerald-200 bg-emerald-50"}`}>
                        &lt;ENGINEER_IN_PROGRESS /&gt;
                    </h3>
                    <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-[1] mb-4">
                        I am <br />
                        <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">Ankush</span>{" "}
                        <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">Kumar</span>
                    </h1>
                </motion.div>

                <motion.div variants={itemVariants} className="h-10 md:h-12 flex items-center text-xl md:text-3xl font-medium text-zinc-500 dark:text-zinc-400">
                    <TypeWriter />
                </motion.div>

                <motion.p variants={itemVariants} className="mt-4 max-w-lg text-sm md:text-base opacity-70 leading-relaxed">
                    Building high-performance <span className="text-emerald-500 font-semibold">Distributed Systems</span> and architecting the future of web ecosystems with logic and precision.
                </motion.p>

                {/* --- Action Buttons --- */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
                    <a
                        href="/Resume/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...(!isMobile && { download: "Ankush_Resume.pdf" })}
                        className={`group px-8 py-3.5 rounded-xl flex items-center gap-3 font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${darkMode
                            ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
                            : "bg-zinc-900 text-white hover:bg-black shadow-xl"
                            }`}
                    >
                        <span>GET RESUME</span>
                        <Download size={18} className="transition-transform group-hover:translate-y-1" />
                    </a>

                    <Link
                        to="about"
                        smooth={true}
                        className={`group px-8 py-3.5 rounded-xl flex items-center gap-3 font-bold border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 ${darkMode
                            ? "border-zinc-800 text-zinc-400 hover:border-rose-500 hover:text-rose-500 hover:bg-rose-500/5"
                            : "border-zinc-200 text-zinc-600 hover:border-rose-600 hover:text-rose-600 shadow-sm"
                            }`}
                    >
                        <span>About Me</span>
                        <CircleArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
                    </Link>
                </motion.div>

                {/* --- Social Icons --- */}
                <motion.div variants={itemVariants} className="flex gap-4 mt-12">
                    {[
                        { icon: Linkedin, color: "hover:bg-blue-600", url: "https://www.linkedin.com/in/ankush-kumar-875079282/" },
                        { icon: Github, color: "hover:bg-zinc-800", url: "https://github.com/ankush-017" },
                        { icon: Mail, color: "hover:bg-red-500", url: "mailto:ak4001493@gmail.com" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.url}
                            target="_blank"
                            className={`p-3 rounded-lg border flex items-center justify-center transition-all duration-300 hover:text-white ${social.color} ${darkMode
                                ? "border-zinc-800 bg-zinc-900/50 text-zinc-500"
                                : "border-zinc-200 bg-white text-zinc-500"
                                }`}
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </motion.div>
            </motion.div>

            {/* --- Right Section - Interactive Profile --- */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="flex-1 relative flex items-center justify-center mt-20 md:mt-0 z-10"
            >
                {/* FLOATING TECH BADGES (Animated Orbits) */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className={`absolute top-10 left-10 md:left-20 z-40 p-3 ${darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white"} rounded-2xl shadow-2xl border flex items-center gap-2`}
                >
                    <Cpu className="text-emerald-500" size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Logic</span>
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -2, 2, 0] // Added a very subtle tilt for a "floating" feel
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        delay: 0.5,
                        ease: "easeInOut"
                    }}
                    className={`absolute bottom-10 right-10 md:right-20 z-40 p-3 flex items-center gap-2 rounded-2xl shadow-2xl border backdrop-blur-md transition-colors duration-500 ${darkMode
                            ? "bg-zinc-900/80 border-zinc-800 text-white shadow-rose-500/10"
                            : "bg-white border-rose-100 text-zinc-900 shadow-rose-200/50"
                        }`}
                >
                    <div className="relative">
                        {/* Pulse effect behind the icon */}
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 bg-rose-500/20 rounded-full blur-sm"
                        />
                        <Globe className="text-rose-500 relative z-10" size={20} />
                    </div>

                    <div className="flex flex-col leading-none">
                        <span className="text-[10px] font-black uppercase tracking-[0.15em]">System</span>
                    </div>
                </motion.div>

                {/* Aura Glow */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className={`absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[120px] pointer-events-none ${darkMode ? "bg-emerald-500" : "bg-emerald-300"}`}
                />

                {/* Profile Image Container */}
                <div className="relative group">
                    {/* Animated Geometric Frames */}
                    <div className={`absolute -inset-6 rounded-2xl border-2 border-emerald-500/20 transition-all duration-700 group-hover:rotate-12 group-hover:scale-105`} />
                    <div className={`absolute -inset-6 rounded-2xl border-2 border-rose-500/10 transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110`} />

                    {/* The Image Wrapper */}
                    <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-2xl overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl z-30">
                        <img
                            src={profile}
                            alt="Ankush Kumar"
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
export default Hero;