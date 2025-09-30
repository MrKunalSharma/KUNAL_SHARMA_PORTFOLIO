import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaAngleRight, FaTools, FaCode, FaLayerGroup } from 'react-icons/fa';

const Projects = () => {
  const projectsContainerRef = useRef(null);
  
  // Projects data - comprehensive list of all projects
  const projectsData = [
    {
      id: 1,
      title: "LLM Fine-Tuning Framework",
      description: "Production-ready framework for fine-tuning Large Language Models with comprehensive evaluation metrics.",
      category: "ai",
      image: "/Project/LLM-1.png",
      technologies: ["PyTorch", "FastAPI", "Streamlit", "Docker"],
      githubLink: "https://github.com/MrKunalSharma/LLM-FineTuning-Framework",
      demoLink: "https://llm-finetuning-framework-scsk4nhvr2v8g6x8m3p8nj.streamlit.app/",
      features: [
        "Efficient Fine-tuning: LoRA and QLoRA implementation reducing trainable parameters by 99%",
        "Comprehensive Evaluation: 7+ metrics including BLEU, ROUGE, BERTScore, and safety metrics",
        "Production API: FastAPI-based REST service with authentication and rate limiting",
        "Real-time Interface: Streamlit web UI for easy interaction"
      ]
    },
    {
      id: 2,
      title: "Multi-Agent AI System",
      description: "Collaborative AI agents that research, analyze, and produce concise, professional reports.",
      category: "ai",
      image: "/Project/MultiAgent-2.png",
      technologies: ["FastAPI", "Streamlit", "Ollama", "Python"],
      githubLink: "https://github.com/MrKunalSharma/multi-agent-ai-system",
      demoLink: "https://multi-agent-ai-system-asnsejr3pz3v3ntvkdknyd.streamlit.app/",
      features: [
        "Multi-agent architecture: research, analysis, and report writing",
        "Task orchestration and workflow coordination",
        "Optional local LLMs via Ollama (zero API cost)",
        "RESTful API with automatic OpenAPI/Swagger docs"
      ]
    },
    {
      id: 3,
      title: "AI Workflow Agent",
      description: "Intelligent email processing system that automates customer communications with 75% accuracy.",
      category: "ai",
      image: "/Project/AI-3.png",
      technologies: ["FastAPI", "Streamlit", "LangChain", "Python"],
      githubLink: "https://github.com/MrKunalSharma/ai-workflow-agent",
      demoLink: "https://ai-workflow-agent.streamlit.app/",
      features: [
        "Intelligent Email Classification: Auto-categorizes emails into 5 intent types with 75% accuracy",
        "Real-time Processing: Sub-100ms response time with rule-based engine",
        "Priority Detection: Automatic urgency assessment and escalation",
        "Smart Response Generation: Context-aware professional responses"
      ]
    },
    {
      id: 4,
      title: "Computer Vision Defect Detection",
      description: "Real-time object/defect detection system using YOLOv8 for inference with interactive dashboard.",
      category: "cv",
      image: "/Project/RealTimeFraud-4.png",
      technologies: ["YOLOv8", "FastAPI", "Streamlit", "PyTorch"],
      githubLink: "https://github.com/MrKunalSharma/cv-defect-detection",
      demoLink: "https://cv-defect-detection-m3zyjth8vjvwdtpnuoeskn.streamlit.app/",
      features: [
        "Real-time detection with YOLOv8 (COCO by default, custom defects supported)",
        "REST API with automatic Swagger docs and CORS support",
        "Streamlit dashboard: upload or camera input, annotated results, history",
        "Config-driven training and serving via configs/config.yaml"
      ]
    },
    {
      id: 5,
      title: "Enterprise RAG Knowledge Assistant",
      description: "A production-ready RAG system achieving <500ms query latency with 276x performance improvement through intelligent caching.",
      category: "ai",
      image: "/Project/Rag-5.png",
      technologies: ["PostgreSQL", "FastAPI", "ChromaDB", "Ollama"],
      githubLink: "https://github.com/MrKunalSharma/enterprise-rag-system",
      demoLink: "#",
      features: [
        "Secure Authentication: JWT-based auth with role-based access control",
        "Multi-Format Support: Process PDF, DOCX, TXT, and Markdown files",
        "Semantic Search: Vector-based search using ChromaDB",
        "AI-Powered Answers: Integration with Ollama for local LLM"
      ]
    },
    {
      id: 6,
      title: "Real-time Fraud Detection System",
      description: "ML pipeline analyzing 284,807 transactions with 99.95% fraud detection accuracy, preventing potential losses of $2.5M annually.",
      category: "ml",
      image: "/Project/FraudDetect-6.png",
      technologies: ["FastAPI", "Docker", "Prometheus", "Scikit-learn"],
      githubLink: "https://github.com/MrKunalSharma/fraud-detection-mlops",
      demoLink: "https://fraud-detection-mlops-msnfh7adt5ykkr6yzbmhyv.streamlit.app/",
      features: [
        "Real-time Fraud Detection: REST API endpoint for instant fraud prediction",
        "MLOps Pipeline: Automated data preprocessing, model training, and evaluation",
        "Model Comparison: Evaluates Random Forest, Logistic Regression, and Decision Tree",
        "Production Monitoring: Prometheus metrics and Grafana dashboards"
      ]
    },
    {
      id: 7,
      title: "RAG Document Q&A System",
      description: "Intelligent question-answering system over PDF documents using semantic search and natural language processing.",
      category: "ai",
      image: "/Project/RagDocument-7.png",
      technologies: ["FastAPI", "Streamlit", "ChromaDB", "LangChain"],
      githubLink: "https://github.com/MrKunalSharma/rag-document-qa",
      demoLink: "https://rag-document-app-n9nrripappuptgnnafem92v.streamlit.app/",
      features: [
        "Semantic Search: Find relevant information using natural language queries",
        "Multi-Document Support: Process and search across multiple PDF files simultaneously",
        "Real-time Processing: Sub-second query response times with efficient vector search",
        "Dual Mode Operation: Works with or without OpenAI API for flexibility"
      ]
    },
    {
      id: 8,
      title: "Movie Recommendation System",
      description: "Content-based movie recommendation system suggesting movies based on similarities in genres, cast, and other features.",
      category: "ml",
      image: "/Project/Movie-8.png",
      technologies: ["Python", "Streamlit", "Scikit-learn", "NLTK"],
      githubLink: "https://github.com/MrKunalSharma/movie_recommendation_project",
      demoLink: "https://moviefy.streamlit.app/",
      features: [
        "Intelligent movie search with fuzzy matching",
        "Similarity-based recommendations",
        "Percentage match scores for each recommendation",
        "Responsive web interface"
      ]
    }
  ];

  // Project Card Component for better organization
  const ProjectCard = ({ project, index }) => (
    <div 
      data-aos={index % 3 === 0 ? "fade-up" : index % 3 === 1 ? "fade-right" : "fade-left"}
      data-aos-delay={100 + (index % 3) * 50}
      data-aos-duration="800"
      className="card-container h-full"
    >
      <div className="card bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden h-full hover:border-indigo-500/30 transition-all duration-500 shadow-lg hover:shadow-indigo-500/10 flex flex-col">
        {/* Project Image */}
        <div className="relative overflow-hidden h-52">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 z-10"></div>
          <img 
            src={project.image || null} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            onError={(e) => {
              e.target.src = null;
            }}
          />
          
          {/* Action buttons */}
          <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
            {project.githubLink && project.githubLink !== "#" && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/80 hover:bg-gray-800 text-white p-2.5 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <FaGithub size={18} />
              </a>
            )}
            
            {project.demoLink && project.demoLink !== "#" && (
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600/80 hover:bg-indigo-700 text-white p-2.5 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label={`Live demo for ${project.title}`}
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>
        
        {/* Project Content */}
        <div className="flex-1 flex flex-col p-6">
          <h3 className="text-xl font-bold text-white mb-2 group">
            {project.title}
            <div className="h-px w-0 group-hover:w-full bg-indigo-500 transition-all duration-300 mt-1"></div>
          </h3>
          
          <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
          
          {/* Key Features */}
          <div className="mb-5" data-aos="fade-up" data-aos-delay="150" data-aos-anchor-placement="top-bottom">
            <h4 className="text-sm font-semibold text-indigo-400 mb-2 flex items-center">
              <FaLayerGroup className="mr-2 text-xs" /> Key Features
            </h4>
            <ul className="space-y-1">
              {project.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="text-gray-400 text-xs flex items-start">
                  <FaAngleRight className="text-indigo-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div className="mt-auto">
            <h4 className="text-sm font-semibold text-indigo-400 mb-2 flex items-center">
              <FaTools className="mr-2 text-xs" /> Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="bg-gray-700/60 text-gray-300 text-xs px-2 py-0.5 rounded-full border border-gray-700"
                  data-aos="zoom-in"
                  data-aos-delay={50 * (idx + 1)}
                  data-aos-anchor-placement="top-bottom"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      <div className="absolute -right-40 top-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -left-40 bottom-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-heading" data-aos="fade-up">
            Featured Projects
          </h2>
        </div>
        
        {/* Projects grid */}
        <div 
          ref={projectsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div 
          className="text-center mt-14"
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <a 
            href="https://github.com/MrKunalSharma"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex group items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-lg transition duration-300 ease-out border-2 border-indigo-500 text-indigo-400 group-hover:text-white"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0 ease">
              <FaGithub className="mr-2" /> View More Projects
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-indigo-400 transition-all duration-300 transform group-hover:translate-x-full ease">
              <FaCode className="mr-2" /> Explore GitHub Profile
            </span>
            <span className="relative invisible">Explore GitHub Profile</span>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @media (max-width: 768px) {
          .card-container {
            transform: none !important;
            opacity: 1 !important;
          }
        }
        
        @media (min-width: 1024px) {
          .grid-cols-3 > div:nth-child(3n+1) {
            transform-origin: left center;
          }
          .grid-cols-3 > div:nth-child(3n+3) {
            transform-origin: right center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
