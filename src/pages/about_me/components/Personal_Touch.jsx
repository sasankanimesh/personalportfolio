"use client";

import React from "react";

export function Personal_Touch() {
  return (
    <section
      id="personal-touch"
      className="px-[5%] py-4 md:py-6 lg:py-7 bg-white text-gray-900"
    >
      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 md:grid-cols-2 lg:gap-x-15 lg:gap-y-12">
        {/* Section Heading */}
        <div>
          <h1 className="text-xl font-bold md:text-4xl lg:text-5xl">
            💡 Personal Touch
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="md:text-md leading-relaxed">
            I’m someone who enjoys solving the hardest challenges — the more
            complex, the more exciting it is for me. I don’t easily give up, and
            until I succeed, I don’t let go of the problem.
            <br />
            <br />
            This mindset drives me in both technical tasks and real-life
            situations. Whether it’s solving puzzles, working on security labs,
            or overcoming obstacles in personal projects, I thrive when pushed
            outside of my comfort zone.
            <br />
            <br />I believe that consistent effort and deep curiosity are what
            transform challenges into opportunities to grow.
          </p>
        </div>
      </div>
    </section>
  );
}
