import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Projects } from "./components/Projects";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
