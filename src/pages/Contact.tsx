import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";
import { CONTACT_INFO } from "@/constants";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Breadcrumb header */}
        <div className="bg-primary py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-black uppercase tracking-tight mb-2 text-white">Contact Us</h1>
            <div className="flex items-center gap-2 text-sm font-bold text-secondary">
              <span>HOME</span><span>/</span><span>GET IN TOUCH</span>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Details */}
              <div>
                <div className="w-16 h-1 bg-secondary mb-6" />
                <h2 className="text-4xl font-black text-primary uppercase mb-8 leading-tight">
                  Connect with our <br /> Admissions Office
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-12">
                  Have questions about our programs or enrollment process? Our team is here
                  to help you navigate your professional journey.
                </p>

                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-slate-50 border flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-secondary tracking-widest mb-2">Physical Address</h4>
                      <p className="text-slate-800 font-bold leading-tight">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-slate-50 border flex items-center justify-center text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-secondary tracking-widest mb-2">Call Us Directly</h4>
                      {CONTACT_INFO.phones.map(p => (
                        <p key={p} className="text-slate-800 font-bold">{p}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-slate-50 border flex items-center justify-center text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-secondary tracking-widest mb-2">Email</h4>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-800 font-bold no-underline hover:text-accent">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-slate-50 border flex items-center justify-center text-primary shrink-0">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-secondary tracking-widest mb-2">Website</h4>
                      <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noopener noreferrer" className="text-slate-800 font-bold no-underline hover:text-accent">
                        {CONTACT_INFO.website}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-slate-50 border flex items-center justify-center text-primary shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-secondary tracking-widest mb-2">Working Hours</h4>
                      <p className="text-slate-800 font-bold">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-slate-800 font-bold">Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-slate-50 p-10 border shadow-sm">
                <h3 className="text-2xl font-black text-primary uppercase mb-8">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                      <Input placeholder="Enter your name" className="border-slate-200 h-12 focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Address</label>
                      <Input type="email" placeholder="Enter your email" className="border-slate-200 h-12 focus-visible:ring-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Subject</label>
                    <Input placeholder="What is this regarding?" className="border-slate-200 h-12 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Message</label>
                    <Textarea placeholder="Your message here..." className="border-slate-200 min-h-[150px] focus-visible:ring-primary" />
                  </div>
                  <Button className="w-full h-14 bg-primary text-white font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};

export default Contact;
