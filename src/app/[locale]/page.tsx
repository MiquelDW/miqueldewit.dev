import Welcome from "@/components/Animations/Welcome";
import AboutSection from "@/components/Layout/AboutSection";
import HeroSection from "@/components/Layout/HeroSection";
import LatestWork from "@/components/Layout/LatestWork";



export default function Home() {
  return (
    <>
      <Welcome />
      <HeroSection />
      <AboutSection />
      <LatestWork />
    </>
  );
}
