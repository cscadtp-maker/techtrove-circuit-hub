import { Users, Trophy, Zap, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const EventOverview = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "24-Hour Challenge",
      description: "Build a working prototype from scratch in an intense coding sprint"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Competition",
      description: "Form teams of up to 4 members and collaborate to create magic"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "RM3,000+ Prizes",
      description: "Top three teams will be rewarded for their outstanding work"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-World Impact",
      description: "Solve meaningful problems and build portfolio-worthy projects"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">TechTrove 2.0?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TechTrove 2.0 is the ADP Cyber Circuit Club's flagship competitive event—a 2-day, 
            24-hour hackathon that challenges the brightest minds on campus to build a working 
            prototype from scratch. This intense event is designed to foster innovation, test 
            real-world problem-solving skills, and celebrate the spirit of creation under pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="card-gradient p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm">{highlight.description}</p>
            </Card>
          ))}
        </div>

        <Card className="card-gradient p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">The Challenge</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            On the morning of Day 1, all teams will be presented with a set of real-world problem 
            statements. Your challenge is to choose one and, over the next 24 hours, develop a 
            functional technical solution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Teams are allowed to use any technology they wish, but the project must be built from 
            scratch during the event. While teams will work remotely overnight, the on-site sessions 
            are crucial for collaboration, mentorship, and final preparations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At the end of the event, each team must submit their project via GitHub for judging.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default EventOverview;
