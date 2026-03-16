import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type NewsPost = Tables<"news_posts"> & { author?: string | null; summary?: string | null };

const CATEGORY_LABELS: Record<string, { label: string; color: string }> = {
  article: { label: "Article", color: "bg-blue-100 text-blue-700" },
  blog: { label: "Blog", color: "bg-purple-100 text-purple-700" },
  announcement: { label: "Announcement", color: "bg-amber-100 text-amber-700" },
};

// Per-category limits
const LIMITS = {
  article: { title: 80, summary: 120, body: 300 },
  blog: { title: 80, summary: 120, body: 300 },
  announcement: { title: 70, summary: 0, body: 50 },
} as const;

type Category = "article" | "blog" | "announcement";

const emptyForm = {
  title: "",
  category: "article" as Category,
  summary: "",
  body: "",
  author: "",
  media_url: "",
  media_type: "image" as "image" | "video",
};

// Count words in a string
const wordCount = (text: string) =>
  text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

const CharCount = ({
  value,
  max,
  unit = "chars",
}: {
  value: string;
  max: number;
  unit?: "chars" | "words";
}) => {
  const count = unit === "words" ? wordCount(value) : value.length;
  const over = count > max;
  return (
    <span className={`text-[11px] ml-auto ${over ? "text-red-500 font-semibold" : "text-gray-400"}`}>
      {count}/{max} {unit}
    </span>
  );
};

