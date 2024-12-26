'use client';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full overflow-hidden shadow-lg transition-shadow group p-4 mb-12">
          <h2 className="text-4xl font-bold text-center text-white">Get in Touch</h2>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group p-8">
          <p className="text-center mb-8 text-gray-400">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <FaEnvelope className="w-10 h-10 text-blue-500 mr-4" />
              <a href="mailto:elshadsabziyev@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-lg">
                mail@elshadsabziyev.me
              </a>
            </div>
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="w-10 h-10 text-blue-500 mr-4" />
              <a href="https://www.google.com/maps/place/Sumgayit,+Azerbaijan" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors text-lg">
                Sumgayit, Azerbaijan
              </a>
            </div>
            <div className="flex items-center justify-center">
              <FaLinkedin className="w-10 h-10 text-blue-500 mr-4" />
              <a href="https://linkedin.com/in/elshadsabziyev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors text-lg">
                linkedin.com/in/elshadsabziyev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}