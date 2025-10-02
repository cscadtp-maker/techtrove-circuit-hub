import { Card } from "@/components/ui/card";
import { Code, Palette, Lightbulb, Presentation, Award, Network } from "lucide-react";

const WhoShouldJoin = () => {
  const roles = [
    { icon: <Code className="w-8 h-8" />, title: "Coders & Developers", description: "Build the core functionality and bring ideas to life" },
    { icon: <Palette className="w-8 h-8" />, title: "Designers", description: "Create stunning and intuitive user interfaces" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Problem-Solvers", description: "Strategize and find innovative solutions" },
    { icon: <Presentation className="w-8 h-8" />, title: "Presenters & Visionaries", description: "Pitch the final product with passion and clarity" }
  ];

  const benefits = [
    { icon: <Award className="w-6 h-6" />, title: "High-Impact Portfolio Piece", description: "A fully developed project built under a tight deadline" },
    { icon: <Code className="w-6 h-6" />, title: "Real-World Experience", description: "Learn to ideate, build, and pitch in a fast-paced environment" },
    { icon: <Network className="w-6 h-6" />, title: "Valuable Connections", description: "Network with peers, mentors, and faculty" }
  ];

  return (
    <section id="participants" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who Should <span className="gradient-text">Join?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TechTrove 2.0 is for everyone who loves to create, regardless of your major
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roles.map((role, index) => (
            <Card key={index} className="card-gradient p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4 flex justify-center">{role.icon}</div>
              <h3 className="text-lg font-bold mb-2">{role.title}</h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </Card>
          ))}
        </div>

        <Card className="card-gradient p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">What You'll Gain</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-secondary flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              Plus, all participants will receive an <span className="text-accent font-semibold">official certificate of participation</span> from the ADP Cyber Circuit Club
            </p>
          </div>
        </Card>

        <Card className="card-gradient p-8 border-2 border-accent/30">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-accent" />
            Don't Have a Team?
          </h3>
          <p className="text-muted-foreground">
            No problem! We encourage you to register even if you're flying solo. Day 1 will kick off 
            with a dedicated team formation and networking session where you can connect with other 
            participants, share ideas, and form your dream team on the spot.
          </p>
        </Card>
      </div>
    </section>
  );
};

const Users = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default WhoShouldJoin;
