import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Schedule = () => {
  const day1Schedule = [
    { time: "9:30 AM – 10:00 AM", event: "Registration & Team Formation" },
    { time: "10:00 AM – 10:30 AM", event: "Opening Ceremony & Welcome Remarks" },
    { time: "10:30 AM", event: "Problem Statement Reveal & Official Start" },
    { time: "10:30 AM – 1:00 PM", event: "Hacking Period 1 (Mentors available)" },
    { time: "1:00 PM – 2:00 PM", event: "Lunch Break" },
    { time: "2:00 PM – 5:00 PM", event: "Hacking Period 2 (On-site)" },
    { time: "5:00 PM", event: "Day 1 Concludes (Continue remotely overnight)" }
  ];

  const day2Schedule = [
    { time: "9:30 AM - 1:00 PM", event: "Final Hacking Period" },
    { time: "1:00 PM – 2:00 PM", event: "Lunch Break" },
    { time: "2:00 PM", event: "Project Submission Deadline (via GitHub)" },
    { time: "2:15 PM – 4:15 PM", event: "Final Presentations & Demonstrations" },
    { time: "4:15 PM – 4:45 PM", event: "Judging Deliberation & Networking Break" },
    { time: "4:45 PM – 5:15 PM", event: "Prize Giving & Closing Ceremony" },
    { time: "5:15 PM – 5:30 PM", event: "Group Photo Session" },
    { time: "5:30 PM", event: "Event Concludes" }
  ];

  return (
    <section id="schedule" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Event <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Two action-packed days of innovation and competition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Day 1 */}
          <Card className="card-gradient p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-2xl font-bold gradient-text">Day 1</h3>
                <p className="text-muted-foreground">Saturday, November 1st, 2025</p>
                <p className="text-sm text-accent">Venue: LT 19</p>
              </div>
            </div>
            <div className="space-y-4">
              {day1Schedule.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="text-sm font-mono text-secondary whitespace-nowrap">
                    {item.time}
                  </div>
                  <div className="text-sm text-foreground/90">{item.event}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Day 2 */}
          <Card className="card-gradient p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-secondary" />
              <div>
                <h3 className="text-2xl font-bold gradient-text">Day 2</h3>
                <p className="text-muted-foreground">Sunday, November 2nd, 2025</p>
                <p className="text-sm text-accent">Venue: LT 12</p>
              </div>
            </div>
            <div className="space-y-4">
              {day2Schedule.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="text-sm font-mono text-secondary whitespace-nowrap">
                    {item.time}
                  </div>
                  <div className="text-sm text-foreground/90">{item.event}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
