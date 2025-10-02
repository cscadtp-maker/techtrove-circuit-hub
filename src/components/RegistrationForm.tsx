import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

const registrationSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  university: z.string().min(2, "University name is required"),
  team_name: z.string().optional(),
  team_size: z.string(),
  experience_level: z.string()
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  onSuccess: (registrationId: string, paymentRef: string) => void;
}

const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      // Generate unique payment reference
      const paymentRef = `TT2025-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

      const { data: registration, error } = await supabase
        .from("registrations")
        .insert([
          {
            full_name: data.full_name,
            email: data.email,
            phone_number: data.phone_number,
            university: data.university,
            team_name: data.team_name || null,
            team_size: parseInt(data.team_size),
            experience_level: data.experience_level,
            payment_reference: paymentRef,
            payment_status: "pending",
          },
        ])
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Registration Submitted!",
        description: "Please proceed to payment",
      });

      onSuccess(registration.id, paymentRef);
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="card-gradient p-8 max-w-2xl mx-auto animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold mb-2 gradient-text">Register for TechTrove 2.0</h3>
        <p className="text-muted-foreground">Fill in your details to secure your spot</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Label htmlFor="full_name">Full Name *</Label>
          <Input
            id="full_name"
            {...register("full_name")}
            placeholder="John Doe"
            className="bg-background/50"
          />
          {errors.full_name && (
            <p className="text-sm text-destructive">{errors.full_name.message}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@university.edu"
              className="bg-background/50"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Label htmlFor="phone_number">Phone Number *</Label>
            <Input
              id="phone_number"
              {...register("phone_number")}
              placeholder="+60123456789"
              className="bg-background/50"
            />
            {errors.phone_number && (
              <p className="text-sm text-destructive">{errors.phone_number.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Label htmlFor="university">University/Institution *</Label>
          <Input
            id="university"
            {...register("university")}
            placeholder="Asia Pacific University"
            className="bg-background/50"
          />
          {errors.university && (
            <p className="text-sm text-destructive">{errors.university.message}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Label htmlFor="team_name">Team Name (Optional)</Label>
            <Input
              id="team_name"
              {...register("team_name")}
              placeholder="Code Ninjas"
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Label htmlFor="team_size">Team Size *</Label>
            <Select onValueChange={(value) => setValue("team_size", value)}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Solo (1 member)</SelectItem>
                <SelectItem value="2">2 members</SelectItem>
                <SelectItem value="3">3 members</SelectItem>
                <SelectItem value="4">4 members</SelectItem>
              </SelectContent>
            </Select>
            {errors.team_size && (
              <p className="text-sm text-destructive">{errors.team_size.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <Label htmlFor="experience_level">Experience Level *</Label>
          <Select onValueChange={(value) => setValue("experience_level", value)}>
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Select your experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
          {errors.experience_level && (
            <p className="text-sm text-destructive">{errors.experience_level.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Continue to Payment
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default RegistrationForm;
