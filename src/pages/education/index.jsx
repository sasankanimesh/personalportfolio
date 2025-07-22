import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Header } from "./components/Header";
import { Timeline } from "./components/Timeline";
import { THM1 } from "./components/THM1";
import THM_Navbar from "./components/THM_Navbar";
import { PU } from "./components/PU";
import { NSBM } from "./components/NSBM";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Timeline />
      <THM1 />
      <THM_Navbar />
      <PU />
      <NSBM />

      <Footer />
    </div>
  );
}
