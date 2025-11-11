import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaPython,
  FaCode,
  FaJs,
  FaDatabase,
  FaDocker,
  FaBrain,
  FaChartBar,
  FaServer,
  FaGit,
  FaTools,
  FaMicrochip,
  FaTrophy,
  FaEye,
  FaCubes,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaStar,
  FaCloud,
  FaNetworkWired,
  FaRobot,
  FaFireAlt,
  FaKeyboard,
  FaLaptopCode,
  FaUserCog,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiFastapi,
  SiJupyter,
  SiStreamlit,
  SiLangchain,
  SiPrometheus,
  SiGooglecloud,
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiCodingninjas,
  SiReact,
  SiOpencv,
  SiKubernetes,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// Fixed issue: Removed SiChromadb since it's not available
const skillIcons = {
  // Programming Languages
  Python: <FaPython className="text-blue-500" />,
  "C++": <SiCplusplus className="text-blue-600" />,
  C: <SiC className="text-blue-400" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  SQL: <FaDatabase className="text-orange-500" />,
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-500" />,

  // Development Tools
  GitHub: <FaGithub className="text-gray-300" />,
  Git: <FaGit className="text-orange-600" />,
  "VS Code": <VscCode className="text-blue-500" />,
  Jupyter: <SiJupyter className="text-orange-500" />,
  Docker: <FaDocker className="text-blue-500" />,
  Kubernetes: <SiKubernetes className="text-blue-600" />,
  FastAPI: <SiFastapi className="text-teal-500" />,
  "REST APIs": <FaServer className="text-green-400" />,
  "API Integration": <FaNetworkWired className="text-purple-400" />,
  Firebase: <SiFirebase className="text-yellow-500" />,

  // Frontend & App Dev
  Streamlit: <SiStreamlit className="text-red-500" />,
  "React Native": <SiReact className="text-blue-400" />,

  // Cloud & Infrastructure
  "Google Cloud": <SiGooglecloud className="text-blue-400" />,
  Microservices: <FaNetworkWired className="text-green-500" />,
  "Real-time Systems": <FaFireAlt className="text-orange-500" />,
  "Cloud Deployment": <FaCloud className="text-blue-300" />,
  "Performance Optimization": <FaKeyboard className="text-indigo-400" />,

  // Machine Learning Core
  "Machine Learning": <FaBrain className="text-purple-500" />,
  "Neural Networks": <FaBrain className="text-purple-600" />,
  Classification: <FaCode className="text-indigo-400" />,
  Regression: <FaChartBar className="text-teal-500" />,
  "Feature Engineering": <FaMicrochip className="text-amber-500" />,

  // Computer Vision
  "Computer Vision": <FaEye className="text-purple-500" />,
  YOLOv8: <FaCubes className="text-green-500" />,
  OpenCV: <SiOpencv className="text-blue-500" />,

  // NLP & LLMs
  NLP: <FaBrain className="text-indigo-500" />,
  "RAG Systems": <FaRobot className="text-emerald-500" />,
  LLMs: <FaRobot className="text-blue-500" />,
  "LoRA Fine-Tuning": <FaMicrochip className="text-indigo-600" />,
  LangChain: <SiLangchain className="text-green-500" />,

  // MLOps & Deployment
  MLOps: <FaServer className="text-green-600" />,
  "Model Deployment": <FaCloud className="text-indigo-500" />,
  "Prometheus Monitoring": <SiPrometheus className="text-orange-500" />,
  "A/B Testing": <FaChartBar className="text-blue-400" />,
  "Drift Detection": <FaChartBar className="text-red-500" />,

  // ML Frameworks
  TensorFlow: <SiTensorflow className="text-orange-500" />,
  Keras: <SiKeras className="text-red-500" />,
  "Scikit-learn": <SiScikitlearn className="text-blue-500" />,

  // Data Processing & Analysis
  NumPy: <SiNumpy className="text-blue-400" />,
  Pandas: <SiPandas className="text-blue-600" />,
  Matplotlib: <FaChartBar className="text-indigo-400" />,
  "Statistical Analysis": <FaChartBar className="text-green-500" />,
  "Data Visualization": <FaChartBar className="text-cyan-500" />,
  "Data Preprocessing": <FaDatabase className="text-indigo-400" />,
  "Data Analysis": <FaChartBar className="text-blue-500" />,

  // Databases
  "Vector Databases": <FaDatabase className="text-purple-500" />,
  ChromaDB: <FaDatabase className="text-green-400" />, // Replaced with FaDatabase
  PostgreSQL: <SiPostgresql className="text-blue-500" />,
  "Query Optimization": <FaDatabase className="text-yellow-500" />,

  // Security & Performance
  "JWT Authentication": <FaLaptopCode className="text-green-400" />,
  "Caching Strategies": <FaServer className="text-blue-500" />,

  // Soft Skills
  "Team Leadership": <FaUserCog className="text-amber-500" />,
  "Rapid Prototyping": <FaLaptopCode className="text-purple-400" />,
  "Project Delivery": <FaLaptopCode className="text-green-500" />,
};

