import { useSelector } from "react-redux";
import { User, GraduationCap } from 'lucide-react';
import Timeline from "./Timeline";
import { motion } from "framer-motion";


function About() {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <div id="about" className={`pt-11 md:pt-0 min-h-screen ${darkMode ? "bg-black text-gray-200" : "bg-white text-gray-700"} flex flex-col w-full items-center `}>
            <motion.div
                className="flex flex-col mt-9 items-center"
                initial={{ opacity: 0, x: -100 }}  // Start from the left
                whileInView={{ opacity: 1, x: 0 }} // Animate to normal position
                viewport={{ once: true }}  // Animate only once per visit
                transition={{ duration: 0.8, ease: "easeOut" }}  // Smooth animation
            >
                <div className="flex gap-3">
                    {/* User Icon */}
                    <User size={40} className="mt-2" />
                    {/* About Me Heading */}
                    <h1 className="text-[38px] font-bold">About <span className="text-yellow-600">Me</span></h1>
                </div>

                {/* Animated Content */}
                <motion.div
                    className="bg-yellow-600 max-w-3xl md:w-[900px] rounded-lg mt-3"
                    initial={{ opacity: 0, x: 100 }}  // Start from the right
                    whileInView={{ opacity: 1, x: 0 }}  // Move into place
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Delay for smooth effect
                >
                    <div className="md:px-16 px-7 py-5">
                        <h1 className="text-center text-3xl font-bold">
                            I'm <span className="text-[#391279]">Ankush Kumar</span>
                        </h1>
                        <p className="mt-2 text-[16px] font-bold text-[#6c113c]">
                            I am a passionate and driven B.Tech student in my 2nd year, aspiring to become a Software Development Engineer (SDE).
                            I enjoy building scalable applications and solving complex problems.
                        </p>
                        <p className="mt-2 text-[16px] font-bold text-[#301660]">
                            Competitive programming excites me, and I continuously work on sharpening my problem-solving skills to tackle real-world challenges.
                        </p>
                        <p className="mt-2 text-[16px] font-bold text-[#601c16]">
                            I thrive in collaborative environments and am always eager to learn new technologies, striving to create efficient, high-performing software solutions that make a meaningful impact.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
            <hr className={`border-t-4 mt-7 ${darkMode ? "border-white" : "border-black"} my-4 w-[900px] mx-auto`} />
            <div className="flex flex-col mt-3 items-center justify-center">
                <div className="flex gap-3">
                    {/* User Icon */}
                    <GraduationCap size={40} className="mt-2" />
                    {/* About Me Heading */}
                    <h1 className="text-[38px] font-bold mb-3">Educ<span className="text-yellow-600">ation</span></h1>
                </div>
                <Timeline />
            </div>
        </div>
    );
}

export default About;