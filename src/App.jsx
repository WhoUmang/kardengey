import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import FeaturedWork from "./components/work/FeaturedWork";
import Services from "./components/services/Services";

function App() {
  return (
    <main className="w-full bg-[#050505]">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Services />
    </main>
  );
}

export default App;