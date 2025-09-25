import React, { useState } from 'react';
import { Code, ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Helper function to get meaningful image titles
  const getImageTitle = (projectTitle, index) => {
    const imageTitles = {
      "Courtify- Sports Court Booking System": ["Main Dashboard", "Courts List", "User Dashboard", "NFT Receipt", "Statistics", "Booking System"],
      "Cloud Cost Optimizer": ["Home Page", "Cost Calculator", "Cost Analysis", "Cost Report", "Sign In", "AI Detection"],
      "Laravel Based E-Commerce Platform": ["Demo Video"],
      "IoT Based Rope Making Machine": ["Machine View", "Machine Start", "Machine Operation", "Display Screen", "PCB Design"]
    };
    
    return imageTitles[projectTitle]?.[index] || `View ${index + 1}`;
  };

  // Open modal with specific image
  const openModal = (project, imageIndex) => {
    setSelectedProject(project);
    setSelectedImage(project.images[imageIndex]);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Navigate to next image
  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(selectedProject.images[nextIndex]);
    }
  };

  // Navigate to previous image
  const prevImage = () => {
    if (selectedProject && currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(selectedProject.images[prevIndex]);
    }
  };

  // Handle keyboard navigation
  const handleKeyPress = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  // Sample projects data
  const PROJECTS = [
    {
      title: "Courtify- Sports Court Booking System",
      subtitle: "Transparent and secure sports facility reservations",
      description: "A decentralized application that revolutionizes sports facility bookings using blockchain technology. Features smart contracts for transparent pricing, automated refunds, and tamper-proof booking records.",
      year: "2025",
      color: "from-purple-500 to-indigo-600",
      images: [
        "/images/projects/sports-booking/main.jpg",
        "/images/projects/sports-booking/courts list.jpg", 
        "/images/projects/sports-booking/dashboard.jpg",
        "/images/projects/sports-booking/NFT.jpg",
        "/images/projects/sports-booking/stat.jpg",
        "/images/projects/sports-booking/booking.jpg",
      ],
      technologies: ["React", "SQLite", "Web3 Auth", "Node.js","HotPocket smart contracts"],
      githubUrl: "https://github.com/HayeshaPerera/Courtify-"
    },
    {
      title: "Cloud Cost Optimizer",
      subtitle: "AI-powered cloud infrastructure optimization",
      description: "An intelligent system that analyzes cloud usage patterns and automatically optimizes resource allocation, helping businesses reduce cloud costs by up to 40% while maintaining performance.",
      year: "2025",
      color: "from-blue-500 to-cyan-600",
      images: [
        "/images/projects/cloud-optimizer/home.jpg",
        "/images/projects/cloud-optimizer/calculator.jpg",
        "/images/projects/cloud-optimizer/cost analyzing.jpg",
        "/images/projects/cloud-optimizer/cost report.jpg",
        "/images/projects/cloud-optimizer/sign.jpg",
        "/images/projects/cloud-optimizer/AI detection.jpg"
      ],
      technologies: ["Ballerina", "HTML5", "CSS3", "JavaScript", "Chart.js", "Google OAuth", "REST APIs"],
      githubUrl: "https://github.com/Thameeshi/iwb25-153-codeblooded"
    },
    {
      title: "Laravel Based E-Commerce Platform",
      subtitle: "Online shopping experience",
      description: "A comprehensive e-commerce platform featuring user registration/login, product catalog with discounts, and newsletter subscription. Built with modern technologies for optimal performance and user experience.",
      year: "2024",
      color: "from-emerald-500 to-teal-600",
      images: [
        "/images/projects/ecommerce/demo-video.mp4"
      ],
      technologies: ["Laravel (PHP)", "Blade Templating", "MySQL", "Bootstrap 5"],
      githubUrl: "https://github.com/HayeshaPerera/ecommerce-Laravel"
    },
    {
      title: "IoT Based Rope Making Machine",
      subtitle: "Automated rope making with real-time monitoring",
      description: "fully automated rope-making machine using Arduino Uno R3, IR sensors, and DC motors, servo motors, Load Cells, Rotary Encoders, LCD Display to control rope tension and length.",
      year: "2024",
      color: "from-green-500 to-emerald-600",
      images: [
        "/images/projects/iot-monitor/Machine View.jpg",
        "/images/projects/iot-monitor/Machine Start.jpg",
        "/images/projects/iot-monitor/Machine .jpg",
        "/images/projects/iot-monitor/Machine display.jpg",
        "/images/projects/iot-monitor/PCB.jpg"
      ],
      technologies: ["Arduino", "#C"],
      githubUrl: "https://github.com/HayeshaPerera/Automated-Rope-Making-Machine"
    }
  ];

  return (
    <>
      <section id="projects" className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-gray-950 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects That Matter
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Each project taught me something new and solved a real problem.
          </p>

          <div className="space-y-16">
            {PROJECTS.map((project, index) => (
              <div key={index} className="bg-slate-900/50 rounded-2xl p-8 border border-purple-600/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Project Info */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{project.title}</h3>
                      <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">{project.year}</span>
                    </div>
                    
                    <h4 className="text-lg md:text-xl text-purple-400 mb-4 leading-tight">{project.subtitle}</h4>
                    
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-800/60 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
                      
                      {/* Main Image/Video (always visible) */}
                      <div 
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                        onClick={() => openModal(project, 0)}
                      >
                        {project.images[0].endsWith('.mp4') ? (
                          <video
                            src={project.images[0]}
                            alt={`${project.title} - Demo Video`}
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src={project.images[0]}
                            alt={`${project.title} - Main View`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        )}
                        {/* Fallback gradient */}
                        <div className={`w-full h-full bg-gradient-to-br ${project.color} hidden items-center justify-center`}>
                          <Code className="w-24 h-24 text-white opacity-50" />
                        </div>
                      </div>

                      {/* Hover Gallery Grid - Only show if more than 1 image */}
                      {project.images.length > 1 && (
                        <>
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className={`grid gap-2 p-4 h-full ${
                              project.images.length <= 4 ? 'grid-cols-2' : 
                              project.images.length === 6 ? 'grid-cols-3 grid-rows-2' : 
                              'grid-cols-2'
                            }`}>
                              {project.images.slice(0, 6).map((image, imgIndex) => (
                                <div 
                                  key={imgIndex}
                                  className="relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer"
                                  style={{
                                    animationDelay: `${imgIndex * 0.1}s`
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(project, imgIndex);
                                  }}
                                >
                                  <img
                                    src={image}
                                    alt={`${project.title} - ${getImageTitle(project.title, imgIndex)}`}
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                      animationDelay: `${imgIndex * 0.15}s`
                                    }}
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'flex';
                                    }}
                                  />
                                  {/* Fallback for each image */}
                                  <div className="w-full h-full bg-slate-700 hidden items-center justify-center">
                                    <Code className="w-8 h-8 text-gray-400" />
                                  </div>
                                  
                                  {/* Image overlay with label */}
                                  <div className="absolute bottom-1 left-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {getImageTitle(project.title, imgIndex)}
                                  </div>
                                  
                                  {/* Image number badge */}
                                  <div className="absolute top-1 right-1 bg-purple-600/80 text-white text-xs px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {imgIndex + 1}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Hover instruction */}
                          <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                              Click to view full size
                            </div>
                          </div>

                          {/* Image count badge */}
                          <div className="absolute top-4 right-4 bg-purple-600/90 text-white text-sm px-3 py-1 rounded-full">
                            {project.images.length} images
                          </div>
                        </>
                      )}

                      {/* Video indicator for single video projects */}
                      {project.images.length === 1 && project.images[0].endsWith('.mp4') && (
                        <div className="absolute top-4 right-4 bg-red-600/90 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                          Demo Video
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          {selectedProject && selectedProject.images.length > 1 && (
            <>
              {/* Previous button */}
              {currentImageIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}

              {/* Next button */}
              {currentImageIndex < selectedProject.images.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}
            </>
          )}

          {/* Image container */}
          <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {selectedImage.endsWith('.mp4') ? (
              <video
                src={selectedImage}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                controls
                autoPlay={false}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedImage}
                alt={`${selectedProject?.title} - ${getImageTitle(selectedProject?.title || '', currentImageIndex)}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            )}

            {/* Image info */}
            {selectedProject && (
              <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
                <p className="text-sm text-gray-300">{getImageTitle(selectedProject.title, currentImageIndex)}</p>
                {selectedProject.images.length > 1 && (
                  <p className="text-xs text-gray-400 mt-1">
                    {currentImageIndex + 1} of {selectedProject.images.length}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm p-3 rounded-lg">
            <p>Press <kbd className="bg-gray-700 px-1 rounded">ESC</kbd> to close</p>
            {selectedProject && selectedProject.images.length > 1 && (
              <p>Use <kbd className="bg-gray-700 px-1 rounded">←</kbd> <kbd className="bg-gray-700 px-1 rounded">→</kbd> to navigate</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;