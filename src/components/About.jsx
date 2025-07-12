import "iconify-icon";
import { IconifyIconComponent } from "iconify-icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my expertise and professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Passionate Backend Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Saya adalah seorang Back End Developer dengan pengalaman 1+ tahun
              dalam mengembangkan aplikasi web yang scalable dan performant.
              Fokus utama saya adalah membangun sistem backend yang clean,
              maintainable, dan mengikuti best practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Saya memiliki keahlian mendalam dalam PHP/Laravel ecosystem,
              database design, API development, dan deployment. Selalu eager to
              learn teknologi baru dan mengikuti perkembangan terbaru di dunia
              backend development.
            </p>

            <div className="space-y-4">
              <Info icon="weui:location-filled" text="Jakarta, Indonesia" />
              <Info icon="fa-graduation-cap" text="Informatics Engineering, Politeknik Negeri Indramayu" />
              {/* <Info icon="fa-briefcase" text="1+ Years Experience" /> */}
            </div>
          </div>

          {/* Right */}
          <div className="fade-in">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Expertise Areas
              </h4>
              <div className="space-y-4">
                <Expertise icon="fa-server" text="Backend Architecture & Design" />
                <Expertise icon="fa-database" text="Database Design & Optimization" />
                <Expertise icon="fa-cogs" text="API Development & Integration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponen kecil untuk info (kiri)
const Info = ({ icon, text }) => (
  <div className="flex items-center">
    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
      <iconify-icon icon={icon} width="28" height="28" className={`text-indigo-600 dark:text-indigo-400`}></iconify-icon>
    </div>
    <span className="dark:text-gray-300">{text}</span>
  </div>
);

// Komponen kecil untuk expertise (kanan)
const Expertise = ({ icon, text }) => (
  <div className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
      <iconify-icon icon={icon} width="24" height="24" className={`fas ${icon} text-indigo-600 dark:text-indigo-400 text-xl`}></iconify-icon>
    </div>
    <span className="dark:text-gray-300 font-medium">{text}</span>
  </div>
);

export default About;
