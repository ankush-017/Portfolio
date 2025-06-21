import { useSelector } from "react-redux";
import { User, GraduationCap } from 'lucide-react';
import Timeline from "./Timeline";
import { motion } from "framer-motion";

function About() {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <div
            id="about"
            className={`min-h-screen w-full pt-20 px-4 md:px-0 ${darkMode ? "bg-black text-white" : "bg-white text-gray-800"
                }`}
        >
            <div className="max-w-5xl mx-auto">
                {/* Heading Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <User size={32} />
                        <h2 className="text-4xl font-bold">
                            About <span className="text-yellow-500">Me</span>
                        </h2>
                    </div>
                    <p className="max-w-2xl mx-auto text-gray-400 text-md">
                        I'm a Third-year B.Tech student with a deep passion for
                        software development and competitive programming.
                    </p>
                </motion.div>

                {/* About Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-2xl p-8 md:p-10 backdrop-blur-lg shadow-2xl border ${darkMode
                        ? "bg-white/5 border-white/10 text-white"
                        : "bg-white border-gray-200 text-gray-900"
                        }`}
                >
                    {/* Glow background circle */}
                    <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-tr from-blue-500 via-purple-600 to-yellow-500 opacity-20 rounded-full blur-3xl z-0" />

                    <div className="relative z-10">
                        {/* <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
                            I'm <span className="text-blue-600"> Ankush </span><span className="text-yellow-500">Kumar</span>
                        </h3> */}

                        <ul className="space-y-4 text-lg md:text-xl font-medium flex flex-col justify-center items-center leading-relaxed">
                            <li className="flex items-center gap-3">
                                <span className="text-blue-400 text-xl">🚀</span>
                                <span>Driven SDE aspirant building real-world scalable solutions.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-pink-400 text-xl">🧠</span>
                                <span>Active in competitive programming & problem solving.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-purple-400 text-xl">👥</span>
                                <span>Enjoy working in teams and shipping collaborative tech.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-400 text-xl">🔧</span>
                                <span>Love building clean, efficient & impactful applications.</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Education Timeline */}
                <div className="mt-16">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <GraduationCap size={32} />
                        <h2 className="text-3xl font-bold">
                            Educ<span className="text-yellow-500">ation</span>
                        </h2>
                    </div>
                    <Timeline />
                </div>
            </div>
        </div>
    );
}

export default About;