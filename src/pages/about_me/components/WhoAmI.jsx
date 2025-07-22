"use client";

import React from "react";

export function WhoAmI() {
  return (
    <section
      id="whoami"
      className="px-[5%] py-4 md:py-6 lg:py-7 bg-white text-gray-900"
    >
      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 md:grid-cols-2 lg:gap-x-15 lg:gap-y-12">
        {/* Section Heading */}
        <div>
          <h1 className="text-xl font-bold md:text-4xl lg:text-5xl">
            👨‍🎓 Who I Am
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="md:text-md leading-relaxed">
            I’m <strong>Sasanka Nimes</strong> from Sri Lanka — a recent
            graduate with a<strong> BSc (Hons) in Computer Security</strong>{" "}
            from
            <strong> Plymouth University, UK</strong>. I have a deep interest in
            <strong> ethical hacking</strong>, <strong>cybersecurity</strong>,
            and
            <strong> secure software development</strong>. I'm passionate about
            understanding how systems work, how attackers exploit them, and how
            we can defend against those threats.
          </p>
        </div>
      </div>
    </section>
  );
}
