"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function NSBM() {
  return (
    <section
      id="NSBM_Green_University"
      className="relative px-[5%] py-8 md:py-12 lg:py-14"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/education/NSBM_Green_University/NSBM_Green_University.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 ">
          {/* Left Column: University Info */}
          <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
            <div className="text-justify">
              <h2 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                NSBM Green University
              </h2>
              <p className="text-white md:text-md">
                Successfully completed the Foundation Programme in Computing at
                NSBM Green University, affiliated with Plymouth University. This
                one-year intensive programme provided a strong academic base in
                computing, programming, networks, mathematics, and business
                concepts, preparing me for undergraduate studies in Computer
                Security.
              </p>
            </div>
          </div>

          {/* Right Column: Modules and Results */}
          <div className="space-y-4 text-white text-justify">
            <div>
              <h3 className="text-xl font-semibold">Computer Technology</h3>
              <p>
                Studied the fundamentals of computer systems, including basic
                electricity, logic gates, SOP & POS expressions, and computer
                organization. Covered key areas such as cache memory, bus
                architecture, and computer hardware components, while developing
                a strong understanding of digital logic and system design
                principles.
                <br />
                <strong>Result: A-</strong>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Web Design & Development
              </h3>
              <p>
                Studied core concepts of web development including internet
                fundamentals, HTML structure, lists, links, images, tables,
                forms, extra markup, and web hosting. Built a strong foundation
                in creating functional web pages using HTML, with an
                introduction to CSS and JavaScript basics.
                <br />
                <strong>Result: A⁻</strong>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Programming in Python</h3>
              <p>
                Completed a comprehensive module on Python programming, covering
                core concepts such as sequences, operators, inbuilt functions,
                control structures (if-elif-else), loops (while and for), lists,
                and functions. Gained hands-on experience through practical
                coding exercises and quizzes.
                <br />
                <strong>Result: A⁻</strong>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Computer Applications & Programming Fundamentals
              </h3>
              <p>
                Gained a strong introduction to computers and programming.
                Studied topics such as computer hardware and software, MS Word,
                Excel, and PowerPoint, logic gates, computer architecture,
                internet and email usage, and fundamental programming concepts.
                Also explored e-commerce and ethical and health issues in
                computing.
                <br />
                <strong>Result: B</strong>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Fundamentals of Mathematics and Quantitative Techniques
              </h3>
              <p>
                Studied core mathematical and statistical concepts including
                algebra, exponents, radicals, factoring, equations, linear
                functions, and interest calculations. Gained foundational
                knowledge in quantitative techniques such as data collection,
                sampling methods, data organization, presentation, and summary
                measures like central tendency and dispersion.
                <br />
                <strong>Result: B</strong>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Network Fundamentals</h3>
              <p>
                Studied the basics of computer networks, including networking
                devices, transmission media, topologies, search engines, cloud
                computing, and servers. Developed a foundational understanding
                of how data is transmitted and managed across networks.
                <br />
                <strong>Result: B</strong>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Principles of Management and Business
              </h3>
              <p>
                Studied core concepts of management and business operations,
                including management roles, business environments, marketing,
                operations, financial and human resource management, IT
                management, logistics, and contemporary business issues. Gained
                experience in applying theoretical concepts through SWOT
                analyses, case studies, and group work related to sustainability
                development goals.
                <br />
                <strong>Result: C⁺</strong>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">ICT Project Management</h3>
              <p>
                Studied the fundamentals of managing ICT projects, including
                project initiation, scope definition, time and cost management,
                quality planning, human resource planning, and CSR-related
                project work. Gained practical experience through proposal
                writing, project documentation, and planning activities aligned
                with real-world project management practices.
                <br />
                <strong>Result: C</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