// Skill categories - Expanded and reorganized for better ML/AI focus
const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <FaBrain className="text-2xl" />,
    gradient: "from-purple-600 to-pink-600",
    skills: [
      "Machine Learning",
      "Neural Networks",
      "Classification",
      "Regression",
      "Feature Engineering",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
    ],
  },
  {
    title: "Advanced AI Applications",
    icon: <FaRobot className="text-2xl" />,
    gradient: "from-blue-600 to-indigo-600",
    skills: [
      "Computer Vision",
      "YOLOv8",
      "OpenCV",
      "NLP",
      "RAG Systems",
      "LLMs",
      "LoRA Fine-Tuning",
      "LangChain",
    ],
  },
  {
    title: "MLOps & Deployment",
    icon: <FaCloud className="text-2xl" />,
    gradient: "from-cyan-600 to-teal-600",
    skills: [
      "MLOps",
      "Model Deployment",
      "Prometheus Monitoring",
      "A/B Testing",
      "Drift Detection",
      "Docker",
      "Kubernetes",
      "Cloud Deployment",
    ],
  },
  {
    title: "Data Engineering",
    icon: <FaDatabase className="text-2xl" />,
    gradient: "from-green-600 to-teal-600",
    skills: [
      "Data Preprocessing",
      "NumPy",
      "Pandas",
      "Vector Databases",
      "ChromaDB",
      "PostgreSQL",
      "Query Optimization",
      "Data Analysis",
    ],
  },
  {
    title: "Programming",
    icon: <FaCode className="text-2xl" />,
    gradient: "from-blue-600 to-indigo-600",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <FaTools className="text-2xl" />,
    gradient: "from-amber-500 to-orange-600",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "FastAPI",
      "REST APIs",
      "Streamlit",
      "Google Cloud",
    ],
  },
];

// Competition data with platform logos
const competitions = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-2xl text-yellow-500" />,
    rating: 1849,
    title: "Top 5%",
    description: "Solved 300+ algorithmic challenges",
    period: "August 2022–Present",
    color: "from-yellow-500 to-orange-500",
    link: "https://leetcode.com/u/kunalsharma13579kunals/",
    badges: ["Dynamic Programming", "Algorithms", "Data Structures"],
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-2xl text-orange-500" />,
    rating: 1619,
    title: "3-star ranking",
    description: "Completed 115+ competitive programming problems",
    period: "January 2024–Present",
    color: "from-orange-500 to-red-500",
    link: "https://www.codechef.com/users/kunalsharma9",
    badges: ["Contests", "Algorithms", "Problem Solving"],
  },
  {
    name: "Coding Ninjas",
    icon: <SiCodingninjas className="text-2xl text-orange-400" />,
    rating: 1687,
    title: "Top 5% nationally",
    description: "Mastered 125+ data structure challenges",
    period: "September 2023–Present",
    color: "from-green-500 to-teal-500",
    link: "https://www.naukri.com/code360/profile/d9728e17-d4cd-4d3e-8e0c-c394a913a0b0",
    badges: ["DSA", "Recursion", "Graphs"],
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-2xl text-green-500" />,
    rating: 318,
    title: "3-star recognition",
    description: "Solved 100+ algorithmic problems",
    period: "October 2023–Present",
    color: "from-green-600 to-emerald-500",
    link: "https://www.geeksforgeeks.org/user/mataran5qug/",
    badges: ["Algorithms", "Interview Prep", "DSA"],
  },
];

