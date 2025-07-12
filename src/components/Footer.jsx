// src/components/Footer.jsx
import githubLogo from '../assets/githubLogo.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';
import instagramLogo from '../assets/instagramLogo.svg';
import "iconify-icon";


const ConnectIcon = [
  {name: 'Github', icon: githubLogo, href: 'https://github.com/Fiqryoa' },
  {name: 'LinkedIn', icon: linkedinLogo, href: 'https://www.linkedin.com/in/fiqryomaratala' },
  {name: 'Instagram', icon: instagramLogo, href: 'https://instagram.com/fiqryoa' },

];
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in">
            <h3 className="text-xl font-bold mb-4">Fiqry O.A</h3>
            <p className="text-gray-400">
              Junior Back End Developer dengan spesialisasi dalam membangun
              sistem yang scalable dan performant.
            </p>
          </div>
          <div className="fade-in">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-gray-400 hover:text-white transition-colors capitalize">
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-in">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {ConnectIcon.map((item, icon, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                  title={item.name}
                >
                  <img src={item.icon} alt={icon.name} className="w-10 h-10 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-4 text-center text-gray-400 fade-in">
          <p>&copy; 2024 Fiqry Omar Atala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
