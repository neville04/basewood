import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Enroll from "./pages/Enroll";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import ProgramsPage from "./pages/ProgramsPage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NewsPostPage from "./pages/NewsPostPage";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const applyAttributes = (root: ParentNode = document) => {
      const images = root.querySelectorAll<HTMLImageElement>("img:not([data-priority='true'])");
      images.forEach((img) => {
        if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
        if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
      });
    };

    applyAttributes();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            if (!node.hasAttribute("data-priority")) {
              if (!node.hasAttribute("loading")) node.setAttribute("loading", "lazy");
              if (!node.hasAttribute("decoding")) node.setAttribute("decoding", "async");
            }
          } else if (node instanceof HTMLElement) {
            applyAttributes(node);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs" element={<ProgramsPage />} />
            {/* News Post detail */}
            <Route path="/news/:id" element={<NewsPostPage />} />
            {/* Admin Portal */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
