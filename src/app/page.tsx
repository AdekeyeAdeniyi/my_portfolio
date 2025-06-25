import ParticlesComponent from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-montserrat)] w-full">
      <div className="py-8 sm:py-0 relative lg:h-[90dvh] px-8">
        <HeroSection />
        <ParticlesComponent />
      </div>

      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
