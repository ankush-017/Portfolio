import React from 'react';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import timeline from "../timeline";
import { School, GraduationCap, Calendar } from "lucide-react";

export default function Timeline({ defaultColor }) {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <div className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 py-20">
            
            {/* --- Central Vertical Line --- */}
            <div className={`absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 h-[90%] w-0.5 top-10 ${darkMode ? "bg-zinc-800" : "bg-zinc-200"}`}>
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full bg-gradient-to-b from-emerald-500 via-rose-500 to-emerald-500 opacity-50"
                />
            </div>

            {timeline.map((element, index) => {
                const isEven = index % 2 === 0;
                // Safely handle dynamic color classes
                const accentColor = element.color || "emerald"; 
                const colorClass = defaultColor || `bg-${accentColor}-500`;

                return (
                    <div key={element.id} className={`flex items-center justify-between w-full mb-16 sm:mb-24 relative`}>
                        
                        {/* 1. Date (Desktop - Alternating) */}
                        <div className={`hidden sm:flex w-[45%] ${isEven ? "justify-end pr-12" : "order-last justify-start pl-12"}`}>
                            <motion.div 
                                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-zinc-500 font-mono font-bold text-lg"
                            >
                                <Calendar size={18} className="text-emerald-500" />
                                {element.date}
                            </motion.div>
                        </div>

                        {/* 2. Central Icon Node */}
                        <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className={`absolute left-8 sm:left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 shadow-xl 
                                ${darkMode ? "bg-zinc-900 border-zinc-950 text-white" : "bg-white border-slate-50 text-zinc-900"}`}
                        >
                            <div className={`${colorClass} p-2 rounded-full text-white shadow-lg shadow-emerald-500/20`}>
                                <School size={20} />
                            </div>
                        </motion.div>

                        {/* 3. Content Card */}
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className={`w-[85%] sm:w-[45%] ml-16 sm:ml-0 group`}
                        >
                            <div className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-2xl 
                                ${darkMode 
                                    ? "bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50" 
                                    : "bg-white border-zinc-200 hover:border-emerald-500/50"}`}>
                                
                                {/* Accent Corner Decor */}
                                <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none overflow-hidden rounded-tr-2xl`}>
                                    <div className={`absolute top-[-20%] right-[-20%] w-full h-full rotate-45 ${colorClass}`} />
                                </div>

                                <span className={`text-xs font-bold uppercase tracking-widest sm:hidden mb-2 block ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}>
                                    {element.date}
                                </span>

                                <h3 className="text-xl font-black mb-2 tracking-tight">{element.title}</h3>
                                
                                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                                    {element.description}
                                </p>

                                <div className="flex items-center gap-2">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClass}`} />
                                    <span className="text-xs font-bold opacity-70 tracking-wide uppercase italic">
                                        {element.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}