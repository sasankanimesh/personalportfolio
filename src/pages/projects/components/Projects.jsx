"use client";

import React, { useRef, useEffect } from "react";
import { Badge, Button } from "@relume_io/relume-ui"; // Make sure this is installed
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

// 🔧 Hook to animate each card on scroll
function useProjectAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.9, 1],
    [0.9, 1, 1, 0.95, 0.9]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.9, 0.95],
    [0, 1, 1, 0.5, 0]
  );

  return { ref, style: { scale, opacity } };
}

// 🔧 Individual Project Card (Modified to accept projectId)
function ProjectCard({ project, projectId }) {
  const { ref, style } = useProjectAnimation();

  return (
    <div
      id={projectId} // <-- Unique ID is applied here
      className="mb-6 md:mb-12 lg:mb-20 min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px] xl:min-h-[650px]"
    >
      <motion.div
        ref={ref}
        style={style}
        className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-x-8 gap-y-6 p-6 md:p-8 lg:p-12 rounded-lg border border-black bg-white shadow-md"
      >
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {project.heading}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i}>{tag}</Badge>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm md:text-base text-justify">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.buttons.map((btn, i) =>
              btn.link ? (
                <a
                  key={i}
                  href={btn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={btn.variant}
                    size={btn.size}
                    iconRight={btn.iconRight}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    {btn.title}
                  </Button>
                </a>
              ) : (
                <Button
                  key={i}
                  variant={btn.variant}
                  size={btn.size}
                  iconRight={btn.iconRight}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  {btn.title}
                </Button>
              )
            )}
          </div>
        </div>

        <div>
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="aspect-[3/2] w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
}

