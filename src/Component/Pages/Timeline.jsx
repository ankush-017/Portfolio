import { motion } from "framer-motion";
import timeline from "../timeline";
import { School } from "lucide-react";

export default function Timeline({ defaultColor }) {
  return (
    <div className="flex flex-col pr-5 items-center justify-center w-full overflow-hidden">
      {timeline.map((element, index) => {
        const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500"];
        const color = defaultColor || `bg-${element.color}-500`;

        // Animation variants for the timeline item
        const itemVariants = {
          hidden: { opacity: 0, y: 50 }, // Start position (hidden)
          visible: { opacity: 1, y: 0 }, // End position (visible)
        };

        return (
          <motion.div
            key={element.id}
            className="flex items-center my-6 w-full max-w-2xl relative gap-x-2"
            initial="hidden" // Initial animation state
            whileInView="visible" // Animate when in view
            // viewport={{ once: true }} // Animate only once
            variants={itemVariants} // Animation variants
            transition={{ duration: 0.5, delay: index * 0.2 }} // Animation delay and duration
          >
            {/* Vertical Line for Small Screens */}
            <div className={`${color} w-0.5 h-12 opacity-100 sm:hidden`} />

            {/* Timeline Item */}
            <div className="hidden sm:flex items-center w-44 relative">
              <div className="w-4/5 text-gray-500 font-bold">{element.date}</div>
              <div className={`${color} w-0.5 h-full opacity-70`} />
              <div className={`${color} h-0.5 w-8 opacity-70`} />
            </div>

            {/* Icon (School) */}
            <motion.div
              className={`${color} p-2 rounded-full text-white flex justify-center items-center`}
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on tap
            >
              <School />
            </motion.div>

            {/* Content Card with margin for spacing */}
            <motion.div
              className="border flex flex-col justify-center items-center border-gray-600 rounded-lg px-6 py-4 bg-gray-800 w-full text-center sm:w-96 ml-4"
              whileHover={{ scale: 1.02 }} // Slightly scale up on hover
              transition={{ type: "spring", stiffness: 300 }} // Spring animation
            >
              <h3 className={`text-xl text-center text-white font-semibold`}>{element.title}</h3>
              <p className="text-left text-gray-300">{element.description}</p>
              <p className="text-left font-bold text-gray-300" style={{color: element.color}}>{element.location}</p>
              <p className="text-gray-400 text-sm block sm:hidden">{element.date}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}