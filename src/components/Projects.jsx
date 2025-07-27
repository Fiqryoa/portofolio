// src/components/Projects.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectModal from './ProjectModal';
import ProjectGrid from './ProjectGrid';

// Import screenshots
import topup1 from '../assets/topup1.png';
import topup2 from '../assets/topup2.png';
import analyticsChart from '../assets/screenshots/analytics-chart.svg';
import crmInterface from '../assets/screenshots/crm-interface.svg';

const projects = [
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
