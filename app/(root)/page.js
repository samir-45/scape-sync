import FeaturesSection from "@/components/(root)/FeaturesSection";
import HeroSection from "@/components/(root)/HeroSection";
import NavBar from "@/components/(root)/NavBar";
import ProjectSection from "@/components/(root)/ProjectSection";

export default function Home() {


  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <ProjectSection></ProjectSection>

      <h1 className="text-2xl font-bold">Dashboard</h1>

    </div>
  );
}
