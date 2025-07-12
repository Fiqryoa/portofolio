// src/components/Tools.jsx
import dockerLogo from '../assets/dockerLogo.svg';
import figmaLogo from '../assets/figmaLogo.svg';
import githubLogo from '../assets/githubLogo.svg';
import laravelLogo from '../assets/laravelLogo.svg';
import mysqlLogo from '../assets/mysqlLogo.svg';
import postmanLogo from '../assets/postmanLogo.svg';
import vscodeLogo from '../assets/vscodeLogo.svg';
import react from '../assets/react.svg';

const tools = [
  { name: 'Docker', type: 'img', logo: dockerLogo },
  { name: 'Figma', type: 'img', logo: figmaLogo },
  { name: 'Github', type: 'img', logo: githubLogo },
  { name: 'Laravel', type: 'img', logo: laravelLogo },
  { name: 'Mysql', type: 'img', logo: mysqlLogo },
  { name: 'Postman', type: 'img', logo: postmanLogo },
  { name: 'Vscode', type: 'img', logo: vscodeLogo },
  { name: 'React', type: 'img', logo: react },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technologies & Tools I Use
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Beberapa tools andalan yang saya gunakan dalam pengembangan aplikasi sehari-hari.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center fade-in">
          {tools.map((tool, index) => (
            <div
              key={index}
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
