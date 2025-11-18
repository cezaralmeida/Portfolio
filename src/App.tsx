import { useState } from "react";
import HomePage from "./components/HomePage";
import CaseStudyPage from "./components/CaseStudyPage";
import AboutPage from "./components/AboutPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "case-study" | "about">("home");

  return (
    <div className="min-h-screen bg-white">
      {/* Page Switcher - For Review Only */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 text-white px-6 py-3 rounded-full shadow-2xl border-2 border-neutral-700">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-neutral-400">Review:</span>
          <button
            onClick={() => setCurrentPage("home")}
            className={`px-4 py-1 rounded-full transition-colors ${
              currentPage === "home" 
                ? "bg-white text-neutral-900" 
                : "hover:bg-neutral-800"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("case-study")}
            className={`px-4 py-1 rounded-full transition-colors ${
              currentPage === "case-study" 
                ? "bg-white text-neutral-900" 
                : "hover:bg-neutral-800"
            }`}
          >
            Case Study
          </button>
          <button
            onClick={() => setCurrentPage("about")}
            className={`px-4 py-1 rounded-full transition-colors ${
              currentPage === "about" 
                ? "bg-white text-neutral-900" 
                : "hover:bg-neutral-800"
            }`}
          >
            About
          </button>
        </div>
      </div>

      {/* Page Content */}
      {currentPage === "home" && <HomePage />}
      {currentPage === "case-study" && <CaseStudyPage />}
      {currentPage === "about" && <AboutPage />}
    </div>
  );
}
