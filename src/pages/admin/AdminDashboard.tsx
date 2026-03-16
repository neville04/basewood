import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAdminLoggedIn, adminLogout } from "./AdminLogin";
import AdminNewsPosts from "./AdminNewsPosts";
import AdminEnrollments from "./AdminEnrollments";

type Tab = "home" | "enrollment";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      navigate("/admin/login");
    } else {
      setChecking(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login");
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#0d1b2a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9] flex flex-col">
      {/* Top Bar */}
      <header className="bg-[#0d1b2a] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <span className="text-teal-400 font-display font-bold text-lg">B</span>
            </div>
            <div>
              <span className="text-white font-display font-bold text-lg tracking-tight">Basewood</span>
              <span className="text-white/40 text-sm ml-2">Admin Portal</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-white/50 hover:text-white text-sm font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10"
          >
            Sign Out
          </button>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-6 flex gap-1 pb-0">
          {(["home", "enrollment"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm font-semibold capitalize rounded-t-xl transition-all ${
                activeTab === tab
                  ? "bg-[#f4f6f9] text-[#0d1b2a]"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab === "home" ? "📝 Content" : "📋 Enrollment"}
            </button>
          ))}
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {activeTab === "home" && <AdminNewsPosts />}
        {activeTab === "enrollment" && <AdminEnrollments />}
      </main>
    </div>
  );
};

export default AdminDashboard;
