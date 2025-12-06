import Hero from "@/components/sections/Hero";
import Values from "@/components/sections/Values";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Values />
      <Experience />
      <Education />
      <Languages />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  );
}
