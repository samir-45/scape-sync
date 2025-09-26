import FeaturesSection from "@/components/(root)/FeaturesSection";
import HeroSection from "@/components/(root)/HeroSection";
import NavBar from "@/components/(root)/NavBar";

export default function Home() {


  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>

      <h1 className="text-2xl font-bold">Dashboard</h1>

    </div>
  );
}
