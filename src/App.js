import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About_Me from "./pages/about_me";
import Contact_Me from "./pages/contact_me";
import Certificates from "./pages/certificates";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About_Me />} />
        <Route path="/contactme" element={<Contact_Me />} />
        <Route path="/certifications" element={<Certificates />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
