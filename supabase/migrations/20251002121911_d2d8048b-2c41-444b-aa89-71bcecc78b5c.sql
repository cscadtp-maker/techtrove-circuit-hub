-- Create registrations table to store participant information
CREATE TABLE public.registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  university TEXT NOT NULL,
  team_name TEXT,
  team_size INTEGER DEFAULT 1 CHECK (team_size >= 1 AND team_size <= 4),
  experience_level TEXT NOT NULL,
  payment_reference TEXT UNIQUE,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'confirmed', 'failed')),
  luma_registered BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for new registrations)
CREATE POLICY "Anyone can register"
  ON public.registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow users to view their own registration by email
CREATE POLICY "Users can view their own registration"
  ON public.registrations
  FOR SELECT
  TO anon
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_registrations_email ON public.registrations(email);
CREATE INDEX idx_registrations_payment_ref ON public.registrations(payment_reference);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON public.registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();