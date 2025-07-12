// src/components/Skills.jsx
import React, { useEffect } from 'react';

const skillsData = [
  {
    name: 'PHP',
    icon: 'fab fa-php',
    color: 'text-indigo-600 dark:text-indigo-400',
    percent: 90,
  },
  {
    name: 'Laravel',
    icon: 'fab fa-laravel',
    color: 'text-red-600 dark:text-red-400',
    percent: 95,
  },
  {
    name: 'MySQL',
    icon: 'fas fa-database',
    color: 'text-blue-600 dark:text-blue-400',
    percent: 85,
  },
  {
    name: 'Python',
    icon: 'fab fa-python',
    color: 'text-green-600 dark:text-green-400',
    percent: 75,
  },
];

const barsProgramming = [
  { label: 'PHP', percent: 90 },
  { label: 'Python', percent: 75 },
  { label: 'JavaScript', percent: 70 },
  { label: 'Go', percent: 60 },
];

const barsTools = [
  { label: 'Laravel', percent: 95 },
  { label: 'MySQL', percent: 85 },
  { label: 'Git', percent: 80 },
  { label: 'Docker', percent: 75 },
];

const Skills = () => {
  //useEffect(() => 
    //const rings = //document.querySelectorAll('.progress-ring');
    //rings.forEach(ring => {
      //const span = ring.parentElement.querySelector('span');
      //const percent = parseInt(span.textContent);
      //const radius = 40;
      //const circumference = 2 * Math.PI * radius;
      //const offset = circumference - (percent / 100) * circumference;
      //ring.style.strokeDashoffset = offset;
   // });
   [];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I'm proficient in and my level of expertise
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillsData.map((skill) => (
            <div key={skill.name} className="text-center fade-in card-hover">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg h-full">
                <i className={`${skill.icon} text-6xl ${skill.color} mb-4 tech-icon`}></i>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{skill.name}</h3>
                <div className="relative w-24 h-24 mx-auto my-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200 dark:text-gray-700"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-indigo-600 progress"
                      strokeWidth="8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      strokeDasharray="251.2"
                      strokeDashoffset="100"
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-gray-800 dark:text-white">
                    {skill.percent}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProgressCard title="Programming Languages" data={barsProgramming} />
          <ProgressCard title="Frameworks & Tools" data={barsTools} />
        </div>
      </div>
    </section>
  );
};

// Komponen untuk bar progress
const ProgressCard = ({ title, data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg fade-in card-hover">
      <h3 className="text-xl font-semibold mb-6 dark:text-white">{title}</h3>
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-2">
              <span className="dark:text-gray-300">{item.label}</span>
              <span className="dark:text-gray-300">{item.percent}%</span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="skill-bar bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                style={{ width: `${item.percent}%`, animationDelay: `${0.5 + idx * 0.2}s` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
