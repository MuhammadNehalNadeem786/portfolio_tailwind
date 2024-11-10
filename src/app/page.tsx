import { Navbar } from "./components/Navbar";
import AboutMe from "./components/page-components/AboutMe";
import ContactSection from "./components/page-components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/page-components/Hero";
import ProjectsShowcase from "./components/page-components/Project";

export default function Page() {
  return (
    <main>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <ProjectsShowcase />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
