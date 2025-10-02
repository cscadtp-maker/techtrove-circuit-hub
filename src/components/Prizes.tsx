import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

const Prizes = () => {
  const prizes = [
    {
      icon: <Trophy className="w-16 h-16" />,
      rank: "1st Place",
      color: "text-yellow-400",
      borderColor: "border-yellow-400/50",
      bgGlow: "bg-yellow-400/10"
    },
    {
      icon: <Medal className="w-16 h-16" />,
      rank: "2nd Place",
      color: "text-slate-300",
      borderColor: "border-slate-300/50",
      bgGlow: "bg-slate-300/10"
    },
    {
      icon: <Award className="w-16 h-16" />,
      rank: "3rd Place",
      color: "text-amber-600",
      borderColor: "border-amber-600/50",
      bgGlow: "bg-amber-600/10"
    }
  ];

  return (
    <section id="prizes" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prizes & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Over RM3,000 in prize money to be won!
          </p>
          <div className="inline-block px-6 py-3 card-gradient rounded-full border border-accent/30">
            <p className="text-2xl font-bold gradient-text">RM3,000+ Prize Pool</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, index) => (
            <Card 
              key={index} 
              className={`card-gradient p-8 text-center hover:scale-105 transition-transform duration-300 border-2 ${prize.borderColor} ${prize.bgGlow}`}
            >
              <div className={`${prize.color} flex justify-center mb-4`}>
                {prize.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${prize.color}`}>{prize.rank}</h3>
              <div className="text-3xl font-bold mb-2">🏆</div>
              <p className="text-sm text-muted-foreground">Prize money + Recognition</p>
            </Card>
          ))}
        </div>

        <Card className="card-gradient p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Beyond the Prize Money</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Portfolio Boost:</span> A complete project built under pressure
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Experience:</span> Real-world problem-solving skills
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Networking:</span> Connect with peers and mentors
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Certificate:</span> Official recognition from Cyber Circuit Club
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Prizes;
