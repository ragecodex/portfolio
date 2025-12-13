import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Education />
        <Languages />
      </main>
      <Footer />
    </>
  );
}
