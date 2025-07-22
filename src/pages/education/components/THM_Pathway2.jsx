"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

// Animated Vertical Line Component
const VerticalLine = ({ side = "left" }) => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={lineRef}
      style={{ scaleY, transformOrigin: "top" }}
      className={`absolute w-[3px] bg-black top-0 bottom-0 z-0 ${
        side === "left" ? "left-6" : "right-6"
      }`}
    />
  );
};

// Circle Dot Component
const Circle = ({ side = "left" }) => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start end", "center center"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["#ccc", "#000"]
  );

  return (
    <motion.div
      ref={circleRef}
      style={{ backgroundColor }}
      className={`absolute w-4 h-4 rounded-full shadow-[0_0_0_6px_white] z-10 ${
        side === "left" ? "left-4" : "right-4"
      } top-0`}
    />
  );
};

// Main Component
export function THM_Pathway2() {
  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-x-20 relative text-justify">
          {/* LEFT Timeline */}

          <div className="relative">
            {/* Left Side Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-left">
              Penetration Tester Path
            </h2>

            {/* Timeline Content with Vertical Line */}
            <div className="relative">
              <VerticalLine side="left" />

              {/* Flex container to align Circle and Content horizontally */}
              <div className="relative flex items-start pl-12 mb-20">
                {/* Circle aligned to top */}
                <div className="absolute left-0.5 top-3">
                  <Circle side="left" />
                </div>

                {/* Content aligned next to circle */}
                <div className="pl-6">
                  <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                    Jr Penetration Tester
                  </h3>

                  <p className="mb-4 text-justify">
                    Completed a Junior Penetration Tester learning path, gaining
                    practical skills in conducting security assessments on web
                    applications and enterprise infrastructure.
                  </p>
                  <ul className="list-none space-y-4">
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Introduction to Cyber Security
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained foundational knowledge in offensive and
                            defensive security, along with insights into various
                            career paths in cybersecurity.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Introduction to Pentesting
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned the fundamentals of penetration testing,
                            including essential techniques and methodologies
                            used by professional pentesters.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Introduction to Web Hacking
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained hands-on experience in identifying and
                            exploiting common web application vulnerabilities
                            widely seen in the industry.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Burp Suite
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained practical experience using Burp Suite, the
                            industry-standard tool for web application
                            penetration testing.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Network Security
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned fundamentals of passive and active network
                            reconnaissance, including common protocols and their
                            associated attack vectors.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Vulnerability Research
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained familiarity with skills, research techniques,
                            and resources used to identify and exploit
                            vulnerabilities in applications and systems.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Metasploit
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned to effectively use Metasploit, the leading
                            exploitation framework, to identify and exploit
                            security vulnerabilities.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Privilege Escalation
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned fundamental techniques for privilege
                            escalation on both Linux and Windows systems.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-start pl-12 mb-20">
                {/* Circle aligned to top */}
                <div className="absolute left-0.5 top-3">
                  <Circle side="left" />
                </div>

                {/* Content aligned next to circle */}
                <div className="pl-6">
                  <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                    Web Fundamentals
                  </h3>

                  <p className="mb-4 text-justify">
                    Completed a structured path focused on web application
                    security. Gained foundational knowledge of how web
                    applications function, practiced using industry-standard
                    tools like Burp Suite, and exploited real-world
                    vulnerabilities. Applied hands-on skills in simulated
                    environments to prepare for professional web security
                    assessments and interviews.
                  </p>
                  <ul className="list-none space-y-4">
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            How The Web Works
                          </span>
                          <p className="text-sm text-gray-700">
                            Developed a strong understanding of how the World
                            Wide Web functions, essential for improving hacking
                            and security skills.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Introduction to Web Hacking
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained hands-on experience in identifying and
                            exploiting common web application vulnerabilities
                            widely seen in the industry.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Burp Suite
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained practical experience using Burp Suite, the
                            industry-standard tool for web application
                            penetration testing.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Web Hacking Fundamentals
                          </span>
                          <p className="text-sm text-gray-700">
                            Understood core web security issues and how to
                            exploit them.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-start pl-12 mb-20">
                {/* Circle aligned to top */}
                <div className="absolute left-0.5 top-3">
                  <Circle side="left" />
                </div>

                {/* Content aligned next to circle */}
                <div className="pl-6">
                  <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                    Web Application Pentesting
                  </h3>

                  <p className="mb-4 text-justify">
                    Completed the web app pentesting path, covering both
                    client-side and server-side attacks.
                  </p>
                  <ul className="list-none space-y-4">
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Authentication
                          </span>
                          <p className="text-sm text-gray-700">
                            Completed training on authentication attacks and
                            session management flaws.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Injection Attacks
                          </span>
                          <p className="text-sm text-gray-700">
                            Mastered various injection attacks including SQLi,
                            SSTI, XXE, LDAP, and NoSQL.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Introduction to Web Hacking
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained hands-on experience in identifying and
                            exploiting common web application vulnerabilities
                            widely seen in the industry.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Advanced Server-Side Attacks
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained skills in SSRF, File Inclusions,
                            Deserialization, Race Conditions, and Prototype
                            Pollution.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Advanced Client-Side Attacks
                          </span>
                          <p className="text-sm text-gray-700">
                            Mastered client-side attacks including XSS, CSRF,
                            and DOM-based exploits.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            HTTP Request Smuggling
                          </span>
                          <p className="text-sm text-gray-700">
                            Mastered HTTP request smuggling techniques.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex items-start pl-12 mb-20">
                {/* Circle aligned to top */}
                <div className="absolute left-0.5 top-3">
                  <Circle side="left" />
                </div>

                {/* Content aligned next to circle */}
                <div className="pl-6">
                  <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                    Red Teaming
                  </h3>

                  <p className="mb-4 text-justify">
                    Completed Red Teaming pathway focused on simulating
                    real-world adversary attacks.
                  </p>
                  <ul className="list-none space-y-4">
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Red Team Fundamentals
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned core components of Red Team engagements,
                            including threat intelligence and OPSEC.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Initial Access
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned initial access techniques from a Red Team
                            perspective.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Post Compromise
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned post-exploitation steps after initial
                            network access.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Host Evasions
                          </span>
                          <p className="text-sm text-gray-700">
                            Understood host-based security techniques on
                            Windows.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Network Security Evasion
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned to bypass firewalls and IDS/IPS security
                            solutions.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Compromising Active Directory
                          </span>
                          <p className="text-sm text-gray-700">
                            Completed training on exploiting Active Directory
                            misconfigurations.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT Timeline */}
          <div className="relative">
            {/* Left Side Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-left">
              Security Analyst Path
            </h2>

            {/* Timeline Content with Vertical Line */}
            <div className="relative">
              <VerticalLine side="left" />

              {/* Flex container to align Circle and Content horizontally */}
              <div className="relative flex items-start pl-12 mb-20">
                {/* Circle aligned to top */}
                <div className="absolute left-0.5 top-3">
                  <Circle side="left" />
                </div>

                {/* Content aligned next to circle */}
                <div className="pl-6">
                  <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                    SOC Level 1
                  </h3>

                  <p className="mb-4">
                    Completed a Junior Security Analyst (Tier 1 SOC) role,
                    focusing on alert triage, log monitoring, tool management,
                    and incident escalation in a 24/7 SOC environment.
                  </p>
                  <ul className="list-none space-y-4">
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Cyber Defence Frameworks
                          </span>
                          <p className="text-sm text-gray-700">
                            Explored security frameworks and policies that
                            support strong security postures and their use in
                            organizational defensive strategies.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Cyber Threat Intelligence
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned how to identify and apply security knowledge
                            to effectively mitigate and manage potential
                            adversary actions.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Network Security and Traffic Analysis
                          </span>
                          <p className="text-sm text-gray-700">
                            Gained core knowledge of network security and
                            traffic analysis to detect and investigate network
                            anomalies using industry-standard tools and
                            techniques.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Endpoint Security Monitoring
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned the importance of monitoring workstation
                            activity to detect adversary behavior and protect
                            organizational assets.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Security Information and Event Management
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned how SIEM systems operate and developed
                            skills in creating simple and advanced search
                            queries to analyze ingested log data effectively.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Digital Forensics and Incident Response
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned to identify, collect, and analyze forensic
                            artifacts in Windows and Linux systems to support
                            security incident investigations.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            Phishing
                          </span>
                          <p className="text-sm text-gray-700">
                            Learned techniques to analyze and defend against
                            phishing emails by investigating real-world phishing
                            attempts using diverse methods.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle
                          size={18}
                          className="text-black mt-1 flex-shrink-0"
                        />
                        <div>
                          <span className="font-semibold text-base">
                            SOC Level 1 Capstone Challenges
                          </span>
                          <p className="text-sm text-gray-700">
                            Investigated critical security incidents and applied
                            comprehensive SOC analyst skills to handle and
                            analyze various digital artifacts effectively.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
