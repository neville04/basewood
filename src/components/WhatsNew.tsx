import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type NewsPost = Tables<"news_posts"> & { author?: string | null; summary?: string | null };

const isClickable = (category: string) => category === "article" || category === "blog";

const CATEGORY_LABEL: Record<string, string> = {
  article: "Article",
  blog: "Blog",
  announcement: "Announcement",
};

const WhatsNew = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase
      .from("news_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(6)
      .then(({ data }) => {
        setPosts((data as NewsPost[]) || []);
        setLoading(false);
      });
  }, []);

  if (!loading && posts.length === 0) return null;

  return (
    <div className="bg-white border-t border-slate-100">
      {/* Institutional breadcrumb header */}
      <div className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2 text-white">
            News &amp; Insights
          </h2>
          <div className="flex items-center gap-2 text-sm font-bold text-secondary">
            <span>HOME</span>
            <span>/</span>
            <span>INSIGHTS</span>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[460px] bg-slate-100 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => {
                const clickable = isClickable(post.category);
                return (
                  <Card
                    key={post.id}
                    onClick={() => clickable && navigate(`/news/${post.id}`)}
                    className={`border-none shadow-none rounded-none group h-full flex flex-col bg-white ${
                      clickable ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div className="h-64 overflow-hidden relative mb-6">
                      {post.media_url ? (
                        post.media_type === "video" ? (
                          <video
                            src={post.media_url}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            muted
                            autoPlay
                            loop
                            playsInline
                          />
                        ) : (
                          <img
                            src={post.media_url}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        )
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                          <span className="text-5xl opacity-20">📰</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-4 left-4 bg-secondary text-primary font-black px-4 py-1 text-xs uppercase tracking-widest shadow-xl">
                        {CATEGORY_LABEL[post.category] || post.category}
                      </div>
                    </div>
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                        {(post as NewsPost).author && (
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {(post as NewsPost).author}
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-black text-primary leading-tight mb-4 group-hover:text-accent transition-colors uppercase tracking-tight">
                        {post.title}
                      </h3>
                      {(post.summary || post.body) && (
                        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                          {post.summary || post.body}
                        </p>
                      )}
                      {clickable && (
                        <div className="mt-auto">
                          <button className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest border-b-2 border-primary/10 pb-1 hover:border-primary transition-all">
                            Read More
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WhatsNew;