const AdminNewsPosts = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<NewsPost | null>(null);
  const [form, setForm] = useState({ ...emptyForm });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("news_posts")
      .select("*")
      .order("created_at", { ascending: false });
    setPosts((data as NewsPost[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openNew = () => {
    setEditing(null);
    setForm({ ...emptyForm });
    setShowForm(true);
  };

  const openEdit = (post: NewsPost) => {
    setEditing(post);
    setForm({
      title: post.title,
      category: post.category as Category,
      summary: (post as NewsPost).summary || "",
      body: post.body || "",
      author: (post as NewsPost).author || "",
      media_url: post.media_url || "",
      media_type: (post.media_type as "image" | "video") || "image",
    });
    setShowForm(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage
      .from("news-media")
      .upload(path, file, { upsert: true });
    if (!error) {
      const { data } = supabase.storage.from("news-media").getPublicUrl(path);
      const isVideo = file.type.startsWith("video/");
      setForm((f) => ({
        ...f,
        media_url: data.publicUrl,
        media_type: isVideo ? "video" : "image",
      }));
    }
    setUploading(false);
  };

  const isFormValid = () => {
    const lim = LIMITS[form.category];
    if (form.title.length > lim.title) return false;
    if (form.category === "announcement") {
      return wordCount(form.body) <= lim.body;
    }
    return (
      form.summary.length <= lim.summary &&
      wordCount(form.body) <= lim.body
    );
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;
    setSaving(true);
    const basePayload = {
      title: form.title,
      category: form.category,
      body: form.body || null,
      media_url: form.media_url || null,
      media_type: form.media_url ? form.media_type : null,
      // @ts-expect-error - new columns added via migration, types not yet regenerated
      summary: form.category !== "announcement" ? form.summary || null : null,
      // @ts-expect-error
      author: form.category !== "announcement" ? form.author || null : null,
    };

    if (editing) {
      await supabase.from("news_posts").update(basePayload).eq("id", editing.id);
    } else {
      await supabase
        .from("news_posts")
        .insert([{ ...basePayload, published: true }]);
    }
    setSaving(false);
    setShowForm(false);
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    await supabase.from("news_posts").delete().eq("id", id);
    setDeleteId(null);
    fetchPosts();
  };

  const lim = LIMITS[form.category];
  const isAnnouncement = form.category === "announcement";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-display font-bold text-navy">
            What's New At Basewood
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            Manage articles, blogs, and announcements
          </p>
        </div>
        <button
          onClick={openNew}
          className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm rounded-xl transition-all shadow-md"
        >
          + New Post
        </button>
      </div>

      {/* Posts Grid */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden flex flex-col"
            >
              {post.media_url ? (
                post.media_type === "video" ? (
                  <video
                    src={post.media_url}
                    className="w-full h-44 object-cover"
                    muted
                  />
                ) : (
                  <img
                    src={post.media_url}
                    alt={post.title}
                    className="w-full h-44 object-cover"
                  />
                )
              ) : (
                <div className="w-full h-44 bg-gradient-to-br from-navy/5 to-teal-500/10 flex items-center justify-center">
                  <span className="text-4xl opacity-30">📰</span>
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${CATEGORY_LABELS[post.category]?.color}`}
                  >
                    {CATEGORY_LABELS[post.category]?.label}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {new Date(post.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-[15px] leading-snug mb-1 flex-1">
                  {post.title}
                </h3>
                {(post as NewsPost).author && (
                  <p className="text-[11px] text-teal-600 mb-1">
                    By {(post as NewsPost).author}
                  </p>
                )}
                {((post as NewsPost).summary || post.body) && (
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mb-4">
                    {(post as NewsPost).summary || post.body}
                  </p>
                )}
                <div className="flex gap-2 mt-auto pt-2 border-t border-black/5">
                  <button
                    onClick={() => openEdit(post)}
                    className="flex-1 py-1.5 text-xs font-semibold text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(post.id)}
                    className="flex-1 py-1.5 text-xs font-semibold text-red-500 border border-red-100 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <h3 className="font-display font-bold text-navy text-lg">
                {editing ? "Edit Post" : "New Post"}
              </h3>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-5">
              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Type *
                </label>
                <div className="flex gap-2">
                  {(["article", "blog", "announcement"] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() =>
                        setForm((f) => ({ ...f, category: cat }))
                      }
                      className={`flex-1 py-2 text-xs font-semibold capitalize rounded-lg border transition-all ${
                        form.category === cat
                          ? "bg-navy text-white border-navy"
                          : "bg-white text-gray-500 border-gray-200 hover:border-navy/40"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div>
                <div className="flex items-center mb-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Title *
                  </label>
                  <CharCount value={form.title} max={lim.title} />
                </div>
                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, title: e.target.value }))
                  }
                  required
                  maxLength={lim.title + 20}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-400"
                  placeholder="Post title…"
                />
              </div>

              {/* Author — blog/article only */}
              {!isAnnouncement && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Author (optional)
                  </label>
                  <input
                    value={form.author}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, author: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-400"
                    placeholder="e.g. John Smith"
                  />
                </div>
              )}

              {/* Summary — blog/article only */}
              {!isAnnouncement && (
                <div>
                  <div className="flex items-center mb-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Card Summary
                    </label>
                    <CharCount value={form.summary} max={lim.summary} />
                  </div>
                  <textarea
                    value={form.summary}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, summary: e.target.value }))
                    }
                    rows={2}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-400 resize-none"
                    placeholder="Short preview shown on the card (max 120 characters)…"
                  />
                </div>
              )}

              {/* Body */}
              <div>
                <div className="flex items-center mb-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {isAnnouncement
                      ? "Announcement Message *"
                      : "Full Content (max 300 words)"}
                  </label>
                  <CharCount
                    value={form.body}
                    max={lim.body}
                    unit={isAnnouncement ? "words" : "words"}
                  />
                </div>
                <textarea
                  value={form.body}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, body: e.target.value }))
                  }
                  required={isAnnouncement}
                  rows={isAnnouncement ? 3 : 7}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-400 resize-none"
                  placeholder={
                    isAnnouncement
                      ? "Announcement message (max 50 words)…"
                      : "Full article or blog content (max 300 words)…"
                  }
                />
                {!isAnnouncement && (
                  <p className="text-[11px] text-gray-400 mt-1">
                    This is a 1-minute read maximum. Aim for clarity and impact.
                  </p>
                )}
              </div>

              {/* Media */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Cover Image / Video
                </label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:border-teal-400/50 transition-colors"
                >
                  {form.media_url ? (
                    <div>
                      {form.media_type === "video" ? (
                        <video
                          src={form.media_url}
                          className="w-full max-h-32 object-cover rounded-lg mb-2"
                          muted
                        />
                      ) : (
                        <img
                          src={form.media_url}
                          alt="Preview"
                          className="w-full max-h-32 object-cover rounded-lg mb-2"
                        />
                      )}
                      <p className="text-xs text-teal-600 font-medium">
                        Click to change media
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-2xl mb-1">📎</p>
                      <p className="text-sm text-gray-400">
                        {uploading
                          ? "Uploading…"
                          : "Click to upload image or video"}
                      </p>
                    </div>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                {form.media_url && (
                  <button
                    type="button"
                    onClick={() =>
                      setForm((f) => ({
                        ...f,
                        media_url: "",
                        media_type: "image",
                      }))
                    }
                    className="mt-1 text-xs text-red-400 hover:text-red-600"
                  >
                    Remove media
                  </button>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || uploading || !isFormValid()}
                  className="flex-1 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-xl transition-all disabled:opacity-50"
                >
                  {saving ? "Saving…" : editing ? "Save Changes" : "Publish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm text-center">
            <p className="text-4xl mb-3">🗑️</p>
            <h3 className="font-display font-bold text-navy text-lg mb-2">
              Delete Post?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              This action cannot be undone. The post will be permanently
              removed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-xl transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNewsPosts;
