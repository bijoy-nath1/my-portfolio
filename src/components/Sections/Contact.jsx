import { motion } from "framer-motion";
import { SiMinutemailer } from "react-icons/si";
import { MdFormatListNumbered } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function ContactFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-black text-white py-20 px-6 md:px-24 min-h-[450px] flex flex-col justify-between rounded-lg m-6 shadow-lg"
      id="Contact"
    >
      {/* Contact Info & CTA */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-gray-400 mt-2 text-lg">
            Heres my contact information 
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 justify-center md:justify-start text-gray-300">
              <SiMinutemailer className="text-xl text-white" />
              <span>bijoynath706@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start text-gray-300">
              <MdFormatListNumbered className="text-xl text-white" />
              <span>+91 6003397308</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <a href="https://mail.google.com/">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium text-lg transition-transform transform hover:scale-105 hover:bg-gray-200 shadow-md cursor-pointer">
              Contact Me
            </button>
          </a>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex justify-center mt-10 space-x-6"
      >
        <a
          href="https://www.instagram.com/bijay0fficial/"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaFacebook className="text-2xl" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <RiTwitterXLine className="text-2xl" />
        </a>
      </motion.div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center text-gray-500 text-sm mt-12"
      >
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}
