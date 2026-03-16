
-- Fix enrollments: allow anon to read and delete (admin uses session-based auth, not Supabase Auth)
DROP POLICY IF EXISTS "Admins can read enrollments" ON public.enrollments;
DROP POLICY IF EXISTS "Admins can delete enrollments" ON public.enrollments;

CREATE POLICY "Anyone can read enrollments"
  ON public.enrollments FOR SELECT
  USING (true);

CREATE POLICY "Anyone can delete enrollments"
  ON public.enrollments FOR DELETE
  USING (true);

-- Fix news_posts: allow anon to insert, update, delete (admin session-based auth)
DROP POLICY IF EXISTS "Admins can manage news posts" ON public.news_posts;

CREATE POLICY "Anyone can manage news posts"
  ON public.news_posts FOR ALL
  USING (true)
  WITH CHECK (true);

-- Fix storage: allow anon to upload, update, delete in news-media bucket
DROP POLICY IF EXISTS "Admins can upload news media" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update news media" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete news media" ON storage.objects;
DROP POLICY IF EXISTS "Public can read news-media" ON storage.objects;

CREATE POLICY "Anyone can upload to news-media"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'news-media');

CREATE POLICY "Anyone can update news-media"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'news-media');

CREATE POLICY "Anyone can delete from news-media"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'news-media');

CREATE POLICY "Public can read news-media"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'news-media');
