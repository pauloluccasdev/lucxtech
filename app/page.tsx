import HeroGlow from "@/components/HeroGlow";
import Problem from "@/components/Problem";
import Reflection from "@/components/Reflection";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroGlow />
      <Problem />
      <Reflection />
      <Process />
      <Services />
      <Projects />
      <About />
      <FinalCTA />
      <Footer />
    </>
  );
}
