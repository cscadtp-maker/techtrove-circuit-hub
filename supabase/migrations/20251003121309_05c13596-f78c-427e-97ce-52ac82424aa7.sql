-- Create projects submission table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id UUID REFERENCES public.registrations(id) ON DELETE CASCADE,
  team_name TEXT NOT NULL,
  project_title TEXT NOT NULL,
  project_description TEXT NOT NULL,
  github_url TEXT NOT NULL,
  demo_url TEXT,
  tech_stack TEXT[],
  problem_statement TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for project submissions
CREATE POLICY "Anyone can view submitted projects" 
ON public.projects 
FOR SELECT 
USING (true);

CREATE POLICY "Registered users can submit projects" 
ON public.projects 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Teams can update their own projects" 
ON public.projects 
FOR UPDATE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster lookups
CREATE INDEX idx_projects_registration_id ON public.projects(registration_id);
CREATE INDEX idx_projects_submitted_at ON public.projects(submitted_at DESC);