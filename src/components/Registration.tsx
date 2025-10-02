import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import PaymentStep from "./PaymentStep";
import LumaIntegration from "./LumaIntegration";

const Registration = () => {
  const [step, setStep] = useState<"form" | "payment" | "luma">("form");
  const [registrationData, setRegistrationData] = useState<{
    id: string;
    paymentRef: string;
  } | null>(null);

  const handleFormSuccess = (id: string, paymentRef: string) => {
    setRegistrationData({ id, paymentRef });
    setStep("payment");
  };

  const handlePaymentComplete = () => {
    setStep("luma");
  };

  return (
    <section id="registration" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            {["Details", "Payment", "Luma"].map((label, index) => {
              const stepValue = index === 0 ? "form" : index === 1 ? "payment" : "luma";
              const isActive = step === stepValue;
              const isCompleted = 
                (step === "payment" && index === 0) ||
                (step === "luma" && index <= 1);

              return (
                <div key={label} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                        isCompleted
                          ? "bg-accent text-accent-foreground scale-110"
                          : isActive
                          ? "bg-primary text-primary-foreground scale-110 glow-effect"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? "✓" : index + 1}
                    </div>
                    <p
                      className={`mt-2 text-sm font-medium ${
                        isActive || isCompleted ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {label}
                    </p>
                  </div>
                  {index < 2 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                        isCompleted ? "bg-accent" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        {step === "form" && <RegistrationForm onSuccess={handleFormSuccess} />}
        {step === "payment" && registrationData && (
          <PaymentStep
            paymentReference={registrationData.paymentRef}
            onComplete={handlePaymentComplete}
          />
        )}
        {step === "luma" && <LumaIntegration />}
      </div>
    </section>
  );
};

export default Registration;
