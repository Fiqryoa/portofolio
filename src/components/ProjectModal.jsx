// src/components/ProjectModal.jsx
import { useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close modal when pressing Escape key and handle body scroll lock
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      // Store original body overflow and scrollbar width
      const originalStyle = window.getComputedStyle(document.body);
      const originalOverflow = originalStyle.overflow;
      const originalPaddingRight = originalStyle.paddingRight;
      
      // Get scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Prevent body scroll and compensate for scrollbar
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${parseInt(originalPaddingRight) + scrollbarWidth}px`;
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent scroll propagation from modal content
  const handleModalScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content"
        onClick={(e) => e.stopPropagation()}
        onScroll={handleModalScroll}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Screenshots
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={screenshot.url}
                      alt={screenshot.caption}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {screenshot.caption && (
                      <div className="p-3 bg-gray-50 dark:bg-gray-700">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {screenshot.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Project Details
              </h3>
              <div className="space-y-3">
                {project.category && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Category:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{project.category}</span>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Duration:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{project.duration}</span>
                  </div>
                )}
                {project.status && (
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Status:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{project.status}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
              >
                <i className="fab fa-github mr-2"></i>
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Live Demo
              </a>
            )}
            {project.documentation && (
              <a
                href={project.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
              >
                <i className="fas fa-book mr-2"></i>
                Documentation
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
