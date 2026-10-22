import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";

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
import ContactModal from "./components/contact/ContactModal";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Footer from "./components/layout/Footer";

import Insights from "./components/insights/Insights";
import InsightArticle from "./components/insights/InsightArticle";
import NotFound from "./components/common/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MarketingROICalculator from "./pages/MarketingROICalculator";
import AboutEditorialStandards from "./pages/AboutEditorialStandards";

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

      {/* Reset scroll position whenever the route changes */}
      <ScrollToTop />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* INSIGHTS */}
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

        {/* INDIVIDUAL ARTICLE */}
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

        {/* MARKETING ROI CALCULATOR */}
        <Route
          path="/tools/marketing-roi-calculator"
          element={
            <>
              <Navbar />
              <MarketingROICalculator />
              <WhatsAppButton />
              <Footer />
            </>
          }
        />

        {/* ABOUT & EDITORIAL STANDARDS */}
        <Route
          path="/about-editorial-standards"
          element={
            <>
              <Navbar />
              <AboutEditorialStandards />
              <WhatsAppButton />
              <Footer />
            </>
          }
        />

        {/* PRIVACY POLICY */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <ContactModal />
    </BrowserRouter>
  );
}

export default App;