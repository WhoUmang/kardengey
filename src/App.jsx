import { BrowserRouter, Routes, Route } from "react-router-dom";

import LatestReads from "./components/insights/LatestReads";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import FeaturedWork from "./components/work/FeaturedWork";
import Services from "./components/services/Services";
import Process from "./components/process/Process";
import About from "./components/about/About";
import AIGrowth from "./components/ai/AIGrowth";
import Founder from "./components/founder/Founder";
import Contact from "./components/contact/Contact";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Footer from "./components/layout/Footer";

import Insights from "./components/insights/Insights";
import InsightArticle from "./components/insights/InsightArticle";
import NotFound from "./components/common/NotFound";

function Home() {
  return (
    <main className="w-full bg-[#050505]">
      <Navbar />

      <Hero />

      <FeaturedWork />

      <Services />

      <Process />

      <About />

      <AIGrowth />

      <Founder />

      <LatestReads />

      <Contact />

      <WhatsAppButton />

      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================================
            HOME
        ===================================================== */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* =====================================================
            INSIGHTS
        ===================================================== */}

        <Route
          path="/insights"
          element={
            <>
              <Navbar />
              <Insights />
              <WhatsAppButton />
              <Footer />
            </>
          }
        />

        {/* =====================================================
            INDIVIDUAL ARTICLE
        ===================================================== */}

        <Route
          path="/insights/:slug"
          element={
            <>
              <Navbar />
              <InsightArticle />
              <WhatsAppButton />
              <Footer />
            </>
          }
        />

        {/* =====================================================
            404
        ===================================================== */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;