import HeroGlow from "@/components/HeroGlow";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroGlow />
      <About />
      <Services />
      <Projects />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
