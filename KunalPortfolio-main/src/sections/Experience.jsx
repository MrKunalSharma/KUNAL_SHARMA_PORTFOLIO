import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiAward, FiTrendingUp, FiMapPin, FiCheck } from 'react-icons/fi';

const Experience = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set up intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          controls.start("visible");
          
          // Refresh AOS when section becomes visible
          if (window.AOS) {
            window.AOS.refresh();
          }
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const timelineDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.5
      }
    }
  };

  const experiences = [
    {
      title: "HacktheChain 2.0 Hackathon",
      role: "Team Lead & Full Stack Developer",
      company: "HacktheChain",
      location: "Virtual",
      date: "February 2024",
      description: "Led a cross-functional team to develop an emergency response system that was recognized in the top 20 from 100+ competing teams.",
      achievements: [
        "Prototyped emergency response system recognized in top 20 from 100+ competing teams",
        "Integrated Geolocation API with Firebase, reducing emergency response time by 15% (from 8 to 6.8 minutes)",
        "Optimized React Native performance, decreasing application load time by 30% (from 3.2s to 2.24s)",
        "Led cross-functional team of 4 engineers, delivering fully functional mobile solution within 48-hour deadline"
      ],
      skills: ["React Native", "Firebase", "Geolocation API", "JavaScript"],
      metrics: [
        { icon: <FiAward />, text: "Top 20 of 100+ Teams" },
        { icon: <FiTrendingUp />, text: "15% Faster Response" }
      ]
    }
  ];
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Background decoration similar to About section */}
      <div className="absolute -right-32 top-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -left-32 bottom-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-15">
        <div className="absolute top-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(5)">
                <path d="M0 50 H100 M50 0 V100 M25 0 V50 H75 V100 M0 25 H50 V75 H100" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="3" fill="rgba(99, 102, 241, 0.5)" />
                <circle cx="0" cy="50" r="2" fill="rgba(99, 102, 241, 0.3)" />
                <circle cx="100" cy="50" r="2" fill="rgba(99, 102, 241, 0.3)" />
                <circle cx="50" cy="0" r="2" fill="rgba(99, 102, 241, 0.3)" />
                <circle cx="50" cy="100" r="2" fill="rgba(99, 102, 241, 0.3)" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </div>
      
      {/* Background blurs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 left-0 transform -translate-x-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      ></motion.div>
      
      {/* Main content */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title with ONLY ONE underline */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-indigo-500 rounded-full mx-auto"></div>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/30 hidden sm:block"
            data-aos="height"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          ></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative"
                data-aos={windowWidth >= 640 ? (index % 2 === 0 ? "fade-right" : "fade-left") : "fade-up"}
                data-aos-delay={100 * index}
              >
                {/* Timeline node */}
                <div 
                  className="absolute z-10 left-0 sm:left-1/2 top-3 sm:-translate-x-1/2 transform"
                  data-aos="zoom-in"
                  data-aos-delay={150 + (index * 100)}
                >
                  <div className="w-7 h-7 rounded-full bg-indigo-900 border-2 border-indigo-500 flex items-center justify-center">
                    <FiBriefcase className="text-indigo-400" />
                  </div>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0.2, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute inset-0 rounded-full bg-indigo-500/50"
                  ></motion.div>
                </div>
                
                {/* Content card - alternating sides on larger screens, single column on mobile */}
                <div className={`sm:w-1/2 ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-auto sm:pr-12' : 'sm:ml-auto sm:pl-12'}`}>
                  <div 
                    className="bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-indigo-500/30 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={200 + (index * 100)}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-indigo-400 text-sm mb-2">{exp.role}</p>
                      
                      <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="text-indigo-400" />
                          <span>{exp.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <FiMapPin className="text-indigo-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p 
                      className="text-gray-300 text-sm mb-4"
                      data-aos="fade-up"
                      data-aos-delay={250 + (index * 100)}
                    >
                      {exp.description}
                    </p>
                    
                    {/* Metrics/Highlights */}
                    {exp.metrics && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-900/30 rounded-full border border-indigo-500/30 text-xs text-indigo-300 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={300 + (i * 50) + (index * 100)}
                          >
                            <span className="text-indigo-400">{metric.icon}</span>
                            <span>{metric.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 
                        className="text-white text-xs font-semibold mb-2 flex items-center gap-1"
                        data-aos="fade-up"
                        data-aos-delay={300 + (index * 100)}
                      >
                        <FiAward className="text-indigo-400" />
                        Key Achievements
                      </h4>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm bg-gray-800/30 p-2 rounded-md border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:translate-x-2 hover:bg-gray-800/50"
                            data-aos="fade-up"
                            data-aos-delay={350 + (i * 50) + (index * 100)}
                          >
                            <FiCheck className="text-indigo-400 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h4 
                        className="text-white text-xs font-semibold mb-2 flex items-center gap-1"
                        data-aos="fade-up"
                        data-aos-delay={450 + (index * 100)}
                      >
                        <FiTrendingUp className="text-indigo-400" />
                        Technologies Used
                      </h4>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-gray-800/50 text-indigo-300 text-xs rounded-full border border-gray-700 hover:border-indigo-500/30 transition-all duration-300 hover:scale-105 hover:bg-indigo-900/30"
                            data-aos="zoom-in"
                            data-aos-delay={500 + (i * 50) + (index * 100)}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* "More experiences coming soon..." text */}
        <div
          className="max-w-2xl mx-auto mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-gray-400 text-sm sm:text-base italic">
            More experiences coming soon...
          </p>
        </div>
      </div>
      
      {/* Bottom animated circuit lines */}
      <div className="absolute -bottom-10 left-0 w-full h-20 opacity-20 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1920 120" preserveAspectRatio="none">
          <path 
            d="M0,0 C320,80 420,100 640,100 C880,100 980,60 1200,60 C1440,60 1560,100 1920,100 L1920,0 L0,0 Z" 
            fill="none" 
            stroke="url(#gradient)" 
            strokeWidth="2"
          >
            <animate 
              attributeName="d" 
              values="M0,0 C320,80 420,100 640,100 C880,100 980,60 1200,60 C1440,60 1560,100 1920,100 L1920,0 L0,0 Z;
                     M0,0 C250,60 380,80 640,70 C880,60 1050,80 1200,80 C1360,80 1480,70 1920,100 L1920,0 L0,0 Z;
                     M0,0 C320,80 420,100 640,100 C880,100 980,60 1200,60 C1440,60 1560,100 1920,100 L1920,0 L0,0 Z"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(79, 70, 229, 0.6)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(67, 56, 202, 0.6)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Experience;
