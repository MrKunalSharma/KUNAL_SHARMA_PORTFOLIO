import React from 'react';
import { 
  FaUserGraduate, 
  FaCode, 
  FaLaptopCode, 
  FaTrophy, 
  FaFileAlt,
  FaGithub,
  FaQuoteLeft,
  FaQuoteRight
} from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { motion } from 'framer-motion';

const About = () => {
  const aboutCards = [
    {
      icon: <FaUserGraduate className="text-3xl text-indigo-400" />,
      title: "Education",
      description: "BTech in Computer Science from IIIT Kota with 8.8/10 CGPA"
    },
    {
      icon: <FaCode className="text-3xl text-indigo-400" />,
      title: "Problem Solving",
      description: "Top 5% on LeetCode with 300+ algorithmic solutions"
    },
    {
      icon: <FaLaptopCode className="text-3xl text-indigo-400" />,
      title: "ML Expertise",
      description: "Developed ML systems with 85-99.95% accuracy"
    },
    {
      icon: <FaTrophy className="text-3xl text-indigo-400" />,
      title: "Hackathons",
      description: "Top 20 in HacktheChain 2.0 from 100+ competing teams"
    }
  ];

  const platforms = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl group-hover:text-purple-500" />,
      url: "https://github.com/MrKunalSharma",
      color: "hover:text-purple-500"
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-xl group-hover:text-yellow-500" />,
      url: "https://leetcode.com/u/kunalsharma13579kunals/",
      color: "hover:text-yellow-500"
    },
    {
      name: "CodeChef",
      icon: <SiCodechef className="text-xl group-hover:text-orange-500" />,
      url: "https://www.codechef.com/users/kunalsharma9",
      color: "hover:text-orange-500"
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-32 top-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -left-32 bottom-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 
            className="section-heading" 
            data-aos="fade-up"
          >
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div 
            className="order-2 md:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">
              Software Engineer & ML Specialist
            </h3>
            
            <p className="text-gray-300 mb-6">
              I'm a Computer Science student at IIIT Kota with a proven track record in developing 
              production-grade machine learning systems that deliver high accuracy and performance. 
              My expertise spans machine learning, algorithms, and software engineering.
            </p>
            
            <p className="text-gray-300 mb-6">
              With a strong foundation in data structures and algorithms, I've ranked in the top 5% 
              on LeetCode by solving over 300 algorithmic challenges. My projects have demonstrated 
              measurable business impact, including 85% processing time reduction and sub-100ms response latency.
            </p>
            
            {/* Resume and Platform Links in one row */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <motion.a 
                href="/KUNAL_SHARMA_RESUME_1.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <FaFileAlt className="mr-2" />
                Resume
              </motion.a>
              
              {platforms.map((platform, index) => (
                <motion.a 
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 px-4 py-2.5 bg-gray-800/70 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 text-gray-300 ${platform.color}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  data-aos="fade-up"
                  data-aos-delay={350 + index * 50}
                >
                  {platform.icon}
                  <span>{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {aboutCards.map((card, index) => (
                <motion.div 
                  key={index} 
                  className="card flex flex-col items-center text-center p-6"
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 100}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.1)" }}
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section - AI/ML and Software Development */}
        <div 
          className="max-w-2xl mx-auto mt-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative p-5 bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-lg">
            <FaQuoteLeft className="absolute top-3 left-3 text-indigo-400/30 text-2xl" />
            <p className="text-md text-gray-300 italic px-8 py-1">
              Great code combines the logic of programming with the intelligence of machine learning to solve problems humans can't.
            </p>
            <FaQuoteRight className="absolute bottom-3 right-3 text-indigo-400/30 text-2xl" />
            <div className="mt-2 text-right text-indigo-400 font-medium text-sm pr-8">
              — My tech philosophy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
