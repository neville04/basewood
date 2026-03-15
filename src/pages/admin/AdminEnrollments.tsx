import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Enrollment } from "@/lib/supabase";

const AdminEnrollments = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchEnrollments = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("enrollments")
      .select("*")
      .order("submitted_at", { ascending: false });
    setEnrollments(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchEnrollments(); }, []);

  const handleDelete = async (id: string) => {
    await supabase.from("enrollments").delete().eq("id", id);
    setDeleteId(null);
    fetchEnrollments();
  };

  const filtered = enrollments.filter((e) =>
    [e.name, e.email, e.phone, e.program].some((v) =>
      v.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-navy">Enrollment Submissions</h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            {enrollments.length} total submission{enrollments.length !== 1 ? "s" : ""}
          </p>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-200 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-teal-400/30 focus:border-teal-400"
          placeholder="Search by name, email, program…"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">📋</p>
          <p className="font-medium">{search ? "No results match your search." : "No enrollments yet."}</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-black/5">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Program</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((enrollment, idx) => (
                  <tr
                    key={enrollment.id}
                    className={`border-b border-black/5 hover:bg-gray-50/50 transition-colors ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                    }`}
                  >
                    <td className="px-5 py-4 font-semibold text-navy whitespace-nowrap">{enrollment.name}</td>
                    <td className="px-5 py-4 text-gray-600">
                      <a href={`mailto:${enrollment.email}`} className="hover:text-teal-600 transition-colors">
                        {enrollment.email}
                      </a>
                    </td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                      <a href={`tel:${enrollment.phone}`} className="hover:text-teal-600 transition-colors">
                        {enrollment.phone}
                      </a>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-block bg-navy/5 text-navy px-2.5 py-1 rounded-lg text-[12px] font-medium whitespace-nowrap">
                        {enrollment.program}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-500 max-w-[200px]">
                      <span className="line-clamp-2 text-[12px]">
                        {enrollment.message || <span className="italic text-gray-300">—</span>}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-400 text-[12px] whitespace-nowrap">
                      {new Date(enrollment.submitted_at).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => setDeleteId(enrollment.id)}
                        className="text-red-400 hover:text-red-600 text-xs font-medium transition-colors px-2 py-1 rounded-lg hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm text-center">
            <p className="text-4xl mb-3">🗑️</p>
            <h3 className="font-display font-bold text-navy text-lg mb-2">Delete Record?</h3>
            <p className="text-gray-500 text-sm mb-6">This enrollment record will be permanently deleted.</p>
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

export default AdminEnrollments;
