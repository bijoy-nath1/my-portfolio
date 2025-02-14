import { motion } from "framer-motion";
import Typewriter from "../ComponentUtils/Typewriter";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Slide from left
      animate={{ opacity: 1, x: 0 }} // Slide to normal position
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-full p-6  text-white rounded-xl shadow-lg mx-6 my-3"
      id="Experience"
    >
      <div className="flex justify-start">
        <Typewriter text="  experience" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-800 text-center mb-6"
      >
        While I don't have formal industry experience, I have worked on
        real-world projects that showcase my skills.
      </motion.p>

      <div className="space-y-6">
        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gray-800 p-4 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold">Personal Projects</h3>
          <p className="text-gray-400">
            I have built multiple projects demonstrating my skills in React,
            Tailwind CSS, and frontend development. These projects showcase my
            problem-solving abilities and understanding of real-world
            application development.
          </p>
        </motion.div>

        {/* Freelance Work Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gray-800 p-4 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold">Freelance Work</h3>
          <p className="text-gray-400">
            I have successfully completed a freelance project, working with a
            real client to deliver a functional and optimized solution. This
            experience allowed me to apply my knowledge in a professional
            setting and meet client expectations.
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-600 text-center mt-6"
      >
        I am eager to bring my skills to a professional team and continue
        growing as a developer.
      </motion.p>
    </motion.div>
  );
};

export default Experience;
