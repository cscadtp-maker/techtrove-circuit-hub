import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

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
        {/* Club Logo Placeholder - will be replaced with actual logo */}
        <div className="mb-8 flex justify-center">
          <div className="px-6 py-3 card-gradient rounded-full border border-primary/30">
            <p className="text-sm font-semibold gradient-text">Cyber Circuit Club ADP Presents</p>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-effect">
          <span className="gradient-text">TechTrove 2.0</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
          Code, Collaborate, Conquer.
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the ultimate 24-hour hackathon challenge. Build innovative solutions, 
          compete for over <span className="text-accent font-bold">RM3,000</span> in prizes, 
          and showcase your skills alongside the brightest minds on campus.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <div className="flex items-center gap-3 card-gradient px-6 py-4 rounded-lg">
            <Calendar className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="font-semibold">Nov 1-2, 2025</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 card-gradient px-6 py-4 rounded-lg">
            <Clock className="w-5 h-5 text-secondary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-semibold">24 Hours</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 card-gradient px-6 py-4 rounded-lg">
            <MapPin className="w-5 h-5 text-accent" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Venue</p>
              <p className="font-semibold">LT 19 & LT 12</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToRegistration}
            className="text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Register Now - RM10
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
