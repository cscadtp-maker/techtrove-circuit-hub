import Hero from "@/components/Hero";
import EventOverview from "@/components/EventOverview";
import Schedule from "@/components/Schedule";
// import JudgingCriteria from "@/components/JudgingCriteria";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import Registration from "@/components/Registration";
// import ProjectSubmission from "@/components/ProjectSubmission";
import Footer from "@/components/Footer";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedShaderBackground />
      <Hero />
      <EventOverview />
      <Schedule />
      {/* Coming soon placeholder */}
      <section className="py-20 px-4 text-center" id="judging">
        <div className="max-w-3xl mx-auto card-gradient p-10 rounded-3xl border border-dashed border-primary/40">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Judging Criteria & Submissions</h2>
          <p className="text-muted-foreground text-lg">
            Detailed judging rubrics and the submission portal unlock on <strong>November 2nd, 9:00 AM</strong>. Watch Slack and email for the official go-live announcement from the Cyber Circuit Club team.
          </p>
        </div>
      </section>
      <WhoShouldJoin />
      <Prizes />
      <Rules />
      <Registration />
      {/* <ProjectSubmission /> */}
      <Footer />
    </div>
  );
};

export default Index;
