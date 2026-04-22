import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Clock, ArrowRight, ChevronRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROFESSIONAL_COURSES, SHORT_COURSES } from "@/constants";

const courseImages: Record<string, string> = {
  "CIM": "/marketing.jpg",
  "CIPS": "/procurement.jpg",
  "ACCA": "/acca.png",
  "CPA Uganda": "/cpa.png",
  "CILT": "/logistics.png",
  "FRM": "/financial%20risk.jpg",
};

const categoryImages: Record<string, string> = {
  "FINANCE": "https://images.unsplash.com/photo-1591696208162-a9317596703b?auto=format&fit=crop&q=80&w=800",
  "DIGITAL MARKETING": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  "CONVENTIONAL MARKETING": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  "SUPPLY CHAIN MANAGEMENT": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800",
  "SALES AND DISTRIBUTION": "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
};

const Programs = () => {
  const [activeTab, setActiveTab] = useState<"professional" | "short">("professional");

  return (
    <section id="programs" className="bg-[#f8f9fa] border-t-4 border-secondary">
      {/* Institutional header */}
      <div className="bg-primary pt-20 pb-14 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-secondary font-black uppercase tracking-widest text-xs mb-4">Academic Catalog</p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2 text-white">
              Programmes
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest bg-white/5 px-4 py-2">
            <span>Home</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">Our Courses</span>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="bg-white border border-slate-200 p-1 sticky top-32">
                <button
                  onClick={() => setActiveTab("professional")}
                  className={cn(
                    "w-full flex items-center justify-between p-5 text-xs font-black uppercase tracking-widest transition-all",
                    activeTab === "professional" ? "bg-primary text-white" : "text-primary hover:bg-slate-50"
                  )}
                >
                  Professional Courses
                  <ChevronRight className={cn("h-4 w-4 transition-transform", activeTab === "professional" && "rotate-90")} />
                </button>
                <button
                  onClick={() => setActiveTab("short")}
                  className={cn(
                    "w-full flex items-center justify-between p-5 text-xs font-black uppercase tracking-widest transition-all mt-1",
                    activeTab === "short" ? "bg-primary text-white" : "text-primary hover:bg-slate-50"
                  )}
                >
                  Short Term Training
                  <ChevronRight className={cn("h-4 w-4 transition-transform", activeTab === "short" && "rotate-90")} />
                </button>

                <div className="mt-6 p-6 border-t bg-slate-50">
                  <GraduationCap className="h-7 w-7 text-secondary mb-3" />
                  <h4 className="text-primary font-black uppercase tracking-tight mb-1 text-sm">Admissions Open</h4>
                  <p className="text-xs text-slate-500 font-bold mb-5 italic">Secure your spot for the next intake.</p>
                  <Link to="/enroll" className="block w-full py-3 bg-secondary text-primary font-black text-[10px] uppercase tracking-widest hover:bg-secondary/80 transition-all text-center no-underline">
                    Apply Online
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                {activeTab === "professional" ? (
                  <motion.div
                    key="professional"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {PROFESSIONAL_COURSES.map((course) => (
                      <Link
                        to="/programs"
                        key={course.name}
                        className="bg-white group overflow-hidden border border-slate-200 hover:border-primary transition-all duration-500 flex flex-col h-full no-underline"
                      >
                        <div className="h-44 overflow-hidden relative">
                          <img
                            src={courseImages[course.name] || course.img}
                            alt={course.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors" />
                          <div className="absolute bottom-0 left-0 bg-secondary text-primary font-black px-4 py-1 text-[10px] uppercase tracking-widest">
                            {course.name}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-base font-black text-primary leading-tight mb-3 transition-colors">
                            {course.fullName}
                          </h3>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase">
                              <Award className="h-3 w-3 text-secondary" />
                              {course.tag.split(" ").slice(0, 2).join(" ")}
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase">
                              <Clock className="h-3 w-3 text-secondary" />
                              Flexible
                            </div>
                          </div>
                          <div className="mt-auto flex items-center justify-between w-full pt-4 border-t border-slate-100 text-[10px] font-black text-primary uppercase tracking-widest">
                            View Course Details
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="short"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {Object.entries(SHORT_COURSES).map(([category, courses]) => (
                      <div key={category} className="bg-white border border-slate-200 group hover:border-primary transition-all">
                        <div className="h-32 relative overflow-hidden">
                          <img
                            src={categoryImages[category] || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"}
                            alt={category}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                            <h3 className="text-white font-black uppercase text-sm tracking-widest text-center px-4">
                              {category}
                            </h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {courses.slice(0, 4).map((course) => (
                              <li key={course} className="flex items-start gap-3 text-xs font-bold text-slate-600 leading-tight">
                                <span className="w-1.5 h-1.5 bg-secondary mt-1 shrink-0" />
                                {course}
                              </li>
                            ))}
                            {courses.length > 4 && (
                              <li className="text-[10px] font-black text-primary uppercase tracking-widest pt-2 flex items-center gap-2">
                                + {courses.length - 4} More Modules
                                <ArrowRight className="h-3 w-3" />
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
