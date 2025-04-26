import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';
import profile from '../../assets/profile.png';
import { Download, CircleArrowDown, Linkedin, Github, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';

function Hero() {
    
    const darkMode = useSelector((state) => state.theme.darkMode);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <div className={`flex flex-col pt-52 md:pt-20 gap-14 md:gap-0 md:flex-row h-screen md:h-[80vh] lg:h-[100vh] w-full items-center justify-center px-5 mx-auto z-10 text-center md:text-left ${darkMode ? "text-white" : "text-gray-800"}`}>
            {/* Left Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div>
                    <h1 className="text-4xl font-bold">Hi There,</h1>
                    <h1 className="text-5xl font-extrabold">
                        I am <span className={`${darkMode ? "text-blue-500" : "text-yellow-600"}`}>Ankush</span> <span className={`${darkMode ? "text-yellow-400" : "text-green-500"}`}>Kumar</span>
                    </h1>
                </div>

                {/* TypeWriter Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="mt-4"
                >
                    <TypeWriter />
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex space-x-4 mt-6 text-[18px]"
                >
                    <a
                        href="/Resume/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...(!isMobile && { download: "Ankush_Resume.pdf" })} // ← only on desktop
                        className="px-5 py-2 flex cursor-pointer items-center gap-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition group"
                    >
                        <span>Resume</span>
                        <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>


                    <Link to="about" className="px-5 cursor-pointer py-2 flex items-center gap-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition group">
                        <span>About Me</span>
                        <CircleArrowDown className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='mt-5 flex gap-5'
                >
                    <a href="https://www.linkedin.com/in/ankush-kumar-875079282/" target='_blank' className="p-3 rounded-full text-white cursor-pointer bg-blue-700 hover:text-yellow-400 transition-all duration-200">
                        <Linkedin />
                    </a>
                    <a href='https://github.com/ankush-017' className={`p-3 rounded-full cursor-pointer bg-black hover:text-yellow-400 transition-all duration-200 ${darkMode ? "bg-white text-black" : "text-white font-bold"}`}>
                        <Github />
                    </a>
                    <a href='mailto:ak4001493@gmail.com' className="p-3 rounded-full text-white cursor-pointer bg-red-700 hover:text-yellow-400 transition-all duration-200">
                        <Mail />
                    </a>
                    <a className="p-3 rounded-full text-white cursor-pointer bg-pink-700 hover:text-yellow-400 transition-all duration-200">
                        <Instagram />
                    </a>
                </motion.div>  {/* Fixed: Removed the extra <div> inside */}
            </div>

            {/* Right Section - Profile Image Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeIn", delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex-1 flex items-center justify-center"
            >
                <img src={profile} alt="Profile" className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full object-cover" />
            </motion.div>
        </div>
    );
}
export default Hero;