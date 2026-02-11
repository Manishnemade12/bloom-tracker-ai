import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import Page9 from "./pages/page9";
import Page10 from "./pages/page10";

const designs = [
  { path: "/page1", label: "Classic Card", desc: "Traditional profile with sections" },
  { path: "/page2", label: "Centered Minimal", desc: "Clean centered layout with services" },
  { path: "/page3", label: "Magazine Hero", desc: "Full-screen editorial style" },
  { path: "/page4", label: "Glass Card", desc: "Glassmorphism with packages" },
  { path: "/page5", label: "Bento Grid", desc: "Modern bento box layout" },
  { path: "/page6", label: "Split + Timeline", desc: "Split hero with journey timeline" },
  { path: "/page7", label: "Elegant Minimal", desc: "Luxury minimal with lookbook" },
  { path: "/page8", label: "Dark Bold", desc: "Dark theme with reels & transformations" },
  { path: "/page9", label: "Zen Japanese", desc: "Minimalist organic aesthetic" },
  { path: "/page10", label: "Gradient Mesh", desc: "Vibrant gradients with FAQ" },
];

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-pink-950/20 dark:via-background dark:to-purple-950/20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">Artist Profile Designs</h1>
          <p className="text-muted-foreground">10 unique UI designs for artist profiles</p>
        </div>
        <div className="grid gap-3">
          {designs.map((d, i) => (
            <button
              key={d.path}
              onClick={() => navigate(d.path)}
              className="flex items-center gap-4 p-4 bg-card hover:bg-card/80 rounded-2xl border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all text-left group"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg shrink-0 group-hover:scale-105 transition-transform">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{d.label}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
              <svg className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />
      <Route path="/page8" element={<Page8 />} />
      <Route path="/page9" element={<Page9 />} />
      <Route path="/page10" element={<Page10 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
