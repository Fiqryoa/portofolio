import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// src/components/Tools.jsx
import dockerLogo from '../assets/dockerLogo.svg';
import figmaLogo from '../assets/figmaLogo.svg';
import githubLogo from '../assets/githubLogo.svg';
import pythonLogo from '../assets/pythonLogo.svg';
import dartLogo from '../assets/dartLogo.svg';
import mysqlLogo from '../assets/mysqlLogo.svg';
import postmanLogo from '../assets/postmanLogo.svg';
import firebaseLogo from '../assets/firebaseLogo.svg';
import react from '../assets/react.svg';
import flutterLogo from '../assets/flutterLogo.svg';
import htmlLogo from '../assets/htmlLogo.svg';
import javascriptLogo from '../assets/javascriptLogo.svg';


const tools = [
  { nama: 'HTML', type: 'img', logo: htmlLogo },
  { nama: 'JavaScript', type: 'img', logo: javascriptLogo },
  { name: 'Python', type: 'img', logo: pythonLogo },
  { name: 'Dart', type: 'img', logo: dartLogo },
  { name: 'Github', type: 'img', logo: githubLogo },
  { name: 'Mysql', type: 'img', logo: mysqlLogo },
  { name: 'Postman', type: 'img', logo: postmanLogo },
  { name: 'Firebase', type: 'img', logo: firebaseLogo },
  { name: 'React', type: 'img', logo: react },
  { name: 'Flutter', type: 'img', logo: flutterLogo},
  { name: 'Figma', type: 'img', logo: figmaLogo },
  { name: 'Docker', type: 'img', logo: dockerLogo }
];

const Tools = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <section id="tools" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technologies & Tools I Use
          </h2>
          <div data-aos="fade-up" data-aos-delay="100" className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 dark:text-gray-300">
            Beberapa tools andalan yang saya gunakan dalam pengembangan aplikasi sehari-hari.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center fade-in">
          {tools.map((tool, index) => (
            <div
              key={index}
              data-aos="fade-up" data-aos-delay={index*150}
              className="flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
            >
              <div className="w-14 h-14 mb-3">
                {tool.type === 'img' ? (
                    <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-full h-full object-contain rounded-[1rem]"
                        />
                ) : (
                    <i className={`${tool.icon} ${tool.color} text-4xl`}></i>
                )}
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
