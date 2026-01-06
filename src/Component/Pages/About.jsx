import { useSelector } from "react-redux";
import { GraduationCap, Code2, Code, Terminal, Sparkles, Building2, Workflow, Layers, ShieldCheck } from 'lucide-react';
import Timeline from "./Timeline";
import { motion } from "framer-motion";

function About() {
    const darkMode = useSelector((state) => state.theme.darkMode);

    const techStack = {
        "Programming": ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
        "Frontend": ["React.js", "Next.js", "Redux", "Tailwind", "AntD"],
        "Backend & DB": ["Node.js", "Express.js", "MongoDB", "Supabase", "Firebase"],
        "Systems & APIs": ["OpenAI", "Gemini", "Razorpay", "WebSockets", "REST", "JWT"]
    };

    return (
        <div
            id="about"
            className={`min-h-screen w-full pt-20 pb-12 px-4 md:px-0 transition-colors duration-500 ${darkMode ? "bg-[#0a0a0a] text-white" : "bg-gray-50 text-gray-900"
                }`}
        >
            <div className="max-w-6xl mx-auto">
                {/* --- HEADER: Optimized for Mobile Scaling --- */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center items-center gap-2 mb-3">
                        <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                            <Code2 size={24} className="text-emerald-500 md:w-8 md:h-8" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                            About <span className="text-rose-500">Me</span>
                        </h2>
                    </div>
                    <p className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>

                        3rd Year CSE Student focused on <span className="text-emerald-500">Distributed Systems</span>,

                        Scalable Backend Architecture, and AI-Driven Automation.

                    </p>
                </motion.div>

                {/* --- MAIN CONTENT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">

                    {/* LEFT SIDE: SDE Core & Projects */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-6 md:space-y-8"
                    >
                        {/* ARCHITECTURAL VISION CARD */}
                        <div className={`p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all ${darkMode ? "bg-emerald-500/5 border-emerald-500/20" : "bg-white border-emerald-100 shadow-xl"}`}>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                                <Terminal size={20} className="text-rose-500" />
                                Architectural Vision
                            </h3>
                            <p className="leading-relaxed mb-6 text-sm md:text-lg opacity-90">
                                I specialize in architecting robust <span className="text-emerald-500 font-bold">MERN Stack</span> ecosystems. My focus lies in
                                <span className="font-semibold"> Low-Level Design (LLD)</span>, ensuring every module I build for 1,000+ users is performant and horizontally scalable.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                                    <Layers size={14} /> SCALABILITY
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-rose-500 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">
                                    <ShieldCheck size={14} /> SECURITY
                                </div>
                            </div>
                        </div>

                        {/* PROJECT: UPLIFY */}
                        <div className={`p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 group transition-all ${darkMode ? "bg-rose-500/5 border-rose-500/20" : "bg-white border-rose-100 shadow-lg"}`}>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-2">
                                    <Building2 className="text-rose-500" size={20} />
                                    <h4 className="text-lg md:text-2xl font-black text-rose-500 tracking-tight uppercase">Uplify</h4>
                                </div>
                                <span className="bg-rose-500 text-white text-[9px] px-2 py-0.5 rounded-full uppercase font-bold animate-pulse">Building</span>
                            </div>
                            <p className={`text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                Engineering a career ecosystem with <span className="font-bold">RBAC</span> and
                                AI scoring algorithms via Gemini API to automate recruitment bottlenecks.
                            </p>
                        </div>

                        {/* PROJECT: AI WORKFLOW */}
                        <div className={`p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 group transition-all ${darkMode ? "bg-emerald-500/5 border-emerald-500/20" : "bg-white border-emerald-100 shadow-lg"}`}>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-2">
                                    <Workflow className="text-emerald-500" size={20} />
                                    <h4 className="text-lg md:text-2xl font-black text-emerald-500 tracking-tight uppercase">AI Workflow</h4>
                                </div>
                                <span className="bg-emerald-500 text-white text-[9px] px-2 py-0.5 rounded-full uppercase font-bold">Research</span>
                            </div>
                            <p className={`text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                Intelligent engine utilizing OpenAI agents to automate repetitive developer workflows and CI/CD tasks.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Technical Arsenal (Sticky only on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`lg:col-span-5 p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 lg:sticky lg:top-24 ${darkMode ? "bg-emerald-500/5 border-emerald-500/20" : "bg-emerald-50 border-emerald-100 shadow-lg"
                            }`}
                    >
                        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
                            <Code size={20} className="text-emerald-500" />
                            Tech Stack
                        </h3>

                        <div className="space-y-5 md:space-y-6">
                            {Object.entries(techStack).map(([category, skills]) => (
                                <div key={category}>
                                    <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-rose-500 font-black mb-2.5">{category}</h4>
                                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`px-2.5 py-1 text-[11px] md:text-xs font-medium rounded-md border transition-all ${darkMode
                                                        ? "bg-white/5 border-white/10 hover:border-emerald-500 hover:text-emerald-400"
                                                        : "bg-white border-emerald-200 hover:border-emerald-500 hover:bg-emerald-50"
                                                    }`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CORE FUNDAMENTALS CARD */}
                        <div className="mt-8 md:mt-10 p-5 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-xl">
                            <h4 className="font-black text-[11px] md:text-xs uppercase mb-3 border-b border-white/20 pb-2 flex items-center gap-2">
                                <Sparkles size={14} /> Core Fundamentals
                            </h4>
                            <div className="text-[10px] md:text-[11px] grid grid-cols-2 gap-y-2.5 font-medium opacity-95">
                                <span className="flex items-center gap-1.5">● Data Structures</span>
                                <span className="flex items-center gap-1.5">● System Design</span>
                                <span className="flex items-center gap-1.5">● OOPs Design</span>
                                <span className="flex items-center gap-1.5">● OS Internals</span>
                                <span className="flex items-center gap-1.5">● DBMS / SQL</span>
                                <span className="flex items-center gap-1.5">● Networking</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- ACADEMIC TIMELINE --- */}
                <div className="mt-24 md:mt-32">
                    <motion.div
                        className="flex flex-col items-center mb-12 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <GraduationCap size={40} className="text-rose-500 mb-2 md:w-12 md:h-12" />
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Academic <span className="text-emerald-500">Timeline</span></h2>
                        <div className="h-1.5 w-20 md:w-32 bg-rose-500 rounded-full mt-3"></div>
                    </motion.div>
                    <div className="px-2 md:px-0">
                        <Timeline />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;