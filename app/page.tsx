import HeroGlow from "@/components/HeroGlow";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Differentials from "@/components/Differentials";
import Band from "@/components/Band";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroGlow />
      <Clients />
      <About />
      <Services />
      <Projects />
      <Differentials />
      <Band />
      <FinalCTA />
      <Footer />
    </>
  );
}
