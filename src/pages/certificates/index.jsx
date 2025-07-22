import React from "react";
import { Navbar } from "../../components/Navbar";
import { Certificates } from "./components/Certificates";
import { Footer } from "../../components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Certificates />
      <Footer />
    </div>
  );
}
