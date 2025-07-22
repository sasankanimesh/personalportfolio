"use client";

import React from "react";
import { BiEnvelope, BiPhone, BiMessageSquareDetail } from "react-icons/bi";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-gray-900"
    >
      {/* Header */}
      <div className="mx-auto mb-12 text-center max-w-xl md:mb-18 lg:mb-20">
        <p className="mb-3 font-semibold md:mb-4">Let's Connect</p>
        <h2 className="text-4xl font-bold md:text-6xl lg:text-7xl mb-5">
          Contact Me
        </h2>
        <p className="md:text-md">
          I’m available for collaboration, internships, or any exciting
          cybersecurity opportunity.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12">
        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <BiEnvelope className="size-12 mb-5" />
          <h3 className="text-2xl font-bold md:text-3xl mb-3">Email</h3>
          <p className="mb-5">Feel free to reach me anytime by email.</p>
          <a
            href="mailto:10899343@students.plymouth.ac.uk"
            className="underline text-blue-600"
          >
            10899343@students.plymouth.ac.uk
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <BiPhone className="size-12 mb-5" />
          <h3 className="text-2xl font-bold md:text-3xl mb-3">Phone</h3>
          <p className="mb-5">
            Available on call or direct text for quick conversations.
          </p>
          <a href="tel:+94763460315" className="underline text-blue-600">
            +94 76 346 0315
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col items-center text-center">
          <BiMessageSquareDetail className="size-12 mb-5" />
          <h3 className="text-2xl font-bold md:text-3xl mb-3">WhatsApp</h3>
          <p className="mb-5">
            Currently working from home. You can message me directly.
          </p>
          <a
            href="https://wa.me/94763460315"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-600"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
