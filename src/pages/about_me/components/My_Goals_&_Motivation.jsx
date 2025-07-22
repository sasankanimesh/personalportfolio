"use client";

import React from "react";

export function My_Goals_and_Motivation() {
  return (
    <section
      id="whoami"
      className="px-[5%] py-4 md:py-6 lg:py-7 bg-white text-gray-900"
    >
      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 md:grid-cols-2 lg:gap-x-15 lg:gap-y-12">
        {/* Section Heading */}
        <div>
          <h1 className="text-xl font-bold md:text-4xl lg:text-5xl">
            🎯 My Goals & Motivation
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="md:text-md leading-relaxed">
            My ultimate goal is to become a skilled{" "}
            <strong>offensive security professional</strong> who can help
            organizations strengthen their digital defenses. I'm motivated by
            curiosity and a passion for understanding how systems can be broken
            — so they can be fixed.
            <br />
            <br />
            I find joy in solving technical challenges, uncovering
            vulnerabilities, and learning how things work under the hood. This
            mindset fuels my interest in ethical hacking, red teaming, and
            penetration testing.
            <br />
            <br />I aim to continuously grow by working on real-world projects,
            collaborating with experienced professionals, and pushing myself
            through hands-on labs, CTFs, and research. My motivation is not just
            to find flaws — but to contribute to a safer, more secure digital
            world.
          </p>
        </div>
      </div>
    </section>
  );
}
