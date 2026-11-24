import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Footer from "./components/layout/Footer";
import NotFound from "./components/common/NotFound";

const FeaturedWork = lazy(() => import("./components/work/FeaturedWork"));
const Services = lazy(() => import("./components/services/Services"));
const Process = lazy(() => import("./components/process/Process"));
const About = lazy(() => import("./components/about/About"));
const AIGrowth = lazy(() => import("./components/ai/AIGrowth"));
const Founder = lazy(() => import("./components/founder/Founder"));
const Contact = lazy(() => import("./components/contact/Contact"));
const LatestReads = lazy(() => import("./components/insights/LatestReads"));
const ContactModal = lazy(() => import("./components/contact/ContactModal"));

const Insights = lazy(() => import("./components/insights/Insights"));
const InsightArticle = lazy(() => import("./components/insights/InsightArticle"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const MarketingROICalculator = lazy(() => import("./pages/MarketingROICalculator"));
const AboutEditorialStandards = lazy(() => import("./pages/AboutEditorialStandards"));
const ServicesGuide = lazy(() => import("./pages/ServicesGuide"));
const MarketingTools = lazy(() => import("./pages/MarketingTools"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServiceLandingPage = lazy(() => import("./pages/ServiceLandingPage"));

function DeferredSection({ children }) {
  return (
    <Suspense fallback={null}>
      {children}
    </Suspense>
  );
}

function Home() {
  return (
    <main className="w-full bg-[#050505]">
      <Navbar />
      <Hero />
      <DeferredSection><FeaturedWork /></DeferredSection>
      <DeferredSection><Services /></DeferredSection>
      <DeferredSection><Process /></DeferredSection>
      <DeferredSection><About /></DeferredSection>
      <DeferredSection><AIGrowth /></DeferredSection>
      <DeferredSection><Founder /></DeferredSection>
      <DeferredSection><LatestReads /></DeferredSection>
      <DeferredSection><Contact /></DeferredSection>
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
          <Route path="/seo-services-india" element={<><Navbar /><ServiceLandingPage pageKey="seo" /><WhatsAppButton /><Footer /></>} />
          <Route path="/website-development" element={<><Navbar /><ServiceLandingPage pageKey="website" /><WhatsAppButton /><Footer /></>} />
          <Route path="/performance-marketing" element={<><Navbar /><ServiceLandingPage pageKey="performance" /><WhatsAppButton /><Footer /></>} />
          <Route path="/branding-and-packaging-design" element={<><Navbar /><ServiceLandingPage pageKey="branding" /><WhatsAppButton /><Footer /></>} />
          <Route path="/digital-marketing-pricing" element={<><Navbar /><ServiceLandingPage pageKey="pricing" /><WhatsAppButton /><Footer /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <ContactModal />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
