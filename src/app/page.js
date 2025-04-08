import Hero from "@/components/sections/Hero";
import "../styles/globals.css";
import SplitScreen from "@/components/sections/SplitScreen";
import HelpSection from "@/components/sections/HelpSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import InteriorDesignSection from "@/components/sections/InteriorDesignSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
   <Hero />
   <InteriorDesignSection />
   <SplitScreen />
   <HelpSection />
   <TestimonialSection />
   <ProjectShowcase />
    </main>
  );
}
