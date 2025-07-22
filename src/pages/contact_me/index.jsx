import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Contact } from "./components/Content";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
