import { Card } from "@/components/ui/card";
import { Lightbulb, Code2, TrendingUp } from "lucide-react";

const JudgingCriteria = () => {
  const criteria = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Concept & Innovation",
      weight: "40%",
      color: "text-primary",
      aspects: [
        { name: "Problem-Solution Fit", points: "1-10 points", description: "How well does the solution address the actual problem?" },
        { name: "Creativity & Originality", points: "1-10 points", description: "How innovative or novel is the approach?" },
        { name: "Impact & Usefulness", points: "1-10 points", description: "How meaningful is the impact of this solution?" }
      ]
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Technical Execution",
      weight: "30%",
      color: "text-secondary",
      aspects: [
        { name: "Functionality", points: "1-10 points", description: "How much of the core idea was successfully implemented?" },
        { name: "Technical Complexity", points: "1-10 points", description: "How technically challenging was the project?" },
        { name: "User Experience (UX) & Design", points: "1-10 points", description: "Is the application intuitive and well-designed?" }
      ]
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Feasibility & Future",
      weight: "30%",
      color: "text-accent",
      aspects: [
        { name: "Viability & Scalability", points: "1-10 points", description: "Could this project be developed further and deployed?" },
        { name: "Presentation & Pitch", points: "1-10 points", description: "How clearly did the team present their project?" }
      ]
    }
  ];

  return (
    <section id="judging" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Judging <span className="gradient-text">Criteria</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Projects will be evaluated based on three key pillars
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {criteria.map((criterion, index) => (
            <Card key={index} className="card-gradient p-8 hover:scale-105 transition-transform duration-300">
              <div className={`${criterion.color} mb-4`}>{criterion.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{criterion.title}</h3>
              <div className={`text-xl font-bold mb-6 ${criterion.color}`}>Weight: {criterion.weight}</div>
              
              <div className="space-y-4">
                {criterion.aspects.map((aspect, idx) => (
                  <div key={idx} className="border-l-2 border-border pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-sm">{aspect.name}</h4>
                      <span className="text-xs text-muted-foreground font-mono">{aspect.points}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{aspect.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgingCriteria;
