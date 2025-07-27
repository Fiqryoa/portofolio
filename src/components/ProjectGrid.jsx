// src/components/ProjectGrid.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import ProjectModal from './ProjectModal';

// Import screenshots
import topup1 from '../assets/topup1.png';
import topup2 from '../assets/topup2.png';
import analyticsChart from '../assets/screenshots/analytics-chart.svg';
import crmInterface from '../assets/screenshots/crm-interface.svg';

// Extended projects data with more projects
const allProjects = [
  {
    title: 'Gass Top-up',
    description:
      'Platform web top-up game dan pulsa dengan sistem pembayaran terintegrasi. Dibangun dengan React.js + Vite untuk frontend dan Node.js + Express.js untuk backend.',
    fullDescription:
      'Platform top-up modern yang menyediakan layanan top-up game online, pulsa, dan voucher digital. Frontend dibangun dengan React.js menggunakan Vite sebagai build tool dan Tailwind CSS untuk styling yang responsive dan modern. Backend menggunakan Node.js dengan Express.js framework untuk API yang cepat dan scalable. Sistem pembayaran terintegrasi dengan multiple payment gateway dan real-time notification system.',
    icon: 'fas fa-gamepad',
    gradient: 'from-emerald-500 to-teal-600',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL'],
    category: 'Full Stack Development',
    duration: '4 months',
    status: 'Completed',
    github: 'https://github.com/Fiqryoa/gass-topup',
    demo: 'https://gass-topup.vercel.app',
    documentation: 'https://docs.gass-topup.com',
    screenshots: [
      {
        url: topup1,
        caption: 'Homepage & Top-up Services'
      },
      {
        url: topup2,
        caption: 'Payment Gateway Integration'
      }
    ],
    features: [
      'Multi-Game Top-up Services',
      'Pulsa & Data Package Top-up',
      'Multiple Payment Gateway Integration',
      'Real-time Transaction Status',
      'User Dashboard & History',
      'Admin Panel for Management',
      'Responsive Mobile Design',
      'Automated Email Notifications',
      'Price Calculator & Discount System',
      'API Integration with Game Providers'
    ],
    challenges: [
      {
        challenge: 'Integrating multiple payment gateways with different APIs',
        solution: 'Created unified payment service layer with adapter pattern to handle different gateway implementations'
      },
      {
        challenge: 'Real-time transaction status updates',
        solution: 'Implemented WebSocket connections and webhook handlers for instant payment confirmations'
      }
    ]
  },
  {
    title: 'Flutter Mobile App',
    description:
      'Aplikasi mobile cross-platform yang dibangun dengan Flutter dan Dart, menggunakan Firebase sebagai backend untuk authentication, database, dan cloud storage.',
    fullDescription:
      'Aplikasi mobile modern yang dibangun dengan Flutter framework menggunakan bahasa Dart. Aplikasi ini mengintegrasikan berbagai layanan Firebase seperti Authentication untuk login/register, Firestore sebagai database real-time, Cloud Storage untuk penyimpanan file, dan Cloud Messaging untuk push notifications. Desain responsive dengan Material Design dan Cupertino untuk pengalaman native di Android dan iOS.',
    icon: 'fas fa-mobile-alt',
    gradient: 'from-blue-500 to-cyan-600',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Cloud Storage', 'FCM'],
    category: 'Mobile Development',
    duration: '3 months',
    status: 'Completed',
    github: 'https://github.com/yourusername/flutter-app',
    demo: 'https://play.google.com/store/apps/details?id=com.example.app',
    documentation: 'https://docs.flutter-app.com',
    screenshots: [
      {
        url: analyticsChart,
        caption: 'Login & Registration Screen'
      },
      {
        url: analyticsChart,
        caption: 'Main Dashboard Interface'
      }
    ],
    features: [
      'User Authentication (Email/Google/Facebook)',
      'Real-time Database with Firestore',
      'File Upload & Cloud Storage',
      'Push Notifications',
      'Offline Support with Local Caching',
      'Cross-platform (Android & iOS)',
      'Material Design & Cupertino Widgets',
      'State Management with Provider/Bloc',
      'Image Picker & Camera Integration',
      'Location Services & Maps'
    ],
    challenges: [
      {
        challenge: 'Managing state across complex widget tree',
        solution: 'Implemented Provider pattern with ChangeNotifier for efficient state management and reduced widget rebuilds'
      },
      {
        challenge: 'Offline data synchronization',
        solution: 'Used Firestore offline persistence with local SQLite cache and conflict resolution strategies'
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

  const categories = ['All', 'Backend Development', 'Mobile Development', 'Full Stack Development'];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Handle escape key and body scroll lock
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

  // Handle backdrop click (if clicking on the outer container)
  const handleBackdropClick = (e) => {
    // Only close if clicking on the main container, not on content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-40 bg-white dark:bg-gray-900 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Header */}
      <div 
        className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">All Projects</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Complete portfolio of my development work
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors back-button"
            >
              <i className="fas fa-arrow-left"></i>
              <span className="font-medium">Back to Home</span>
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
      <div 
        className="max-w-6xl mx-auto px-4 py-8"
        onClick={(e) => e.stopPropagation()}
      >
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
