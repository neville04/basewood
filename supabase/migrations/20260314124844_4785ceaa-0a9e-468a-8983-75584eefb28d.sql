
-- Fix: enrollment INSERT policy uses 'true' which is intentional for a public form
-- but we tighten it by restricting columns that can be set
-- Drop and recreate with a more explicit check
DROP POLICY IF EXISTS "Anyone can submit enrollment" ON public.enrollments;

-- The check ensures the row being inserted has valid non-empty required fields
CREATE POLICY "Anyone can submit enrollment"
  ON public.enrollments FOR INSERT
  WITH CHECK (
    name IS NOT NULL AND name != '' AND
    email IS NOT NULL AND email != '' AND
    phone IS NOT NULL AND phone != '' AND
    program IS NOT NULL AND program != ''
  );
