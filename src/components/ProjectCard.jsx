import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfo, FaTimes } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const {
    title,
    description,
    image,
    technologies,
    githubLink,
    demoLink,
    details
  } = project;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card h-full group overflow-hidden flex flex-col hover:transform hover:scale-105 transition-all duration-300 relative">
      {/* Project Image */}
      {image && (
        <div className="h-48 overflow-hidden rounded-t-lg relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
          <img 
            src={image || '/placeholder-project.jpg'} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      
      {/* Project Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">{title}</h3>
        
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-700/80 text-gray-300 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-auto">
          <button
            onClick={toggleDetails}
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
          >
            <FaInfo className="mr-1" />
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          
          <div className="flex space-x-3">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={`GitHub repository for ${title}`}
              >
                <FaGithub size={18} />
              </a>
            )}
            
            {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                aria-label={`Live demo for ${title}`}
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-gray-900/90 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div 
            className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <button 
                onClick={toggleDetails}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Close details"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              {/* Project Image */}
              {image && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={image || '/placeholder-project.jpg'} 
                    alt={title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              
              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">Description</h4>
                <p className="text-gray-300">{description}</p>
              </div>
              
              {/* Key Features */}
              {details && details.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-indigo-400 mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {details.map((detail, index) => (
                      <li key={index} className="text-gray-300">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {githubLink && (
                  <a 
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                )}
                
                {demoLink && (
                  <a 
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
