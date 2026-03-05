import { useState, useRef, useEffect } from "react";
import basewoodLogo from "@/assets/basewood-logo.png";

type Message = {
  role: "bot" | "user";
  text: string;
};

const COMPANY_KNOWLEDGE = `
You are a helpful assistant for Basewood Institute — Uganda's premier Center for Professional Courses located at Plot 106, Kanjokya Street, Kampala.

ABOUT BASEWOOD INSTITUTE:
Basewood Institute is a global professional organisation offering diverse Educational, Training & Learning solutions for students, working executives & corporate organisations. We aim to create a knowledge-based Center of Excellence in Consultancy, Training and Professional Development.

MISSION: To empower individuals and organizations with knowledge, skills and expertise through comprehensive training programs, research and top-notch consultancy services.

VISION: To be the foremost and most trusted institution for training, research and consultancy globally.

VALUES: Excellence, Integrity, Innovation, Collaboration, Client-Centric Approach.

PROGRAMS OFFERED:
1. ACCA (Association of Chartered Certified Accountants) - Most Popular
   - Applied Knowledge, Applied Skills, Strategic Professional levels
   - CBE Centre
   
2. CPA Uganda (Institute of Certified Public Accountants of Uganda)
   - Level I, II, III, IV
   
3. CILT (Chartered Institute of Logistics & Transport)
   - International Diploma, International Certificate, Short Courses
   
4. CIM (Chartered Institute of Marketing - UK)
   - Diploma, Postgraduate, Blended learning
   
5. CIPS (Chartered Institute of Procurement & Supply)
   - Level 4, Level 5, Level 6
   
6. FRM (Financial Risk Manager) - GARP
   - Professional certification

SHORT COURSES (25+ available):
- Finance: IFRS, IPSAS, Finance for Non-Finance Managers, Internal Control Systems
- Digital: AI Powered Marketing, Social Media Marketing, SEO, Digital Customer Experience
- Marketing: Strategic Brand Management, Campaign Planning
- Supply Chain: Sustainability & Circular Economy
- Sales: Sales Leadership & Team Management

CONTACT:
- Address: Plot 106, Kanjokya Street, Kampala, Uganda
- Phone: +256 744 488 316 / +256 769 013 080
- WhatsApp: +256 773 099 672
- Email: info@basewoodconsult.ac.ug
- Website: www.basewoodconsult.ac.ug

STATS:
- 1,000+ Certified Alumni across East Africa
- 25+ Alumni in C-Suite roles (CMOs, CFOs, MDs)
- 6 Global Certifications
- 9+ Strategic Partners

ENROLLMENT PROCESS:
1. Choose your program
2. Contact us via email (info@basewoodconsult.ac.ug), WhatsApp (+256 773 099 672), or phone
3. Fill in the enrollment form on the website (/enroll)
4. Our team will guide you through payment and scheduling
5. Classes are available evenings, weekends, and blended/online

ALUMNI WORK AT:
MTN Uganda, NSSF, Uganda Airlines, UCC, Coca-Cola, Kiira Motors, Nation Media, Centenary Bank, Jumia, and many more top East African organisations.
`;

const QUICK_REPLIES = [
  "What programs do you offer?",
  "How do I enroll?",
  "What is the ACCA program?",
  "Contact information",
  "Short courses available",
];

function getResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("program") || q.includes("course") || q.includes("offer") || q.includes("study")) {
    return "We offer professional certifications including:\n\n• **ACCA** — Accounting & Finance (Most Popular)\n• **CPA Uganda** — Certified Public Accountant\n• **CILT** — Logistics & Transport\n• **CIM** — Marketing (UK Accredited)\n• **CIPS** — Procurement & Supply\n• **FRM** — Financial Risk Manager\n• **25+ Short Courses** in Finance, Digital, Marketing & more\n\nWould you like details on any specific program?";
  }

  if (q.includes("enroll") || q.includes("apply") || q.includes("join") || q.includes("register") || q.includes("admission")) {
    return "To enroll at Basewood Institute:\n\n1. **Choose your program** from our offerings\n2. **Submit the enrollment form** at basewoodconsult.ac.ug/enroll\n3. Or **contact us directly:**\n   • 📧 info@basewoodconsult.ac.ug\n   • 📱 WhatsApp: +256 773 099 672\n   • 📞 +256 744 488 316\n\nOur team will guide you on scheduling, fees, and payment. Classes run evenings & weekends — perfect for working professionals!";
  }

  if (q.includes("acca")) {
    return "**ACCA (Association of Chartered Certified Accountants)** is our most popular program!\n\nLevels offered:\n• Applied Knowledge\n• Applied Skills\n• Strategic Professional\n\nWe are a registered **CBE Centre**, meaning you can sit computer-based exams right here.\n\nACCA is internationally recognized and opens doors across East Africa and globally. To enroll, contact us at info@basewoodconsult.ac.ug or WhatsApp +256 773 099 672.";
  }

  if (q.includes("cpa")) {
    return "**CPA Uganda** (Certified Public Accountants of Uganda) is offered through the Institute of Certified Public Accountants of Uganda.\n\nWe offer all 4 levels:\n• Level I — Foundation\n• Level II — Intermediate\n• Level III — Advanced\n• Level IV — Professional\n\nGreat for accountants building a career in Uganda's financial sector. Contact us to start!";
  }

  if (q.includes("cilt") || q.includes("logistics") || q.includes("transport")) {
    return "**CILT (Chartered Institute of Logistics & Transport)** is for professionals in supply chain, transport and logistics.\n\nOfferings:\n• International Diploma\n• International Certificate\n• Short Courses\n\nCILT is globally recognized — perfect for professionals in logistics, freight, and transport management.";
  }

  if (q.includes("cim") || q.includes("marketing")) {
    return "**CIM (Chartered Institute of Marketing)** is UK-accredited and ideal for marketing professionals.\n\nLevels:\n• CIM Diploma\n• CIM Postgraduate Diploma\n• Blended learning options\n\nCIM is the world's most recognized marketing qualification, boosting your career in brand, digital, and strategic marketing.";
  }

  if (q.includes("cips") || q.includes("procurement") || q.includes("supply")) {
    return "**CIPS (Chartered Institute of Procurement & Supply)** is the gold standard in procurement.\n\nLevels:\n• Level 4 — Diploma\n• Level 5 — Advanced Diploma\n• Level 6 — Professional Diploma\n\nPerfect for procurement officers, supply chain managers, and purchasing professionals.";
  }

  if (q.includes("short course") || q.includes("executive")) {
    return "We offer 25+ Short Courses across multiple categories:\n\n📊 **Finance:** IFRS, IPSAS, Finance for Non-Finance Managers, Internal Control Systems\n\n💻 **Digital:** AI Powered Marketing, Social Media Management, SEO, Digital CX\n\n📣 **Marketing:** Strategic Brand Management, Campaign Planning\n\n🚚 **Supply Chain:** Sustainability & Circular Economy\n\n📈 **Sales:** Sales Leadership & Team Management\n\nAll short courses run over weekends or evenings. Contact us for the current schedule!";
  }

  if (q.includes("contact") || q.includes("reach") || q.includes("location") || q.includes("address") || q.includes("phone") || q.includes("email")) {
    return "You can reach us through any of these channels:\n\n📍 **Visit us:** Plot 106, Kanjokya Street, Kampala\n\n📞 **Call:** +256 744 488 316 or +256 769 013 080\n\n📱 **WhatsApp:** +256 773 099 672\n\n✉️ **Email:** info@basewoodconsult.ac.ug\n\n🌐 **Website:** www.basewoodconsult.ac.ug\n\nOur office is open Monday–Friday, 8am–6pm, and Saturday 9am–2pm.";
  }

  if (q.includes("fee") || q.includes("cost") || q.includes("price") || q.includes("tuition") || q.includes("pay")) {
    return "Program fees vary by qualification and level. We offer flexible payment plans to make it accessible for working professionals.\n\nFor the most current fee structure, please contact us:\n📱 WhatsApp: +256 773 099 672\n✉️ info@basewoodconsult.ac.ug\n\nOur enrollment team will give you a full breakdown tailored to your chosen program.";
  }

  if (q.includes("schedule") || q.includes("time") || q.includes("when") || q.includes("class") || q.includes("hour")) {
    return "Our classes are designed for working professionals:\n\n⏰ **Evenings** — Weekday evening classes after work hours\n📅 **Weekends** — Saturday & Sunday intensive sessions\n💻 **Blended** — Mix of online and in-person (select programs)\n\nThis means you can advance your career without leaving your job! Contact us for the current timetable: +256 773 099 672";
  }

  if (q.includes("alumni") || q.includes("graduate") || q.includes("work") || q.includes("career")) {
    return "Basewood has trained **1,000+ certified alumni** who now work at top East African organisations including:\n\nMTN Uganda, NSSF, Uganda Airlines, UCC, Coca-Cola, Kiira Motors, Nation Media, Centenary Bank, Jumia, and many more.\n\n**25+ alumni are in C-Suite roles** — CMOs, CFOs, Managing Directors, and Directors.\n\nYour career transformation starts here! 🎓";
  }

  if (q.includes("about") || q.includes("basewood") || q.includes("institute") || q.includes("who")) {
    return "**Basewood Institute** is Uganda's premier Center for Professional Courses.\n\nWe are a global professional organisation offering Educational, Training & Learning solutions for students, working executives, and corporate organisations.\n\n🎯 **Mission:** Empower individuals with knowledge, skills and expertise\n🔭 **Vision:** To be the most trusted institution for training globally\n\n✅ 1,000+ Certified Alumni\n✅ 6 Global Certifications\n✅ 9+ Strategic Partners\n✅ 25+ Short Courses\n\nBased at Plot 106, Kanjokya Street, Kampala.";
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("good morning") || q.includes("good afternoon")) {
    return "Hello! 👋 Welcome to Basewood Institute!\n\nI'm here to help you learn about our professional courses, enrollment process, and more.\n\nWhat can I help you with today? You can ask about:\n• Our programs (ACCA, CPA, CIM, CIPS, CILT)\n• Enrollment process\n• Fees and schedules\n• Contact information";
  }

  return "Thank you for your question! I'd be happy to help you with information about Basewood Institute.\n\nFor the most accurate and up-to-date answer, please:\n\n📱 **WhatsApp:** +256 773 099 672\n✉️ **Email:** info@basewoodconsult.ac.ug\n📞 **Call:** +256 744 488 316\n\nOur team typically responds within a few hours during working hours.\n\nYou can also try asking me about:\n• Programs we offer\n• Enrollment process\n• Short courses\n• Contact details";
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi there! 👋 Welcome to **Basewood Institute**.\n\nI'm your virtual assistant — I can tell you about our programs, enrollment process, fees, and more.\n\nHow can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (text?: string) => {
    const userText = text || input.trim();
    if (!userText) return;

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getResponse(userText);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  const formatText = (text: string) => {
    return text
      .split("\n")
      .map((line, i) => {
        const formatted = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/•/g, "•");
        return `<span key="${i}" class="block ${line === "" ? "mt-1" : ""}">${formatted}</span>`;
      })
      .join("");
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-7 right-7 z-[999] w-[60px] h-[60px] rounded-full bg-navy shadow-[0_8px_32px_rgba(15,30,92,0.4),0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all hover:scale-105 hover:shadow-[0_14px_42px_rgba(15,30,92,0.5)] ${open ? "rotate-90" : ""}`}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        {/* Notification dot */}
        {!open && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-teal rounded-full border-2 border-white animate-pulse-dot" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-[88px] right-7 z-[998] w-[360px] max-w-[calc(100vw-32px)] bg-background rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.1)] border border-border overflow-hidden flex flex-col"
          style={{ height: "520px" }}
        >
          {/* Header */}
          <div className="bg-navy px-5 py-4 flex items-center gap-3 flex-shrink-0">
            <img src={basewoodLogo} alt="Basewood" className="h-8 w-auto brightness-0 invert" />
            <div>
              <div className="text-primary-foreground font-semibold text-sm">Basewood Assistant</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
                <span className="text-teal text-[11px] font-mono">Online — typically replies instantly</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                    <img src={basewoodLogo} alt="" className="w-4 h-4 brightness-0 invert" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-4 py-3 rounded-2xl text-[13px] leading-[1.65] ${
                    msg.role === "user"
                      ? "bg-navy text-primary-foreground rounded-tr-sm"
                      : "bg-background border border-border text-foreground rounded-tl-sm shadow-sm"
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                />
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center mr-2 flex-shrink-0">
                  <img src={basewoodLogo} alt="" className="w-4 h-4 brightness-0 invert" />
                </div>
                <div className="bg-background border border-border px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse-dot" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-4 py-2 border-t border-border bg-background flex gap-2 overflow-x-auto flex-shrink-0 scrollbar-none">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="flex-shrink-0 text-[11px] text-navy border border-navy/20 bg-navy/[0.05] hover:bg-navy/[0.1] px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border bg-background flex gap-2 items-center flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about programs, enrollment..."
              className="flex-1 text-[13px] bg-muted rounded-xl px-4 py-2.5 outline-none border border-transparent focus:border-navy/30 transition-colors placeholder:text-muted-foreground"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 hover:bg-teal-dark transition-colors disabled:opacity-40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
