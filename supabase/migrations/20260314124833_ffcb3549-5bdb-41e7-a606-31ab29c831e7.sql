
-- ============================================================
-- 1. NEWS POSTS TABLE
-- ============================================================
CREATE TABLE public.news_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('article', 'blog', 'announcement')),
  body TEXT,
  media_url TEXT,
  media_type TEXT CHECK (media_type IN ('image', 'video')),
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.news_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published news posts"
  ON public.news_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Admins can manage news posts"
  ON public.news_posts FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ============================================================
-- 2. ENROLLMENTS TABLE
-- ============================================================
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  program TEXT NOT NULL,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit enrollment"
  ON public.enrollments FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can read enrollments"
  ON public.enrollments FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can delete enrollments"
  ON public.enrollments FOR DELETE
  USING (auth.role() = 'authenticated');

-- ============================================================
-- 3. STORAGE BUCKET FOR NEWS MEDIA
-- ============================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('news-media', 'news-media', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can view news media"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'news-media');

CREATE POLICY "Admins can upload news media"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'news-media' AND auth.role() = 'authenticated');

CREATE POLICY "Admins can update news media"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'news-media' AND auth.role() = 'authenticated');

CREATE POLICY "Admins can delete news media"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'news-media' AND auth.role() = 'authenticated');

-- ============================================================
-- 4. AUTO-UPDATE updated_at
-- ============================================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_news_posts_updated_at
  BEFORE UPDATE ON public.news_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================================
-- 5. SEED SAMPLE NEWS POSTS
-- ============================================================
INSERT INTO public.news_posts (title, category, body, published) VALUES
  ('Basewood Institute Partners with ACCA for 2026 Intake', 'announcement', 'We are proud to announce a renewed partnership with ACCA for the 2026 academic year, offering students access to world-class resources and mentorship.', true),
  ('How CPA Uganda is Transforming Finance Careers', 'article', 'Uganda''s accounting profession is undergoing a renaissance. CPA Uganda graduates are now leading finance departments across East Africa.', true),
  ('Student Success Story: From Intern to CFO in 4 Years', 'blog', 'Meet Esther Namukasa, a Basewood alumni who climbed the corporate ladder faster than anyone expected.', true);
