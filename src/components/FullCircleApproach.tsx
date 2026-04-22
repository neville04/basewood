import { ChevronRight } from "lucide-react";
import { FULL_CIRCLE_APPROACH } from "@/constants";

const FullCircleApproach = () => {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px]">
                Our Methodology
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-primary">
              The Full <br />
              Circle <br />
              <span className="text-accent">Approach.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex items-end">
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              From diagnosis to delivery, we partner with professionals and organisations
              across every step of their growth journey — combining accredited training,
              expert consultancy and continuous mentorship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
          {FULL_CIRCLE_APPROACH.map((step) => (
            <div
              key={step.number}
              className="border-r border-b border-slate-200 p-10 group hover:bg-primary hover:text-white transition-colors duration-500 relative"
            >
              <div className="text-secondary font-black text-xs uppercase tracking-widest mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-primary group-hover:text-white mb-4 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-200 mb-8 transition-colors">
                {step.desc}
              </p>
              <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-secondary transition-all transform group-hover:translate-x-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullCircleApproach;
