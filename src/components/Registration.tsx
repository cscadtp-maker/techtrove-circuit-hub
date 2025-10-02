import { Card } from "@/components/ui/card";
import { QrCode, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const Registration = () => {
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
    <section id="registration" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Register <span className="gradient-text">Now</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Secure your spot for TechTrove 2.0
          </p>
          <p className="text-3xl font-bold gradient-text">
            RM10 per person
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Payment QR Section */}
          <Card className="card-gradient p-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <QrCode className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 1: Make Payment</h3>
              <p className="text-muted-foreground mb-6">
                Scan the QR code below to pay RM10 registration fee
              </p>
              
              {/* QR Code Placeholder - replace with actual QR code image */}
              <div className="bg-background/50 border-2 border-dashed border-border rounded-lg p-8 mb-4 flex items-center justify-center">
                <div className="text-center">
                  <QrCode className="w-48 h-48 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Payment QR Code
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    (Upload your payment QR code here)
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <p>💡 Save your payment confirmation screenshot</p>
                <p>📱 Keep your transaction reference number</p>
              </div>
            </div>
          </Card>

          {/* Luma Registration Section */}
          <Card className="card-gradient p-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <ExternalLink className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 2: Complete Registration</h3>
              <p className="text-muted-foreground mb-6">
                After payment, register your details on Luma
              </p>
              
              <div className="mb-6">
                <a 
                  href="https://lu.ma/event/evt-bZ1oCb9cFhDK3BN" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary hover:opacity-90 transition-opacity text-lg font-semibold"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-bZ1oCb9cFhDK3BN"
                >
                  Register on Luma
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="border border-border rounded-lg overflow-hidden">
                <iframe 
                  src="https://lu.ma/embed/event/evt-bZ1oCb9cFhDK3BN/simple" 
                  width="100%" 
                  height="450" 
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
        </div>

        <Card className="card-gradient p-6 mt-8 max-w-3xl mx-auto border-accent/30">
          <div className="text-center">
            <h4 className="font-bold mb-2 text-accent">Registration Process</h4>
            <p className="text-sm text-muted-foreground">
              1. Make payment via QR code (RM10) → 2. Complete registration on Luma → 3. Check your email for confirmation → 4. Join us on Nov 1st!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Registration;
