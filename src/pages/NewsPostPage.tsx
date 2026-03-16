import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User } from "lucide-react";

type NewsPost = Tables<"news_posts"> & { author?: string | null; summary?: string | null };

const CATEGORY_STYLES: Record<string, string> = {
  article: "bg-blue-100 text-blue-700",
  blog: "bg-purple-100 text-purple-700",
  announcement: "bg-amber-100 text-amber-800",
};

const NewsPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    supabase
      .from("news_posts")
      .select("*")
      .eq("id", id)
      .eq("published", true)
      .maybeSingle()
      .then(({ data }) => {
        if (!data) setNotFound(true);
        else setPost(data as NewsPost);
        setLoading(false);
      });
  }, [id]);

  // Redirect if announcement lands here
  useEffect(() => {
    if (post && post.category === "announcement") navigate("/", { replace: true });
  }, [post, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-9 h-9 border-2 border-teal-dark border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-navy font-display text-2xl font-bold">Post not found</p>
        <Link to="/" className="text-teal-dark underline text-sm">← Back to home</Link>
      </div>
    );
  }

  const formattedDate = new Date(post.created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-[780px] mx-auto px-6">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back
          </button>

          {/* Category badge */}
          <span
            className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${CATEGORY_STYLES[post.category] || "bg-gray-100 text-gray-600"}`}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-display text-[clamp(26px,4vw,42px)] font-bold text-navy leading-tight mt-4 mb-4">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-gray-400 mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
            {(post as NewsPost).author && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {(post as NewsPost).author}
              </span>
            )}
          </div>

          {/* Cover image */}
          {post.media_url && post.media_type === "image" && (
            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
              <img
                src={post.media_url}
                alt={post.title}
                className="w-full max-h-[440px] object-cover"
              />
            </div>
          )}
          {post.media_url && post.media_type === "video" && (
            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
              <video
                src={post.media_url}
                className="w-full max-h-[440px] object-cover"
                controls
                playsInline
              />
            </div>
          )}

          {/* Full content */}
          {post.body && (
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {post.body.split("\n").map((para, i) =>
                para.trim() ? (
                  <p key={i} className="mb-4 text-[16px] leading-[1.8]">
                    {para}
                  </p>
                ) : (
                  <br key={i} />
                )
              )}
            </div>
          )}

          {/* Divider + back */}
          <hr className="my-12 border-black/5" />
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPostPage;
