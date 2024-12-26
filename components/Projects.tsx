'use client';
import { useState } from 'react';
import { FaGithub as GitHub, FaCloud, FaSeedling as FaRobot, FaIndustry as FaCogs, FaHome, FaHouseUser, FaProjectDiagram, FaWarehouse } from 'react-icons/fa';

const projects = [
  {
    title: "LandMarker",
    description: "Cloud-powered landmark recognition app, finalist at TEKNOFEST 2024",
    icon: <FaCloud className="w-20 h-20 text-blue-500" />,
    github: "https://github.com/elshadsabziyev/LandMarker",
    technologies: ["Flutter", "Dart", "Google Cloud Vision API", "Firebase"],
    details: "Developed a mobile app for real-time landmark recognition using cloud technologies. Key features include image-based landmark detection with detailed summaries, mapping, and data storage with real-time cloud integration."
  },
  {
    title: "AgriBot365",
    description: "IoT-based smart farming solution for greenhouse automation",
    icon: <FaRobot className="w-20 h-20 text-green-500" />,
    github: "https://github.com/elshadsabziyev/AgribotDashboard",
    technologies: ["Python", "IoT", "PID controllers", "Streamlit", "Machine Learning"],
    details: "Developed an IoT-based smart farming solution for greenhouse automation. Key features include real-time monitoring of temperature, humidity, and soil moisture, automated irrigation and climate control based on sensor data, and machine learning-based predictive analytics for crop health."
  },
  {
    title: "Shape-Based Object Sorting System",
    description: "PLC-based object sorting system for industrial applications",
    icon: <FaCogs className="w-20 h-20 text-yellow-500" />,
    github: null,
    technologies: ["Siemens TIA Portal", "PLC Programming", "Sensor Integration"],
    details: "Developed a PLC-based object sorting system for industrial applications. Key features include real-time object classification based on shape and height, and automated sorting using pneumatic actuators."
  },
  {
    title: "Smart Home Automation System",
    description: "IoT-based smart home automation system",
    icon: <FaHouseUser className="w-20 h-20 text-red-500" />,
    github: null,
    technologies: ["Arduino", "Raspberry Pi", "ESP32", "IoT"],
    details: "Developed an IoT-based smart home automation system. Key features include real-time monitoring and control of home appliances, automated lighting and climate control, and integration with voice assistants like Google Assistant and Amazon Alexa."
  },
  {
    title: "Industrial Process Monitoring System",
    description: "SCADA-based industrial process monitoring system",
    icon: <FaProjectDiagram className="w-20 h-20 text-purple-500" />,
    github: null,
    technologies: ["SCADA", "PLC", "HMI", "Modbus"],
    details: "Developed a SCADA-based industrial process monitoring system using ABB System 800xA for a demo project of a tank level control system. Key features include real-time data acquisition, process visualization, and alarm management for industrial processes."
  },
  {
    title: "Cold Storage Facility Simulation",
    description: "LabVIEW-based cold storage facility simulation system",
    icon: <FaWarehouse className="w-20 h-20 text-cyan-500" />,
    github: null,
    technologies: ["LabVIEW", "HTTP Requests", "Thermodynamics", "Simulation"],
    details: "Developed a LabVIEW-based cold storage facility monitoring and simulation system. Key features include real-time monitoring of storage conditions, simulation of thermodynamic processes, integration with weather data via HTTP requests, and alarm and trend analysis."
  }
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl p-6 mb-12 text-center shadow-lg">
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group hover:bg-opacity-50 ${expandedProject === index ? 'expanded' : ''}`}
              onClick={() => toggleProject(index)}
            >
              <div className="relative h-48 flex items-center justify-center">
                {project.icon}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-600 text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                {expandedProject === index && (
                  <div className="mt-4">
                    <h4 className="text-lg font-bold mb-2">Detailed Description</h4>
                    <p className="text-gray-400 mb-4">{project.details}</p>
                  </div>
                )}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <GitHub className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                ) : (
                  <span className="text-gray-500 inline-flex items-center">
                    <GitHub className="w-5 h-5 mr-2" />
                    Private Repository
                  </span>
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