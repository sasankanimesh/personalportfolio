"use client";

import React from "react";

// ✅ Editable data – just add more challenge objects here
const challenges = [
  {
    title: "Web Fundamentals",
    description:
      "Learned the basics of HTTP, DNS, and web application structure.",
    skills: [
      "HTTP Methods & Status Codes",
      "Basic Web Recon",
      "Tools: Burp Suite, Dirb",
    ],
    badgeUrl:
      "https://tryhackme-badges.s3.amazonaws.com/user_webfundamentals.png",
  },
  {
    title: "Linux Fundamentals",
    description:
      "Explored Linux file systems, permissions, and basic commands.",
    skills: [
      "Bash Navigation",
      "User/Group Permissions",
      "Tools: Nmap, Netcat",
    ],
    badgeUrl: "https://tryhackme-badges.s3.amazonaws.com/user_linux.png",
  },
  {
    title: "Pre Security",
    description: "Introduced to key cybersecurity concepts and best practices.",
    skills: ["CIA Triad", "Virtualization & Networking", "Threat Models"],
    badgeUrl: "https://tryhackme-badges.s3.amazonaws.com/user_presecurity.png",
  },
];

export function THM_Challenges() {
  return (
    <section
      id="challenges"
      className="px-[5%] py-8 md:py-12 lg:py-14 bg-white"
    >
      <div className="container mx-auto">
        <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl text-center">
          Completed Challenges
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={challenge.badgeUrl}
                alt={challenge.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              <ul className="text-left text-sm text-gray-700 space-y-1">
                {challenge.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-[2px]">✔</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
