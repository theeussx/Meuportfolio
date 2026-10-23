import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Certificates from "@/components/Certificates";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Hero />
      <Projects />
      <Technologies />
      <Certificates />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