// 🔧 Main Projects Section (Modified with all logic)
export function Projects() {
  // Helper function to create a URL-friendly slug from a string
  const createSlug = (heading) =>
    heading
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-"); // Replace multiple hyphens with a single one

  // useEffect hook to handle scrolling to a specific project on page load
  useEffect(() => {
    // Check if we are in a browser environment and if there's a hash in the URL
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1); // Remove the '#'
      // A small delay ensures the DOM is fully rendered before we try to scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  const projects = [
    {
      heading: "AI-SecPro – Secure AI-Driven Web Penetration Testing Platform",
      tags: [
        "Web Security",
        "AI Security",
        "Penetration Testing",
        "Django",
        "React",
        "GPT-4 Integration",
        "PostgreSQL",
        "MongoDB",
        "Ethical Hacking",
        "Automation",
      ],
      description:
        "AI-SecPro is a cutting-edge, AI-powered web application I fully designed and developed to redefine ethical hacking through automation, intelligence, and ethical compliance. Built using Django, React, PostgreSQL, and MongoDB, the system seamlessly integrates GPT-4 and PentestGPT for real-time analysis, AI-guided testing, and intelligent report generation.\n\nThe platform offers a complete offensive security lifecycle—from reconnaissance and vulnerability scanning to AI-assisted exploitation and professional CVE-informed reporting. AI-SecPro enforces ethical hacking protocols via consent validation, usage boundaries, and risk-based action filtering. It supports gray, black, and white-box testing modes, with secure authentication (JWT), role-based access control, reCAPTCHA, session hardening, and real-time WebSocket updates.\n\nI implemented a dual-database architecture, using PostgreSQL for structured user data and MongoDB for real-time scan results and unstructured AI responses. Tools like Nmap, OWASP ZAP, Burp Suite, Metasploit, SQLMap, and others are orchestrated by the backend and interpreted by GPT-4 to enhance decision-making. AI-SecPro bridges human expertise with machine learning by enabling less-experienced users and professionals to launch guided or automated pentests while ensuring OWASP Top 10 resilience and AI safety.\n\nKey features include:\n- AI-guided full pentest automation and scan interpretation.\n- Role-based dashboards with ethical policy enforcement.\n- Dynamic vulnerability reports with remediation advice.\n- Real-time recon & scanning modules with secure multi-user support.\n- Modular plugin-ready UI and containerized architecture for scale.\n\nThis project is a comprehensive demonstration of my expertise in full-stack secure web development, AI integration, DevSecOps, and offensive cybersecurity—all delivered under a university-supervised individual research project aligned with real-world standards.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/AISecPro.docx",
        },
      ],
      image: {
        src: "/assets/projects/AISECPRO1.png",
        alt: "AI-SecPro secure penetration testing platform UI",
      },
    },
    {
      heading: "Digital Forensics Report: Unauthorized Access Incident",
      tags: [
        "Digital Forensics",
        "Cybersecurity",
        "Incident Response",
        "Evidence Analysis",
        "PST Files",
        "DBX Files",
        "Email Header Analysis",
        "Chain of Custody",
        "Forensic Tools",
      ],
      description:
        "In this group project, we conducted a comprehensive digital forensic analysis of an unauthorized access incident involving sensitive financial data at ABC Company. The core objective was to investigate the breach, determine the extent of unauthorized access, and identify which sensitive data had been exposed, ensuring that all findings were thorough, accurate, and legally admissible.\n\nOur investigation meticulously covered the handling, examination, and analysis of digital evidence, adhering to established forensic standards. This included analyzing various forms of digital evidence such as .pst and .dbx email files, as well as email headers contained in a document. We employed a suite of specialized forensic tools including SysTool Outlook PST Viewer, SysTools MailXaminer, 4n6 DBX Forensics Wizard for email file analysis, and investigative tools like VirusTotal, Criminal IP, AbusIP, and Whois Lookup for analyzing attachments, IP addresses, and domains. Our process ensured strict adherence to the Chain of Custody for all collected evidence. The project culminated in a detailed report outlining our findings, expert opinions, and recommending security measures to prevent future incidents and enhance the integrity of the company's data, such as applying patches, restricting services, implementing strong password policies, and developing an incident response plan.\n\nMy individual contribution to this project specifically focused on the *Evidence Classes*. I was responsible for the systematic categorization and meticulous analysis of the various types of digital evidence, including the in-depth examination of .pst files, .dbx files, and email headers. This involved using forensic tools to extract, review, and interpret data from these classes to identify potential misuse, unauthorized access, and other significant activities relevant to the breach.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/ForensicsReport.pdf",
        },
      ],
      image: {
        src: "/assets/projects/digitalforensicst.png",
        alt: "Digital Forensics Diagram",
      },
    },
    {
      heading: "Penetration Testing Report: Clarke's Ceylon Team",
      tags: [
        "Cybersecurity",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Network Security",
        "Incident Response",
        "Ethical Hacking",
        "Nmap",
        "Masscan",
        "OpenSSH",
        "DNS Security",
      ],
      description:
        "In this group project, we conducted a comprehensive penetration test on the network infrastructure of Clarke's Ceylon Team. The primary objective was to assess their security posture by identifying vulnerabilities and weaknesses within their systems. Our findings were aimed at helping the company prioritize security improvements and mitigate potential risks.\n\nThe penetration test followed a standard methodology, including reconnaissance, scanning (using tools like Nmap and Masscan to identify live hosts, open ports, and services), exploitation of identified vulnerabilities, and post-exploitation analysis. We uncovered several critical vulnerabilities, such as OpenSSH misconfigurations, outdated software versions on internal systems, and weaknesses in access controls that could lead to network compromise. The report provided immediate, short-term, and long-term remediation recommendations, including applying patches for critical software, restricting unnecessary services, configuring firewalls, implementing strong password policies, multi-factor authentication, regular vulnerability assessments, network segmentation, and strong encryption for sensitive data, as well as developing an incident response plan.\n\nMy individual contribution to this project focused on the Testing Process and Findings section, where I detailed the methodologies and results of the penetration testing phases.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/Penetration Testing Report.pdf",
        },
      ],
      image: {
        src: "/assets/projects/Pentesting.png",
        alt: "Penetration Testing Diagram",
      },
    },
    {
      heading: "Incident Prevention, Detection and Response",
      tags: [
        "Cybersecurity",
        "Incident Management",
        "Security Operations",
        "Threat Detection",
        "Incident Response",
        "Network Security",
        "Intrusion Detection Systems",
      ],
      description:
        "In this group project, we focused on the critical aspects of Incident Prevention, Detection, and Response. The project aimed to explore and outline strategies and practices essential for maintaining robust cybersecurity within an organizational environment.\n\nOur work covered key areas including methodologies for preventing security incidents, various techniques and tools for detecting threats (such as Intrusion Detection Systems (IDS), Security Information and Event Management (SIEM) systems, and leveraging threat intelligence), and comprehensive steps for effective incident response. The response phase included crucial stages like containment, eradication, and recovery to minimize damage and restore normal operations. We examined concepts like Threat Detection and Response (TDR) and Network Intrusion Detection (NID), which are vital for identifying and reacting to malicious activities. The project likely involved theoretical and practical understanding of tools like Snort and Wireshark, which are commonly used in security operations for network analysis and intrusion detection.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/SOIM.pdf",
        },
      ],
      image: {
        src: "/assets/projects/SOIM.png",
        alt: "Security Operations Diagram",
      },
    },
    {
      heading: "Advanced Cloud Infrastructure and Adaptive Video Streaming",
      tags: [
        "AWS",
        "Docker",
        "Load Balancing",
        "SDN",
        "Adaptive Video Streaming",
        "Python",
        "Mininet",
        "Nginx",
      ],
      description:
        "This project showcases a dual-pronged approach to modern infrastructure challenges. In the first part, I designed and deployed a scalable, containerized web architecture for a retail client using AWS, Docker, and Nginx. By implementing a microservices-based system with a load balancer, I demonstrated a near 90% increase in requests per second and a 47% reduction in request time, effectively addressing performance bottlenecks. The entire infrastructure was automated using shell scripts for streamlined deployment and testing. The second part of the project explored the optimization of media delivery through an adaptive video streaming solution over a Software-Defined Network (SDN). I built a testbed using Mininet, OpenDaylight, and DASH.js to simulate and analyze the impact of network conditions like packet loss on video quality. This experiment highlighted the effectiveness of adaptive bitrate streaming in maintaining a quality user experience under fluctuating network performance, with data collection and analysis automated via Python scripts.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/AdvancedNetworkInfrastructure.pdf",
        },
      ],
      image: {
        src: "/assets/projects/AdvancedNetworkInfrastructure.png",
        alt: "Advanced Cloud and Network Infrastructure Project",
      },
    },
    {
      heading: "Database for NSBM Green University",
      tags: [
        "Database Design",
        "Information Management",
        "SQL Server",
        "ER Diagrams",
        "Normalization",
        "Data Integrity",
        "Database Security",
        "Retrieval Systems",
        "T-SQL",
      ],
      description:
        "In this group project, we developed a comprehensive database system for NSBM Green University, aimed at efficiently managing and organizing vast amounts of data related to students, courses, faculties, and administrative operations. Our primary goal was to ensure data integrity, robust security, and efficient data retrieval within the university's information system.\n\nThe project encompassed the entire database development lifecycle. We began with the conceptual design, creating detailed Entity-Relationship (ER) diagrams to model the university's data structure. This was followed by the logical design phase, where we applied normalization processes to optimize the database schema and eliminate data redundancy. For the physical implementation, we utilized SQL Server Management Studio to create the database, define tables, and establish relationships. Key aspects of our work included schema creation, data population, indexing for performance, and developing various database objects such as views, stored procedures, and triggers to enhance functionality and enforce business rules. We also implemented essential security measures to protect sensitive university data.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/IMRReport.pdf",
        },
      ],
      image: {
        src: "/assets/projects/ER.png",
        alt: "Database Design Diagram",
      },
    },
    {
      heading: "Smart Campus Navigator: Real-Time Lecture Hall Locator",
      tags: [
        "IoT",
        "Indoor Navigation",
        "Real-Time Tracking",
        "Bluetooth Beacons",
        "Flutter Blue Plus",
        "ESP32",
        "PIR Sensors",
        "Network Security",
        "User Interface Design",
        "Emergency Systems",
      ],
      description:
        "In this group project, we developed the 'Smart Campus Navigator,' a real-time lecture hall locator system designed to resolve the challenge of navigating university facilities for students and guests. The primary problem we addressed was the difficulty users face in locating specific venues like lecture halls, labs, and exam halls, especially for newcomers or during critical periods like exams.\n\nOur solution involved designing a comprehensive system that offers real-time mapping and navigation services with a user-friendly interface. Key objectives included ensuring accurate position identification and route optimization, utilizing IoT sensors for enhanced tracking, and minimizing time consumption during important events. We leveraged technologies such as Flutter Blue Plus, a scanning beacon framework, for indoor positioning and navigation. We also integrated ESP32 for beacon implementation. Additionally, we incorporated PIR sensors for motion detection and designed an emergency fire alarm system using MQ2 gas sensors, KY-026 flame detectors, and a buzzer. The project successfully delivered a Smart Campus Navigator with intuitive interfaces, precise location tracking, and efficient route optimization, significantly improving real-time navigation accuracy through IoT sensor integration.\n\nMy individual contribution to this project was focused on the navigation application coding.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/IOT.pdf",
        },
      ],
      image: {
        src: "/assets/projects/IOT.png",
        alt: "Smart Campus Navigator Diagram",
      },
    },
    {
      heading: "Computer Networks Project",
      tags: [
        "Computer Networks",
        "Network Design",
        "IPv4",
        "IPv6",
        "Subnetting",
        "Network Security",
        "Network Management",
        "Scalability",
        "Cisco Packet Tracer",
      ],
      description:
        "In this group project, we designed a robust, secure, and scalable network infrastructure for the National University of Information Technology (NUIT) in Sri Lanka, which includes a main campus in Homagama and multiple regional campuses. We focused on unifying the network across geographically dispersed locations while ensuring seamless connectivity for staff, students, and guests.\n\nOur work involved developing a comprehensive network architecture that prioritized segmentation for isolated traffic flows, scalability for future growth, and strong security measures like firewalls, intrusion detection/prevention systems (IDS/IPS), and Access Control Lists (ACLs). We also focused on a centralized management system to simplify administration and troubleshooting.\n\nThe design included detailed network segmentation strategies and a hierarchical subnet structure for efficient IP address allocation, covering both IPv4 and IPv6 addressing plans for various faculties, administrative buildings, and user groups at the main university and regional campuses. It also specified necessary network components, including core and access layer devices, secure wireless connectivity, and reliable inter-campus connections. We implemented a security and network management framework, leveraging a network management system (NMS) and secure VPN connections. For network simulation and design, we utilized Cisco Packet Tracer.\n\nI contributed to this project by developing the logical design and the IP addressing approach, and I also provided key recommendations for the overall network architecture.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/NetworkProject.pdf",
        },
      ],
      image: {
        src: "/assets/projects/Network.png",
        alt: "Network Design Diagram",
      },
    },
    {
      heading: "Healthcare React Native Mobile Application",
      tags: [
        "React Native",
        "Node.js",
        "MySQL",
        "AI Chatbot",
        "Healthcare",
        "Mobile Application",
        "Computer Security",
      ],
      description:
        "Developed a comprehensive Healthcare React Native Mobile Application to enhance healthcare accessibility and patient engagement. My role as *Programming Leader* involved managing the front-end and back-end development and coding. I was responsible for guaranteeing code accuracy, compliance with coding guidelines, and effective feature implementation. My specific contributions included *Front-end Development using React Native, Back-end Development with Node.js and Express.js, and Database Integration with MySQL*. The application integrates AI-driven chatbots to provide convenient access to services such as appointment scheduling, medication reminders, and mental health support. Key features include medication management, emotional support via an AI chatbot, e-channeling for appointments, access to emergency services, secure data sharing, personalized health profiles, and telemedicine consultation capabilities. I collaborated closely with the Technical Leader to ensure seamless integration of all components.",
      buttons: [
        {
          title: "View Report",
          variant: "secondary",
          link: "/assets/projects/HealthcareApp.pdf",
        },
      ],
      image: {
        src: "/assets/projects/HealthcareApp.png",
        alt: "",
      },
    },
    {
      heading: "Green Supermarket Web-Application",
      tags: [
        "Java",
        "Back-end Development",
        "E-commerce",
        "Payment Gateway Integration",
        "Email Automation",
        "Database Management",
      ],
      description:
        "As a key contributor to the Green Supermarket web application, my primary focus was on the robust *back-end development. I was responsible for implementing the core server-side logic, managing database interactions, and crucially, configuring the **PayPal Sandbox for secure payment processing. My role also involved setting up the **email notification system* for purchase confirmations and cancellations, ensuring seamless communication with users. This project enhanced my expertise in building scalable and integrated web solutions.",
      buttons: [
        {
          title: "View on GitHub",
          variant: "secondary",
          link: "https://github.com/sasankanimesh/Java-web-application.git",
        },
        {
          title: "View Report",
          variant: "secondary",
          iconRight: <RxChevronRight />,
          link: "/assets/projects/GreenSuperMarketWebReport.pdf",
        },
      ],
      image: {
        src: "/assets/projects/GreenSuperMarket.jpg",
        alt: "Screenshot of Green Supermarket Web-Report",
      },
    },
    {
      heading: "Cryptography in Blockchain",
      tags: [
        "Cryptography",
        "Blockchain",
        "Security",
        "Decentralized Systems",
        "Research",
      ],
      description:
        "This project focuses on the role of cryptography in securing blockchain systems by exploring essential components like public and private key encryption, digital signatures, hash functions (such as SHA-256), and Merkle trees. It explains how these elements work together to ensure data integrity, authentication, and trust within decentralized environments. I analyzed how platforms like Bitcoin, Ethereum, and Hyperledger use these cryptographic methods to support secure, transparent transactions without relying on centralized authorities.\n\nThe work also investigates common blockchain vulnerabilities—such as 51% attacks, Sybil attacks, and double spending—and examines how advanced cryptographic technologies like zero-knowledge proofs, homomorphic encryption (FHE), and multi-party computation (MPC) can provide enhanced security and privacy for future applications.\n\nThrough this project, I developed a strong understanding of how blockchain and cryptography intersect to create secure and scalable systems. A clean visual accompanies the project to represent core concepts clearly, making it easier to grasp the structure and purpose of cryptographic elements in a blockchain network.",
      buttons: [
        {
          title: "View Paper",
          variant: "secondary",
          link: "/assets/projects/blockchain.pdf",
        },
      ],
      image: {
        src: "/assets/projects/blockchain.png",
        alt: "Image representing the intersection of cryptography and blockchain technology",
      },
    },
  ];

  return (
    <section id="projects" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="grid grid-cols-1 gap-6 md:gap-12 lg:gap-20">
        {projects.map((project, index) => {
          // Generate the unique ID for the project
          const projectId = createSlug(project.heading);
          // Pass the project data and the new ID to the card component
          return (
            <ProjectCard key={index} project={project} projectId={projectId} />
          );
        })}
      </div>
    </section>
  );
}
