import React from "react";

// You can use an icon library like react-icons if you want
// For example: import { FaCode, FaServer, FaPeopleArrows } from 'react-icons/fa';

// Placeholder for icons - you can replace these with actual SVG icons or components from a library
const SkillIcon = ({ children }) => (
  <div className="w-8 h-8 mr-4 text-indigo-500">{children}</div>
);

const SkillCategory = ({ title, children }) => (
  <div className="mb-12">
    <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 border-b-2 border-indigo-500 pb-2">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  </div>
);

const SkillCard = ({ name, level, description }) => (
  <div className="bg-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-indigo-500/40">
    <h4 className="text-xl font-semibold text-white mb-2">{name}</h4>
    {level && (
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
        <div
          className="bg-indigo-500 h-2.5 rounded-full"
          style={{ width: level }}
        ></div>
      </div>
    )}
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const SoftSkillCard = ({ name, description }) => (
  <div className="bg-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-teal-500/40">
    <h4 className="text-xl font-semibold text-white mb-2">{name}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default function Skills() {
  const technicalSkills = [
    {
      name: "Network Security",
      level: "85%",
      description:
        "Experience with firewalls, IDS/IPS, and network sniffing tools like Wireshark.",
    },
    {
      name: "Penetration Testing",
      level: "80%",
      description:
        "Hands-on experience with Metasploit, Burp Suite, and Nmap from TryHackMe labs.",
    },
    {
      name: "Web Application Security",
      level: "75%",
      description:
        "Knowledge of OWASP Top 10, SQLi, XSS, and CSRF vulnerabilities.",
    },
    {
      name: "Linux/Unix Administration",
      level: "90%",
      description:
        "Comfortable with command line, scripting (Bash), and system hardening.",
    },
    {
      name: "Python for Security",
      level: "70%",
      description:
        "Developing scripts for task automation, vulnerability scanning, and analysis.",
    },
    {
      name: "Cryptography",
      level: "65%",
      description:
        "Understanding of encryption algorithms, PKI, and secure protocols.",
    },
    {
      name: "Digital Forensics",
      level: "60%",
      description:
        "Basic knowledge of forensic tools like Autopsy and the principles of evidence collection.",
    },
    {
      name: "Security Information and Event Management (SIEM)",
      level: "55%",
      description:
        "Familiarity with concepts of log analysis and threat detection using tools like Splunk or ELK Stack.",
    },
    {
      name: "Cloud Security Fundamentals",
      level: "50%",
      description:
        "Basic understanding of security principles in AWS, Azure, or GCP environments.",
    },
  ];

  const tools = [
    {
      name: "Nmap",
      level: "95%",
      description: "Network scanning and host discovery.",
    },
    {
      name: "Wireshark",
      level: "85%",
      description: "Packet analysis and network troubleshooting.",
    },
    {
      name: "Metasploit Framework",
      level: "80%",
      description: "Exploitation and vulnerability validation.",
    },
    {
      name: "Burp Suite",
      level: "75%",
      description: "Web application security testing.",
    },
    {
      name: "John the Ripper",
      level: "70%",
      description: "Password cracking and auditing.",
    },
    {
      name: "Git & GitHub",
      level: "90%",
      description: "Version control and collaborative development.",
    },
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      description:
        "Methodical approach to identifying, analyzing, and resolving complex technical challenges encountered in labs and projects.",
    },
    {
      name: "Analytical Thinking",
      description:
        "Ability to dissect complex security problems, identify patterns, and evaluate evidence from logs and network traffic.",
    },
    {
      name: "Communication",
      description:
        "Clearly articulating technical findings and security risks to both technical and non-technical audiences.",
    },
    {
      name: "Teamwork & Collaboration",
      description:
        "Experience working in teams on projects, sharing knowledge, and contributing to a common goal.",
    },
    {
      name: "Continuous Learning",
      description:
        "A strong passion for cybersecurity, demonstrated by continuous learning on platforms like TryHackMe and staying updated with the latest threats.",
    },
    {
      name: "Attention to Detail",
      description:
        "Meticulous in analyzing security configurations, code, and logs to spot subtle vulnerabilities and indicators of compromise.",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-4 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-black font-bold leading-tight">
            My <span className="text-indigo-600">Skills</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mt-4 max-w-3xl mx-auto">
            A showcase of my technical abilities and professional strengths,
            developed through academic study and hands-on experience on
            platforms like TryHackMe.
          </p>
        </header>

        <main>
          <SkillCategory title="Technical Skills">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </SkillCategory>

          <SkillCategory title="Tools & Technologies">
            {tools.map((tool, index) => (
              <SkillCard key={index} {...tool} />
            ))}
          </SkillCategory>

          <SkillCategory title="Soft Skills">
            {softSkills.map((skill, index) => (
              <SoftSkillCard key={index} {...skill} />
            ))}
          </SkillCategory>
        </main>
      </div>
    </div>
  );
}
