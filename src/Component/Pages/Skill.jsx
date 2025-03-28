import React from "react";
import { data } from "../Data/data";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Lightbulb } from 'lucide-react';

const fadeInAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.5 },
  }),
};

export default function Skill() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section
      id="skills"
      className={`flex w-full flex-col items-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } justify-center py-14 text-center`}
    >
      <div className="flex gap-3">
                    {/* User Icon */}
                    <Lightbulb  size={40} className="mt-2" />
                    {/* About Me Heading */}
                    <h1 className="text-[34px] font-bold mb-11">My <span className="text-yellow-600">Skill</span></h1>
                </div>

      <ul className="my-26 mb-[85px] flex max-w-[53rem] flex-wrap items-center justify-center gap-2 text-lg">
        {data.map((skill, index) => (
          <motion.li
            key={index}
            className={`borderBlack flex items-center justify-center rounded-xl px-5 py-3 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            variants={fadeInAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <img
              src={skill[1]}
              alt={skill[0]}
              width={24}
              height={24}
              className="mr-2 inline h-6 w-6"
            />
            {skill[0]}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}