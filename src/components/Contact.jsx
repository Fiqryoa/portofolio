// src/components/Contact.jsx
import { useState } from 'react';
import "iconify-icon";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 2500);
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="contact" className="py-20 gradient-bg text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 data-aos="fade-up" className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div data-aos="fade-up" data-aos-delay="100" className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-200">
            Tertarik untuk bekerja sama? Mari diskusikan project Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 fade-in">
            <Info icon={"bxl:gmail"} label="Email" text="fiqryomaratala@gmail.com" />
            <Info icon={"ri:phone-fill"} label="Phone" text="+62 857-2370-2957" />
            <Info icon={"gridicons:location"} label="Location" text="Jakarta, Indonesia" />
          </div>

          {/* Contact Form */}
          <form data-aos="fade-up" data-aos-delay="300" onSubmit={handleSubmit} className="space-y-6 fade-in">
            <Input label="Name" type="text" placeholder="Your Name" required />
            <Input label="Email" type="email" placeholder="your@email.com" required />
            <Input label="Subject" type="text" placeholder="Project Discussion" required />
            <TextArea label="Message" placeholder="Tell me about your project..." required/>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center cursor-pointer"
              disabled={submitted}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
              <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Info = ({ icon, label, text }) => (
  <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-5">
    <iconify-icon icon={icon} width="24" height="24" className="border p-2.5 rounded-xl bg-white/15 border-white/30"></iconify-icon>
    {/* <img src={icon}  alt={label} className="w-6 h-6 mt-1 object-contain text-white" />  */}
    <div className='space-y-1'>
      <p className="font-semibold text-gray-800 dark:text-white">{label}</p>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 form-input"
    />
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      rows="4"
      {...props}
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none form-input"
    ></textarea>
  </div>
);

export default Contact;
