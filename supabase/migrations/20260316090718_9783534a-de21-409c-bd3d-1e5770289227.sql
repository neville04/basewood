
ALTER TABLE public.news_posts
  ADD COLUMN IF NOT EXISTS author text,
  ADD COLUMN IF NOT EXISTS summary text;
