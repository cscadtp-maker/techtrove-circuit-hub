import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import boltLogo from "@/assets/bolt-logo.png";

const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Club Logo with Bolt Collaboration */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="px-6 py-3 card-gradient rounded-full border border-primary/30 hover:scale-105 transition-transform duration-300">
            <p className="text-sm font-semibold gradient-text flex items-center gap-2">
              Cyber Circuit Club ADP <span className="text-muted-foreground">×</span> 
              <img src={boltLogo} alt="Bolt" className="h-5 inline-block" />
            </p>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-effect animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.2s" }}>
          <span className="gradient-text">TechTrove 2.0</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Code, Collaborate, Conquer.
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Join the ultimate 24-hour hackathon challenge. Build innovative solutions, 
          compete for over <span className="text-accent font-bold animate-pulse">RM3,000</span> in prizes, 
          and showcase your skills alongside the brightest minds on campus.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-3 card-gradient px-6 py-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:border-primary/50">
            <Calendar className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="font-semibold">Nov 1-2, 2025</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 card-gradient px-6 py-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:border-secondary/50">
            <Clock className="w-5 h-5 text-secondary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-semibold">24 Hours</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 card-gradient px-6 py-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:border-accent/50">
            <MapPin className="w-5 h-5 text-accent" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Venue</p>
              <p className="font-semibold">LT 19 & LT 12</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            onClick={scrollToRegistration}
            className="text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 glow-effect"
          >
            Register Now - RM10
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
