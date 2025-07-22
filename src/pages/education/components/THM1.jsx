"use client";

import React from "react";

export function THM1() {
  return (
    <section
      id="THM-details"
      className="relative px-[5%] py-16 md:py-24 lg:py-40"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/education/TryHackMe/Gallery/tryhackme.png"
          alt="TryHackMe Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-start gap-10 md:gap-x-12 lg:gap-x-5">
        {/* Left: Text Content */}
        <div>
          <h3 className="mb-6 text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl text-white">
            TryHackMe Experience
          </h3>
          <p className="md:text-md text-white leading-relaxed text-justify">
            I’ve been actively learning on <strong>TryHackMe</strong> for over{" "}
            <strong>8 months</strong>, completing over{" "}
            <strong>220 rooms</strong> focused on real-world cybersecurity
            skills. During this journey, I’ve earned <strong>27 badges</strong>,
            achieved a global rank of <strong>#9656</strong>, and currently rank
            in the <strong>top 1%</strong> of users worldwide. This hands-on
            platform has sharpened my skills in areas like penetration testing,
            privilege escalation, enumeration, and more.
          </p>

          {/* Profile Link - Hacker Green */}
          <div className="mt-6">
            <a
              href="https://tryhackme.com/r/p/sasanka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 bg-[#00cc44] hover:bg-[#009933] text-black font-semibold rounded-lg transition"
            >
              View My TryHackMe Profile
            </a>
          </div>
        </div>

        {/* Right: TryHackMe Iframe Badge */}
        <div className="flex justify-center md:justify-end">
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3183879"
            style={{ border: "none" }}
            className="w-full max-w-[350px]"
            scrolling="no"
            title="TryHackMe Public Profile Badge"
          />
        </div>
      </div>
    </section>
  );
}
