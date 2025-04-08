import Hero from "@/components/sections/Hero";
import "../styles/globals.css";
import SplitScreen from "@/components/sections/SplitScreen";
import HelpSection from "@/components/sections/HelpSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
   <Hero />
   <SplitScreen />
   <HelpSection />
   <ProjectShowcase />
    </main>
  );
}
