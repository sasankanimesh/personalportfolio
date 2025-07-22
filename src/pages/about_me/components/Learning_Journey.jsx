"use client";

import React from "react";

export function Learning_Journey() {
  return (
    <section
      id="learning-journey"
      className="px-[5%] py-4 md:py-6 lg:py-7 bg-white text-gray-900"
    >
      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 md:grid-cols-2 lg:gap-x-15 lg:gap-y-12">
        {/* Section Heading */}
        <div>
          <h1 className="text-xl font-bold md:text-4xl lg:text-5xl">
            🧠 Learning Journey
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="md:text-md leading-relaxed">
            My journey into cybersecurity has been hands-on and driven by
            curiosity. I completed the{" "}
            <strong>TryHackMe Pentester Pathway</strong>, which gave me
            practical experience with real-world attack scenarios and security
            challenges.
            <br />
            <br />
            I regularly take part in vulnerable machine labs and challenges to
            improve my problem-solving abilities and offensive mindset. I enjoy
            discovering how systems work, how they can be broken, and how to
            defend them ethically.
            <br />
            <br />I believe learning never stops, so I consistently explore new
            techniques, follow cybersecurity trends, and stay active in the
            community to grow as a professional.
          </p>
        </div>
      </div>
    </section>
  );
}
