import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ExternalLink } from "lucide-react";

const LumaIntegration = () => {
  useEffect(() => {
    // Load Luma checkout script
    const script = document.createElement('script');
    script.id = 'luma-checkout';
    script.src = 'https://embed.lu.ma/checkout-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('luma-checkout');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center">
        <div className="inline-block p-4 bg-accent/20 rounded-full mb-6">
          <CheckCircle2 className="w-16 h-16 text-accent" />
        </div>
        <h3 className="text-4xl font-bold mb-4 gradient-text">Almost There!</h3>
        <p className="text-lg text-muted-foreground">
          Complete your registration on Luma to secure your spot
        </p>
      </div>

      <Card className="card-gradient p-8 hover:scale-105 transition-transform duration-300">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold">Final Step: Luma Registration</h4>
            <p className="text-muted-foreground">
              Click the button below to complete your event registration on Luma
            </p>
          </div>

          <div className="py-4">
            <a 
              href="https://lu.ma/event/evt-bZ1oCb9cFhDK3BN" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg bg-gradient-primary hover:opacity-90 transition-opacity text-xl font-semibold shadow-lg glow-effect"
              data-luma-action="checkout"
              data-luma-event-id="evt-bZ1oCb9cFhDK3BN"
            >
              Complete Registration on Luma
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          <div className="border border-border rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://lu.ma/embed/event/evt-bZ1oCb9cFhDK3BN/simple" 
              width="100%" 
              height="500" 
              frameBorder="0"
              style={{ border: 'none' }}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex={0}
              className="w-full"
            />
          </div>
        </div>
      </Card>

      <Card className="card-gradient p-6 border-accent/30">
        <div className="space-y-3">
          <h5 className="font-bold text-accent">What happens next?</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span>
              <span>Complete your Luma registration with the same email you provided</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span>
              <span>We'll verify your payment within 24 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span>
              <span>You'll receive a confirmation email with event details</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span>
              <span>Join us on November 1st at 9:30 AM!</span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default LumaIntegration;
