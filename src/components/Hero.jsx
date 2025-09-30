import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaChevronDown,
  FaPython
} from "react-icons/fa";
import { SiTensorflow, SiScikitlearn } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false });
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adjust badge positions based on screen size
  const getBadgePositions = () => {
    if (windowWidth < 640) { // small mobile
      return {
        python: { top: "-10px", right: "0px" },
        sklearn: { bottom: "0px", right: "0px" },
        tensorflow: { top: "50%", left: "-10px" },
        badgeSize: "2.5rem"
      };
    } else if (windowWidth < 1024) { // tablet/small laptop
      return {
        python: { top: "-10px", right: "10px" },
        sklearn: { bottom: "0px", right: "10px" },
        tensorflow: { top: "50%", left: "-10px" },
        badgeSize: "3rem"
      };
    } else { // large screens
      return {
        python: { top: "-15px", right: "0px" },
        sklearn: { bottom: "0px", right: "0px" },
        tensorflow: { top: "50%", left: "-15px" },
        badgeSize: "3.5rem"
      };
    }
  };
  
  const badgePositions = getBadgePositions();

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex items-start justify-center relative overflow-hidden -mt-26" 
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32 md:mt-36">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content - Text */}
          <motion.div
            className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-block px-4 py-1 bg-indigo-900/30 text-indigo-400 font-medium rounded-full mb-4 border border-indigo-500/20"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Kunal Sharma
              </span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 min-h-[3rem] sm:min-h-[4rem]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <span className="text-gray-300">I'm a </span>
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "ML Specialist",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 lg:pr-4 text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Computer Science student at IIIT Kota with 8.8/10 CGPA and proven
              expertise in developing production-grade machine learning systems
              with 85-99.95% accuracy. Ranked in top 5% on LeetCode with 300+
              algorithmic solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <motion.a
                href="#projects"
                className="btn-primary text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/KUNAL_SHARMA_RESUME_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileAlt className="mr-2" /> Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              {/* Social icons */}
              {[
                { icon: <FaGithub />, href: "https://www.linkedin.com/in/kunal-sharma-1a8457257/", ariaLabel: "GitHub Profile" },
                { icon: <FaLinkedin />, href: "https://linkedin.com/in/kunalsharma", ariaLabel: "LinkedIn Profile" },
                { icon: <FaEnvelope />, href: "mailto:kunalsharma13579kunals@gmail.com", ariaLabel: "Email Me" }
              ].map((social, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800/70 rounded-lg border border-gray-700/50 hover:border-indigo-500/50"
                >
                  <a
                    href={social.href}
                    target={social.icon.type !== FaEnvelope ? "_blank" : undefined}
                    rel={social.icon.type !== FaEnvelope ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white text-lg sm:text-xl transition-colors duration-300 flex items-center justify-center w-full h-full"
                    aria-label={social.ariaLabel}
                  >
                    {social.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 order-1 lg:order-2 mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-[250px] sm:max-w-xs md:max-w-sm">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20 -z-10 transform scale-110 animate-pulse"></div>

              {/* Main Photo Frame with Skill Badges */}
              <div className="relative rounded-full overflow-visible border-4 border-indigo-500/30 p-2 bg-gray-900/70 shadow-2xl">
                <img
                  src="/Profile.jpeg"
                  alt="Kunal Sharma"
                  className="rounded-full w-full h-auto object-cover aspect-square"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400.png?text=Kunal+Sharma";
                  }}
                />

                {/* Decorative Ring */}
                <div className="absolute inset-0 border-8 border-indigo-500/10 rounded-full"></div>

                {/* Skill badges with logos floating around the photo */}
                <motion.div
                  className="absolute p-2 sm:p-3 rounded-full z-20 backdrop-blur-md flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.8))",
                    boxShadow:
                      "0 4px 15px rgba(99, 102, 241, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    width: badgePositions.badgeSize,
                    height: badgePositions.badgeSize,
                    top: badgePositions.python.top,
                    right: badgePositions.python.right
                  }}
                  animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaPython className="text-white text-base sm:text-xl" />
                </motion.div>

                <motion.div
                  className="absolute p-2 sm:p-3 rounded-full z-20 backdrop-blur-md flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(79, 70, 229, 0.8), rgba(219, 39, 119, 0.8))",
                    boxShadow:
                      "0 4px 15px rgba(219, 39, 119, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    width: badgePositions.badgeSize,
                    height: badgePositions.badgeSize,
                    bottom: badgePositions.sklearn.bottom,
                    right: badgePositions.sklearn.right
                  }}
                  animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SiScikitlearn className="text-white text-base sm:text-xl" />
                </motion.div>

                <motion.div
                  className="absolute p-2 sm:p-3 rounded-full z-20 backdrop-blur-md flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.8))",
                    boxShadow:
                      "0 4px 15px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    width: badgePositions.badgeSize,
                    height: badgePositions.badgeSize,
                    top: badgePositions.tensorflow.top,
                    left: badgePositions.tensorflow.left,
                    transform: "translateY(-50%)"
                  }}
                  animate={{ y: ["-50%", "calc(-50% + 4px)", "-50%"], x: [0, -3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SiTensorflow className="text-white text-base sm:text-xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - visible only on larger screens */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900/50 border border-gray-700"
          >
            <FaChevronDown />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
