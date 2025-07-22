"use client";

import React, { useState } from "react";
import { THM_Pathway1 } from "./THM_Pathway1";
import { THM_Pathway2 } from "./THM_Pathway2";
import { THM_Certificates } from "./THM_Certificates";
import { THM_Badges } from "./THM_Badges";
import { THM_Challenges } from "./THM_Challenges";

export default function THM_Navbar() {
  const tabs = [
    { id: "tryhackmepathway", label: "Completed Learning " },
    { id: "certificates", label: "Certificates" },
    { id: "badges", label: "Badges" },
    { id: "challenges", label: "Challenges" },
  ];

  const [activeTab, setActiveTab] = useState("tryhackmepathway");

  const renderContent = () => {
    switch (activeTab) {
      case "tryhackmepathway":
        return (
          <div>
            <THM_Pathway1 />
            <THM_Pathway2 />
          </div>
        );
      case "certificates":
        return (
          <div>
            <THM_Certificates />
          </div>
        );
      case "badges":
        return (
          <div>
            <THM_Badges />
          </div>
        );
      case "challenges":
        return (
          <div>
            <THM_Challenges />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black px-[5%] py-10">
      {/* Horizontal Tabs */}
      <div className="flex space-x-4 border-b border-gray-300 pb-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 text-sm md:text-base rounded-t-md transition-all duration-200 font-semibold
              ${
                activeTab === tab.id
                  ? "bg-[#00cc44] text-black shadow"
                  : "text-white hover:bg-[#009933]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-xl shadow">{renderContent()}</div>
    </div>
  );
}
