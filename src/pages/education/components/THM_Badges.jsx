"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function THM_Badges() {
  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
            Badges Earned
          </h1>
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {/* Badge Item */}
          {[
            {
              src: "/assets/education/TryHackMe/Badges/firstfour.svg",
              name: "First Four",
              variant: "Kickstarted my journey with 4 rooms in the first week.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/linux.svg",
              name: "cat linux.txt",
              variant: "Competent in Linux.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/streak7.svg",
              name: "7 Day Streak",
              variant: "7-day hacking streak achieved.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/webbed.svg",
              name: "Webbed",
              variant: "Understands how the World Wide Web works.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/owasptop10.svg",
              name: "OWASP Top 10",
              variant: "Understands every OWASP vulnerability",
            },
            {
              src: "/assets/education/TryHackMe/Badges/hashcracker.svg",
              name: "Hash Cracker",
              variant: "Learned and practiced hash cracking.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/metasploit.svg",
              name: "Metasploitable",
              variant: "Familiar with Metasploit for exploitation.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/blue.svg",
              name: "Blue",
              variant: "Exploited Windows using EternalBlue.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/linuxprivesc.svg",
              name: "Linux PrivEsc",
              variant: "Mastered Linux privilege escalation techniques.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/howthewebworks.svg",
              name: "World Wide Web",
              variant: "Completed the 'How The Web Works' module.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/streak30.svg",
              name: "30 Day Streak",
              variant: "Hacked consistently for 30 days.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/introtowebsecurity.svg",
              name: "Intro to Web Hacking",
              variant: "Learned core concepts in web hacking.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/burpsuite.svg",
              name: "Burp'ed",
              variant: "Gained practical skills with Burp Suite.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/introtooffensivesecurity.svg",
              name: "Pentesting Principles",
              variant: "Completed the 'Introduction to Pentesting' module.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/attackingad.svg",
              name: "ADversary",
              variant: "Completed all Active Directory network challenges.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/cyberdefenceframework.svg",
              name: "Skilled Navigator",
              variant: "Successfully finished the Eviction challenge.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/cyberthreatintellegenceblue.svg",
              name: "Friday Fixer",
              variant: "Finished the Friday Overtime challenge with success.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/networksecurityandtrafficanalysisv2.svg",
              name: "Packet Master",
              variant: "Gained hands-on experience with TShark.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/endpointsecuritymonitoring.svg",
              name: "Manic Monday",
              variant: "Solved the Monday Monitor challenge.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/securityinformationandeventmanagement.svg",
              name: "To benign or not benign?",
              variant: "Solved the Benign challenge.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/digitalforensicsandincidentresponse.svg",
              name: "Handle the Disgruntled",
              variant: "Finished the Disgruntled challenge with success.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/phishing.svg",
              name: "Phishing",
              variant: "Completed the 'Phishing' module.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/boogeyman3.svg",
              name: "Boogeyman Slayer",
              variant: "Successfully finished the SOC Level 1 Capstone.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/malwareanalysis.svg",
              name: "Malware Analysis",
              variant: "Completed the Advanced Dynamic Analysis room.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/authentication.svg",
              name: "Authentication Striker",
              variant: "Used the Hammer to bypass authentication.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/injection.svg",
              name: "SQL Slayer",
              variant: "Mastered Advanced SQL Injection.",
            },
            {
              src: "/assets/education/TryHackMe/Badges/serversideattack.svg",
              name: "System Sniffer",
              variant:
                "Learned to exploit File Path Traversal vulnerabilities.",
            },
          ].map((badge, index) => (
            <div key={index} className="text-center">
              <a
                href="#"
                className="block w-[100px] h-[120px] sm:w-[120px] sm:h-[140px] lg:w-[140px] lg:h-[160px] mx-auto mb-3"
              >
                <img
                  src={badge.src}
                  alt={`${badge.name} Badge`}
                  className="w-full h-full object-contain"
                />
              </a>
              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  {badge.name}
                </h3>
                <div className="text-sm text-gray-500">{badge.variant}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
