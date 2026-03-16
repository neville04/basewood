import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NewsPost = Tables<"news_posts"> & { author?: string | null; summary?: string | null };

const CATEGORY_STYLES: Record<string, string> = {
  article: "bg-blue-100 text-blue-700",
  blog: "bg-purple-100 text-purple-700",
  announcement: "bg-amber-100 text-amber-800",
};

const isClickable = (category: string) =>
  category === "article" || category === "blog";

const WhatsNew = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase
      .from("news_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setPosts((data as NewsPost[]) || []);
        setLoading(false);
      });
  }, []);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [posts]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  if (!loading && posts.length === 0) return null;

  return (
    <section className="py-20 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-[7%]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-teal-dark mb-1">
              Latest Updates
            </p>
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-bold text-navy leading-tight">
              What's New At Basewood
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy transition-all hover:bg-navy hover:text-white hover:border-navy disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center text-navy transition-all hover:bg-navy hover:text-white hover:border-navy disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        {loading ? (
          <div className="flex gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-[300px] h-[340px] bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-3 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posts.map((post) => {
              const clickable = isClickable(post.category);
              const cardContent = (
                <article
                  className={`flex-shrink-0 w-[300px] bg-white rounded-2xl border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col transition-all duration-300 ${
                    clickable
                      ? "hover:shadow-[0_16px_45px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-pointer group"
                      : "cursor-default"
                  }`}
                >
                  {/* Media */}
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-navy/5 to-teal-500/10">
                    {post.media_url ? (
                      post.media_type === "video" ? (
                        <video
                          src={post.media_url}
                          className={`w-full h-full object-cover ${clickable ? "group-hover:scale-105" : ""} transition-transform duration-500`}
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          src={post.media_url}
                          alt={post.title}
                          className={`w-full h-full object-cover ${clickable ? "group-hover:scale-105" : ""} transition-transform duration-500`}
                          loading="lazy"
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl opacity-20">📰</span>
                      </div>
                    )}

                    {/* Category badge */}
                    <span
                      className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${
                        CATEGORY_STYLES[post.category] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[11px] text-gray-400 mb-2">
                      {new Date(post.created_at).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="font-display font-semibold text-navy text-[15px] leading-snug mb-2 flex-1">
                      {post.title}
                    </h3>
                    {/* Use summary for card; fall back to body snippet */}
                    {(post.summary || post.body) && (
                      <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                        {post.summary || post.body}
                      </p>
                    )}
                    {/* Read more hint for clickable types */}
                    {clickable && (
                      <span className="mt-3 text-[12px] font-semibold text-teal-dark">
                        Read more →
                      </span>
                    )}
                  </div>
                </article>
              );

              return clickable ? (
                <div
                  key={post.id}
                  onClick={() => navigate(`/news/${post.id}`)}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && navigate(`/news/${post.id}`)}
                >
                  {cardContent}
                </div>
              ) : (
                <div key={post.id}>{cardContent}</div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatsNew;
