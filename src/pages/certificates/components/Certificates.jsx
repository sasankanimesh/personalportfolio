"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const Card = ({ children, className = "" }) => (
  <div
    className={`flex flex-col justify-between rounded-xl shadow-md border bg-white ${className}`}
  >
    {children}
  </div>
);

export function Certificates() {
  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
        <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
          Certificates
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 text-justify">
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="Certificate Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Red Teaming
            </h2>
            <p className="mb-6">
              Earned the Red Teaming certificate from TryHackMe, focused on
              simulating real-world adversary attacks in complex environments.
              Covered essential Red Team topics including threat intelligence,
              OPSEC, initial access techniques, post-compromise actions, host
              and network evasion strategies, and exploiting Active Directory
              misconfigurations. This certification highlights my ability to
              execute advanced offensive security operations and evaluate the
              effectiveness of defensive measures.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/TryHackMe/Certificates/Red Teaming.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="Certificate Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Jr Penetration Tester
            </h2>
            <p className="mb-6">
              Earned the Junior Penetration Tester certificate from TryHackMe,
              demonstrating hands-on skills in conducting security assessments
              on web applications and enterprise networks. Covered foundational
              cybersecurity concepts, pentesting methodologies, web app
              vulnerabilities, and tools like Burp Suite and Metasploit. Also
              trained in network reconnaissance, vulnerability research, and
              privilege escalation techniques on both Linux and Windows systems.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/TryHackMe/Certificates/Jr Pentester.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="Certificate Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Web Fundamentals
            </h2>
            <p className="mb-6">
              Earned the Web Fundamentals certificate from TryHackMe,
              demonstrating foundational knowledge in web application security.
              Gained experience with how the web works, identifying and
              exploiting common vulnerabilities, and using Burp Suite. Practiced
              in simulated environments to prepare for real-world web security
              assessments and interviews.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/TryHackMe/Certificates/Web Fundamentals.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="Certificate Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              SOC Level 1
            </h2>
            <p className="mb-6">
              Earned the SOC Level 1 certificate from TryHackMe, simulating the
              role of a Junior Security Analyst in a 24/7 Security Operations
              Center. Gained hands-on experience in alert triage, log
              monitoring, incident escalation, and tool management. Covered key
              areas including cyber defense frameworks, threat intelligence,
              SIEM operations, endpoint monitoring, phishing analysis, network
              traffic investigation, and digital forensics. Successfully
              completed capstone challenges involving real-world security
              incidents and artifact analysis.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/TryHackMe/Certificates/SOC L1.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="Certificate Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Complete Beginner
            </h2>
            <p className="mb-6">
              Earned the Complete Beginner certificate from TryHackMe, covering
              foundational cybersecurity concepts and practical skills across
              Linux, Windows, networking, web hacking, and cryptography. Topics
              included Linux fundamentals, network scanning with Nmap, service
              exploitation, OWASP Top 10 vulnerabilities, Burp Suite, and upload
              flaws. Gained hands-on experience with password cracking using
              John the Ripper, basic encryption, Windows and Active Directory
              exploitation, as well as Metasploit framework usage and privilege
              escalation techniques. Completed guided exercises on real-world
              machines like Vulnversity, Kenobi, and Basic Pentesting to
              reinforce theoretical knowledge with practical application.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/TryHackMe/Certificates/Complete Beginner.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="Certificate Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Introduction to Cyber Security
            </h2>
            <p className="mb-6">
              Earned the Introduction to Cyber Security certificate from
              TryHackMe, covering both offensive and defensive security
              fundamentals. Gained hands-on experience using tools like GoBuster
              for simulated attacks, and explored key areas such as digital
              forensics, incident response, SIEM analysis, threat intelligence,
              and malware investigation. The certificate also introduced core
              cybersecurity career paths, including roles such as Security
              Analyst, Incident Responder, and Red Teamer, equipping me with
              foundational knowledge to pursue a career in cybersecurity.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/TryHackMe/Certificates/Intro to CSec.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Ethical Hacking: Enumeration
            </h2>
            <p className="mb-6">
              Completed the "Ethical Hacking: Enumeration" course on LinkedIn
              Learning, focusing on identifying and gathering information from
              both local and remote systems. Covered enumeration techniques for
              NetBIOS, SMB, RPC, SNMP, WMI, and Finger, as well as web, cloud,
              and internet-based enumeration using tools like Nikto, Shodan,
              ZMap, and PowerShell. Gained hands-on knowledge in enumerating
              Unix/Windows hosts, web servers, hidden directories, LDAP, DNS,
              and email services. The course also included enumeration
              strategies for cloud policies, storage, and compute resources,
              preparing me for real-world ethical hacking assessments.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/EthicalHacking-Enumeration.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Ethical Hacking: Scanning Networks
            </h2>
            <p className="mb-6">
              Completed the "Ethical Hacking: Scanning Networks" course on
              LinkedIn Learning, focusing on active and passive scanning
              techniques used in network reconnaissance. Gained practical skills
              in discovering hosts and services, identifying open ports,
              fingerprinting operating systems, and mapping networks using tools
              like Nmap, Wireshark, hping3, and the Nmap Scripting Engine.
              Learned methods for evading detection, including stealth scans,
              anonymizers, and spoofing techniques, as well as defensive
              strategies such as detecting spoofing and preventing scans. This
              course enhanced my ability to ethically scan and assess network
              environments in real-world scenarios.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/EthicalHacking-ScanningNetworks.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Ethical Hacking: System Hacking
            </h2>
            <p className="mb-6">
              Completed the "Ethical Hacking: System Hacking" course on LinkedIn
              Learning, focusing on post-exploitation techniques used to gain
              deeper access and maintain control over compromised systems.
              Explored core areas including user authentication bypass, password
              cracking (with rainbow tables), privilege escalation, keylogging,
              spyware detection, and anti-forensics techniques like
              steganography and log manipulation. Learned both offensive and
              defensive strategies to identify, exploit, and defend against
              system-level attacks across Windows and macOS environments,
              equipping me with practical knowledge in ethical hacking and
              digital stealth.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/EthicalHacking-SystemHacking(2016).png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Ethical Hacking: System Vulnerability Analysis
            </h2>
            <p className="mb-6">
              Completed the "Ethical Hacking: System Vulnerability Analysis"
              course on LinkedIn Learning, focusing on identifying, assessing,
              and managing system and network vulnerabilities. Gained knowledge
              of organizational risk management, vulnerability classification,
              threat modeling, and the vulnerability management lifecycle.
              Learned to use tools such as Nikto and Kali Linux for
              vulnerability assessments and fuzz testing. The course also
              covered CVSS and CVE standards, bug bounty programs, LAN
              vulnerability scanning, and defensive techniques like patch
              management, HIDS, and firewall implementation. Strengthened skills
              in performing and reporting structured vulnerability assessments
              in professional environments.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/EthicalHacking-Vulnerability Analysis.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Ethical Hacking: Footprinting and Reconnaissance
            </h2>
            <p className="mb-6">
              Completed the "Ethical Hacking: Footprinting and Reconnaissance"
              course on LinkedIn Learning, focusing on the initial phase of
              ethical hacking and penetration testing. Gained hands-on
              experience in open-source intelligence (OSINT) gathering,
              competitive intelligence, Google hacking, DNS footprinting, zone
              transfers, and social engineering techniques. Explored tools and
              techniques for harvesting emails, scraping and monitoring
              websites, analyzing email headers, and investigating the dark web.
              Learned how to perform passive and active reconnaissance, write
              effective footprinting reports, and implement countermeasures to
              protect organizational data and online presence.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/Ethical Hacking- Footprinting and Reconnaissance.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Introduction to Ethical Hacking
            </h2>
            <p className="mb-6">
              Completed the "Introduction to Ethical Hacking" course on LinkedIn
              Learning, gaining a strong foundation in the principles,
              practices, and purpose of ethical hacking. Explored key areas such
              as information security fundamentals, threat modeling, AI and ML
              in cybersecurity, and incident response. Learned about major
              cybersecurity frameworks including the Cyber Kill Chain, MITRE
              ATT&CK, and the Diamond Model. The course also covered global
              security laws and standards, hacker types and motives, ethical
              hacking phases, and threat intelligence processes, helping build a
              solid base for a career in offensive and defensive cybersecurity.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/Ethical Hacking- Introduction to Ethical Hacking.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Security Testing: Nmap Security Scanning
            </h2>
            <p className="mb-6">
              Completed the "Security Testing: Nmap Security Scanning" course on
              LinkedIn Learning, gaining hands-on experience in conducting
              network reconnaissance and vulnerability assessments using Nmap.
              Covered key concepts such as TCP/IP networking, ICMP, port
              scanning, and legal considerations. Learned to perform host
              discovery, TCP/UDP scans, OS and service fingerprinting, and scan
              optimization using timing and port selection options. The course
              also included case studies for real-world scanning scenarios and
              demonstrated output formatting and verbose scan analysis.
              Strengthened skills in practical network scanning across Windows,
              Linux, and macOS environments.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/Security Testing- Nmap Security Scanning.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Wireshark Essential Training
            </h2>
            <p className="mb-6">
              Completed the "Wireshark Essential Training" course on LinkedIn
              Learning, developing strong foundational skills in network traffic
              capture and deep packet analysis. Explored the TCP/IP suite, OSI
              model, and common protocols such as DNS, DHCP, HTTP, FTP, ARP,
              ICMP, and IPv6. Gained hands-on experience using Wireshark
              filters, analyzing TCP handshakes, identifying latency issues, and
              working with pcap files. Learned to leverage tools like the
              Wireshark Expert System and CloudShark for efficient network
              troubleshooting, making this course valuable for both offensive
              and defensive cybersecurity tasks.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/Wireshark Essential Training.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="Coding Ninjas Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Basic Java Programming
            </h2>
            <p className="mb-6">
              Completed the Basic Java Programming course from Coding Ninjas,
              gaining a strong foundation in core Java programming concepts.
              Solved a comprehensive set of coding challenges involving string
              manipulation (e.g., reversing words, removing characters,
              substrings), recursion, number theory (e.g., prime checks,
              divisors, factorial, power), bitwise operations, control
              structures, and input/output handling. This certification
              demonstrates my ability to apply Java logic to real-world problems
              and reinforces my understanding of basic data structures and
              algorithmic thinking.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/Coding Ninjas/Basics Of Java.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/assets/education/TryHackMe/Certificates/certificates_icon.png"
                className="size-12"
                alt="LinkedIn Learning Icon"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-left">
              Windows 11 Essential Training
            </h2>
            <p className="mb-6">
              Completed the "Windows 11 Essential Training" course on LinkedIn
              Learning, gaining comprehensive knowledge of Windows 11 features,
              tools, and system management. Covered core topics such as user
              account setup, system customization, application management, file
              organization, network settings, and privacy controls. Practiced
              using built-in tools like File Explorer, Microsoft Store, Edge,
              Outlook, and bundled Office apps. Learned to manage notifications,
              accessibility options, Android apps integration, data sharing, and
              AI-powered tools such as Bing AI and Copilot. This training
              strengthened my ability to use and support Windows 11 in both
              personal and professional environments.
            </p>
          </div>
          <div>
            <a
              href="/assets/education/LinkedIn Learning/Windows 11.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="View Certificate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View Certificate
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
