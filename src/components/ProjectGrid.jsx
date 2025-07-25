// src/components/ProjectGrid.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import ProjectModal from './ProjectModal';

// Import screenshots
import ecommerceDashboard from '../assets/screenshots/ecommerce-dashboard.svg';
import analyticsChart from '../assets/screenshots/analytics-chart.svg';
import crmInterface from '../assets/screenshots/crm-interface.svg';

// Extended projects data with more projects
const allProjects = [
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
  // Additional projects can be added here
  {
    title: 'Task Management API',
    description: 'RESTful API untuk task management dengan real-time collaboration dan notification system.',
    fullDescription: 'Advanced task management system dengan fitur team collaboration, real-time updates, dan comprehensive project tracking.',
    icon: 'fas fa-tasks',
    gradient: 'from-blue-500 to-cyan-600',
    tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    category: 'Backend Development',
    duration: '2 months',
    status: 'In Development',
    github: 'https://github.com/yourusername/task-api',
    screenshots: [],
    features: [
      'Task Creation & Assignment',
      'Real-time Collaboration',
      'Project Management',
      'Notification System'
    ],
    challenges: []
  },
  {
    title: 'Inventory System',
    description: 'System manajemen inventory dengan barcode scanning dan automated reorder.',
    fullDescription: 'Comprehensive inventory management system dengan advanced features untuk tracking dan automation.',
    icon: 'fas fa-boxes',
    gradient: 'from-orange-500 to-red-600',
    tech: ['Laravel', 'MySQL', 'Vue.js', 'Quagga.js'],
    category: 'Full Stack Development',
    duration: '4 months',
    status: 'Completed',
    github: 'https://github.com/yourusername/inventory-system',
    screenshots: [],
    features: [
      'Barcode Scanning',
      'Automated Reorder Points',
      'Multi-location Support',
      'Comprehensive Reporting'
    ],
    challenges: []
  },
  {
    title: 'Blog API',
    description: 'RESTful API untuk blog platform dengan CMS features dan SEO optimization.',
    fullDescription: 'Modern blog platform API dengan advanced CMS capabilities dan built-in SEO features.',
    icon: 'fas fa-blog',
    gradient: 'from-pink-500 to-rose-600',
    tech: ['Python', 'Django', 'PostgreSQL', 'Elasticsearch'],
    category: 'Backend Development',
    duration: '2 months',
    status: 'Completed',
    github: 'https://github.com/yourusername/blog-api',
    screenshots: [],
    features: [
      'Content Management',
      'SEO Optimization',
      'Full-text Search',
      'Media Management'
    ],
    challenges: []
  }
];

const ProjectGrid = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Backend Development', 'Full Stack Development', 'Data Analytics'];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === category));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">All Projects</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Complete portfolio of my development work
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="project-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <div
                className={`bg-gradient-to-br ${project.gradient} h-40 flex items-center justify-center relative`}
              >
                <i className={`${project.icon} text-white text-4xl`}></i>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500 text-white' :
                    project.status === 'In Production' ? 'bg-blue-500 text-white' :
                    'bg-yellow-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
};

export default ProjectGrid;
