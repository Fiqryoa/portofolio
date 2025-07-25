/* eslint-disable react-hooks/exhaustive-deps */
// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import omarA from '../assets/omarA.jpg';
import 'aos/dist/aos.css';


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const professions = [
    'Junior Back End Developer',
    'Laravel Enthusiast',
    'API Specialist',
    'Database Architect',
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    const current = professions[index];

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
      }, 50);
    } else {
      typingTimeout = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
      }, 100);
    }

    if (!isDeleting && text === current) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((index + 1) % professions.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting]);

  return (
    <section
      id="home"
      className="gradient-bg min-h-screen pt-36 flex-items-center justify-center text-white relative overflow-hidden"
    >
      {/* Floating blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl floating" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl floating"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-400/15 rounded-full blur-3xl floating"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8 animate__animated animate__fadeIn">
          <img
            data-aos="fade-up"
            src= {omarA}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 object-cover border-white/20 shadow-2xl hover:border-white/40 transition-all duration-500"
          />
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-7xl  font-bold mb-6 text-glow animate-fade-in-downx">
          Fiqry O.A
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-xl md:text-2xl mb-4 text-gray-200 animate__animated animate__fadeIn animate__delay-1s">
          <span className="typing-effect">{text || '\u00A0'}</span>
        </p>
        <p data-aos="fade-up" data-aos-delay="300" className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
          Membangun sistem backend yang robust dan scalable menggunakan Javascript (Node.js),
          dan MySQL, serta mengintegrasikan dengan frontend berbasis React JS. Berpengalaman dalam pengembangan API,
          microservices, dan arsitektur aplikasi enterprise.
        </p>

        <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-1s">
          <a
            href="#projects"
            className="border-2 border-white bg-white text-gray-600 px-8 py-3 rounded-full font-semibold hover:bg-white/80 transition-colors hover:shadow-lg"          >
            <i className="fas fa-eye mr-2"></i> Lihat Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors hover:shadow-lg"
          >
            <i className="fas fa-paper-plane mr-2"></i> Hubungi Saya
          </a>
        </div>

        <div className="mt-16 scroll-indicator animate__animated animate__fadeIn animate__delay-2s">
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
