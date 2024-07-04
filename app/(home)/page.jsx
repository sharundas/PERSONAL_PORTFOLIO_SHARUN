

import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-black bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2]">
     
    <Navbar />
    <HeroSection />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </main>
  );
}
