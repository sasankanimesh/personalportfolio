"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function PU() {
  const symbol = "➤";

  const cardData = [
    {
      top: "32%",
      title: "🎓 Year 1",
      desc: (
        <>
          <p className="mb-4">
            Throughout the academic year, I developed a strong foundation in
            both theoretical and practical aspects of computing. The modules
            covered a broad spectrum—from core programming and database
            development to sustainability and professional growth. Engaging in
            hands-on projects, group collaborations, and individual assessments
            not only enhanced my technical proficiency but also strengthened my
            problem-solving, communication, and teamwork skills. This experience
            laid a solid groundwork for further studies and future career
            opportunities in the field of computer science.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Introduction to Computer Science
                </strong>
                <p className="text-sm text-muted">
                  Explored foundational topics including number systems, data
                  representations, computer storage structures, and basics of
                  computer networking and security. Completed assignments and
                  group projects to reinforce these concepts.
                </p>
              </div>
              <span className="text-right font-semibold">A</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Database Management Systems
                </strong>
                <p className="text-sm text-muted">
                  This module covered key database concepts including data
                  models, ER diagrams, normalization, and SQL queries. For the
                  coursework, we designed and implemented a relational database
                  For the coursework, we designed a MySQL database for a gallery
                  system with normalized tables and implemented SQL queries for
                  data management.
                </p>
              </div>
              <span className="text-right font-semibold">A</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Object-Oriented Programming with C#
                </strong>
                <p className="text-sm text-muted">
                  Learned core C# concepts including operators, loops, access
                  modifiers, classes, arrays, constructors, inheritance,
                  exception handling, and Windows Forms. For the coursework, we
                  developed a desktop application using C# and .NET with
                  database connectivity, implementing full CRUD operations and
                  multiple user interfaces.
                </p>
              </div>
              <span className="text-right font-semibold">A</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Algorithms and Data Structures
                </strong>
                <p className="text-sm text-muted">
                  Learned key data structures such as stacks, queues, arrays,
                  and trees, along with algorithms for searching, sorting,
                  recursion, and iteration. Completed practical labs, quizzes,
                  and an individual assessment, implementing concepts like
                  postfix evaluation, recursive binary search, and complexity
                  analysis.
                </p>
              </div>
              <span className="text-right font-semibold">A</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Mathematics for Computing
                </strong>
                <p className="text-sm text-muted">
                  Explored key mathematical concepts relevant to computing,
                  including number systems, set theory, propositional logic,
                  matrices, and coordinate geometry. Assessed through quizzes
                  and tutorials focused on applying logic and problem-solving
                  techniques in various computational contexts.
                </p>
              </div>
              <span className="text-right font-semibold">A</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Programming in C
                </strong>
                <p className="text-sm text-muted">
                  Introduced fundamental programming concepts using the C
                  language, including variables, operators, control structures,
                  arrays, and functions. Reinforced learning through practical
                  sessions, tutorials, and in-class tests focused on structured
                  programming and problem-solving techniques.
                </p>
              </div>
              <span className="text-right font-semibold">A⁻</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Web Based Application Development
                </strong>
                <p className="text-sm text-muted">
                  Focused on building dynamic websites using HTML, CSS,
                  Bootstrap, JavaScript, PHP, and MySQL. Included classwork,
                  GitHub-based practicals, and a group project to develop a
                  complete 7-page website for an organization with real-time
                  operations and database integration.
                </p>
              </div>
              <span className="text-right font-semibold">A⁻</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Professional Development
                </strong>
                <p className="text-sm text-muted">
                  Focused on career planning, self-awareness, and personal
                  growth through activities such as SWOT analysis, career
                  development planning, and vision statement writing. Covered
                  soft skills including emotional intelligence,
                  entrepreneurship, and workplace behavior, supported by guest
                  lectures and class activities.
                </p>
              </div>
              <span className="text-right font-semibold">A⁻</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Introduction to Sustainability
                </strong>
                <p className="text-sm text-muted">
                  Explored the principles of sustainability, key environmental
                  challenges, and the United Nations Sustainable Development
                  Goals (SDGs). Contributed to a group poster presentation
                  focused on a specific SDG, analyzing global efforts, current
                  issues, and proposing actionable recommendations for Sri Lanka
                  based on global best practices.
                </p>
              </div>
              <span className="text-right font-semibold">B⁺</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Computer Architecture
                </strong>
                <p className="text-sm text-muted">
                  Covered fundamentals of computer organization including logic
                  gates, Boolean algebra, instruction set architecture, cache
                  memory, buses, adders, and sequential circuits. Completed
                  practical assessments such as Karnaugh Map simplification,
                  instruction execution, SR latch design, and multiplexer
                  activities.
                </p>
              </div>
              <span className="text-right font-semibold">B</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  System Analysis and Design
                </strong>
                <p className="text-sm text-muted">
                  Explored system development life cycle (SDLC) models,
                  feasibility studies, and system investigation techniques.
                  Applied object-oriented analysis and design using UML
                  diagrams. Completed a group assignment focused on analyzing
                  and designing a software development plan for a practical
                  scenario.
                </p>
              </div>
              <span className="text-right font-semibold">C</span>
            </div>
          </div>
        </>
      ),
    },
    {
      top: "34%",
      title: "🎓 Year 2",
      desc: (
        <>
          <p className="mb-4">
            In my second year, I advanced my knowledge across key areas of
            computing and software development, focusing on security, software
            engineering, networking, databases, and emerging technologies like
            IoT. I gained practical experience designing secure systems and
            cryptographic methods, developed a comprehensive supermarket web
            application using Java technologies, and completed a year-long
            healthcare mobile app project with React Native. I also worked on
            designing scalable network infrastructures and relational databases
            with advanced SQL features. Additionally, I explored IoT by creating
            an indoor navigation app using Flutter and Bluetooth technology.
            These projects and modules strengthened my technical skills and
            collaborative abilities through hands-on group work and real-world
            scenarios.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Security Architectures & Cryptography
                </strong>
                <p className="text-sm text-muted">
                  Gained practical knowledge of secure system design and
                  cryptography, covering encryption methods, protocols, and
                  security models. Completed two key assignments: one on
                  designing a secure architecture for a university LMS, and
                  another IEEE-style review paper on applying cryptographic
                  techniques in a chosen domain. These tasks deepened my
                  understanding of real-world security and cryptographic
                  applications.
                </p>
              </div>
              <span className="text-right font-semibold">87.90</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Software Engineering 2
                </strong>
                <p className="text-sm text-muted">
                  Learned core Java concepts (JVM, JDK, OOP, Swing, JSP,
                  Servlets). Developed a group project for an online supermarket
                  system with features like payment integration, notifications,
                  and customer feedback. Created UML diagrams and contributed to
                  system design and implementation.
                </p>
              </div>
              <span className="text-right font-semibold">72.60</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Computing Group Project
                </strong>
                <p className="text-sm text-muted">
                  Completed a one-year group project to develop a healthcare
                  mobile application using React Native. The app featured health
                  tracking and appointment management. Actively contributed to
                  UI design, development, and testing, following real-world
                  software development practices in a collaborative environment.
                </p>
              </div>
              <span className="text-right font-semibold">61.80</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Computer Networks
                </strong>
                <p className="text-sm text-muted">
                  Studied network architectures, protocols, subnetting, IP
                  addressing, and security. As part of a group project, designed
                  a complete network infrastructure for a multi-campus
                  university, including IPv4/IPv6 address planning,
                  segmentation, and simulation using Packet Tracer. Proposed
                  secure and scalable network solutions with centralized SOC/NOC
                  management.
                </p>
              </div>
              <span className="text-right font-semibold">61.50</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Information Management & Retrieval
                </strong>
                <p className="text-sm text-muted">
                  This module covered designing and implementing relational
                  databases using ER/EER diagrams and normalization techniques.
                  It included advanced SQL features such as triggers, views, and
                  stored procedures. The coursework involved creating a student
                  management system with Microsoft SQL Server, emphasizing data
                  integrity and reporting.
                </p>
              </div>
              <span className="text-right font-semibold">60.50</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Introduction to IoT
                </strong>
                <p className="text-sm text-muted">
                  Developed an IoT-based indoor navigation mobile app using
                  Flutter, enabling users to accurately navigate complex indoor
                  environments. The app integrates Bluetooth beacons and sensor
                  data to provide real-time location tracking and route
                  guidance, enhancing user experience in large buildings.
                </p>
              </div>
              <span className="text-right font-semibold">49.80</span>
            </div>
          </div>
        </>
      ),
    },
    {
      top: "36%",
      title: "🎓 Year 3",
      desc: (
        <>
          <p className="mb-4">
            <p className="mb-4">
              Final year focused on specialized modules in cybersecurity,
              ethical hacking, and advanced computing. Developed AI-SecPro, an
              AI-powered pentesting automation tool as my individual project.
              Gained real-world experience in intrusion detection, incident
              handling, malware analysis, and digital forensics through hands-on
              group investigations. Practiced advanced techniques in scanning,
              exploitation, reporting, and post-incident recovery, with exposure
              to tools like Snort, Wireshark, Metasploit, and Nessus. Worked on
              SDN and cloud-based infrastructure, deploying scalable solutions
              using Docker and AWS. This year enhanced both my technical
              capabilities and analytical thinking required for offensive and
              defensive security roles.
            </p>
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Advanced Computing and Networking Infrastructures
                </strong>
                <p className="text-sm text-muted">
                  Learned virtualization, cloud computing, and software-defined
                  networking (SDN). Worked on deploying and automating web
                  services using Docker and AWS. Conducted experiments on
                  adaptive video streaming over SDN networks with tools like
                  Mininet and DASH.js. Completed a group project focused on
                  performance testing and network management.
                </p>
              </div>
              <span className="text-right font-semibold">65</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Computing Project
                </strong>
                <p className="text-sm text-muted">
                  AI-SecPro is a production-ready, AI-powered web application I
                  built as my final year individual project. It uses a React
                  frontend, Django backend, and integrates GPT-4 and PentestGPT
                  to automate the entire penetration testing lifecycle—from
                  reconnaissance to reporting. The system supports both manual
                  tool usage and full end-to-end workflows, with intelligent
                  next-step suggestions and AI-enriched reporting. It features
                  PostgreSQL and MongoDB databases, async task handling with
                  Celery, secure user management, role-based access, and a
                  modular, scalable architecture designed for real-world
                  offensive security use cases.
                </p>
              </div>
              <span className="text-right font-semibold">62</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Security Operations & Incident Management
                </strong>
                <p className="text-sm text-muted">
                  Learned key concepts in identifying, analyzing, and responding
                  to cybersecurity incidents. Gained hands-on experience in
                  intrusion detection and forensic analysis using tools like
                  Wireshark, tcpdump, and Snort. For the group coursework,
                  investigated a real-world infection case using PCAP and alert
                  logs, identified indicators of compromise, and proposed
                  long-term solutions such as IDS, honeypots, and SIEM for
                  improved detection and response.
                </p>
              </div>
              <span className="text-right font-semibold">Pending</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Ethical Hacking
                </strong>
                <p className="text-sm text-muted">
                  Studied legal, ethical, and technical aspects of penetration
                  testing. Gained hands-on experience with tools such as Nmap,
                  Nessus, and Metasploit to assess and exploit vulnerabilities
                  in a simulated enterprise network. Delivered a comprehensive
                  penetration testing report for a Sri Lankan tea company
                  (Clarke’s Ceylon Team), including methodology, attack paths,
                  discovered vulnerabilities, and tailored mitigation
                  strategies. Applied real-world pentesting techniques across
                  scanning, exploitation, and post-exploitation phases, while
                  aligning with responsible disclosure and operational security
                  best practices.
                </p>
              </div>
              <span className="text-right font-semibold">Pending</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <strong>
                  <span className="mr-2">{symbol}</span>
                  Digital Forensics & Malware Analysis
                </strong>
                <p className="text-sm text-muted">
                  Studied forensic investigation techniques including data
                  acquisition, malware analysis, and reporting. For coursework,
                  conducted a forensic investigation into unauthorized data
                  access at ABC Company, analyzed email and file evidence, and
                  produced a detailed expert report with findings and security
                  recommendations.
                </p>
              </div>
              <span className="text-right font-semibold">Pending</span>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <section
      id="Plymouth_University"
      className="relative px-[5%] py-8 md:py-12 lg:py-14"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center bg-white">
        <img
          src="/assets/education/Plymouth_University/plymouth_university_logo.webp"
          alt="Plymouth University"
          className="w-full h-auto opacity-40"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          {/* Left Column */}
          <div className="static md:sticky md:top-[30%] text-black">
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Plymouth University Highlights
            </h2>
            <p className="md:text-md">
              Here's a glimpse into my academic and hands-on learning experience
              while pursuing a degree in Computer Security at Plymouth
              University.
            </p>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-10">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="relative z-10 border border-black bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 text-justify"
              >
                <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-4xl ">
                  {card.title}
                </h3>
                <div>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
