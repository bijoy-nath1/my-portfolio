import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95, color: "bg-red-500" },
  { name: "CSS", level: 90, color: "bg-blue-500" },
  { name: "JavaScript", level: 85, color: "bg-yellow-500" },
  { name: "React", level: 80, color: "bg-cyan-500" },
  { name: "Tailwind CSS", level: 85, color: "bg-indigo-500" },
  { name: "Next.js", level: 75, color: "bg-purple-700" },
  { name: "TypeScript", level: 70, color: "bg-blue-600" },
  { name: "GSAP", level: 65, color: "bg-green-500" },
];

export default function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.div
      id="Skills"
      className="p-6 sm:p-8 md:p-10 lg:p-12 text-white rounded-2xl shadow-2xl  mx-auto min-h-[50vh] flex flex-col justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-44 flex justify-start items-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex justify-start">
          <h1 className="font-mono  text-black  border-1 border-amber-500 px-4 py-1 rounded-xl">
            skills
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-xl bg-gray-800 shadow-lg relative cursor-pointer"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span
                className={`px-2 py-1 rounded-lg text-sm font-semibold ${skill.color} text-white`}
              >
                {skill.level}%
              </span>
            </div>
            <div className="relative w-full h-3 bg-gray-700 rounded-md overflow-hidden">
              <motion.div
                className={`absolute h-full ${skill.color} rounded-md`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            {hoveredSkill === skill.name && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center text-xl font-bold rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {skill.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
