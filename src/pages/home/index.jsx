import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Header } from "./components/Header";
import { Certificates } from "./components/Certificates";
import { Projects } from "./components/Projects";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
}
