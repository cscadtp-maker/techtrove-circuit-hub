import Hero from "@/components/Hero";
import EventOverview from "@/components/EventOverview";
import Schedule from "@/components/Schedule";
import JudgingCriteria from "@/components/JudgingCriteria";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventOverview />
      <Schedule />
      <JudgingCriteria />
      <WhoShouldJoin />
      <Prizes />
      <Rules />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
