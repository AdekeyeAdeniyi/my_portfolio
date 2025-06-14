import ParticlesComponent from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/FooterSection";
import Services from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-montserrat)] w-full">
      <main>
        <div className="relative h-dvh px-8">
          <HeroSection />
          <ParticlesComponent />
        </div>

        <Services />
      </main>
      <Footer />
    </div>
  );
}
