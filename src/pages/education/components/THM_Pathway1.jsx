"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { Fragment, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <motion.div
      ref={circleRef}
      style={backgroundColor}
      className="z-20 mt-8 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
    />
  );
};

export function THM_Pathway1() {
  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container">
        <div className="flex flex-col items-center text-justify">
          <div className="mb-12 text-center md:mb-18 lg:mb-10">
            <div className="relative z-10 w-full max-w-lg">
              <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                Completed Learning on TryHackMe
              </h2>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-left">
            Foundation Path
          </h2>

          <div className="relative grid grid-cols-1 justify-items-center gap-20">
            <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
              <div className="sticky top-0 mt-0 h-[50vh] w-[3px] bg-black" />

              <div className="h-full w-[3px] bg-neutral-lighter" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
              <div className="absolute top-0 h-[50vh] w-full bg-background-primary" />
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12 text-justify">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-8 md:gap-12">
                  <div>
                    <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                      Pre Security
                    </h3>
                    <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                      Computer Science Basics
                    </h4>
                    <p className="mb-4">
                      Acquired foundational computer science skills essential
                      for starting a career in cybersecurity.
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
                              Gained an understanding of offensive and defensive
                              security concepts and explored various career
                              paths in cybersecurity.
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
                              Network Fundamentals
                            </span>
                            <p className="text-sm text-gray-700">
                              Learned core concepts of computer communication
                              and common network vulnerabilities.
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
                              How The Web Works
                            </span>
                            <p className="text-sm text-gray-700">
                              Developed a strong understanding of how the World
                              Wide Web functions, essential for improving
                              hacking and security skills.
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
                              Linux Fundamentals
                            </span>
                            <p className="text-sm text-gray-700">
                              Learned to use the Linux operating system, a
                              critical skill for managing servers and security
                              tools in cybersecurity.
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
                              Windows Fundamentals
                            </span>
                            <p className="text-sm text-gray-700">
                              Gained hands-on experience with Windows security
                              controls to identify, exploit, and defend against
                              vulnerabilities.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-8 md:gap-12">
                  <div>
                    <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
                      Cyber Security 101
                    </h3>
                    <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                      Cyber Security Foundations
                    </h4>
                    <p className="mb-4">
                      Developed essential cybersecurity skills required to
                      pursue a wide range of careers within the industry.
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
                              Start Your Cyber Security Journey
                            </span>
                            <p className="text-sm text-gray-700">
                              Explored offensive and defensive cybersecurity
                              through interactive exercises and developed
                              essential information search skills.
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
                              AD Fundamentals
                            </span>
                            <p className="text-sm text-gray-700">
                              Learned the fundamental concepts and core
                              functionalities of Active Directory in managing
                              network resources and security.
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
                              Command Line
                            </span>
                            <p className="text-sm text-gray-700">
                              Learned and practiced essential Windows command
                              line and PowerShell commands, along with Bash
                              scripting in Linux.
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
                              Networking
                            </span>
                            <p className="text-sm text-gray-700">
                              Gained a solid understanding of the OSI model and
                              TCP/IP networking layers, including commonly used
                              plaintext and secure protocols.
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
                              Cryptography
                            </span>
                            <p className="text-sm text-gray-700">
                              Explored symmetric and asymmetric encryption
                              algorithms and learned the role of hashing
                              algorithms in everyday systems.
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
                              Exploitation Basics
                            </span>
                            <p className="text-sm text-gray-700">
                              Discovered real-world exploitation techniques and
                              explored Metasploit's powerful features for
                              identifying and exploiting vulnerabilities.
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
                              Web Hacking
                            </span>
                            <p className="text-sm text-gray-700">
                              Learned about web applications, JavaScript, and
                              SQL, while exploring Burp Suite and the OWASP Top
                              Ten vulnerabilities.
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
                              Offensive Security Tooling
                            </span>
                            <p className="text-sm text-gray-700">
                              Explored offensive tools Hydra, Gobuster, and
                              SQLMap to perform penetration testing on
                              passwords, directories, and databases.
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
                              Defensive Security
                            </span>
                            <p className="text-sm text-gray-700">
                              Built foundational defensive security knowledge by
                              exploring SOC operations, digital forensics, and
                              incident response strategies.
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
                              Security Solutions
                            </span>
                            <p className="text-sm text-gray-700">
                              Gained hands-on experience with fundamental
                              defensive security tools including firewalls, IDS,
                              vulnerability scanners, and SIEM systems.
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
                              Defensive Security Tooling
                            </span>
                            <p className="text-sm text-gray-700">
                              Explored key defensive security tools and
                              distributions including CyberChef, CAPA, REMnux,
                              and FlareVM.
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
                              Build Your Cyber Security Career
                            </span>
                            <p className="text-sm text-gray-700">
                              Studied foundational security principles and
                              explored various career opportunities within the
                              cybersecurity field.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
