import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle2, Upload, Github } from "lucide-react";

const projectSchema = z.object({
  team_name: z.string().min(2, "Team name must be at least 2 characters"),
  project_title: z.string().min(3, "Project title must be at least 3 characters"),
  project_description: z.string().min(50, "Description must be at least 50 characters"),
  github_url: z.string().url("Must be a valid GitHub URL").includes("github.com", { message: "Must be a GitHub URL" }),
  demo_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  tech_stack: z.string().min(3, "Please list at least one technology"),
  problem_statement: z.string().min(10, "Please describe the problem you're solving")
});

type ProjectFormData = z.infer<typeof projectSchema>;

const ProjectSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    try {
      const techStackArray = data.tech_stack.split(',').map(tech => tech.trim());

      const { error } = await supabase
        .from("projects")
        .insert([
          {
            team_name: data.team_name,
            project_title: data.project_title,
            project_description: data.project_description,
            github_url: data.github_url,
            demo_url: data.demo_url || null,
            tech_stack: techStackArray,
            problem_statement: data.problem_statement,
          },
        ]);

      if (error) throw error;

      toast({
        title: "Project Submitted Successfully! 🎉",
        description: "Your project has been submitted for judging. Good luck!",
      });

      setSubmitted(true);
      reset();
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="submit" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient p-12 text-center animate-fade-in">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center glow-effect">
                <CheckCircle2 className="w-12 h-12 text-accent" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 gradient-text">Project Submitted! 🎉</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Your project has been successfully submitted for judging. Our judges will review it soon.
            </p>
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm">Check your email for submission confirmation</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm">Ensure your GitHub repository is public</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm">Prepare your presentation for Day 2</p>
              </div>
            </div>
            <Button
              onClick={() => setSubmitted(false)}
              className="mt-8 bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Submit Another Project
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="submit" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-4 rounded-full bg-primary/20 mb-6">
            <Upload className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Submit Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to showcase your hard work? Submit your project before the deadline on Day 2 at 2:00 PM
          </p>
        </div>

        <Card className="card-gradient p-8 md:p-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="team_name">Team Name *</Label>
              <Input
                id="team_name"
                {...register("team_name")}
                placeholder="Code Ninjas"
                className="bg-background/50"
              />
              {errors.team_name && (
                <p className="text-sm text-destructive">{errors.team_name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="project_title">Project Title *</Label>
              <Input
                id="project_title"
                {...register("project_title")}
                placeholder="AI-Powered Task Manager"
                className="bg-background/50"
              />
              {errors.project_title && (
                <p className="text-sm text-destructive">{errors.project_title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem_statement">Problem Statement *</Label>
              <Textarea
                id="problem_statement"
                {...register("problem_statement")}
                placeholder="Describe the problem your project solves..."
                className="bg-background/50 min-h-[100px]"
              />
              {errors.problem_statement && (
                <p className="text-sm text-destructive">{errors.problem_statement.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="project_description">Project Description *</Label>
              <Textarea
                id="project_description"
                {...register("project_description")}
                placeholder="Provide a detailed description of your project, features, and how it works..."
                className="bg-background/50 min-h-[150px]"
              />
              {errors.project_description && (
                <p className="text-sm text-destructive">{errors.project_description.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="github_url" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Repository URL *
                </Label>
                <Input
                  id="github_url"
                  {...register("github_url")}
                  placeholder="https://github.com/username/project"
                  className="bg-background/50"
                />
                {errors.github_url && (
                  <p className="text-sm text-destructive">{errors.github_url.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo_url">Live Demo URL (Optional)</Label>
                <Input
                  id="demo_url"
                  {...register("demo_url")}
                  placeholder="https://your-demo.com"
                  className="bg-background/50"
                />
                {errors.demo_url && (
                  <p className="text-sm text-destructive">{errors.demo_url.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tech_stack">Tech Stack *</Label>
              <Input
                id="tech_stack"
                {...register("tech_stack")}
                placeholder="React, Node.js, MongoDB, TailwindCSS (comma separated)"
                className="bg-background/50"
              />
              <p className="text-xs text-muted-foreground">Separate technologies with commas</p>
              {errors.tech_stack && (
                <p className="text-sm text-destructive">{errors.tech_stack.message}</p>
              )}
            </div>

            <div className="pt-6 border-t border-border">
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2 text-primary">Submission Checklist:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ GitHub repository is public</li>
                  <li>✓ README.md includes setup instructions</li>
                  <li>✓ Code is properly documented</li>
                  <li>✓ All team members are credited</li>
                </ul>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting Project...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-5 w-5" />
                    Submit Project
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ProjectSubmission;
