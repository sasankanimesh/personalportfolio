import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl bg-white shadow-md ${className}`}>
      {children}
    </div>
  );
}
