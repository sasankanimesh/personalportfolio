"use client";

import React, { useState } from "react";
import { Badge } from "@relume_io/relume-ui";
import clsx from "clsx";

// Custom hover logic
const useHover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseLeave = () => setHoveredIndex(null);
  const getLinkHoverHandler = (index) => () => setHoveredIndex(index);

  const getOrderNumberClassNames = (index) =>
    clsx("text-xl font-bold transition-colors duration-300 md:text-2xl", {
      "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
      "lg:text-black": hoveredIndex === index || hoveredIndex === null,
    });

  const getHeadingClassNames = (index) =>
    clsx(
      "text-2xl font-bold transition-colors duration-300 md:text-3xl lg:text-4xl",
      {
        "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
        "lg:text-black": hoveredIndex === index || hoveredIndex === null,
      }
    );

  const getImageContainerClassNames = (index) => {
    const isVisible =
      (hoveredIndex !== null && index === hoveredIndex) ||
      (hoveredIndex === null && index === 0);

    return clsx("absolute inset-0 transition-opacity duration-500", {
      "opacity-100 z-10": isVisible,
      "opacity-0 z-0": !isVisible,
    });
  };

  return {
    handleMouseLeave,
    getLinkHoverHandler,
    getOrderNumberClassNames,
    getHeadingClassNames,
    getImageContainerClassNames,
  };
};

// Projects component
export function Projects() {
  const hoverState = useHover();

  const createSlug = (heading) =>
    heading
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const projects = [
    {
      heading: "AI-SecPro – Secure AI-Driven Web Penetration Testing Platform",
      tags: ["Web Security", "AI Security"],
      image: { src: "/assets/projects/AISecPro.png", alt: "AI-SecPro UI" },
    },
    {
      heading: "Digital Forensics Report: Unauthorized Access Incident",
      tags: ["Digital Forensics", "Cybersecurity"],
      image: {
        src: "/assets/projects/digitalforensics.png",
        alt: "Digital Forensics",
      },
    },
    {
      heading: "Penetration Testing Report: Clarke's Ceylon Team",
      tags: ["Penetration Testing", "Vulnerability Assessment"],
      image: {
        src: "/assets/projects/Pentesting.png",
        alt: "Penetration Testing",
      },
    },
    {
      heading: "Incident Prevention, Detection and Response",
      tags: ["Incident Management", "Security Operations"],
      image: {
        src: "/assets/projects/SOIM.png",
        alt: "Incident Management",
      },
    },
    {
      heading: "Advanced Cloud Infrastructure and Adaptive Video Streaming",
      tags: ["AWS", "Docker", "SDN"],
      image: {
        src: "/assets/projects/AdvancedNetworkInfrastructure.png",
        alt: "Cloud Infra",
      },
    },
    {
      heading: "Database for NSBM Green University",
      tags: ["Database Design", "SQL Server"],
      image: { src: "/assets/projects/ER.png", alt: "Database ER" },
    },
    {
      heading: "Smart Campus Navigator: Real-Time Lecture Hall Locator",
      tags: ["IoT", "Indoor Navigation", "Flutter"],
      image: { src: "/assets/projects/IOT.png", alt: "Campus Navigator" },
    },
    {
      heading: "Computer Networks Project",
      tags: ["Network Design", "IPv6", "Cisco"],
      image: { src: "/assets/projects/Network.png", alt: "Network Design" },
    },
    {
      heading: "Healthcare React Native Mobile Application",
      tags: ["React Native", "Node.js", "AI Chatbot"],
      image: {
        src: "/assets/projects/HealthcareApp.png",
        alt: "Healthcare App",
      },
    },
    {
      heading: "Green Supermarket Web-Application",
      tags: ["Java", "E-commerce", "PayPal"],
      image: {
        src: "/assets/projects/GreenSuperMarket.jpg",
        alt: "Supermarket UI",
      },
    },
    {
      heading: "Cryptography in Blockchain",
      tags: ["Cryptography", "Blockchain", "Research"],
      image: { src: "/assets/projects/blockchain.png", alt: "Blockchain" },
    },
  ];

  return (
    <section id="Projects" className="px-[5%] py-10 md:py-14 lg:py-16">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
        {/* IMAGE BLOCK */}
        <div className="sticky top-8 hidden h-[90vh] w-full lg:block overflow-hidden rounded-xl shadow-lg bg-gray-100">
          <div className="relative h-full w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className={hoverState.getImageContainerClassNames(index)}
              >
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div onMouseLeave={hoverState.handleMouseLeave}>
          {projects.map((project, index) => {
            const linkHref = `/projects#${createSlug(project.heading)}`;
            return (
              <a
                key={index}
                href={linkHref}
                onMouseEnter={hoverState.getLinkHoverHandler(index)}
                className="relative z-20 flex flex-col items-start gap-4 border-b border-black/20 py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
              >
                <div className={hoverState.getOrderNumberClassNames(index)}>
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(index)}>
                    {project.heading}
                  </h3>
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex}>{tag}</Badge>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
