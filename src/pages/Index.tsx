import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { InterviewPreview } from "@/components/sections/InterviewPreview";
import { CoursesPreview } from "@/components/sections/CoursesPreview";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <InterviewPreview />
      <CoursesPreview />
      <Footer />
    </div>
  );
};

export default Index;
