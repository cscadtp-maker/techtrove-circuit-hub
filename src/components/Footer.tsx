import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">TechTrove 2.0</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The ADP Cyber Circuit Club's flagship hackathon event. Code, Collaborate, Conquer.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Event</a></li>
              <li><a href="#schedule" className="hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#judging" className="hover:text-primary transition-colors">Judging Criteria</a></li>
              <li><a href="#prizes" className="hover:text-primary transition-colors">Prizes</a></li>
              <li><a href="#rules" className="hover:text-primary transition-colors">Rules</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Event Details</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📅 November 1-2, 2025</li>
              <li>📍 LT 19 & LT 12</li>
              <li>💰 RM10 per person</li>
              <li>🏆 RM3,000+ prizes</li>
              <li>👥 Teams of 1-4 members</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Cyber Circuit Club ADP. All rights reserved.</p>
          <p className="mt-2">Built with 💜 for the hackathon community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
