"use client";

import React from "react";

export function Academic_Backgroud() {
  return (
    <section
      id="academic-background"
      className="px-[5%] py-4 md:py-6 lg:py-7 bg-white text-gray-900"
    >
      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 md:grid-cols-2 lg:gap-x-15 lg:gap-y-12">
        {/* Section Heading */}
        <div>
          <h1 className="text-xl font-bold md:text-4xl lg:text-5xl">
            🎓 Academic Background
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="md:text-md leading-relaxed">
            I earned my <strong>BSc (Hons) in Computer Security</strong> from
            <strong> Plymouth University, UK</strong>. Throughout my studies, I
            gained in-depth knowledge in key areas such as{" "}
            <strong>penetration testing</strong>,
            <strong> digital forensics</strong>,{" "}
            <strong>network security</strong>,<strong> malware analysis</strong>
            , and <strong>secure software development</strong>.
            <br />
            <br />
            My coursework involved practical lab sessions, real-world
            simulations, and group projects that helped me understand offensive
            and defensive security techniques. I also completed several
            individual assignments focusing on ethical hacking, vulnerability
            assessments, and incident response.
          </p>
        </div>
      </div>
    </section>
  );
}
