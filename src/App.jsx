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

function App() {
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
      <Contact />
      <WhatsAppButton />
      <Footer />   
    </main>
  );
}

export default App;