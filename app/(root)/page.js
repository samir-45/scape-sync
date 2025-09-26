import FaqSection from "@/components/(root)/FaqSection";
import FeaturesSection from "@/components/(root)/FeaturesSection";
import Footer from "@/components/(root)/Footer";
import HeroSection from "@/components/(root)/HeroSection";
import NavBar from "@/components/(root)/NavBar";
import ProjectSection from "@/components/(root)/ProjectSection";
import ReviewsSection from "@/components/(root)/ReviewsSection";

export default function Home() {


  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <ProjectSection></ProjectSection>
      <ReviewsSection></ReviewsSection>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </div>
  );
}