const Skills = () => {
  // Refs and animations
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: false, margin: "-100px 0px" });
  const controls = useAnimation();

  // States
  const [activeCategory, setActiveCategory] = useState(null);
  const [countedRatings, setCountedRatings] = useState({});
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Neural network animation state
  const [particlesConfig, setParticlesConfig] = useState({
    particles: [],
    connections: [],
  });

  // Handle category hover
  const handleCategoryHover = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  // Handle skill selection
  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  // Initialize animation when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // Start counting ratings
      const interval = setInterval(() => {
        let allComplete = true;

        competitions.forEach((comp) => {
          const current = countedRatings[comp.name] || 0;
          if (current < comp.rating) {
            allComplete = false;
            setCountedRatings((prev) => ({
              ...prev,
              [comp.name]: Math.min(
                current + Math.ceil(comp.rating / 30),
                comp.rating
              ),
            }));
          }
        });

        if (allComplete) clearInterval(interval);
      }, 30);

      // Refresh AOS animations
      if (window.AOS) {
        window.AOS.refresh();
      }

      return () => clearInterval(interval);
    }
  }, [isInView, controls, countedRatings]);

  // Initialize neural network simulation
  useEffect(() => {
    // Create particles
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    const height = 600;
    const particleCount = Math.min(30, Math.floor(width / 40));

    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 3 + 1,
    }));

    // Create connections between particles
    const connections = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        if (Math.random() > 0.85) {
          // 15% chance of connection
          connections.push([i, j]);
        }
      }
    }

    setParticlesConfig({ particles, connections });

    // Animation loop for neural network
    const intervalId = setInterval(() => {
      setParticlesConfig((prev) => {
        const updatedParticles = prev.particles.map((particle) => {
          // Update position
          let x = particle.x + particle.vx;
          let y = particle.y + particle.vy;

          // Boundary check
          if (x < 0 || x > width) particle.vx = -particle.vx;
          if (y < 0 || y > height) particle.vy = -particle.vy;

          return {
            ...particle,
            x: x < 0 ? -x : x > width ? 2 * width - x : x,
            y: y < 0 ? -y : y > height ? 2 * height - y : y,
          };
        });

        return { ...prev, particles: updatedParticles };
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
  };

  // Define competitive section variants
  const competitiveVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  // Spring animation preset
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background decoration similar to About section */}
      <div className="absolute -right-32 top-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -left-32 bottom-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Connections */}
          {particlesConfig.connections.map(([i, j], index) => {
            const p1 = particlesConfig.particles[i];
            const p2 = particlesConfig.particles[j];
            if (!p1 || !p2) return null;

            const distance = Math.sqrt(
              Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
            );
            const opacity = Math.max(0, 1 - distance / 300) * 0.5;

            return (
              <line
                key={`line-${index}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke={`rgba(99, 102, 241, ${opacity})`}
                strokeWidth="1"
              />
            );
          })}

          {/* Particles */}
          {particlesConfig.particles.map((particle, index) => (
            <circle
              key={`particle-${index}`}
              cx={particle.x}
              cy={particle.y}
              r={particle.size}
              fill="rgba(99, 102, 241, 0.6)"
            >
              <animate
                attributeName="r"
                values={`${particle.size};${particle.size * 1.5};${
                  particle.size
                }`}
                dur={`${2 + Math.random() * 3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Section Heading - With ONLY ONE underline */}
        <div className="text-center mb-16" data-aos="fade-up">
          {/* Custom heading without section-heading class */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Technical Skills
          </h2>

          {/* ONLY ONE underline - no animations */}
          <div className="h-1 w-24 bg-indigo-500 rounded-full mx-auto"></div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="relative rounded-xl overflow-hidden transition-all duration-300"
              style={{ perspective: "1000px" }}
              data-aos={catIndex % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={100 * catIndex}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-5 z-0 rounded-xl transition-opacity duration-300 hover:opacity-10"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              ></div>

              {/* Glowing border effect */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0 hover:opacity-30 transition-opacity duration-500`}
              ></div>

              <div className="card backdrop-blur-sm border border-indigo-800/20 rounded-xl overflow-hidden transition-all duration-300 group z-10">
                {/* Category Header */}
                <div
                  className={`flex items-center p-4 sm:p-5 border-b border-gray-700/50 bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300`}
                  onMouseEnter={() => handleCategoryHover(catIndex)}
                  onMouseLeave={() => handleCategoryHover(null)}
                  data-aos="fade-up"
                  data-aos-delay={150 * catIndex}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-700/50 mr-3 sm:mr-4 group-hover:scale-110 transition-all duration-300`}
                    data-aos="zoom-in"
                    data-aos-delay={200 * catIndex}
                  >
                    {React.cloneElement(category.icon, {
                      className: `text-xl sm:text-2xl text-white`,
                    })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 p-3 sm:p-5 bg-gray-900/30 backdrop-blur-md">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className={`group/skill flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg relative cursor-pointer overflow-hidden transition-all duration-300 aspect-square
                                  ${
                                    selectedSkill === skill
                                      ? "ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/20"
                                      : "hover:shadow-lg"
                                  }
                                  before:absolute before:inset-0 before:bg-gray-800/40 before:backdrop-blur-md before:rounded-lg before:transition-all before:duration-300
                                  before:border before:border-gray-700/50 hover:before:border-indigo-500/50 hover:before:-inset-0.5 before:z-0 hover:scale-105 hover:-translate-y-1`}
                      data-aos="zoom-in"
                      data-aos-delay={100 + skillIndex * 50}
                    >
                      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                        <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 transform transition-transform duration-300 group-hover/skill:scale-110">
                          {skillIcons[skill] || (
                            <FaCode className="text-gray-400" />
                          )}
                        </div>
                        <p className="text-gray-300 text-xs font-medium text-center group-hover/skill:text-white transition-colors duration-300 break-words whitespace-normal">
                          {skill}
                        </p>

                        {/* Static glow effect on hover instead of animation */}
                        <div
                          className="absolute -z-10 inset-0 opacity-0 group-hover/skill:opacity-100 pointer-events-none transition-opacity duration-300"
                          style={{
                            background:
                              "radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 50%)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Section */}
        <div className="mt-16 sm:mt-20" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Competitive Programming Profile
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {competitions.map((comp, index) => (
              <motion.div
                key={comp.name}
                className="relative group"
                whileHover={{
                  scale: 1.03,
                  zIndex: 20,
                }}
                data-aos="zoom-in-up"
                data-aos-delay={100 * index}
              >
                {/* Pulsing glow effect */}
                <motion.div
                  className={`absolute -inset-0.5 rounded-xl blur-sm bg-gradient-to-br ${comp.color}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7 }}
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                <div className="relative card backdrop-blur-sm border border-indigo-800/20 rounded-xl overflow-hidden transition-all duration-300 bg-gray-900/60 h-full">
                  {/* Platform Logo Emblem */}
                  <div className="absolute -right-12 -top-12 w-24 sm:w-32 h-24 sm:h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                    {React.cloneElement(comp.icon, {
                      className: "w-full h-full",
                    })}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <motion.div
                        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 mr-2 sm:mr-3 group-hover:scale-110 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {comp.icon}
                      </motion.div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {comp.name}
                      </h4>
                    </div>

                    <motion.div
                      className="flex items-baseline mb-2 sm:mb-3"
                      whileHover={{ scale: 1.05 }}
                      transition={spring}
                    >
                      <motion.div
                        className="text-2xl sm:text-3xl font-extrabold text-white group-hover:scale-110 origin-left transition-all duration-300"
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(255,255,255,0)",
                            "0 0 5px rgba(255,255,255,0.5)",
                            "0 0 0px rgba(255,255,255,0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        data-aos="fade-right"
                        data-aos-delay={150 + index * 50}
                      >
                        {countedRatings[comp.name] || 0}
                      </motion.div>
                      <div className="ml-2 px-2 py-0.5 rounded-full text-white text-xs flex items-center bg-gray-800">
                        <FaStar className="mr-1 text-yellow-500" />
                        {comp.title}
                      </div>
                    </motion.div>

                    <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-gray-300 transition-colors duration-300">
                      {comp.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                      {comp.badges.map((badge, badgeIndex) => (
                        <motion.span
                          key={badgeIndex}
                          className="text-xs rounded-full px-1.5 sm:px-2 py-0.5 bg-gray-800 text-gray-300 border border-gray-700"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(79, 70, 229, 0.2)",
                          }}
                          transition={spring}
                          data-aos="zoom-in"
                          data-aos-delay={200 + badgeIndex * 50}
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-xs mt-auto">
                      <span className="text-gray-500">{comp.period}</span>

                      {comp.link && (
                        <motion.a
                          href={comp.link}
                          className="inline-flex items-center text-white font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span>View Profile</span>
                          <motion.svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </motion.svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* More skills coming soon text - similar to the quote in About */}
        <div
          className="max-w-2xl mx-auto mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-gray-400 text-sm sm:text-base italic">
            Continuously expanding my skill set with cutting-edge
            technologies...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
