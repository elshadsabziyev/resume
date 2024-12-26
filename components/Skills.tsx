"use client";

import { useState } from 'react';
import { FaCogs, FaNetworkWired, FaTools, FaMicrochip, FaUserFriends, FaLightbulb, FaExpand, FaWindowMinimize, FaArrowDown, FaArrowUp, FaArrowRight } from 'react-icons/fa';

const skills = [
  {
    category: "SCADA and Process Automation",
    description: "Hands-on experience with SCADA systems, PLC programming, control systems, and safety systems.",
    icon: <FaCogs className="w-20 h-20 text-blue-500" />,
    details: "Extensive experience with SCADA architecture and systems like ABB System 800xA and DeltaV. Proficient in developing and debugging PLC logic using Siemens TIA Portal and Allen-Bradley RSLogix. Skilled in tuning and optimizing closed-loop systems for stability and performance, and designing SIL-compliant safety systems using SILworX.",
    skills: ["SCADA Expertise", "PLC Programming", "Control Systems", "Safety Systems"]
  },
  {
    category: "Industrial Protocols and Communication",
    description: "Familiarity with industrial communication protocols and network integration.",
    icon: <FaNetworkWired className="w-20 h-20 text-green-500" />,
    details: "Knowledgeable in various industrial communication protocols including PROFINET, PROFIBUS, Modbus, HART, and OPC UA. Experienced in configuring industrial Ethernet and serial communication systems for seamless network integration.",
    skills: ["PROFINET", "PROFIBUS", "Modbus", "HART", "OPC UA", "Network Integration"]
  },
  {
    category: "Software and Tools",
    description: "Proficient in various automation, design, simulation, and programming tools.",
    icon: <FaTools className="w-20 h-20 text-yellow-500" />,
    details: "Proficient in using automation tools like Siemens TIA Portal, DeltaV, and SILworX. Skilled in design tools such as AutoCAD and AutoCAD Electrical. Experienced in simulation tools including LabVIEW, Proteus, Multisim, and MATLAB/Simulink. Programming expertise in Python, Dart (Flutter), C/C++, MATLAB, and AutoHotkey.",
    skills: ["Siemens TIA Portal", "DeltaV", "SILworX", "AutoCAD", "LabVIEW", "Proteus", "Multisim", "MATLAB/Simulink", "Python", "Dart (Flutter)", "C/C++", "MATLAB", "AutoHotkey"]
  },
  {
    category: "Embedded Systems",
    description: "Experience with microcontrollers, IoT development, and real-time monitoring and control.",
    icon: <FaMicrochip className="w-20 h-20 text-red-500" />,
    details: "Hands-on experience with microcontrollers like Arduino, Raspberry Pi, and ESP32/ESP8266. Skilled in IoT development, integrating sensors and actuators for real-time monitoring and control applications.",
    skills: ["Arduino", "Raspberry Pi", "ESP32/ESP8266", "IoT Development"]
  },
  {
    category: "Teamwork and Collaboration",
    description: "Effective communication, collaboration, and leadership skills for successful team projects.",
    icon: <FaUserFriends className="w-20 h-20 text-purple-500" />,
    details: "Strong communication and collaboration skills, with experience in leading team projects. Proficient in conflict resolution and fostering a collaborative team environment.",
    skills: ["Communication", "Collaboration", "Leadership", "Conflict Resolution"]
  },
  {
    category: "Problem Solving and Creativity",
    description: "Innovative thinking and problem-solving skills to tackle complex engineering challenges.",
    icon: <FaLightbulb className="w-20 h-20 text-orange-500" />,
    details: "Demonstrated ability in critical thinking, creativity, and analytical skills. Adaptable and innovative in solving complex engineering challenges.",
    skills: ["Critical Thinking", "Creativity", "Analytical Skills", "Adaptability"]
  }
];

export default function Skills() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl p-6 mb-12">
          <h2 className="text-4xl font-bold text-center">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group hover:bg-opacity-50 ${expandedCard === index ? 'expanded' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="relative h-48 flex items-center justify-center">
                {skill.icon}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{skill.category}</h3>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.skills.map((tech, i) => (
                    <span key={i} className="bg-blue-600 text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                {expandedCard === index && (
                  <div className="mt-4">
                    <h4 className="text-lg font-bold mb-2">Detailed Description</h4>
                    <p className="text-gray-400 mb-4">{skill.details}</p>
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