import Hero from "@/components/Hero";
import EventOverview from "@/components/EventOverview";
import Schedule from "@/components/Schedule";
import JudgingCriteria from "@/components/JudgingCriteria";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import Registration from "@/components/Registration";
import ProjectSubmission from "@/components/ProjectSubmission";
import Footer from "@/components/Footer";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedShaderBackground />
      <Hero />
      <EventOverview />
      <Schedule />
      <JudgingCriteria />
      <WhoShouldJoin />
      <Prizes />
      <Rules />
      <Registration />
      <ProjectSubmission />
      <Footer />
    </div>
  );
};

export default Index;
