'use client';
import { FaLanguage } from 'react-icons/fa';

const languages = [
  { name: "Azerbaijani", proficiency: "Native • Bilingual", level: 100 },
  { name: "English", proficiency: "Professional Working Proficiency", level: 90 },
  { name: "Turkish", proficiency: "Professional Working Proficiency", level: 85 },
];

export default function Languages() {
  return (
    <section id="languages" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg transition-shadow mb-12 p-6">
          <h2 className="text-4xl font-bold text-center">Languages</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group hover:bg-opacity-50"
            >
              <div className="relative h-48 flex items-center justify-center">
                <FaLanguage className="w-20 h-20 text-blue-500" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">{language.proficiency}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{language.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden mb-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${language.level}%` }}
                  >
                    <div className="absolute inset-0 bg-blue-400 opacity-50 blur-md"></div>
                  </div>
                </div>
                <p className="text-gray-400">{language.proficiency}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
