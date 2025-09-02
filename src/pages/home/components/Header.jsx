"use client";

import React from "react";
import { ReactTyped } from "react-typed";

export function Header() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="mb-2 text-3xl font-bold md:text-5xl lg:text-5xl">
            👋 Hello, I am <span className="text-primary">Sasanka Nimes</span>
          </h1>

          <ReactTyped
            strings={[
              "Computer Security Graduate",
              "TryHackMe Pentester Pathway Certified",
              "Aspiring Penetration Tester",
              "Offensive Security Learner",
              "Keen to Join a Cybersecurity Team",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-lg font-semibold text-gray-600 md:text-xl mb-4"
          />

          <p className="md:text-md">
            I’m a recent <strong>BSc Computer Security graduate</strong> from{" "}
            <strong>Plymouth University, UK</strong>. I’ve completed the{" "}
            <strong>TryHackMe Pentester Pathway</strong> and am passionate about
            continuously developing my skills through hands-on labs and
            challenges.
          </p>

          <p className="mt-4 md:text-md">
            I’m actively seeking an{" "}
            <strong>internship or entry-level role in Cybersecurity</strong>,
            with a strong focus on <strong>Penetration Testing</strong> and{" "}
            <strong>practical offensive security techniques</strong>.
          </p>
        </div>

        <div>
          <img
            src=""/assets/resume/myphoto.jpg""
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
