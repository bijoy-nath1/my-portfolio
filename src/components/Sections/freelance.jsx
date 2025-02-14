import React from "react";
import { motion } from "framer-motion";
import GithubLogo from "../../assets/GitHub_logo.png";
import vercelLogo from "../../assets/vercel.png";
import { freelanceWorks } from "../ComponentUtils/projectDetail";
import Typewriter from "../ComponentUtils/Typewriter";

function Freelance() {
  return (
    <motion.div
      className="w-full overflow-x-auto scrollbar-hide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Scrollable wrapper */}
      <motion.div
        className="flex gap-4 p-4 overflow-x-auto scrollbar-hide"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {freelanceWorks.map((project, index) => (
          <motion.section
            key={index}
            className="min-w-[60%] sm:min-w-[50%] md:min-w-[50%] lg:min-w-[30%] xl:min-w-[25%] max-w-[400px] mx-3 p-6 rounded-lg flex flex-col justify-between shadow-lg scrollbar-hide bg-white"
            id="Projects"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-start">
              <Typewriter text="  freelance work" />
            </div>
            <motion.div
              className="w-full h-40 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={project.image} alt="" className="w-fit h-[70%]" />
            </motion.div>
            <div className="h-full flex flex-col gap-4">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                {project.name}
              </h1>
              <p className="text-lg">{project.description}</p>
            </div>
            <div className="flex gap-4 items-end mt-4">
              <motion.button
                className="px-5 py-2 rounded-lg border border-black flex gap-2 items-center"
                whileHover={{ scale: 1.1 }}
              >
                <img src={GithubLogo} alt="GitHub" className="w-5 h-5" />
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </motion.button>
              <motion.button
                className="px-5 py-2 rounded-lg border border-black flex gap-2 items-center"
                whileHover={{ scale: 1.1 }}
              >
                <img src={vercelLogo} alt="Vercel" className="w-5 h-5" />
                <a
                  href={project.hostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </motion.button>
            </div>
          </motion.section>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Freelance;
