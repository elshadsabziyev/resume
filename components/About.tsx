'use client';
import { FaUser } from 'react-icons/fa';

export default function About() {
  const aboutContent = {
    title: "About Me",
    description: "Process Automation Engineering student at Baku Higher Oil School, passionate about control systems, SCADA, and industrial automation.",
    details: [
      "With a strong foundation in both theoretical concepts and practical applications, I'm dedicated to optimizing industrial processes and pushing the boundaries of automation technology.",
      "My experience spans across various internships in the oil and gas industry, where I've gained hands-on experience with SCADA systems, PLCs, and industrial protocols.",
      "I'm constantly seeking new challenges and opportunities to apply my skills in innovative ways."
    ]
  };

  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg mb-12">
          <h2 className="text-4xl font-bold py-6 text-center">{aboutContent.title}</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
          <div className="relative h-48 flex items-center justify-center">
            <FaUser className="w-20 h-20 text-blue-500" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold">My Socials</span>
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-xl font-bold mb-4">{aboutContent.description}</p>
            {aboutContent.details.map((detail, index) => (
              <p key={index} className="text-lg text-gray-400 mb-4">{detail}</p>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .text-lg {
            font-size: 1rem;
          }
          .p-6 {
            padding: 1rem;
          }
        }
        .p-6 {
          padding: 2rem;
        }
      `}</style>
    </section>
  );
}