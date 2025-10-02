import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

const Rules = () => {
  const rules = [
    {
      title: "Fresh Code",
      description: "All projects must be built from scratch during the hackathon. Using pre-existing personal projects is not allowed. The use of open-source libraries and frameworks is encouraged."
    },
    {
      title: "Team Size",
      description: "Teams must consist of 1 to 4 members."
    },
    {
      title: "AI Tool Usage",
      description: "The responsible use of AI tools for code generation or ideation is permitted, but teams must be prepared to explain and defend their entire project. The core logic should be your own."
    },
    {
      title: "Code of Conduct",
      description: "All participants must adhere to a code of conduct promoting a respectful, collaborative, and harassment-free environment for everyone."
    },
    {
      title: "Submission",
      description: "All final projects must be submitted to the designated GitHub repository by the deadline on Day 2 (2:00 PM)."
    }
  ];

  return (
    <section id="rules" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rules & <span className="gradient-text">Guidelines</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            To ensure a fair and exciting competition, please follow these rules
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {rules.map((rule, index) => (
            <Card key={index} className="card-gradient p-6 hover:border-primary/50 transition-colors">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="card-gradient p-8 border-2 border-primary/30">
          <div className="flex gap-4">
            <AlertCircle className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-4">Important Reminders</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Registration fee is <span className="text-accent font-semibold">RM10 per person</span></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Teams can work remotely overnight between Day 1 and Day 2</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Mentors will be available during on-site hacking periods</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Final presentations are mandatory for all teams</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Any technology stack is allowed for your project</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Rules;
