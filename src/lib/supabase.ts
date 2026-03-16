import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://kfsxfprhcggkryjhepox.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmc3hmcHJoY2dna3J5amhlcG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MzYzMTQsImV4cCI6MjA4OTAxMjMxNH0.ADP9hi8U52HsuIGJ9ut2AT4AnjSgGKIbmTrTlhwfN4A";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type NewsPost = {
  id: string;
  title: string;
  category: 'article' | 'blog' | 'announcement';
  body: string | null;
  media_url: string | null;
  media_type: 'image' | 'video' | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type Enrollment = {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string | null;
  submitted_at: string;
};
