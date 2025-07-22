"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

export function Card({ className = "", children }) {
  return <div className={` bg-white shadow-md ${className}`}>{children}</div>;
}

export function THM_Certificates() {
  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container ">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
            Completed Certifications
          </h1>
        </div>
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2 max-h-[350px] overflow-hidden mb-5">
          <div className="flex flex-col justify-center p-4 md:p-6">
            <div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl lg:text-4xl">
                SOC Level 1
              </h2>
              <p className="md:text-md">Certificate of completion</p>
              <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-0DDLDASVSB.pdf">
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button
                    title="Button"
                    variant="primary"
                    className="bg-black text-white"
                  >
                    View Certificate
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/assets/education/TryHackMe/Certificates/SOC L1.jpeg"
              alt="Certificate image"
              className="max-w-full max-h-60 object-contain"
            />
          </div>
        </Card>
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2 max-h-[350px] overflow-hidden mb-5">
          <div className="flex flex-col justify-center p-4 md:p-6">
            <div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl lg:text-4xl">
                Red Teaming
              </h2>
              <p className="md:text-md">Certificate of completion</p>
              <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-FJCAPAG3L8.pdf">
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button
                    title="Button"
                    variant="primary"
                    className="bg-black text-white"
                  >
                    View Certificate
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/assets/education/TryHackMe/Certificates/Red Teaming.jpeg"
              alt="Certificate image"
              className="max-w-full max-h-60 object-contain"
            />
          </div>
        </Card>
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2 max-h-[350px] overflow-hidden mb-5">
          <div className="flex flex-col justify-center p-4 md:p-6">
            <div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl lg:text-4xl">
                Jr Penetration Tester
              </h2>
              <p className="md:text-md">Certificate of completion</p>
              <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-HD2QZNKIOE.pdf">
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button
                    title="Button"
                    variant="primary"
                    className="bg-black text-white"
                  >
                    View Certificate
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/assets/education/TryHackMe/Certificates/Jr Pentester.jpeg"
              alt="Certificate image"
              className="max-w-full max-h-60 object-contain"
            />
          </div>
        </Card>
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2 max-h-[350px] overflow-hidden mb-5">
          <div className="flex flex-col justify-center p-4 md:p-6">
            <div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl lg:text-4xl">
                Web Fundamentals
              </h2>
              <p className="md:text-md">Certificate of completion</p>
              <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-TLEHBEQUWW.pdf">
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button
                    title="Button"
                    variant="primary"
                    className="bg-black text-white"
                  >
                    View Certificate
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/assets/education/TryHackMe/Certificates/Web Fundamentals.jpeg"
              alt="Certificate image"
              className="max-w-full max-h-60 object-contain"
            />
          </div>
        </Card>
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2 max-h-[350px] overflow-hidden mb-5">
          <div className="flex flex-col justify-center p-4 md:p-6">
            <div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl lg:text-4xl">
                Complete Beginner
              </h2>
              <p className="md:text-md">Certificate of completion</p>
              <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-T79ZT2XNYQ.pdf">
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button
                    title="Button"
                    variant="primary"
                    className="bg-black text-white"
                  >
                    View Certificate
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/assets/education/TryHackMe/Certificates/Complete Beginner.jpeg"
              alt="Certificate image"
              className="max-w-full max-h-60 object-contain"
            />
          </div>
        </Card>
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2 max-h-[350px] overflow-hidden mb-5">
          <div className="flex flex-col justify-center p-4 md:p-6">
            <div>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl lg:text-4xl">
                Introduction to Cyber Security
              </h2>
              <p className="md:text-md">Certificate of completion</p>
              <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-XNYQOA8HIG.pdf">
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button
                    title="Button"
                    variant="primary"
                    className="bg-black text-white"
                  >
                    View Certificate
                  </Button>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/assets/education/TryHackMe/Certificates/Intro to CSec.jpeg"
              alt="Certificate image"
              className="max-w-full max-h-60 object-contain"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
