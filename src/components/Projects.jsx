// src/components/Projects.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectModal from './ProjectModal';
import ProjectGrid from './ProjectGrid';

// Import screenshots
import ecommerceDashboard from '../assets/screenshots/ecommerce-dashboard.svg';
import analyticsChart from '../assets/screenshots/analytics-chart.svg';
import crmInterface from '../assets/screenshots/crm-interface.svg';

const projects = [
  {
    title: 'E-Commerce API',
    description:
      'RESTful API untuk platform e-commerce dengan fitur lengkap: user management, product catalog, shopping cart, dan payment integration.',
    fullDescription:
      'Comprehensive e-commerce backend system yang dibangun dengan Laravel framework. API ini mendukung full e-commerce functionality termasuk user authentication, product management, shopping cart, order processing, payment integration dengan multiple gateways, dan admin dashboard. Dilengkapi dengan caching menggunakan Redis untuk performa optimal dan dokumentasi API yang lengkap.',
    icon: 'fas fa-shopping-cart',
    gradient: 'from-indigo-500 to-purple-600',
    tech: ['Laravel', 'MySQL', 'Redis', 'JWT Auth', 'Stripe API', 'Docker'],
    category: 'Backend Development',
    duration: '3 months',
    status: 'Completed',
    github: 'https://github.com/yourusername/ecommerce-api',
    demo: 'https://ecommerce-demo.vercel.app',
    documentation: 'https://docs.ecommerce-api.com',
    screenshots: [
      {
        url: ecommerceDashboard,
        caption: 'Admin Dashboard - Product Management'
      },
      {
        url: ecommerceDashboard,
        caption: 'API Documentation Interface'
      }
    ],
    features: [
      'User Authentication & Authorization',
      'Product Catalog Management',
      'Shopping Cart & Wishlist',
      'Order Processing System',
      'Payment Gateway Integration',
      'Admin Dashboard',
      'Real-time Inventory Tracking',
      'Email Notifications',
      'Search & Filtering',
      'API Rate Limiting'
    ],
    challenges: [
      {
        challenge: 'Handling concurrent cart updates',
        solution: 'Implemented database transactions and optimistic locking to prevent race conditions'
      },
      {
        challenge: 'Payment gateway integration complexity',
        solution: 'Created abstract payment processor with strategy pattern for multiple gateways'
      }
    ]
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Backend system untuk dashboard analytics dengan real-time data processing, reporting, dan visualization menggunakan Python dan MySQL.',
    fullDescription:
      'Advanced analytics platform yang dibangun dengan Python FastAPI untuk real-time data processing dan analytics. System ini mampu mengolah big data, generating reports, dan menyediakan RESTful API untuk frontend dashboard. Dilengkapi dengan automated data pipeline, caching system, dan real-time notifications.',
    icon: 'fas fa-chart-line',
    gradient: 'from-green-500 to-blue-600',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Pandas', 'NumPy'],
    category: 'Data Analytics',
    duration: '4 months',
    status: 'In Production',
    github: 'https://github.com/yourusername/analytics-dashboard',
    demo: 'https://analytics-demo.vercel.app',
    documentation: 'https://docs.analytics-dashboard.com',
    screenshots: [
      {
        url: analyticsChart,
        caption: 'Real-time Analytics Dashboard'
      },
      {
        url: analyticsChart,
        caption: 'Data Visualization Charts'
      }
    ],
    features: [
      'Real-time Data Processing',
      'Custom Report Generation',
      'Interactive Charts & Graphs',
      'Data Export (PDF, Excel, CSV)',
      'Automated Email Reports',
      'API for Third-party Integration',
      'User Role Management',
      'Data Filtering & Segmentation',
      'Performance Metrics Tracking',
      'Scheduled Data Sync'
    ],
    challenges: [
      {
        challenge: 'Processing large datasets efficiently',
        solution: 'Implemented chunked data processing with Celery workers and database indexing optimization'
      },
      {
        challenge: 'Real-time data updates',
        solution: 'Used WebSocket connections with Redis pub/sub for instant data synchronization'
      }
    ]
  },
  {
    title: 'CRM System',
    description:
      'Comprehensive CRM system dengan fitur lead management, sales pipeline, dan customer analytics. Built with Laravel dan MySQL.',
    fullDescription:
      'Full-stack CRM solution yang dibangun untuk mengelola customer relationship secara efisien. System ini mencakup lead management, sales pipeline tracking, customer communication history, automated follow-up reminders, dan comprehensive reporting. Frontend menggunakan Vue.js dengan real-time updates dan responsive design.',
    icon: 'fas fa-users',
    gradient: 'from-purple-500 to-pink-600',
    tech: ['Laravel', 'MySQL', 'Vue.js', 'Vuex', 'WebSocket', 'Chart.js'],
    category: 'Full Stack Development',
    duration: '5 months',
    status: 'Completed',
    github: 'https://github.com/yourusername/crm-system',
    demo: 'https://crm-demo.vercel.app',
    documentation: 'https://docs.crm-system.com',
    screenshots: [
      {
        url: crmInterface,
        caption: 'Customer Management Interface'
      },
      {
        url: crmInterface,
        caption: 'Sales Pipeline Dashboard'
      }
    ],
    features: [
      'Lead & Contact Management',
      'Sales Pipeline Tracking',
      'Email Integration',
      'Task & Appointment Scheduling',
      'Customer Communication History',
      'Sales Reports & Analytics',
      'Team Collaboration Tools',
      'Custom Fields & Tags',
      'Automated Follow-up Reminders',
      'Mobile-responsive Design'
    ],
    challenges: [
      {
        challenge: 'Complex relationship mapping between entities',
        solution: 'Designed normalized database schema with proper foreign key relationships and Laravel Eloquent ORM'
      },
      {
        challenge: 'Real-time collaboration features',
        solution: 'Implemented Laravel Echo with Pusher for real-time updates and conflict resolution'
      }
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const openProjectGrid = () => {
    setIsGridOpen(true);
  };

  const closeProjectGrid = () => {
    setIsGridOpen(false);
  };

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
                  <button
                    onClick={() => openProjectModal(project)}
                    className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold mb-3 hover:bg-gray-100 transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
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
          <button
            onClick={openProjectGrid}
            data-aos="fade-up" data-aos-delay="100"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-700 transition-colors"
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
      
      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />

      {/* All Projects Grid */}
      <ProjectGrid 
        isOpen={isGridOpen}
        onClose={closeProjectGrid}
      />
    </section>
  );
};

export default Projects;
