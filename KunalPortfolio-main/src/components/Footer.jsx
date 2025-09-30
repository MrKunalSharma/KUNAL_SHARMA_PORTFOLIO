import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaInstagram, FaPhone, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  
  // Set up intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-lg" />,
      href: "https://github.com/MrKunalSharma",
      color: "hover:bg-gray-700"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-lg" />,
      href: "https://www.linkedin.com/in/kunal-sharma-1a8457257/",
      color: "hover:bg-indigo-600"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-lg" />,
      href: "https://www.instagram.com/kunalsharma9_/",
      color: "hover:bg-purple-600"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-lg" />,
      href: "mailto:kunalsharma13579kunals@gmail.com",
      color: "hover:bg-indigo-600"
    }
  ];

  // Contact info with icons
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-indigo-400" />,
      text: "kunalsharma13579kunals@gmail.com",
      href: "mailto:kunalsharma13579kunals@gmail.com"
    },
    {
      icon: <FaPhone className="text-indigo-400" />,
      text: "+91 639-339-2926",
      href: "tel:+916393392926"
    },
    {
      icon: <FaMapMarkerAlt className="text-indigo-400" />,
      text: "Kanpur, Uttar Pradesh, India",
      href: null
    }
  ];

  return (
    <footer 
      ref={footerRef} 
      className="bg-gray-900/80 backdrop-blur-sm pt-16 pb-8 border-t border-gray-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12"
        >
          {/* Column 1: Portfolio Info */}
          <motion.div variants={itemVariants} className="md:col-span-4 text-center md:text-left">
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-3 relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Kunal</span>
              <span className="text-white">Sharma</span>
              <motion.div 
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 absolute bottom-0 left-0"
              />
            </motion.h2>
            <motion.h3 
              variants={itemVariants} 
              className="text-lg text-indigo-400 mb-3"
            >
              Software Engineer & ML Specialist
            </motion.h3>
            <motion.p 
              variants={itemVariants} 
              className="text-gray-300 mb-6 max-w-sm mx-auto md:mx-0"
            >
              A passionate software engineer specializing in Machine Learning and AI, 
              dedicated to building innovative solutions.
            </motion.p>
            
            {/* Social Media Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-3 mt-6 justify-center md:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 hover:bg-indigo-600 rounded-full p-2.5 flex items-center justify-center text-white shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                  aria-label={social.name}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col items-center md:items-start">
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6 relative inline-block"
            >
              Quick Links
              <motion.div 
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 absolute bottom-0 left-0"
              />
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              className="space-y-3"
            >
              {sections.map((section, index) => (
                <motion.div 
                  key={section.id} 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  custom={index}
                >
                  <a 
                    href={`#${section.id}`} 
                    className="text-gray-300 hover:text-indigo-400 flex items-center gap-2 transition-colors cursor-pointer group"
                  >
                    <motion.span 
                      initial={{ color: "#6b7280" }}  
                      animate={{ color: "#818cf8" }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <FaChevronRight className="text-xs" />
                    </motion.span> 
                    <span className="group-hover:translate-x-1 transition-transform">
                      {section.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col items-center md:items-start">
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6 relative inline-block"
            >
              Contact Info
              <motion.div 
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 absolute bottom-0 left-0"
              />
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              className="space-y-4 mb-6"
            >
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-indigo-400 bg-indigo-400/10 p-2 rounded-full"
                  >
                    {contact.icon}
                  </motion.div>
                  {contact.href ? (
                    <a 
                      href={contact.href} 
                      className="text-gray-300 hover:text-indigo-400 transition-colors group-hover:underline"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 group-hover:text-indigo-400 transition-colors">
                      {contact.text}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-5 border border-indigo-500/20 mt-2 w-full"
            >
              <h4 className="text-white font-medium mb-2">Let's Connect!</h4>
              <p className="text-gray-400 text-sm">
                Have a project in mind or just want to say hi? Feel free to reach out! 
                I'm open to discussing new projects and opportunities.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="border-t border-gray-800/30 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p 
            variants={itemVariants} 
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            &copy; {year} <span className="text-indigo-400 font-medium">Kunal Sharma</span>. All rights reserved.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex items-center"
          >
            <motion.p 
              className="text-gray-500 flex items-center text-sm"
              animate={{
                color: ["#6b7280", "#818cf8", "#6b7280"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Designed & Built with 
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#ec4899", "#ef4444"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mx-1.5"
              >
                <FaHeart className="text-indigo-500" />
              </motion.div> 
              by Kunal Sharma
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
