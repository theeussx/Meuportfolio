import { useState } from "react";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact, { type QuotePreset } from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SiteHeader from "@/components/SiteHeader";
import Technologies from "@/components/Technologies";

export default function Home() {
  const [preset, setPreset] = useState<QuotePreset | null>(null);
  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Projects />
        <Services onRequest={service => setPreset({ service })} />
        <Technologies />
        <Certificates />
        <About />
        <Contact preset={preset} />
      </main>
      <Footer />
    </>
  );
}
