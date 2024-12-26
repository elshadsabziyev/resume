'use client';
import { useState } from 'react';
import { FaIndustry as FaCogs, FaOilCan, FaWater, FaTools, FaHourglassHalf } from 'react-icons/fa';

const experiences = [
  {
    title: "Process Automation Intern",
    company: "SOCAR Downstream Management LLC",
    date: "June 2024 – August 2024",
    icon: <FaCogs className="w-20 h-20 text-blue-500" />,
    description: "Gained practical exposure to SCADA systems and PLC integration.",
    details: "Focused on integrating PLCs with HMI platforms for seamless process monitoring and control. Observed system optimization techniques for distributed control architectures. Analyzed system diagrams, including P&IDs and network layouts, for comprehensive understanding. Gained hands-on experience on working with engineering documents and standards such as P&IDs, PFDs, and control narratives.",
    skills: ["SCADA", "PLC Integration", "HMI", "P&IDs", "System Optimization"]
  },
  {
    title: "Refinery Operations Intern",
    company: "SOCAR - Haydar Aliyev Oil Refinery",
    date: "June 2023 – August 2023",
    icon: <FaOilCan className="w-20 h-20 text-green-500" />,
    description: "Developed understanding of refinery workflows and automation in production lines.",
    details: "Participated in safety and operational training, focusing on real-world application of industrial protocols. Developed an understanding of refinery workflows and the implementation of automation in production lines.",
    skills: ["Refinery Workflows", "Automation", "Safety Training", "Industrial Protocols"]
  },
  {
    title: "Instrumentation & Control Engineering Intern",
    company: "Azersu OJSC",
    date: "June 2022 – August 2022",
    icon: <FaWater className="w-20 h-20 text-blue-500" />,
    description: "Studied SCADA systems for water treatment and distribution applications.",
    details: "Observed field device calibration processes and basic diagnostic operations. Studied SCADA systems for water treatment and distribution applications.",
    skills: ["SCADA", "Field Device Calibration", "Diagnostic Operations", "Water Treatment"]
  },
  {
    title: "Process Control Intern",
    company: "Emerson Process Management LTD",
    date: "June 2021 – August 2021",
    icon: <FaTools className="w-20 h-20 text-yellow-500" />,
    description: "Introduced to DCS architectures and safety compliance systems.",
    details: "Observed configuration and troubleshooting of field devices and control systems. Introduced to DCS architectures and safety compliance systems for critical process industries.",
    skills: ["DCS Architectures", "Safety Compliance", "Field Devices", "Control Systems"]
  },
  {
    title: "Coming Soon",
    company: "TBD",
    date: "TBD",
    icon: <FaHourglassHalf className="w-20 h-20 text-gray-500" />,
    description: "More experiences will be added soon.",
    details: "Stay tuned for more updates on my professional experiences.",
    skills: ["Coming Soon"]
  },
  {
    title: "Coming Soon",
    company: "TBD",
    date: "TBD",
    icon: <FaHourglassHalf className="w-20 h-20 text-gray-500" />,
    description: "More experiences will be added soon.",
    details: "Stay tuned for more updates on my professional experiences.",
    skills: ["Coming Soon"]
  }
];

export default function Experience() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl p-6 mb-12 shadow-lg text-center">
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group hover:bg-opacity-50 ${expandedExperience === index ? 'expanded' : ''}`}
              onClick={() => toggleExperience(index)}
            >
              <div className="relative h-48 flex items-center justify-center">
                {exp.icon}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.date}</p>
                <p>{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="bg-blue-600 text-xs px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
                {expandedExperience === index && exp.details && (
                  <div className="mt-4">
                    <h4 className="text-lg font-bold mb-2">Detailed Description</h4>
                    <p className="text-gray-400 mb-4">{exp.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .expanded {
          grid-column: span 2;
        }
        @media (max-width: 768px) {
          .expanded {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}