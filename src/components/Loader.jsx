import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="relative">
        {/* Background gradient glow */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div 
            className="mb-10 text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Kunal</span>
            <span className="text-white">Sharma</span>
          </motion.div>
          
          {/* Loader Animation */}
          <div className="relative w-28 h-28">
            {/* Outer ring */}
            <motion.div 
              className="absolute inset-0 rounded-full"
              style={{ 
                borderWidth: "4px",
                borderStyle: "solid",
                borderColor: "transparent", 
                borderTopColor: "#6366f1", // indigo-500
                borderRightColor: "#a855f7", // purple-500
                borderBottomColor: "#6366f1", // indigo-500
                borderLeftColor: "#a855f7", // purple-500
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            {/* Middle ring */}
            <motion.div 
              className="absolute inset-4 rounded-full"
              style={{ 
                borderWidth: "3px",
                borderStyle: "solid",
                borderColor: "transparent", 
                borderTopColor: "#a855f7", // purple-500
                borderRightColor: "#6366f1", // indigo-500 
                borderBottomColor: "#a855f7", // purple-500
                borderLeftColor: "#6366f1", // indigo-500
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            {/* Inner Circle */}
            <div className="absolute inset-8 bg-gray-900 rounded-full flex items-center justify-center">
              {/* Pulsing dot */}
              <motion.div 
                className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              ></motion.div>
            </div>
          </div>
          
          {/* Loading Text with letter animation */}
          <div className="mt-10 flex items-center">
            {["L", "o", "a", "d", "i", "n", "g"].map((letter, index) => (
              <motion.span 
                key={index}
                className="text-gray-300 font-medium text-lg tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.5
                }}
              >
                {letter}
              </motion.span>
            ))}
            
            <motion.div 
              className="flex ml-1 space-x-1"
              animate={{ 
                opacity: [0, 1, 0],
                transition: { 
                  duration: 1.5, 
                  repeat: Infinity,
                  times: [0, 0.5, 1]
                }
              }}
            >
              {[0, 1, 2].map(i => (
                <motion.div 
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-indigo-500"
                  initial={{ y: 0 }}
                  animate={{ y: [-2, 2, -2] }}
                  transition={{
                    duration: 0.6, 
                    repeat: Infinity, 
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Portfolio loading text */}
          <motion.p 
            className="mt-6 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Preparing portfolio experience...
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
