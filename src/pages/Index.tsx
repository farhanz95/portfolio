import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingContact } from "@/components/FloatingContact";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Accomplishments } from "@/components/sections/Accomplishments";
import { TechStack } from "@/components/sections/TechStack";
import { WhyMe } from "@/components/sections/WhyMe";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Timeline />
        <Accomplishments />
        <TechStack />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
