"use client";

import React from "react";

// Array of all your certificates for easy management
const allCertificateData = [
  {
    name: "Red Teaming",
    imageSrc: "/assets/education/TryHackMe/Certificates/Red Teaming.jpeg",
  },
  {
    name: "Jr Penetration Tester",
    imageSrc: "/assets/education/TryHackMe/Certificates/Jr Pentester.jpeg",
  },
  {
    name: "Web Fundamentals",
    imageSrc: "/assets/education/TryHackMe/Certificates/Web Fundamentals.jpeg",
  },
  {
    name: "SOC Level 1",
    imageSrc: "/assets/education/TryHackMe/Certificates/SOC L1.jpeg",
  },
  {
    name: "Complete Beginner",
    imageSrc: "/assets/education/TryHackMe/Certificates/Complete Beginner.jpeg",
  },
  {
    name: "Introduction to Cyber Security",
    imageSrc: "/assets/education/TryHackMe/Certificates/Intro to CSec.jpeg",
  },
  {
    name: "Ethical Hacking: Enumeration",
    imageSrc:
      "/assets/education/LinkedIn Learning/EthicalHacking-Enumeration.png",
  },
  {
    name: "Ethical Hacking: Scanning Networks",
    imageSrc:
      "/assets/education/LinkedIn Learning/EthicalHacking-ScanningNetworks.png",
  },
  {
    name: "Ethical Hacking: System Hacking",
    imageSrc:
      "/assets/education/LinkedIn Learning/EthicalHacking-SystemHacking(2016).png",
  },
  {
    name: "Ethical Hacking: System Vulnerability Analysis",
    imageSrc:
      "/assets/education/LinkedIn Learning/EthicalHacking-Vulnerability Analysis.png",
  },
  {
    name: "Ethical Hacking: Footprinting and Reconnaissance",
    imageSrc:
      "/assets/education/LinkedIn Learning/Ethical Hacking- Footprinting and Reconnaissance.png",
  },
  {
    name: "Introduction to Ethical Hacking",
    imageSrc:
      "/assets/education/LinkedIn Learning/Ethical Hacking- Introduction to Ethical Hacking.png",
  },
  {
    name: "Security Testing: Nmap Security Scanning",
    imageSrc:
      "/assets/education/LinkedIn Learning/Security Testing- Nmap Security Scanning.png",
  },
  {
    name: "Wireshark Essential Training",
    imageSrc:
      "/assets/education/LinkedIn Learning/Wireshark Essential Training.png",
  },
  {
    name: "Basic Java Programming",
    imageSrc: "/assets/education/Coding Ninjas/Basics Of Java.png",
  },
  {
    name: "Windows 11 Essential Training",
    imageSrc: "/assets/education/LinkedIn Learning/Windows 11.png",
  },
];

export function Certificates() {
  return (
    <section
      id="certificates-gallery"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            My Certificates
          </h2>
          <p className="md:text-md">
            A showcase of my skills and certifications in cybersecurity and
            programming. Click any certificate to see more details.
          </p>
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          {allCertificateData.map((cert) => (
            <a key={cert.name} href="/certifications">
              <img
                src={cert.imageSrc}
                alt={cert.name}
                className="size-full rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
