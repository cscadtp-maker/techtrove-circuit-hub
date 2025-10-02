import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Copy, ExternalLink, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentStepProps {
  paymentReference: string;
  onComplete: () => void;
}

const PaymentStep = ({ paymentReference, onComplete }: PaymentStepProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  // Payment details - Update these with your actual payment info
  const paymentDetails = {
    amount: "RM 10.00",
    // This would be your actual payment URL/info
    paymentUrl: `techtrove2025://pay/${paymentReference}`,
    accountNumber: "1234567890", // Replace with actual account
    accountName: "Cyber Circuit Club ADP",
    bankName: "Example Bank"
  };

  const copyReference = () => {
    navigator.clipboard.writeText(paymentReference);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Payment reference copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
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
          
          <div className="bg-white p-6 rounded-lg inline-block mb-6 shadow-lg">
            <QRCodeSVG
              value={paymentDetails.paymentUrl}
              size={250}
              level="H"
              includeMargin={true}
            />
          </div>

          <div className="space-y-3 text-left">
            <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
              <span className="text-sm text-muted-foreground">Amount:</span>
              <span className="font-bold text-accent text-xl">{paymentDetails.amount}</span>
            </div>
            
            <div className="p-3 bg-background/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Payment Reference:</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyReference}
                  className="h-6 px-2"
                >
                  {copied ? (
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <code className="text-xs font-mono text-primary block break-all">
                {paymentReference}
              </code>
            </div>
          </div>
        </Card>

        {/* Bank Transfer Details */}
        <Card className="card-gradient p-8 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h4 className="text-2xl font-bold mb-6">Bank Transfer Details</h4>
          
          <div className="space-y-4">
            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Bank Name</p>
              <p className="font-semibold text-lg">{paymentDetails.bankName}</p>
            </div>

            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Account Name</p>
              <p className="font-semibold text-lg">{paymentDetails.accountName}</p>
            </div>

            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-1">Account Number</p>
              <p className="font-semibold text-lg font-mono">{paymentDetails.accountNumber}</p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent/30">
              <p className="text-sm text-muted-foreground mb-1">Amount to Transfer</p>
              <p className="font-bold text-2xl text-accent">{paymentDetails.amount}</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
            <p className="text-xs text-muted-foreground mb-2">⚠️ Important:</p>
            <p className="text-sm">
              Include your payment reference <code className="text-primary font-mono text-xs">
                {paymentReference}
              </code> in the transfer description
            </p>
          </div>
        </Card>
      </div>

      <Card className="card-gradient p-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            💡 After making the payment, click below to complete your registration on Luma
          </p>
          <Button
            onClick={onComplete}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
          >
            I've Completed Payment - Continue to Luma
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-xs text-muted-foreground">
            Your spot will be confirmed once payment is verified
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PaymentStep;
