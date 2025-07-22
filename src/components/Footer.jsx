"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 ">
      <div className="flex w-full grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20 ">
        <video
          src="/assets/myLogo/logo.mp4"
          className="w-auto h-12"
          autoPlay
          loop
          muted
          playsInline
        />

        <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
          <li className="font-semibold">
            <a href="/">Home</a>
          </li>
          <li className="font-semibold">
            <a href="/aboutme">About Me</a>
          </li>
          <li className="font-semibold">
            <a href="/projects">Projects</a>
          </li>
          <li className="font-semibold">
            <a href="/skills">Skills</a>
          </li>
          <li className="font-semibold">
            <a href="/education">Education</a>
          </li>
          <li className="font-semibold">
            <a href="/certifications">Certifications</a>
          </li>
          <li className="font-semibold">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
          <a
            href="https://www.facebook.com/share/1FtJvFLiLv/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebookCircle className="size-6" />
          </a>

          <a
            href="https://x.com/sasankanimes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="size-6 p-0.5" />
          </a>

          <a
            href="https://www.linkedin.com/in/sasanka-priyantha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedinSquare className="size-6" />
          </a>
        </div>
      </div>
      <div className="h-px w-full bg-black" />
      <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 pb-4 text-sm md:flex-row md:gap-x-6 md:pt-8 md:pb-0">
        <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
          <p className="mt-8 md:mt-0">
            © 2025 Sasanka Nimes. All rights reserved.
          </p>
        </ul>
      </div>
    </footer>
  );
}
