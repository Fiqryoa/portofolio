// src/components/Projects.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'E-Commerce API',
    description:
      'RESTful API untuk platform e-commerce dengan fitur lengkap: user management, product catalog, shopping cart, dan payment integration.',
    icon: 'fas fa-shopping-cart',
    gradient: 'from-indigo-500 to-purple-600',
    tech: ['Laravel', 'MySQL', 'Redis'],
    github: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Backend system untuk dashboard analytics dengan real-time data processing, reporting, dan visualization menggunakan Python dan MySQL.',
    icon: 'fas fa-chart-line',
    gradient: 'from-green-500 to-blue-600',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    github: '#',
  },
  {
    title: 'CRM System',
    description:
      'Comprehensive CRM system dengan fitur lead management, sales pipeline, dan customer analytics. Built with Laravel dan MySQL.',
    icon: 'fas fa-users',
    gradient: 'from-purple-500 to-pink-600',
    tech: ['Laravel', 'MySQL', 'Vue.js'],
    github: '#',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div data-aos="fade-up" data-aos-delay="100" className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up" data-aos-delay={index*150}
              className="project-card bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden fade-in"
            >
              <div
                className={`bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center relative`}
              >
                <i className={`${project.icon} text-white text-6xl`}></i>
                <div className="project-overlay absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold mb-3 hover:bg-gray-100 transition-colors"
                  >
                    View Details
                  </a>
                  <a
                    href={project.github}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <a
            href="#"
            data-aos="fade-up" data-aos-delay="100"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-700 transition-colors"
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
