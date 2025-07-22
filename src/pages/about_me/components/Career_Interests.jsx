"use client";

import React from "react";

export function Career_Interests() {
  return (
    <section
      id="career-interests"
      className="px-[5%] py-4 md:py-6 lg:py-7 bg-white text-gray-900"
    >
      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 md:grid-cols-2 lg:gap-x-15 lg:gap-y-12">
        {/* Section Heading */}
        <div>
          <h1 className="text-xl font-bold md:text-4xl lg:text-5xl">
            💼 Career Interests
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="md:text-md leading-relaxed">
            I'm currently looking for any opportunity—whether it's an{" "}
            <strong>internship</strong>, <strong>junior role</strong>, or{" "}
            <strong>freelance project</strong>—that allows me to kick-start my
            career in <strong>cybersecurity</strong>. While my main interest
            lies in <strong>offensive security</strong> areas such as{" "}
            <strong>penetration testing</strong> and{" "}
            <strong>red teaming</strong>, I’m also open to working in any role
            that helps me gain experience and grow.
            <br />
            <br />
            I'm passionate about understanding how systems work and how they can
            be ethically exploited to improve security. I enjoy solving
            real-world security challenges and continuously learning in hands-on
            environments.
            <br />
            <br />
            My long-term goal is to become a skilled{" "}
            <strong>offensive security expert</strong>, contributing to red team
            operations, advanced assessments, and helping organizations build
            stronger defenses.
          </p>
        </div>
      </div>
    </section>
  );
}
