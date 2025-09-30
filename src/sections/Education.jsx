import React from 'react';
import { FaGraduationCap, FaAward, FaMedal, FaCertificate, FaBook, FaStar, FaTrophy, FaGem, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "IIIT Kota",
      period: "Nov 2022 - Present",
      gpa: "8.8/10.0 CGPA",
      type: "college",
      logo: "/Education/college.png",
      achievements: [
        "Ranked in top 5% of 200+ student cohort",
        "Executed 15+ technical projects demonstrating practical application of theoretical concepts",
        "Developed strong foundation in ML/AI through research projects and course implementations",
      ],
      coreSubjects: [
        "Data Structures and Algorithms",
        "Database Systems (DBMS)",
        "Operating Systems (OS)",
        "Machine Learning",
        "Artificial Intelligence",
        "Computer Networks",
        "Object-Oriented Programming"
      ]
    },
    {
      degree: "Higher Secondary Education (Class 12)",
      school: "Dr. Virendra Swarup Memorial Public School",
      period: "2019 - 2021",
      gpa: "95% (School Topper)",
      type: "school",
      logo: "/Education/School.jpeg",
      achievements: [
        "School Topper in Class 12 Board Examinations",
        "Specialized in PCM with English and Computer Science",
        "Perfect score in Computer Science and Mathematics subjects"
      ],
      coreSubjects: [
        "Physics",
        "Chemistry",
        "Maths",
        "Computer Science",
        "English"
      ]
    },
    {
      degree: "Secondary Education (Class 10)",
      school: "Dr. Virendra Swarup Memorial Public School",
      period: "2007 - 2019",
      gpa: "94.67%",
      type: "school",
      logo: "/Education/School.jpeg",
      achievements: [
        "Maintained consistent academic excellence throughout 12 years of schooling",
        "Recognized as an outstanding student with multiple academic awards"
      ],
      highlights: [
        "Excellence in Mathematics and Science with 98% marks",
        "Active participation in school's science exhibitions and competitions"
      ]
    }
  ];

  const certifications = [
    {
      title: "Knight status on LeetCode",
      issuer: "LeetCode",
      date: "January 2025",
      description: "Earned 5 achievement badges in Data Structures and Algorithms",
      link: "#",
      icon: <FaAward className="text-yellow-400" />
    },
    {
      title: "Google Arcade Gold League",
      issuer: "Google",
      date: "November 2024",
      description: "Qualified with 14 verified technical skill badges",
      link: "#",
      icon: <FaMedal className="text-yellow-400" />
    },
    {
      title: "Code360 - Specialist and Achiever",
      issuer: "Code360",
      date: "December 2023",
      description: "Received badges for algorithm proficiency",
      link: "#",
      icon: <FaCertificate className="text-indigo-400" />
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-32 top-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -left-32 bottom-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 
            className="section-heading" 
            data-aos="fade-up"
          >
            Education & Certifications
          </h2>
        </div>
        
        {/* Education Timeline */}
        <div className="mb-20">
          <div 
            className="flex items-center mb-10"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="p-3 rounded-full bg-indigo-500/20 mr-4">
              <FaGraduationCap className="text-3xl text-indigo-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Academic Background</h3>
            </div>
          </div>
          
          <div className="space-y-12 relative">
            {/* Timeline line */}
            <div 
              className="absolute left-4 top-0 h-full w-0.5 bg-indigo-500/30 hidden sm:block"
              data-aos="height"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            ></div>
            
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="relative"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration={800 + (index * 100)}
                data-aos-delay={100 * index}
                data-aos-anchor-placement="top-bottom"
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-4 top-7 w-4 h-4 rounded-full bg-indigo-600 border-2 border-indigo-400 hidden sm:block z-10"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={250 + (index * 150)}
                  data-aos-anchor-placement="top-center"
                >
                  {/* Pulsing effect for timeline dot */}
                  <span className="absolute -inset-1 rounded-full bg-indigo-500/50 animate-ping" 
                        style={{ animationDuration: '3s' }}></span>
                </div>
                
                {/* Education Card */}
                <div 
                  className={`sm:ml-16 card relative overflow-hidden bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-indigo-500/30 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5`}
                  data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
                  data-aos-duration="800"
                  data-aos-delay={200 + (index * 150)}
                  data-aos-anchor-placement="top-bottom"
                >
                  {/* Badge moved to top of content */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-indigo-500/10 text-indigo-300 px-2.5 py-1 rounded-full text-xs border border-indigo-500/20 font-medium">
                      {edu.type === "college" ? "Higher Education" : index === 1 ? "Class XII" : "Class X"}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Logo placeholder */}
                    {edu.logo && (
                      <div 
                        className="w-24 h-24 bg-gray-900/50 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 border border-indigo-500/20 p-2 hover:border-indigo-500/50 transition-all duration-300"
                        data-aos="flip-left"
                        data-aos-duration="800"
                        data-aos-delay={300 + (index * 100)}
                      >
                        <img 
                          src={edu.logo} 
                          alt={`${edu.school} logo`} 
                          className="max-w-full max-h-full object-contain" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = edu.type === "college" 
                              ? "https://via.placeholder.com/100x100?text=College" 
                              : "https://via.placeholder.com/100x100?text=School";
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      {/* Removed extra padding since badge is no longer overlapping */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1 group">
                            {edu.degree}
                            <span className="inline-block w-0 group-hover:w-full h-0.5 bg-indigo-500 transition-all duration-300 mt-0.5"></span>
                          </h4>
                          <h5 className="text-lg text-indigo-400 mb-2">{edu.school}</h5>
                        </div>
                        
                        <div className="flex flex-col items-start sm:items-end">
                          <span className="text-gray-400 flex items-center">
                            <FaCalendarAlt className="mr-1.5 text-indigo-400 text-xs" />
                            {edu.period}
                          </span>
                          <span className="font-medium text-white bg-indigo-500/20 px-2.5 py-0.5 rounded-full text-sm mt-1 inline-flex items-center">
                            <FaStar className="mr-1.5 text-yellow-400 text-xs" />
                            {edu.gpa}
                          </span>
                        </div>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent my-4"></div>
                      
                      {/* Achievements */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-white text-sm font-semibold mb-2 flex items-center">
                            <FaAward className="text-indigo-400 mr-2" />
                            Achievements
                          </h5>
                          <ul className="space-y-1 ml-2">
                            {edu.achievements.map((achievement, i) => (
                              <li 
                                key={i} 
                                className="flex items-start text-gray-300 text-sm hover:text-white transition-colors duration-300"
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-delay={350 + (i * 100)}
                                data-aos-anchor-placement="top-bottom"
                              >
                                <span className="text-indigo-400 mr-2 mt-0.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Core Subjects */}
                      {edu.coreSubjects && edu.coreSubjects.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-white text-sm font-semibold mb-2 flex items-center">
                            <FaBook className="text-indigo-400 mr-2" />
                            Core Subjects
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.coreSubjects.map((subject, i) => (
                              <span 
                                key={i} 
                                className="px-2.5 py-1 bg-gray-800/50 text-indigo-300 text-xs rounded-full border border-gray-700 hover:border-indigo-500/30 hover:bg-indigo-900/30 transition-all duration-300"
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-delay={400 + (i * 70)}
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Key Highlights */}
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-white text-sm font-semibold mb-2 flex items-center">
                            <FaGem className="text-indigo-400 mr-2" />
                            Key Highlights
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {edu.highlights.map((highlight, i) => (
                              <div 
                                key={i} 
                                className="flex items-start p-2 rounded bg-indigo-900/10 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
                                data-aos="flip-up"
                                data-aos-duration="600"
                                data-aos-delay={450 + (i * 100)}
                              >
                                <FaTrophy className="text-yellow-400 mt-1 mr-2 flex-shrink-0 text-xs" />
                                <span className="text-xs text-gray-300">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="flex items-center mb-10">
            <div className="p-3 rounded-full bg-indigo-500/20 mr-4">
              <FaCertificate className="text-3xl text-indigo-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="card p-5 hover:transform hover:scale-105 transition-all duration-300 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/30 rounded-lg overflow-hidden"
                data-aos={index % 3 === 0 ? "fade-up" : index % 3 === 1 ? "fade-left" : "fade-right"}
                data-aos-duration="800"
                data-aos-delay={300 + index * 150}
              >
                {/* Decorative corner accent */}
                <div className="absolute -right-6 -top-6 w-12 h-12 bg-indigo-500/10 rounded-full"></div>
                <div className="absolute -right-4 -top-4 w-8 h-8 bg-indigo-500/20 rounded-full"></div>
                
                <div className="flex items-start relative z-10">
                  <div 
                    className="mr-4 text-3xl mt-1 bg-gray-900/50 p-3 rounded-lg border border-gray-700/50"
                    data-aos="zoom-in" 
                    data-aos-delay={350 + index * 150}
                  >
                    {cert.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group">
                      {cert.title}
                      <span className="block max-w-0 group-hover:max-w-full h-0.5 bg-indigo-500/50 transition-all duration-500"></span>
                    </h4>
                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-indigo-400 text-xs">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs px-2 py-0.5 bg-gray-800 rounded-full">{cert.date}</p>
                    </div>
                    <p 
                      className="text-gray-300 text-sm mb-3"
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 150}
                      data-aos-duration="600"
                    >
                      {cert.description}
                    </p>
                    
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="border-b border-transparent group-hover:border-indigo-500 transition-all duration-300">View Certificate</span>
                        <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional studies/future plans */}
        <div 
          className="max-w-2xl mx-auto mt-16 text-center"
          data-aos="flip-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <p className="text-gray-400 text-sm sm:text-base italic px-5 py-3 bg-indigo-900/10 rounded-lg border border-indigo-500/10 inline-block">
            Continuously pursuing additional certifications in advanced ML/AI techniques...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
