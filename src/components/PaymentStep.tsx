import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface PaymentStepProps {
  onComplete: () => void;
}

const PaymentStep = ({ onComplete }: PaymentStepProps) => {
  const [consentChecked, setConsentChecked] = useState(false);
  
  // Payment details
  const paymentDetails = {
    amount: "RM 10.00",
    recipient: "THANT MIN HTET",
    wallet: "Touch 'n Go eWallet",
    note: "Use the QR below via Touch 'n Go or your preferred banking app. Keep your payment receipt ready in case the Cyber Circuit Club team requests proof."
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center animate-fade-in">
        <h3 className="text-4xl font-bold mb-4 gradient-text">Complete Your Payment</h3>
        <p className="text-lg text-muted-foreground">
          Scan the QR code or transfer to the account below
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* QR Code Section */}
        <Card className="card-gradient p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h4 className="text-2xl font-bold mb-6">Scan to Pay</h4>

          <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-lg">
            <img
              src="/tng-real.jpg"
              alt="Touch 'n Go eWallet QR"
              className="w-[260px] h-auto rounded-xl object-contain"
            />
          </div>

          <div className="space-y-3 text-left">
            <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
              <span className="text-sm text-muted-foreground">Amount:</span>
              <span className="font-bold text-accent text-xl">{paymentDetails.amount}</span>
            </div>
            
          </div>
        </Card>

        {/* Bank Transfer Details */}
        <Card className="card-gradient p-8 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h4 className="text-2xl font-bold mb-6">Payment Details</h4>

          <div className="space-y-4 text-left">
            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Wallet</p>
              <p className="font-semibold text-lg">{paymentDetails.wallet}</p>
            </div>

            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Recipient</p>
              <p className="font-semibold text-lg">{paymentDetails.recipient}</p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent/30">
              <p className="text-sm text-muted-foreground mb-1">Amount</p>
              <p className="font-bold text-2xl text-accent">{paymentDetails.amount}</p>
            </div>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
              <p className="text-xs text-muted-foreground mb-2">⚠️ Important:</p>
              <p className="text-sm leading-relaxed">
                {paymentDetails.note}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="card-gradient p-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            💡 After making the payment, confirm below and proceed to complete your registration on Luma.
          </p>

          <label className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/40 p-4 text-left">
            <Checkbox
              id="payment-consent"
              checked={consentChecked}
              onCheckedChange={(checked) => setConsentChecked(Boolean(checked))}
              className="mt-1"
            />
            <span className="text-sm text-muted-foreground">
              I confirm that I have paid RM10 to THANT MIN HTET via Touch 'n Go eWallet and understand my registration will be approved after the Cyber Circuit Club team verifies the payment.
            </span>
          </label>

          <div className="text-center">
            <Button
              onClick={onComplete}
              size="lg"
              disabled={!consentChecked}
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 disabled:opacity-40"
            >
              I've Completed Payment - Continue to Luma
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Your spot will be confirmed once payment is verified
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentStep;
