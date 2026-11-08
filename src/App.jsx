import { lazy, Suspense } from "react";
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
import NotFound from "./components/common/NotFound";

const Insights = lazy(() => import("./components/insights/Insights"));
const InsightArticle = lazy(() => import("./components/insights/InsightArticle"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const MarketingROICalculator = lazy(() => import("./pages/MarketingROICalculator"));
const AboutEditorialStandards = lazy(() => import("./pages/AboutEditorialStandards"));
const ServicesGuide = lazy(() => import("./pages/ServicesGuide"));
const MarketingTools = lazy(() => import("./pages/MarketingTools"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

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

function RouteFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white" role="status" aria-live="polite">
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">Loading page…</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<><Navbar /><Insights /><WhatsAppButton /><Footer /></>} />
          <Route path="/insights/:slug" element={<><Navbar /><InsightArticle /><WhatsAppButton /><Footer /></>} />
          <Route path="/tools/marketing-roi-calculator" element={<><Navbar /><MarketingROICalculator /><WhatsAppButton /><Footer /></>} />
          <Route path="/about-editorial-standards" element={<><Navbar /><AboutEditorialStandards /><WhatsAppButton /><Footer /></>} />
          <Route path="/privacy-policy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><ContactPage /><WhatsAppButton /><Footer /></>} />
          <Route path="/tools/marketing-tools" element={<><Navbar /><MarketingTools /><WhatsAppButton /><Footer /></>} />
          <Route path="/services" element={<><Navbar /><ServicesGuide /><WhatsAppButton /><Footer /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ContactModal />
    </BrowserRouter>
  );
}

export default App;
