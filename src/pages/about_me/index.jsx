import React from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "./components/Header";
import { WhoAmI } from "./components/WhoAmI";
import { Academic_Backgroud } from "./components/Academic_Background";
import { Career_Interests } from "./components/Career_Interests";
import { My_Goals_and_Motivation } from "./components/My_Goals_&_Motivation";
import { Learning_Journey } from "./components/Learning_Journey";
import { Personal_Touch } from "./components/Personal_Touch";
import { Footer } from "../../components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhoAmI />
      <Academic_Backgroud />
      <Career_Interests />
      <My_Goals_and_Motivation />
      <Learning_Journey />
      <Personal_Touch />
      <Footer />
    </div>
  );
}
