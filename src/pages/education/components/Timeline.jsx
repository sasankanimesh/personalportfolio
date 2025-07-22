"use client";

import { Button } from "@relume_io/relume-ui";
import { Card } from "../../../components/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-8"
      />
    </div>
  );
};

export function Timeline() {
  return (
    <section id="academic-path" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
        <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
          <p className="mb-3 font-semibold md:mb-4">My Journey</p>
          <h3 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
            Academic Path
          </h3>
          <p className="md:text-md">
            Here's a brief timeline of my educational journey, from foundational
            studies to advanced cybersecurity training.
          </p>
        </div>

        <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
          <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
          <div className="sticky top-0 mt-0 h-[50vh] w-[3px] bg-black" />

          <div className="h-full w-[3px] bg-neutral-lighter" />
          <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
          <div className="absolute top-0 h-[50vh] w-full bg-background-primary" />
        </div>

        <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
          {/* TryHackMe */}
          <div className="relative">
            <Circle />
            <Card className="ml-12 flex flex-col p-6 md:ml-0 md:p-8">
              <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                2024 - Present
              </h4>
              <h5 className="mb-3 text-xl font-bold md:mb-4 md:text-xl">
                TryHackMe - Cybersecurity Labs
              </h5>
              <p>
                Completed the Pentester Pathway and continuously practicing
                advanced cybersecurity labs and real-world challenges.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  onClick={() => {
                    const el = document.getElementById("THM-details");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  title="See Details"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="inline-flex items-center gap-1 whitespace-nowrap"
                >
                  See Details
                </Button>
              </div>
            </Card>
          </div>

          {/* BSc Degree */}
          <div className="relative">
            <Circle />
            <Card className="ml-12 flex flex-col p-6 md:ml-0 md:p-8">
              <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                2022 - 2025 May
              </h4>
              <h5 className="mb-3 text-xl font-bold md:mb-4 md:text-xl">
                BSc (Hons) in Computer Security
              </h5>
              <p>
                Plymouth University, UK — A comprehensive degree program
                covering penetration testing, malware analysis, network
                security, and digital forensics.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  onClick={() => {
                    const el = document.getElementById("Plymouth_University");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  title="See Details"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="inline-flex items-center gap-1 whitespace-nowrap"
                >
                  See Details
                </Button>
              </div>
            </Card>
          </div>

          {/* Foundation */}
          <div className="relative">
            <Circle />
            <Card className="ml-12 flex flex-col p-6 md:ml-0 md:p-8">
              <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                2021 - 2022
              </h4>
              <h5 className="mb-3 text-xl font-bold md:mb-4 md:text-xl">
                Foundation in Information Technology
              </h5>
              <p>
                Gained core knowledge in programming, mathematics, and computer
                systems — a stepping stone into the BSc program.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  onClick={() => {
                    const el = document.getElementById("NSBM_Green_University");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  title="See Details"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="inline-flex items-center gap-1 whitespace-nowrap"
                >
                  See Details
                </Button>
              </div>
            </Card>
          </div>

          {/* O/Ls */}
          <div className="relative">
            <Circle />
            <Card className="ml-12 flex flex-col p-6 md:ml-0 md:p-8">
              <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                2020
              </h4>
              <h5 className="mb-3 text-xl font-bold md:mb-4 md:text-xl">
                GCE Ordinary Level (O/L)
              </h5>
              <p>
                Successfully completed secondary education with strong results
                in ICT, Mathematics, and English.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
