import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Get navbar height for scroll offset calculation
  useEffect(() => {
    const updateNavHeight = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) setNavbarHeight(navbar.offsetHeight);
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Detect active section
      let current = 'home';
      navLinks.forEach(link => {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const offset = section.offsetTop - navbarHeight - 40;
          if (window.scrollY >= offset) {
            current = link.href.substring(1);
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight, navLinks]);

  // Smooth scroll helper
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const scrollY = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
      window.scrollTo({ top: scrollY, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-2 sm:py-3'
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={e => handleSmoothScroll(e, 'home')}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 overflow-hidden rounded-full border-2 border-indigo-500/30 group-hover:border-indigo-500 transition-colors duration-300">
              <motion.img
                src="/logo.jpg"
                alt="Kunal Sharma Logo"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 text-xl sm:text-2xl font-bold">
                Kunal
              </span>
              <span className="text-white text-xl sm:text-2xl font-bold">Sharma</span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`cursor-pointer text-sm lg:text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-500/10 hover:text-indigo-400 ${
                  activeSection === link.href.substring(1)
                    ? 'text-indigo-400 bg-indigo-500/10'
                    : 'text-gray-300'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={e => handleSmoothScroll(e, link.href.substring(1))}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800/70 text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(79, 70, 229, 0.2)' }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Right side slide-in */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              style={{ backdropFilter: 'blur(4px)' }}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 h-full w-[50%] bg-gray-900/95 backdrop-blur-lg z-50 md:hidden shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b border-gray-800/50">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                    Menu
                  </h2>
                  <motion.button
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800/70 text-gray-300 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(79, 70, 229, 0.2)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes size={20} />
                  </motion.button>
                </div>
                
                <div className="flex-1 px-6 py-6 overflow-y-auto">
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.07 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href={link.href}
                          className={`cursor-pointer block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                            activeSection === link.href.substring(1)
                              ? 'text-indigo-400 bg-indigo-500/10'
                              : 'text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/10'
                          }`}
                          onClick={e => {
                            setIsMenuOpen(false);
                            handleSmoothScroll(e, link.href.substring(1));
                          }}
                        >
                          {link.name}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom hint with down arrow */}
                <div className="p-6 border-t border-gray-800/50">
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-gray-500 text-sm mb-2">Tap to navigate</p>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaChevronDown className="text-indigo-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
