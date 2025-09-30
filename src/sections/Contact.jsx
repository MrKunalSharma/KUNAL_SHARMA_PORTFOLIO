import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, 
         FaArrowRight, FaInstagram, FaQuoteLeft, FaCheck, FaRegLightbulb } from 'react-icons/fa';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });
  
  const [formErrors, setFormErrors] = useState({});
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus({
      submitting: true,
      submitted: false,
      error: false
    });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data submitted:', formData);
      
      // Success
      setFormStatus({
        submitting: false,
        submitted: true,
        error: false
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Scroll to form top to show success message
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Error
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true
      });
    }
  };
  
  // Contact info items
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-indigo-400 text-xl" />,
      title: "Email",
      value: "kunalsharma13579kunals@gmail.com",
      link: "mailto:kunalsharma13579kunals@gmail.com",
      animation: "fade-right",
      color: "bg-indigo-500/20 text-indigo-400"
    },
    {
      icon: <FaPhone className="text-indigo-400 text-xl" />,
      title: "Phone",
      value: "+91 639-339-2926",
      link: "tel:+916393392926",
      animation: "fade-right",
      color: "bg-indigo-500/20 text-indigo-400"
    },
    {
      icon: <FaMapMarkerAlt className="text-indigo-400 text-xl" />,
      title: "Location",
      value: "Eldeco Garden Estate Raipurva, Kanpur, Uttar Pradesh",
      animation: "fade-right",
      color: "bg-indigo-500/20 text-indigo-400"
    }
  ];
  
  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/MrKunalSharma",
      color: "hover:bg-gray-700"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/kunal-sharma-1a8457257/",
      color: "hover:bg-indigo-600"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-xl" />,
      href: "https://www.instagram.com/kunalsharma9_/",
      color: "hover:bg-purple-600"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:kunalsharma13579kunals@gmail.com",
      color: "hover:bg-indigo-600"
    }
  ];

  // Availability status - new section
  const availabilityStatus = {
    status: "Available",
    message: "Currently open to new projects and collaborations",
    response: "24-48 hours response time"
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-heading">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="100">
            Have a question or want to work together? Feel free to reach out!
            I'm always open to discussing new projects and creative ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information - now spans 5 columns */}
          <div className="lg:col-span-5" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">Let's Connect</h3>
              
              {/* Availability Status - New Section */}
              <div 
                className="mb-10 p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/20 flex items-center gap-3"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 bg-green-400 rounded-full absolute top-1 left-1"></div>
                  <div className="w-5 h-5 bg-green-400/30 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">{availabilityStatus.status}: <span className="text-green-400">{availabilityStatus.message}</span></h4>
                  <p className="text-gray-400 text-xs mt-1">{availabilityStatus.response}</p>
                </div>
              </div>
              
              <div className="space-y-8">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={300 + (index * 100)}
                  >
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-5"
                    >
                      <div className={`p-4 rounded-xl ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2 text-lg">{method.title}</h4>
                        {method.link ? (
                          <a 
                            href={method.link} 
                            className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center group/link"
                            target={method.title !== "Email" && method.title !== "Phone" ? "_blank" : undefined}
                            rel={method.title !== "Email" && method.title !== "Phone" ? "noopener noreferrer" : undefined}
                          >
                            <span className="break-all">{method.value}</span>
                            <FaArrowRight className="ml-2 opacity-0 group-hover/link:opacity-100 transform -translate-x-2 group-hover/link:translate-x-0 transition-all text-xs" />
                          </a>
                        ) : (
                          <p className="text-gray-300">
                            {method.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              
              {/* Social media links */}
              <div 
                className="mt-10 pt-6 border-t border-gray-700/50"
                data-aos="fade-up" 
                data-aos-delay="600"
              >
                <h4 className="font-semibold text-white mb-6 text-lg">Find me on social media</h4>
                <div className="grid grid-cols-4 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-aos="zoom-in"
                      data-aos-delay={700 + index * 100}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gray-900 ${social.color} p-4 rounded-xl text-gray-300 hover:text-white 
                             transition-all duration-300 flex items-center justify-center border border-gray-700 
                             hover:border-transparent hover:shadow-lg hover:shadow-indigo-500/10`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - now spans 7 columns */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="300">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-indigo-500/30 transition-all duration-300 h-full overflow-hidden">
              {/* Form header with gradient background */}
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 md:p-10 border-b border-gray-700/50">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                  <span>Send a Message</span>
                  <div className="ml-4 p-1 bg-indigo-500/20 rounded-full">
                    <FaRegLightbulb className="text-indigo-400 text-sm" />
                  </div>
                </h3>
                <p className="text-gray-400 mt-2">I'll get back to you as soon as possible</p>
              </div>
              
              <div className="p-8 md:p-10" ref={formRef}>
                {formStatus.submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                    >
                      <FaCheck size={30} className="text-green-400" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-4">Message Sent Successfully!</h4>
                    <p className="text-gray-300 mb-8 max-w-md">
                      Thank you for reaching out! I'll review your message and get back to you soon.
                    </p>
                    <motion.button
                      onClick={() => setFormStatus(prev => ({ ...prev, submitted: false }))}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <AnimatePresence>
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      {/* Name field - Now full width */}
                      <div data-aos="fade-up" data-aos-delay="400">
                        <label htmlFor="name" className="text-gray-200 mb-2 font-medium flex items-center">
                          Your Name <span className="text-red-400 ml-1">*</span>
                          {formErrors.name && (
                            <motion.span 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="ml-auto text-red-400 text-xs"
                            >
                              {formErrors.name}
                            </motion.span>
                          )}
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full bg-gray-900/60 backdrop-blur-sm border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} 
                                   rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                                   focus:ring-indigo-500 focus:border-transparent transition-all duration-300`}
                          />
                        </div>
                      </div>
                      
                      {/* Email field - Now full width */}
                      <div data-aos="fade-up" data-aos-delay="450">
                        <label htmlFor="email" className="text-gray-200 mb-2 font-medium flex items-center">
                          Your Email <span className="text-red-400 ml-1">*</span>
                          {formErrors.email && (
                            <motion.span 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="ml-auto text-red-400 text-xs"
                            >
                              {formErrors.email}
                            </motion.span>
                          )}
                        </label>
                        <div className="relative">
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange} 
                            placeholder="john@example.com"
                            className={`w-full bg-gray-900/60 backdrop-blur-sm border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} 
                                   rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                                   focus:ring-indigo-500 focus:border-transparent transition-all duration-300`}
                          />
                        </div>
                      </div>
                      
                      {/* Message field */}
                      <div data-aos="fade-up" data-aos-delay="500">
                        <label htmlFor="message" className="text-gray-200 mb-2 font-medium flex items-center">
                          Message <span className="text-red-400 ml-1">*</span>
                          {formErrors.message && (
                            <motion.span 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="ml-auto text-red-400 text-xs"
                            >
                              {formErrors.message}
                            </motion.span>
                          )}
                        </label>
                        <div className="relative">
                          <textarea 
                            id="message" 
                            name="message" 
                            rows="6" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Hi there, I'd like to discuss a project..."
                            maxLength={500}
                            className={`w-full bg-gray-900/60 backdrop-blur-sm border ${formErrors.message ? 'border-red-500' : 'border-gray-700'} 
                                   rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                                   focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none`}
                          ></textarea>
                          <div className="absolute bottom-3 right-3 text-gray-500 text-xs bg-gray-900/60 px-2 py-1 rounded-md">
                            {formData.message.length}/500
                          </div>
                        </div>
                      </div>
                      
                      <motion.button
                        data-aos="fade-up" 
                        data-aos-delay="550"
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-xl 
                             font-medium flex items-center justify-center gap-3 
                             transform transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 
                             disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                        disabled={formStatus.submitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {formStatus.submitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FaPaperPlane className="transform rotate-45" />
                          </>
                        )}
                      </motion.button>
                      
                      {formStatus.error && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-red-300 text-center"
                        >
                          <div className="flex items-center justify-center mb-2">
                            <svg className="w-6 h-6 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="font-bold">Something went wrong!</span>
                          </div>
                          <p>Please try again later or contact me directly via email.</p>
                        </motion.div>
                      )}
                      
                      <p className="text-gray-500 text-xs text-center mt-6 flex items-center justify-center gap-1">
                        <span className="inline-block w-1 h-1 bg-indigo-400 rounded-full"></span>
                        Your information is secure and will not be shared with third parties
                      </p>
                    </motion.form>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote Card moved to full width row below both columns */}
        <div 
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-12 p-8 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl border border-indigo-500/20 backdrop-blur-sm relative overflow-hidden group"
        >
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 relative z-10 max-w-5xl mx-auto">
            <FaQuoteLeft className="text-indigo-400 text-4xl md:text-5xl flex-shrink-0 group-hover:text-indigo-300 transition-colors duration-300" />
            <div>
              <p className="text-indigo-300/80 italic text-lg md:text-xl leading-relaxed">
                "I believe in building software that not only works flawlessly but also creates meaningful experiences for users. Looking forward to bringing your ideas to life!"
              </p>
              <p className="text-right text-indigo-400 mt-4 font-medium group-hover:text-indigo-300 transition-colors duration-300">- Kunal Sharma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
