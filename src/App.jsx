import { Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function Services() {
  return <h1>Services</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Blog() {
  return <h1>Blog</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}