// src/components/Contact.jsx
import React, { useState } from 'react';
import whatsapp from '../assets/whatsapp.svg';
import gmailLogo from '../assets/gmailLogo.svg';
import location from '../assets/location.svg';


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

  return (
    <section id="contact" className="py-20 gradient-bg text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-200">
            Tertarik untuk bekerja sama? Mari diskusikan project Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 fade-in">
            <Info icon={gmailLogo} label="Email" text="fiqryomaratala@gmail.com" />
            <Info icon={whatsapp} label="Phone" text="+62 857-2370-2957" />
            <Info icon={location} label="Location" text="Jakarta, Indonesia" />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 fade-in">
            <Input label="Name" type="text" placeholder="Your Name" required />
            <Input label="Email" type="email" placeholder="your@email.com" required />
            <Input label="Subject" type="text" placeholder="Project Discussion" required />
            <TextArea label="Message" placeholder="Tell me about your project..." required />
            <button
              type="submit"
              className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
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
  <div className="flex items-start gap-4">
    <img src={icon}  alt={label} className="w-6 h-6 mt-1 object-contain" /> 
    <div>
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
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 form-input"
    />
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      rows="4"
      {...props}
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 form-input"
    ></textarea>
  </div>
);

export default Contact;
